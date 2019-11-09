<template>
    <div class="header">
        <p>S.T Album</p>
        <i class="el-icon-s-operation" @click="setCollapse"></i>
        <div class="person">
            <el-dropdown >
            <span class="el-dropdown-link">
                admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item class="item">个人信息</el-dropdown-item>
                <el-dropdown-item class="item">退出登录</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        setCollapse(){
            this.$store.commit('setCollapse');
        }
    }
}
</script>

<style scoped>
.header {
    min-width: 1200px;
    position:relative;
    height: 45px;
    width: 100%;
    background-color: #000;
    line-height: 45px;
}
.header p {
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
    margin-left: 20px;
}
.el-icon-s-operation {
    position: absolute;
    left: 170px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    font-size: 18px;
    background-color: rgba(255, 255, 255, 0.25);
    padding: 5px;
    border-radius: 4px;
}
.el-icon-s-operation:hover {
    background-color: rgba(255, 255, 255, 0.4);
}
.el-dropdown-link {
    cursor: pointer;
    color: white;
}
.el-icon-arrow-down {
    font-size: 12px;
}
.person {
    height: 42px;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-60%);
}
/* .person:hover {
    	
box-sizing: content-box;
    border-bottom: 3px solid #F56C6C;
} */
.item {
    font-size: 12px;
}
.item:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: #000
}
</style>