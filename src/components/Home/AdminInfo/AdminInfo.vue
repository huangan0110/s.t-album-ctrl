<template>
    <div class="admin-info">
        <el-button type="primary" size="mini">修改密码</el-button>
        <el-button type="success" size="mini" @click="test">授权</el-button>
        <el-dialog
            title="等级特权"
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
    import {getDefaultNode,getMenuTree,setPermisson} from "../../api/api";

    export default {
    data(){
        return {
            selectNode:[],
            defaulCheck:[],
            defaulExpanded:[],
            dialogVisible:false,
            menuProp:{
                'label':'name'
            },
        }
    },
    mounted() {

    },
    methods:{
        test() {
            this.defaulCheck = [];
            getDefaultNode('10').then(res=>{
                this.defaulCheck = res.data.object;
            })
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
        handleClose() {
            this.dialogVisible=false;
        },
        submit() {
            let nodes = this.$refs.tree.getCheckedNodes();
            for(let i in nodes) {
                this.selectNode.push(nodes[i].id);
            }
            setPermisson(this.selectNode,'10').then(res=>{
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
}
</script>

<style scoped lang="scss">
.admin-info {

}
</style>
