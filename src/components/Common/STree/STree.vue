<template>
    <div class="st-tree">
        <el-tree
            :data="menuData"
            node-key="id"
            highlight-current
            :expand-on-click-node="false"
            :default-expanded-keys="defaulExpanded"
            :props="menuProp"
            @node-click="treeSelect"
        >
        </el-tree>
    </div>
</template>

<script>
    import {getMenuTree} from '../../api/api'

    export default {
        data() {
            return {
                menuData:[],
                menuProp:{
                    'label':'name'
                },
                defaulExpanded:[],
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData(){
                getMenuTree().then(res => {
                    this.menuData = res.data.object;
                    for(let i in this.menuData) {
                        this.defaulExpanded.push(this.menuData[i].id);
                    }
                    this.$emit('func',res.data.object[0])
                })
            },
            treeSelect(object,node,el){
                this.$emit('func',object)
            }
        }
    };
</script>

<style scoped lang="scss">
    .st-tree > > > .el-tree {
        padding: 20px;
    }

    .st-tree > > > .el-tree-node__content:hover .s-btn {
        display: inline-block;
    }

    > > > .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
        background-color: #EDCFA1;
    }
</style>
