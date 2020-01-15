<template>
    <div class="stree-tool">
        <span class="s-label">{{DATA.label}}</span>
        <span class="s-btn">
            <el-button type="text" icon="el-icon-plus" @click="add(NODE,DATA)"></el-button>
            <el-button type="text" icon="el-icon-edit" @click="edit(NODE,DATA)"></el-button>
            <el-button type="text" icon="el-icon-delete" @click="remove(NODE,DATA)"></el-button>
        </span>
    </div>
</template>

<script>
export default {
    props:['NODE','DATA','STORE'],
    data() {
        return {

        }
    },
    methods: {
        add(node,data) {
            console.log(node.parent.data.id);
        },
        remove(node, data) {
            console.log(data.id)
        },
        edit(node, data) {
            console.log(data.id)
        },
        
    },
    mounted() {
    }
};
</script>

<style scoped lang="scss">
.s-btn {
    display: none;
}
</style>