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
                            <input type="text" v-model="ID" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>邮箱</td>
                        <td>
                            <input type="text" v-model="email" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>注册时间</td>
                        <td>
                            <input type="text" v-model="registerDate" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>相片数</td>
                        <td>
                            <input type="text" v-model="photoNum" disabled />
                        </td>
                    </tr>
                    <tr>
                        <td>相册数</td>
                        <td>
                            <input type="text" v-model="albumNum" disabled />
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>积分</td>
                        <td>
                            <input type="text" v-model="point" :disabled="disabled" />
                        </td>
                    </tr>
                    <tr>
                        <td>等级</td>
                        <td>
                            <input type="text" v-model="level" :disabled="disabled" />
                        </td>
                    </tr>
                    <tr>
                        <td>性别</td>
                        <td>
                            <input type="text" v-model="gender" :disabled="disabled" />
                        </td>
                    </tr>
                    <tr>
                        <td>状态</td>
                        <td>
                            无效
                            <el-tooltip :content="status==true?'有效':'无效'" placement="top">
                                <el-switch
                                    v-model="status"
                                    active-color="#13ce66"
                                    inactive-color="#ff4949"
                                    :disabled="disabled"
                                ></el-switch>
                            </el-tooltip>有效
                        </td>
                    </tr>
                </table>
            </div>
            <span slot="footer" class="dialog-footer" v-if="showBtn">
                <el-button type="primary" @click="submit" size="mini">确定</el-button>
            </span>
            <span slot="footer" class="dialog-footer" v-if="!showBtn">
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
            showBtn: false,
            email: "",
            userAccount: "",
            passwd: "",
            email: "",
            point: "",
            level: "",
            gender: "",
            ID: "",
            status: "",
            albumNum: "",
            photoNum: "",
            registerDate: "",
            disabled: false,
            title: "查看用户"
        };
    },
    methods: {
        open(data, type) {
            this.ID = data[0].userId;
            this.point = data[0].point;
            data[0].gender == 1 ? (this.gender = "男") : (this.gender = "女");
            this.email = data[0].email;
            this.level = data[0].level;
            this.userAccount = data[0].userAccount;
            this.passwd = data[0].passwd;
            this.registerDate = data[0].registerDate;
            this.photoNum = data[0].photoNum;
            this.albumNum = data[0].albumNum;
            data[0].status == "有效"
                ? (this.status = true)
                : (this.status = false);
            this.dialogVisible = true;
            type == "see"
                    ?   ((this.disabled = true),
                        (this.showBtn = true),
                        (this.title = "查看用户"))
                    :   ((this.disabled = false),
                        (this.showBtn = false),
                        (this.title = "编辑用户"));
        },
        reset() {},
        submit() {},
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