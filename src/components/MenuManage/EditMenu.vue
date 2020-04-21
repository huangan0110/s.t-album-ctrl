<template>
    <div class="add_user">
        <el-dialog
            title="编辑菜单"
            :visible.sync="dialogVisible"
            width="360px"
            :before-close="handleClose"
            :modal-append-to-body="false"
        >
            <div class="centent">
                <table>
                    <tr>
                        <td>
                            <span>*</span>菜单类型
                        </td>
                        <td>
                            <select name="public-choice" v-model="menuType" @change="getCouponSelected">
                                <option value="1" >同级菜单</option>
                                <option value="2" >下级菜单</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>*</span>菜单名称
                        </td>
                        <td>
                            <input type="text" v-model="menuName"/>
                        </td>
                    </tr>
                    <tr>
                        <td>菜单链接</td>
                        <td>
                            <input type="text" v-model="menuUrl"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>*</span>排序
                        </td>
                        <td>
                            <input type="password" v-model="sort"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>*</span>状态
                        </td>
                        <td class="switch-td">
                            <el-switch
                                v-model="status"
                                active-text="启用"
                                inactive-text="禁用">
                            </el-switch>
                        </td>
                    </tr>
                </table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="reset" size="mini">重置</el-button>
                <el-button type="primary" @click="submit" size="mini">添加</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                menuName: "",
                menuUrl: "",
                sort: "",
                status: true,
                menuType:"1"
            };
        },
        methods: {
            getCouponSelected() {},
            open() {
                this.dialogVisible = true;
            },
            reset() {
                this.menuName = "";
                this.menuUrl = "";
                this.sort = "";
                this.status = "";
            },
            submit() {
                if (this.menuName == "" || this.menuUrl == "" || this.sort == "") {
                    this.$message.error("字段不能为空！");
                }else{

                }
            },
            handleClose() {
                this.menuName = "";
                this.menuUrl = "";
                this.sort = "";
                this.status = "";
                this.dialogVisible = false;
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
                color: #666666;
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
