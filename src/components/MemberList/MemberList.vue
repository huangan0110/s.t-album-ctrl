<template>
    <div class="member_list">
        <div class="content">
            <div class="search">
                <el-button type="primary" size="mini" icon="el-icon-plus" @click="addUser">添加用户</el-button>
                <el-input placeholder="请输入内容" v-model="searchData" size="mini">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
                <el-button icon="el-icon-search" type="primary" size="mini"></el-button>
                <FilterButton id="shaixuan"></FilterButton>
                <div class="right-menu">
                    <el-button
                        size="mini"
                        type="primary"
                        id="check"
                        @click="editadd('see')"
                        :disabled="btnDisabled"
                    >查看</el-button>
                    <el-button
                        size="mini"
                        type="success"
                        id="edit"
                        :disabled="btnDisabled"
                        @click="editadd('edit')"
                    >编辑</el-button>
                    <el-button size="mini" type="danger" id="delete" :disabled="delDisabled">删除</el-button>
                </div>
                <el-button type="primary" icon="el-icon-refresh" circle size="mini" id="refresh"></el-button>
                <el-button
                    type="primary"
                    icon="el-icon-top-right"
                    circle
                    size="mini"
                    id="export"
                    @click="exportXls"
                ></el-button>
            </div>
            <div class="table" id="table">
                <el-table
                    v-loading="loading"
                    ref="multipleTable"
                    size="mini"
                    :data="tableData"
                    style="width: 100%"
                    :header-cell-style="headerColor"
                    @selection-change="handleSelectionChange"
                    @row-click="rowSelect"
                    :row-style="rowClass"
                >
                    <el-table-column type="selection" width="65" fixed></el-table-column>

                    <el-table-column
                        v-for="(item, key) in tableHeader"
                        :key="key"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width"
                    >
                        <template slot-scope="scope">
                            <div v-if="item.label == '性别'">
                                <div v-if="scope.row[item.prop] == 1">男</div>
                                <div v-if="scope.row[item.prop] == 2">女</div>
                            </div>
                            <div v-else>{{scope.row[item.prop]}}</div>
                        </template>
                    </el-table-column>

                    <!-- 表格空白 -->
                    <template slot="empty">
                        <div class="no-data">
                            <img
                                src="../../assets/img/table_no_data.png"
                                style="width:30%; height:20%;margin-top:20px"
                            />
                            <h4 style="margin-top:-10px; margin-bottom:10px">暂无任何数据</h4>
                        </div>
                    </template>
                </el-table>
            </div>
            <div class="page">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400"
                ></el-pagination>
            </div>
        </div>
        <AddUser ref="adduser"></AddUser>

        <EditUserInfo ref="editadd"></EditUserInfo>
    </div>
</template>

