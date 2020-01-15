<template>
    <div class="add_user">
        <el-dialog
            title="添加用户"
            :visible.sync="dialogVisible"
            width="32%"
            :before-close="handleClose"
            :modal-append-to-body="false"
        >
            <div class="centent">
                <table>
                    <tr>
                        <td>
                            <span>*</span>邮箱
                        </td>
                        <td>
                            <input type="text" v-model="email" />
                        </td>
                        <td>唯一登录名</td>
                    </tr>
                    <tr>
                        <td>用户名</td>
                        <td>
                            <input type="text" v-model="userAccount" />
                        </td>
                        <td>2-16个字符</td>
                    </tr>
                    <tr>
                        <td>
                            <span>*</span>密码
                        </td>
                        <td>
                            <input type="password" v-model="passwd" />
                        </td>
                        <td>6-16个字符</td>
                    </tr>
                    <tr>
                        <td>
                            <span>*</span>确认密码
                        </td>
                        <td>
                            <input type="password" v-model="spasswd" />
                        </td>
                        <td>重复密码</td>
                    </tr>
                </table>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="reset" size="mini">重置</el-button>
                <el-button type="primary" @click="submit" size="mini">提交</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            email: "",
            userAccount: "",
            passwd: "",
            spasswd: ""
        };
    },
    methods: {
        open() {
            this.dialogVisible = true;
        },
        reset() {
            this.email = "";
            this.userAccount = "";
            this.passwd = "";
            this.spasswd = "";
        },
        submit() {
            // this.dialogVisible = false;
            var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if (this.email == "") {
                this.$message.error("邮箱不能为空！");
            } else {
                if (this.email != "" && !regEmail.test(this.email)) {
                    this.$message.error("邮箱格式错误！");
                } else {
                    if (
                        this.userAccount.length < 2 ||
                        this.userAccount.length > 16
                    ) {
                        this.$message.error("用户名长度在2-16个字符之间！");
                    } else {
                        if (this.passwd.length < 6 || this.passwd.length > 16) {
                            this.$message.error("密码长度在6-16个字符之间！");
                        } else {
                            if (this.spasswd != this.passwd) {
                                this.$message.error("两次密码不一致");
                            } else {
                                alert("tijiao");
                            }
                        }
                    }
                }
            }
        },
        handleClose() {
            this.email = "";
            this.userAccount = "";
            this.passwd = "";
            this.spasswd = "";
            this.dialogVisible = false;
        }
    }
};
</script>

<style lang="scss" >
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
        }
        table span {
            color: #ff0000!important;
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
</style>