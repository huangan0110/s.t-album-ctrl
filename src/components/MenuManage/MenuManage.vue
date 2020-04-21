<template>
    <div class="menu-manage">
        <STree class="stree"></STree>
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
                :data="menuList"
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
                            <div v-if="scope.row[item.prop] == 1">
                                <el-tag size="small" effect="dark" type="">启用</el-tag>
                            </div>
                            <div v-if="scope.row[item.prop] == 0">
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
        <AddMenu ref="addMenu"></AddMenu>
        <EditMenu ref="editMenu"></EditMenu>
    </div>
</template>

<script>
import STree from '../Common/STree/STree'
import AddMenu from "./AddMenu";
import EditMenu from "./EditMenu";
export default {
    components:{
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
                { label: "ID", prop: "menuId", width: "80" },
                { label: "菜单名称", prop: "menuName", width: "150" },
                { label: "排序", prop: "sort", width: "80" },
                { label: "状态", prop: "status", width: "80" },
                { label: "菜单链接", prop: "menuUrl", width: "100" },
                { label: "创建人员", prop: "createUser", width: "110" },
                { label: "创建日期", prop: "createDate", width: "120" },
                { label: "更新人员", prop: "updateUser", width: "110" },
                { label: "更新日期", prop: "updateDate", width: "120" },
            ],
            menuList: [
                {
                    menuId:1,
                    menuName:'菜单一',
                    sort:'2-1',
                    status:'1',
                    menuUrl:'/1212',
                    createUser:'admin',
                    createDate:'2019-09-09',
                    updateUser:'admin',
                    updateDate:'2019-09-09'
                },
                {
                    menuId:1,
                    menuName:'菜单一',
                    sort:'2-1',
                    status:'0',
                    menuUrl:'/1212',
                    createUser:'admin',
                    createDate:'2019-09-09',
                    updateUser:'admin',
                    updateDate:'2019-09-09'
                },
                {
                    menuId:1,
                    menuName:'菜单一',
                    sort:'2-1',
                    status:'1',
                    menuUrl:'/1212',
                    createUser:'admin',
                    createDate:'2019-09-09',
                    updateUser:'admin',
                    updateDate:'2019-09-09'
                },
                {
                    menuId:1,
                    menuName:'菜单一',
                    sort:'2-1',
                    status:'1',
                    menuUrl:'/1212',
                    createUser:'admin',
                    createDate:'2019-09-09',
                    updateUser:'admin',
                    updateDate:'2019-09-09'
                },
            ]

        }
    },
    watch: {
        selectData(data) {
            this.selectRow = [];
            if (data.length > 0) {
                data.forEach((item, index) => {
                    this.selectRow.push(this.menuList.indexOf(item));
                });
            }
        }
    },
    methods:{
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
        //选中行改变
        handleSelectionChange(data) {
            this.selectData = data;
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
        addMenu() {
            this.$refs.addMenu.open()
        },
        editMenu() {
            this.$refs.editMenu.open()
        },
        delMenu() {

        }
    }
}
</script>

<style scoped lang="scss">
.menu-manage{
    .stree {
        width: 25%;
        float: left;
    }
    .tree-table {
        width: calc(74% - 40px);
        float: right;
        background-color: #fff;
        padding: 20px;
        >>>.el-tag {
            border-radius: 0;
        }
        .table-btn {
            float: right;
            height: 40px;
        }
    }

}
</style>
