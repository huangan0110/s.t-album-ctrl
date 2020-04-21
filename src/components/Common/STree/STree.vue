<template>
    <div class="st-tree">
        <el-tree
            :data="data"
            node-key="id"
            highlight-current
            default-expand-all
            :expand-on-click-node="false"
        >
        </el-tree>
    </div>
</template>

<script>
export default {
    data() {
        const data = [
            {
                id: 1,
                label: "会员管理",
                children: [
                    {
                        id: 4,
                        label: "数据统计",
                    },
                    {
                        id: 5,
                        label: "会员列表"
                    },
                    {
                        id: 6,
                        label: "等级管理"
                    }
                ]
            },
            {
                id: 2,
                label: "系统管理",
                children: [
                    {
                        id: 7,
                        label: "系统日志"
                    },
                    {
                        id: 8,
                        label: "菜单管理"
                    }
                ]
            },
            {
                id: 3,
                label: "微服务管理",
                children: [
                    {
                        id: 7,
                        label: "服务监控"
                    },
                    {
                        id: 8,
                        label: "链路追踪"
                    }
                ]
            }
        ];
        return {
            data: JSON.parse(JSON.stringify(data)),
            data: JSON.parse(JSON.stringify(data))
        };
    },
    methods: {

    }
};
</script>

<style scoped lang="scss">
.st-tree >>> .el-tree {
  padding: 20px;
}
.st-tree >>> .el-tree-node__content:hover .s-btn {
    display: inline-block;
}
>>>.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
    background-color: #EDCFA1;
}
</style>
