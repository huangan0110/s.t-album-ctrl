<template>
    <div class="editlevel">
        <el-dialog
            title="等级特权"
            :visible.sync="dialogVisible"
            width="32%"
            :before-close="handleClose"
            :modal-append-to-body="false"
        >
            <div class="centent">
                <table>
                    <tr>
                        <th>等级</th>
                        <th>积分</th>
                        <th>相册数</th>
                        <th>相片数</th>
                    </tr>
                    <tr v-for="(row,index) in levelData" :key="index">
                        <td>
                            <span class="red">Lv{{row.level}}</span>
                        </td>
                        <td>
                            <input type="number" v-model="row.point" />
                        </td>
                        <td>
                            <input type="number" v-model="row.albumNum" />
                        </td>
                        <td>
                            <input type="number" v-model="row.photoNum" />
                        </td>
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
    props: {
        LData: Array
    },
    data() {
        return {
            dialogVisible: false,
            email: "",
            userAccount: "",
            passwd: "",
            spasswd: "",
            levelData: []
        };
    },

    methods: {
        open() {
            this.levelData = JSON.parse(JSON.stringify(this.LData));
            this.dialogVisible = true;
        },
        reset() {
            this.levelData = JSON.parse(JSON.stringify(this.LData));
        },
        submit() {},
        handleClose() {
            this.levelData = JSON.parse(JSON.stringify(this.LData));
            this.dialogVisible = false;
        }
    }
};
</script>

<style lang="scss" >
.editlevel {
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
            color: #ff0000 !important;
        }
        table input {
            width: 80px;
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
        table td {
            text-align: left;
            padding-left: 10px;
            color: #999;
            .red {
                color: red;
                font-weight: bold;
            }
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