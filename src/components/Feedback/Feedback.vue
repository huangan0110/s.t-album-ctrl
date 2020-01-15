<template>
    <div class="feedback">
        <div class="content clearfix">
            <FilterCard ></FilterCard>
            <div class="right">
                <div class="allred">
                    <el-tooltip class="item" effect="dark" content="忽略已选中的行" placement="top">
                        <el-button type="danger" size="mini">忽略</el-button>
                    </el-tooltip>
                </div>
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :header-cell-style="headerColor"
                    @selection-change="handleSelectionChange"
                    :row-style="rowClass"
                >
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <div class="back-info">
                                <div class="info">
                                    <ul>
                                        <li>反馈账户:{{ props.row.userAccount }}</li>
                                        <li>姓名:{{ props.row.name }}</li>
                                        <li>性别:{{ props.row.gender }}</li>
                                        <li>电话:{{ props.row.telNum }}</li>
                                        <li>地区:{{ props.row.province }}</li>
                                        <li>等级:{{ props.row.level }}</li>
                                        <li>邮箱:{{ props.row.email }}</li>
                                        <li>时间:{{ props.row.date }}</li>
                                        <li style="width:500px">内容:{{ props.row.content }}</li>
                                    </ul>
                                </div>
                                <!-- <div class="back-content">
                                            <span>内容:{{ props.row.content }}</span>
                                </div>-->
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column type="selection" width="75" fixed></el-table-column>
                    <el-table-column label="反馈编号" prop="id" width="120"></el-table-column>
                    <el-table-column label="反馈类型" prop="backType" width="120"></el-table-column>
                    <el-table-column
                        label="标题"
                        prop="title"
                        width="180"
                        :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                        label="内容"
                        prop="content"
                        :show-overflow-tooltip="true"
                        width="220"
                    ></el-table-column>
                    <el-table-column fixed="right" label="操作" width="130">
                        <template slot-scope="scope">
                            <div class="tbtn">
                                <el-button
                                    type="danger"
                                    @click="handClick(scope.row)"
                                    size="mini"
                                >忽略</el-button>
                                <el-button
                                    type="success"
                                    @click="handClick(scope.row)"
                                    size="mini"
                                >采纳</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import FilterCard from "./FilterCard";
export default {
    components: {
        FilterCard
    },
    data() {
        return {
            selectData: [],
            selectRow: [],
            options: [
                {
                    value: "1",
                    label: "程序BUG"
                },
                {
                    value: "2",
                    label: "内容意见"
                },
                {
                    value: "3",
                    label: "功能建议"
                }
            ],
            tableData: [
                {
                    id: "12987122",
                    backType: "程序BUG",
                    title: "标题标题标题",
                    content:
                        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                    userAccount: "test1",
                    name: "王小虎",
                    level: "3",
                    email: "877347136@qq.com",
                    gender: "男",
                    telNum: "122213333",
                    province: "湖南",
                    date: "2019-12-10 08:41:33"
                },
                {
                    id: "12987122",
                    backType: "内容意见",
                    title: "标题标题标题",
                    content:
                        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                    userAccount: "test1",
                    name: "王小虎",
                    level: "3",
                    email: "877347136@qq.com",
                    gender: "男",
                    telNum: "122213333",
                    province: "湖南",
                    date: "2019-12-10 08:41:33"
                },
                {
                    id: "12987122",
                    backType: "功能建议",
                    title: "标题标题标题",
                    content:
                        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                    userAccount: "test1",
                    name: "王小虎",
                    level: "3",
                    email: "877347136@qq.com",
                    gender: "男",
                    telNum: "122213333",
                    province: "湖南",
                    date: "2019-12-10 08:41:33"
                },
                {
                    id: "12987122",
                    backType: "其它",
                    title: "标题标题标题",
                    content:
                        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                    userAccount: "test1",
                    name: "王小虎",
                    level: "3",
                    email: "877347136@qq.com",
                    gender: "男",
                    telNum: "122213333",
                    province: "湖南",
                    date: "2019-12-10 08:41:33"
                }
            ]
        };
    },
    mounted() {},
    watch: {
        selectData(data) {
            this.selectRow = [];
            if (data.length > 0) {
                data.forEach((item, index) => {
                    this.selectRow.push(this.tableData.indexOf(item));
                });
            }
        }
    },
    methods: {
        handleSelectionChange(data) {
            this.selectData = data;
            console.log(data);
        },

        //改变行样式
        rowClass({ row, rowIndex }) {
            if (this.selectRow.includes(rowIndex)) {
                return { "background-color": "#EDCFA1" };
            }
        },
        headerColor() {
            var obj = {
                background: "#f1f1f1",
                color: "#666"
            };
            return obj;
        },
        handleSizeChange() {},
        test() {
            console.log("123");
        },
        handClick(id) {},
        num(n) {
            alert(n);
        }
    }
};
</script>

<style lang="scss">
.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}
.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}
.feedback {
    min-width: 1200px;
    .content {
        width: calc(100% - 10px);
        background-color: #fff;
        padding: 10px;
        position: relative;

        .right {
            width: calc(100% - 400px);
            float: right;
            position: relative;
            border-left: 1px solid #eee;
            border-right: 1px solid #eee;
            .allred {
                position: absolute;
                top: 12px;
                left: 36px;
                z-index: 9;

                .el-button--mini,
                .el-button--mini.is-round {
                    padding: 3px 3px;
                }
            }
            .tbtn {
                .el-button--mini,
                .el-button--small {
                    padding: 3px 4px;
                    border-radius: 1px;
                }
                .el-button + .el-button {
                    margin-left: 3px;
                }
            }
            .back-info {
                width: 600px;
                // height: 200px;
                background-color: pink;
                margin-left: 50px;
                position: relative;
                .info {
                    position: relative;
                    ul li {
                        list-style: none;
                        width: 220px;
                        float: left;
                        margin-bottom: 5px;
                    }
                }
            }
        }
        // .back-content {
        //   width: 600px;
        //   height: 200px;
        //   position: relative;
        // }
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
.el-button--mini,
.el-button--small {
    border-radius: 1px;
}
</style>
