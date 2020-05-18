<template>
    <div class="editadd">
        <el-dialog
            :title="title"
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            width="690px"
            :modal-append-to-body="false"
        >
            <div class="centent clearfix">
                <table>
                    <tr>
                        <td>ID</td>
                        <td>
                            <input type="text" v-model="userForm.id" disabled/>
                        </td>
                    </tr>
                    <tr>
                        <td>邮箱</td>
                        <td>
                            <input type="text" v-model="userForm.email" disabled/>
                        </td>
                    </tr>
                    <tr>
                        <td>注册时间</td>
                        <td>
                            <input type="text" v-model="userForm.createTime" disabled/>
                        </td>
                    </tr>
                    <tr>
                        <td>相片数</td>
                        <td>
                            <input type="text" v-model="userForm.imageNum" disabled/>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>用户名</td>
                        <td>
                            <input type="text" v-model="userForm.nickName" :disabled="disabled"/>
                        </td>
                    </tr>
                    <tr>
                        <td>性别</td>
                        <td>
                            <input type="text" v-model="gender" :disabled="disabled"/>
                        </td>
                    </tr>
                    <tr>
                        <td>年龄</td>
                        <td>
                            <input type="text" v-model="userForm.age" :disabled="disabled"/>
                        </td>
                    </tr>
                </table>
            </div>
            <span slot="footer" class="dialog-footer" v-if="showBtn">
                <el-button type="primary" @click="submit" size="mini">确定</el-button>
            </span>
            <span slot="footer" class="dialog-footer" v-if="!showBtn">
                <el-button type="primary" @click="submit" size="mini">提交</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {editUserInfo} from "../api/api";

    export default {
        data() {
            return {
                dialogVisible: false,
                showBtn: false,
                disabled: false,
                gender: "男",
                title: "查看用户",
                userForm: {},
                type: ''
            };
        },
        methods: {
            open(data, type) {
                console.log(data);
                let form = data[0];
                delete form.userResource;
                delete form.vip;

                this.userForm = form;
                if (!this.userForm.genderId) {
                    this.gender = '不详'
                } else if (this.userForm.genderId == 1) {
                    this.gender = '男'
                } else {
                    this.gender = '女'
                }
                this.dialogVisible = true;
                type == "see"
                    ? ((this.disabled = true),
                        (this.showBtn = true),
                        (this.title = "查看用户"),
                        (this.type = "see"))
                    : ((this.disabled = false),
                        (this.showBtn = false),
                        (this.title = "编辑用户"),
                        (this.type = "edit"));
            },
            reset() {
            },
            submit() {
                console.log(this.type)
                if (this.type == 'edit') {
                    if (this.gender == '不详') {
                        this.userForm.genderId = 0
                    } else if (this.gender == '男') {
                        this.userForm.genderId = 1
                    } else if (this.gender == '女') {
                        this.userForm.genderId = 2
                    } else {

                    }
                    var formdata = {};
                    formdata.id = this.userForm.id;
                    formdata.nickName = this.userForm.nickName;
                    formdata.genderId = this.userForm.genderId;
                    formdata.age = this.userForm.age;
                    editUserInfo(formdata).then(res => {
                        if (res.data.success) {
                            this.$message({
                                message: '修改成功',
                                type: 'success'
                            });
                            this.$parent.getUser();
                        }else{
                            this.$message.error('修改失败');
                        }
                        this.dialogVisible = false;
                    })
                }
                console.log(this.userForm)
            },
            handleClose() {
                this.dialogVisible = false;
            }
        }
    };
</script>

<style lang="scss">
    .editadd {
        z-index: 999;

        .centent {
            width: 90%;
            margin: 0 auto;
            padding-bottom: 30px;

            table {
                font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
                "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
                color: #555;
                float: left;
                margin-right: 30px;
            }

            table:nth-child(2) {
                margin-right: 0;
            }

            table span {
                color: #ff0000 !important;
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
            }

            table td:last-child {
                text-align: left;
                padding-left: 10px;
                color: #999;
            }

            table tr {
                height: 35px;
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

    .clearfix:before,
    .clearfix:after {
        content: "";
        /* 触发BFC, 防止外边距合并 */
        display: table;
    }

    .clearfix:after {
        clear: both;
    }

    .clearfix {
        /* *代表    ie 6 7 能识别的符号  带*的属性，只有IE67执行   zoom代表ie67清除浮动的方法 */
        *zoom: 1;
    }
</style>
