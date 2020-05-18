<template>
    <div class="menu-manage">
        <STree class="stree" @func="getNode" ref="borther"></STree>
        <div class="tree-table">
            <div class="table-btn">
                <el-button-group>
                    <el-button type="primary" size="mini" @click="addMenu">新增</el-button>
                    <el-button type="info" size="mini" @click="editMenu">编辑</el-button>
                    <el-button type="danger" size="mini" @click="delMenu">删除</el-button>
                </el-button-group>
                <br>
            </div>
            <el-table
                v-loading="loading"
                ref="multipleTable"
                size="mini"
                :data="menuListData"
                height="520"
                style="width: 100%"
                :header-cell-style="headerColor"
                @selection-change="handleSelectionChange"
                @row-click="rowSelect"
                :row-style="rowClass"
            >
                <el-table-column
                    v-for="(item, key) in tableHeader"
                    :key="key"
                    :prop="item.prop"
                    :label="item.label"
                    :width="item.width"
                >
                    <template slot-scope="scope">
                        <div v-if="item.label == '状态'">
                            <div v-if="scope.row[item.prop] == 0">
                                <el-tag size="small" effect="dark" type="">启用</el-tag>
                            </div>
                            <div v-if="scope.row[item.prop] == 1">
                                <el-tag size="small" effect="dark" type="danger">禁用</el-tag>

                            </div>
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
        <AddMenu ref="addMenu" @func1="triggerBrotherMethods"></AddMenu>
        <EditMenu ref="editMenu" @func2="triggerBrotherMethods"></EditMenu>
    </div>
</template>

<script>
    import STree from '../Common/STree/STree'
    import AddMenu from "./AddMenu";
    import EditMenu from "./EditMenu";
    import {delMenu} from "../api/api";

    export default {
        components: {
            STree,
            AddMenu,
            EditMenu
        },
        data() {
            return {
                loading: false,
                selectData: [],
                selectRow: [],

                tableHeader: [
                    // {label: "ID", prop: "id", width: "80"},
                    {label: "权限名称", prop: "name", width: "150"},
                    {label: "网关前缀", prop: "zuulPrefix", width: "80"},
                    {label: "服务前缀", prop: "servicePrefix", width: "80"},
                    {label: "权限链接", prop: "uri", width: "200"},
                    {label: "状态", prop: "status", width: "80"},
                    {label: "方法类型", prop: "method", width: "80"},
                    {label: "创建人员", prop: "createBy", width: "80"},
                    {label: "创建时间", prop: "createTime", width: "140"},
                ],
                menuList: [],
                menuListData: [],
            }
        },

        watch: {
            selectData(data) {
                this.selectRow = [];
                if (data.length > 0) {
                    data.forEach((item, index) => {
                        this.selectRow.push(this.menuListData.indexOf(item));
                    });
                }
            }
        },
        methods: {
            triggerBrotherMethods() {
                this.$refs.borther.getData();
            },
            getNode(data) {
                this.menuListData = [];
                this.setTableData(data);
            },
            refresh() {

            },
            //遍历树
            setTableData(datas) {
                let _obj = JSON.stringify(datas),
                    row = JSON.parse(_obj);
                if (row.children) {
                    delete row.children;
                }
                this.menuListData.push(row)
                if (datas.children) {
                    for (var i in datas.children) {
                        this.setTableData(datas.children[i]);
                    }
                }

            },
            rowSelect(rows) {
                this.selectData.push(rows);
                this.toggleSelection(this.selectData);
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
            //选中行改变
            handleSelectionChange(data) {
                this.selectData = data;
                this.selectRow.push(data);
            },
            //改变行样式
            rowClass({row, rowIndex}) {
                if (this.selectRow.includes(rowIndex)) {
                    return {"background-color": "#EDCFA1"};
                }
            },
            headerColor() {
                var obj = {
                    background: "#f1f1f1",
                    color: "#666"
                };
                return obj;
            },
            addMenu() {
                if (this.selectData.length == 0) {
                    this.$message.error('请先选择一行数据!');
                } else {
                    this.$refs.addMenu.open(this.selectData);
                }
            },
            editMenu() {
                if (this.selectData.length == 0) {
                    this.$message.error('请先选择需要修改的数据!');
                } else {
                    this.$refs.editMenu.open(this.selectData);
                }
            },
            delMenu() {
                if (this.selectData.length == 0) {
                    this.$message.error('请先选择需要删除的数据!');
                } else {
                    this.$confirm('确认删除？')
                        .then(_ => {
                            delMenu(this.selectData[0].id).then(res => {

                                if (res.data.success) {
                                    this.$message({
                                        message: '删除成功',
                                        type: 'success'
                                    });
                                    this.$refs.borther.getData();
                                } else {
                                    this.$message.error('删除失败');
                                }
                            })
                        })
                        .catch(_ => {
                        });

                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .menu-manage {
        .stree {
            width: 25%;
            float: left;
        }

        .tree-table {
            width: calc(74% - 40px);
            float: right;
            background-color: #fff;
            padding: 20px;

            > > > .el-tag {
                border-radius: 0;
            }

            .table-btn {
                float: right;
                height: 40px;
            }
        }
    }
</style>