<script>
import AddUser from "./AddUser";
import EditUserInfo from "./EditUserInfo";
import FilterButton from "./FilterButton";
import { getUser } from "../api/api";
export default {
    components: {
        AddUser,
        FilterButton,
        EditUserInfo
    },
    data() {
        return {
            loading: true,
            currentPage: 1,
            selectData: [],
            btnDisabled: true,
            delDisabled: true,
            selectRow: [],
            dialogVisible: false,
            searchData: "",
            tableHeader: [
                { label: "ID", prop: "userId", width: "80" },
                { label: "用户名", prop: "userAccount", width: "150" },
                { label: "积分", prop: "point", width: "100" },
                { label: "等级", prop: "level", width: "80" },
                { label: "邮箱", prop: "email", width: "180" },
                { label: "性别", prop: "gender", width: "80" },
                { label: "电话", prop: "telNum", width: "130" },
                { label: "地区", prop: "province", width: "100" },
                { label: "状态", prop: "status", width: "100" },
                { label: "相册数", prop: "albumNum", width: "80" },
                { label: "相片数", prop: "photoNum", width: "100" },
                { label: "注册时间", prop: "registerDate", width: "200" }
            ],
            tableData: []
        };
    },
    watch: {
        selectData(data) {
            this.selectRow = [];
            if (data.length > 0) {
                data.forEach((item, index) => {
                    this.selectRow.push(this.tableData.indexOf(item));
                });
            }
            if (this.selectRow.length == 1) {
                this.btnDisabled = false;
            } else {
                this.btnDisabled = true;
            }
            if (this.selectRow.length > 0) {
                this.delDisabled = false;
            } else {
                this.delDisabled = true;
            }
        }
    },
    created() {
        getUser().then(res => {
            this.loading = false;
            this.tableData = res.data.userData;
        });
    },
    methods: {
        //表格导出
        exportXls() {
            var that = this;
            require.ensure([], () => {
                const {
                    export_json_to_excel
                } = require("@/excel/export2Excel"); //这里必须使用绝对路径，使用@/+存放export2Excel的路径
                const tHeader = [
                    "ID",
                    "用户名",
                    "积分",
                    "等级",
                    "邮箱",
                    "性别",
                    "电话",
                    "地区",
                    "状态",
                    "相册数",
                    "相片数",
                    "注册时间"
                ]; // 导出的表头名信息
                const filterVal = [
                    "userId",
                    "userAccount",
                    "point",
                    "level",
                    "email",
                    "gender",
                    "telNum",
                    "province",
                    "status",
                    "albumNum",
                    "photoNum",
                    "registerDate"
                ]; // 导出的表头字段名，需要导出表格字段名
                const list = that.tableData;
                const data = that.formatJson(filterVal, list);
                export_json_to_excel(tHeader, data, "用户数据"); // 导出的表格名称，根据需要自己命名
            });
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]));
        },
        //表格选中
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        rowSelect(rows) {
            this.selectData.push(rows);
            this.toggleSelection(this.selectData);
        },
        handleSizeChange() {},
        handleCurrentChange() {},
        //选中行改变
        handleSelectionChange(data) {
            this.selectData = data;
            this.selectRow.push(data);
        },
        //改变行样式
        rowClass({ row, rowIndex }) {
            if (this.selectRow.includes(rowIndex)) {
                return { "background-color": "#EDCFA1" };
            }
        },
        // test(row) {
        //     document.getElementById("table").oncontextmenu = function(e) {
        //         return false;
        //     };
        //     this.menuPosition.left = this.getMousePos().x + "px";
        //     this.menuPosition.top = this.getMousePos().y + "px";
        //     this.getMousePos();
        //     this.showMenu = true;
        //     this.selectData = [];
        //     this.toggleSelection();
        //     console.log(this.selectData);
        //     this.selectData.push(row);
        //     this.toggleSelection(this.selectData);
        //     return false;
        // },
        // getMousePos(event) {
        //     var e = window.event;
        //     // var scrollX =
        //     //     e. || document.body.scrollLeft;
        //     // var scrollY =
        //     //     document.documentElement.scrollTop || document.body.scrollTop;
        //     var x = e.clientX;
        //     var y = e.pageY || e.clientY + scrollY ;
        //     return { x: x, y: y };
        // },
        addUser() {
            this.$refs.adduser.open();
        },
        editadd(type) {
            this.$refs.editadd.open(this.selectData, type);
        },
        headerColor() {
            var obj = {
                background: "#f1f1f1",
                color: "#666"
            };
            return obj;
        }
    }
};
</script>

<style lang="scss">
.right-menu {
    display: inline-block;
    float: right;
    margin-right: 30px;
    background-color: #fff;
    #check,
    #edit,
    #delete {
        padding: 7px 7px;
        border-radius: 1px;
    }
    #edit,
    #delete {
        margin-left: -4px;
    }
}

.member_list {
    min-width: 1200px;
    .content {
        padding: 15px;
        background-color: #fff;
    }
    .search {
        position: relative;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
    }
    .table {
        margin-top: 10px;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        .el-button--mini,
        .el-button--small {
            padding: 3px 3px;
            border-radius: 1px;
        }
        .el-table th,
        .el-table tr {
            border: 1px solid #f1f1f1;
        }

        .no-data {
            margin-right: 100px;
        }
    }
    .page {
        text-align: right;
        margin-top: 20px;
        margin-right: 30px;
    }
}
.search {
    .el-input {
        width: 200px;
        margin-left: 20px;
    }
    .el-button:nth-child(1),
    .el-button:nth-child(2),
    .el-button:nth-child(4) {
        padding: 7px 3px;
    }
    #shaixuan {
        margin-left: 5px;
    }
    #export {
        float: right;
        margin-right: 10px;
    }
    #refresh {
        float: right;
        margin-right: 50px;
    }
}
.el-button--mini,
.el-button--mini.is-round {
    border-radius: 1px;
}
.el-input__inner {
    border-radius: 1px;
}
</style>
