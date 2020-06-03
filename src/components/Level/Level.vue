<template>
    <div class="level">
        <div class="header">
            <span>等级特权</span>
            <el-button type="info" size="mini" class="edit1" @click="Authorize">授权</el-button>
            &nbsp;&nbsp;
            <el-button type="info" size="mini" class="edit" @click="editLevel">修改</el-button>
        </div>
        <div class="table_header">
            <span>等级</span>
            <span>所需积分</span>
            <span>特权</span>
        </div>
        <div class="table" v-for="(item,index) in levelData" :key="index" @click="select(index+1)" :class="{tbBg:index+1==selectId?true:false}">
            <span>Lv.{{item.level}}</span>
            <span>{{item.point}}</span>
            <span>{{item.photoNum}}张相片免费容量 · 相册上限{{item.albumNum}}</span>
        </div>
        <EditLevel ref="editLevel" :LData="levelData"></EditLevel>
        <el-dialog
            title="角色授权"
            :visible.sync="dialogVisible"
            width="32%"
            :before-close="handleClose"
            :modal-append-to-body="false"
        >
            <div class="centent">
                <el-tree
                    :data="menuData"
                    :default-expanded-keys="defaulExpanded"
                    :default-checked-keys="defaulCheck"
                    check-strictly
                    node-key="id"
                    show-checkbox
                    ref="tree"
                    :props="menuProp"
                    @check-change="handleCheckChange">
                </el-tree>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submit" size="mini">保存</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import EditLevel from './EditLevel'
import {getMenuTree,getDefaultNode,setPermisson,getLevelData} from "../api/api";

export default {
    components:{
        EditLevel
    },
    data() {
        return {
            levelData:[
                {
                    level:1,
                    point:100,
                    albumNum:4,
                    photoNum:100
                },
                {
                    level:2,
                    point:200,
                    albumNum:6,
                    photoNum:200
                },
                {
                    level:3,
                    point:300,
                    albumNum:8,
                    photoNum:300
                },
                {
                    level:4,
                    point:400,
                    albumNum:10,
                    photoNum:400
                },
                {
                    level:5,
                    point:500,
                    albumNum:12,
                    photoNum:500
                },
                {
                    level:6,
                    point:600,
                    albumNum:14,
                    photoNum:600
                },
                {
                    level:7,
                    point:700,
                    albumNum:16,
                    photoNum:700
                },
                {
                    level:8,
                    point:800,
                    albumNum:18,
                    photoNum:800
                },
                {
                    level:9,
                    point:900,
                    albumNum:'无上限',
                    photoNum:'无上限'                },

            ],
            dialogVisible:false,
            defaulExpanded:[],
            menuData:[],
            menuProp:{
                'label':'name'
            },
            selectNode:[],
            defaulCheck:[],
            selectId:""
        };
    },
    mounted() {
        // getLevelData().then(res=>{
        //
        // })
    },
    methods:{
        select(index){
            this.selectNode = [];
            this.selectId = index;
            this.defaulCheck = [];
            getDefaultNode(index).then(res=>{
                this.defaulCheck = res.data.object;
            })
        },
        editLevel(){
            this.$refs.editLevel.open(this.levelData);
        },

        Authorize() {

            this.dialogVisible = true;
            // getDefaultNode()
            getMenuTree().then(res => {
                this.menuData = res.data.object;
                for(let i in this.menuData) {
                    this.defaulExpanded.push(this.menuData[i].id);
                }
                this.$emit('func',res.data.object[0])
            })
        },
        handleCheckChange(){},
        handleClose(){
            this.dialogVisible = false;
        },
        submit() {
            this.selectNode = [];
            let nodes = this.$refs.tree.getCheckedNodes();
            for(let i in nodes) {
                this.selectNode.push(nodes[i].id);
            }
            setPermisson(this.selectNode,this.selectId).then(res=>{
                if (res.data.success) {
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                }else{
                    this.$message.error('修改失败');
                }
                this.dialogVisible = false;
            })
        },
    }
};
</script>

<style scoped lang="scss">
.level {
    top: 20px;
    margin-right: 150px;
    margin-left: 150px;
    min-width: 600px;
    .tbBg {
        background-color: #ddd;
    }
    .header {
        height: 40px;
        position: relative;
        line-height: 40px;
        span {
            font-size: 22px;
            color: #333;
            font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        }
        .edit {
            position: absolute;
            top: 10px;
            right: 75px;
        }
        .edit1 {
            margin-top: 10px;
            float: right;
            margin-right: 10px;
        }
    }
    .table_header {
        position: relative;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        span {
            font-size: 13px;
            color: #666;
        }
        span:nth-child(1) {
            position: absolute;
            left: 5px;
        }
        span:nth-child(2) {
            position: absolute;
            left: 60px;
        }
        span:nth-child(3) {
            position: absolute;
            left: 145px;
        }
    }
    .table {
        color: #666;
        font-size: 13px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        span:first-child {
            font-size: 18px;
            color: #e03a24;
            font-family: fantasy;
        }
        span:nth-child(1) {
            position: absolute;
            left: 25px;
        }
        span:nth-child(2) {
            position: absolute;
            left: 80px;
        }
        span:nth-child(3) {
            position: absolute;
            left: 165px;
        }
    }
    .table:hover{
        background-color: #ddd;
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
