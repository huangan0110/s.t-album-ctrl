<template>
    <div :style="bgcImg">
        <div class="login">
            <div class="header">
                后台管理平台
                <span></span>
                <span></span>
            </div>
            <div class="content">
                <div class="center">
                    <div class="item1" id="item1">
                        <i class="el-icon-user"></i>
                        <input
                            type="text"
                            placeholder="请输入账号"
                            @focus="focus('item1')"
                            @blur="leave('item1')"
                            v-model="userAccount"
                        />
                    </div>
                    <div class="item2" id="item2">
                        <i class="el-icon-lock"></i>
                        <input
                            :type="type"
                            placeholder="请输入密码"
                            @focus="focus('item2')"
                            @blur="leave('item2')"
                            v-model="password"
                            ref="pass"
                        />
                        <i class="el-icon-view" @click="show_password()"></i>
                    </div>
                </div>
                <div class="bottom">
                    <el-checkbox v-model="autoLogin">两周内自动登录</el-checkbox>
                    <div class="login_btn">
                        <el-button round @click="login" v-if="!isLogin" >立即登录</el-button>
                        <el-button round @click="login" v-if="isLogin" :loading="true" >登录中</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {login} from "../api/api";

export default {
    data() {
        return {
            autoLogin: false,
            userAccount: "yan_zt98@163.com",
            password: "123456",
            show_eye: false,
            type: "password",
            isLogin:false,
            bgcImg: {
                height: '100%',
                position:'relative',
                backgroundImage:
                    "url(" +
                    require("../../assets/img/login-bg-ctrl.jpg") +
                    ")",
                backgroundSize: "cover"
            }
        };
    },
    methods: {
        login() {
            this.isLogin = true;
            login(this.userAccount,this.password).then(res=>{
                this.isLogin = false;
                localStorage.setItem("access_token",res.data.access_token);
                localStorage.setItem("refresh_token",res.data.refresh_token);
                this.$router.push('/home');
            }).catch(err=>{
                this.$message.error('账号或密码错误!');
                this.password = '';
                this.$refs.pass.focus();
                this.isLogin = false;
            })
        },
        show_password() {
            if (this.type == "password") {
                this.type = "text";
            } else {
                this.type = "password";
            }
        },
        focus(id) {
            document.getElementById(id).style.borderBottom =
                "1px solid #0371d1";
        },
        leave(id) {
            document.getElementById(id).style.borderBottom =
                "1px solid #dae1e6";
        }
    }
};
</script>

<style scoped>
::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #a9a9a9;
}
:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #a9a9a9;
    opacity: 1;
}
::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #a9a9a9;
    opacity: 1;
}
:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #a9a9a9;
}
.login {
    height: 540px;
    width: 430px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    border-radius: 12px;
}
.header {
    height: 120px;
    background-color: #0371d1;
    border-radius: 12px 12px 0 0;
    line-height: 120px;
    text-align: center;
    font-size: 30px;
    font-family: SourceHanSansCN-Regular;
    color: white;
}
.header :first-child {
    display: inline-block;
    width: 74px;
    height: 74px;
    background: #fff;
    opacity: 0.1;
    border-radius: 0 74px 0 0;
    position: absolute;
    left: 0;
    top: 43px;
}
.header :last-child {
    display: inline-block;
    width: 94px;
    height: 94px;
    background: #fff;
    opacity: 0.1;
    border-radius: 50%;
    position: absolute;
    right: -16px;
    top: -16px;
}
.content {
    height: 460px;
    background-color: #fff;
    position: relative;
}
.center {
    position: absolute;
    width: 290px;
    left: 50%;
    transform: translateX(-50%);
    top: 50px;
}
input {
    position: absolute;
    display: inline-block;
    padding-left: 15px;
    width: 290px;
    border: none;
    outline: none;
    top: 50%;
    transform: translateY(-50%);
}
input:focus .item1 {
    border-style: solid;
    border-color: #03a9f4;
    box-shadow: 0 0 15px #03a9f4;
}
.item1,
.item2 {
    position: relative;
    width: 290px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #dae1e6;
    margin-bottom: 30px;
}
.el-icon-view {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}
.bottom {
    width: 290px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    top: 220px;
}
.login_btn {
    width: 290px;
    margin-top: 40px;
}
.login_btn .el-button {
    width: 100%;
    background-color: #0371d1;
    color: #fff;
    letter-spacing: 2px;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
