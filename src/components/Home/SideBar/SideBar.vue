<template>
  <div class="side_bar">
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" unique-opened
     background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <template v-for="(item,index) in menuList" >
        <el-submenu :index="item.index" :key="index">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.title}}</span>
            </template>
                <template v-for="(child,index) in item.children" >
                    <el-menu-item  :key="index" :index="child.index" @click="open(child.path,child.title)"><i class="el-icon-arrow-right"></i>{{child.title}}</el-menu-item>
                </template>
        </el-submenu>
        </template>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
        return {
            menuList:[
                {
                    title:'会员管理',
                    index:'1',
                    children:[
                        {
                            title:'数据统计',
                            index:'1-1',
                            path:'/data_statistics'
                        },
                        {
                            title:'会员列表',
                            index:'1-2',
                            path:'/member_list'
                        },
                        {
                            title:'等级管理',
                            index:'1-3',
                            path:'/level'
                        }
                    ]
                },
                {
                    title:'系统管理',
                    index:'2',
                    children:[
                        {
                            title:'系统监控',
                            index:'2-1',
                            path:'/sys_monitor'
                        },
                        {
                            title:'系统日志',
                            index:'2-2',
                            path:'/sys_log'
                        },
                        {
                            title:'积分管理',
                            index:'2-3',
                            path:'/point_management'
                        }
                    ]
                },
            ],
        }
    },
    computed: {
      isCollapse(){
        return this.$store.state.isCollapse;
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      open(path,title){
          this.$store.commit('setPath',path);
          this.$store.commit('setTitle',title);  
          this.$emit('open');
          this.$router.push(path);
          
      }
    }
}
</script>

<style scoped>
.el-menu {
   /* position: fixed;
   width: 200px;

   height: 100%; */
   border-right: solid 0px #e6e6e6;
   
}
/* .el-menu--collapse{
    width: 68px;
} */
.el-menu .el-menu-item-group__title {
    
    padding: none;
}
.el-submenu .el-menu-item {
    padding: 0 70px;
    text-align: left;
}
</style>