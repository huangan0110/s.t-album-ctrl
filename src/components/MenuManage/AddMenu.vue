<template>
    <div class="add_user">
        <el-dialog
            title="添加菜单"
            :visible.sync="dialogVisible"
            width="360px"
            :before-close="handleClose"
            :modal-append-to-body="false"
        >
            <div class="centent">
                <table>
                    <tr>
                        <td>
                            <span>*</span>对比权限
                        </td>
                        <td>
                            <input type="text" v-model="formData.oldName"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>*</span>对比关系
                        </td>
                        <td>
                            <select name="public-choice" v-model="formData.relation">
                                <option value="1">同级权限</option>
                                <option value="2">下级权限</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>*</span>权限名称
                        </td>
                        <td>
                            <input type="text" v-model="formData.name"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>*</span>网关前缀
                        </td>
                        <td>
                            <input type="text" v-model="formData.zuulPrefix"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>*</span>服务前缀
                        </td>
                        <td>
                            <input type="text" v-model="formData.servicePrefix"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>*</span>权限链接
                        </td>
                        <td>
                            <input type="text" v-model="formData.uri"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>*</span>状态
                        </td>
                        <td class="switch-td">
                            <el-switch
                                v-model="formData.status"
                                active-text="启用"
                                inactive-text="禁用">
                            </el-switch>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>*</span>方法类型
                        </td>
                        <td>
                            <select name="public-choice" v-model="formData.method" @change="getCouponSelected">
                                <option value="GET">GET</option>
                                <option value="POST">POST</option>
                            </select>
                        </td>
                    </tr>

                </table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="reset" size="mini">取消</el-button>
                <el-button type="primary" @click="submit" size="mini">添加</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {changeMenu} from "../api/api";

    export default {
        data() {
            return {
                dialogVisible: false,
                menuName: "",
                menuUrl: "",
                sort: "",
                status: true,
                menuType:"1",
                formData: {
                    olaName:"",
                    status:"",
                    sameP:"",
                    nextP:""
                },
            };
        },
        methods: {
            getCouponSelected() {},
            deepCopy(obj1) {
                let _obj = JSON.stringify(obj1);
                let obj2 = JSON.parse(_obj);
                return obj2;
            },
            open(data) {
                this.dialogVisible = true;
                this.formData.oldName = this.deepCopy(data[0]).name;
                this.formData.status = true;
                this.formData.sameP = this.deepCopy(data[0]).parentId;
                this.formData.nextP = this.deepCopy(data[0]).id;

            },
            reset() {
                this.dialogVisible = false;
                this.formData = {};
            },
            submit() {
                let postData = this.deepCopy(this.formData);
                if (postData.status == true) {
                    postData.status = 0;
                } else {
                    postData.status = 1;
                }
                if(postData.relation == 1) {
                    postData.parentId = postData.sameP;
                }else{
                    postData.parentId = postData.nextP;
                }
                console.log(postData);

                changeMenu(postData).then(res=>{
                    if (res.data.success) {
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                        this.$emit('func1', true);
                    }else{
                        this.$message.error('添加失败');
                    }
                    this.dialogVisible = false;
                })

            },
            handleClose() {
                this.dialogVisible = false
                this.formData = {};
            }
        }
    };
</script>

<style lang="scss">
    .add_user {
        z-index: 999;

        .centent {
            width: 90%;
            margin: 0 auto;
            padding-bottom: 30px;

            table {
                font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
                "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
                color: #555;
                margin: 0 auto;
            }

            table span {
                color: #ff0000;
            }
            table select {
                height: 26px;
                width: 100%;
                border: none;
                outline-color: transparent;
            }
            table input {
                outline: none;
                height: 24px;
                border: 1px solid #fff;
                border-radius: 2px;
                padding-left: 10px;
            }

            table td:first-child {
                text-align: right;
                padding-right: 10px;
                margin-left: 20px;
            }

            table td:last-child {
                text-align: left;
                padding-left: 10px;
                color: #999;
            }

            table tr {
                height: 45px;
            }
            .switch-td span {
                color: #666666!important;
            }
        }

        .el-dialog__header {
            border-bottom: 1px solid #eee;
        }

        .el-dialog__body {
            padding: 30px 0 0 0;
            background-color: #f1f1f1;
        }

        .el-dialog__footer {
            background-color: #f1f1f1;
        }
    }
</style>
