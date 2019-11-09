<template>
  <div class="home">
      <div class="header">
        <Header></Header>
      </div>
      
      <div class="center" :class="{'center-collapse':isCollapse}">
        <div class="left_nav">
          <SideBar @open="open"></SideBar>
        </div>
        <div class="right-content" >
          <div class="tabs">
            <Tabs ref="brother"></Tabs>
          </div>
           <el-scrollbar style="height:100%">
            <router-view class="router"></router-view>
           </el-scrollbar>
        </div>
      </div>
      
  </div>
</template>

<script>
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import Tabs from './Tabs/Tabs'
export default {
    components:{
        Header,
        SideBar,
        Tabs
    },
    data() {
        return {
            
        }
    },
    created() {
      this.$router.push('/wel');
    },
    methods:{
        open(){
             this.$refs.brother.checkList();
        }
    },
    computed: {
      isCollapse(){
        return this.$store.state.isCollapse;
      }
    },
}
</script>

<style lang="scss">
.home {
  .header {
    position: fixed;
    width: 100%;
    height: 45px;
    z-index: 999;
  }
  .tabs {
    position: fixed;
    width: calc(100% - 200px);
    top: 45px;
    z-index: 999;
    background-color: #fff;
  }
  .left_nav,
  .right-content {
    transition: all 0.3s;
  }
  .center {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #f1f1f1;
    overflow: hidden;
  }
  .center-collapse{
    .left_nav{
      width: 64px;
    }
    .right-content{
      left: 64px;
      width: calc(100% - 64px);
    }
    .tabs {
      width: calc(100% - 64px);
    }
  }
  .center .router {
    position: relative;
    margin-top: 85px;
    height: 100%;
    background-color: #f1f1f1;
    padding: 10px 20px 20px 20px;
  }
  .left_nav{
    position: fixed;
    top: 45px;
    width: 200px;
    height: 100%;
    // box-shadow: 2px 0 6px rgba(0,21,41,.35);
    background-color: #545c64;
  }


  .right-content{
    position: absolute;
    left: 200px;
    width: calc(100% - 200px);
    height: 100%;
    box-sizing: border-box; 
    background-color: #f1f1f1;

    .el-scrollbar__wrap{
      overflow-x: hidden;
    }
  }

}

        /* 以下三种方式使用比较多 */
        .clearfix:before, .clearfix:after {
            content: "";
            /* 触发BFC, 防止外边距合并 */
            display: table;  
        } 
        .clearfix:after {
            clear: both;
        }
        .clearfix {
            /* *代表    ie 6 7 能识别的符号  带*的属性，只有IE67执行   zoom代表ie67清除浮动的方法 */
            *zoom: 1;
        }
</style>