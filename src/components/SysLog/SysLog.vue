<template>

  <div class="sys_log">
    <el-scrollbar style="height:600px">
      <div class="card">
        <div class="content">
           a <br>a <br>a <br>a <br>a <br>a <br>a <br>b <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>
        a <br>a <br>a <br>a <br>b<br>b <br>a <br>a <br>a <br>a <br>b <br>b <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>a <br>
        </div>
       
      </div>
      </el-scrollbar>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.el-scrollbar__wrap{
  overflow-x: hidden;
}
.sys_log {
  top: 10px;
  min-width: 1200px;
  position: relative;
  overflow: hidden;
   
  .card {
    width: 100%;
    min-height: 600px;
    background-color: #333;
    .content {
      color: #fff;
    }
  }
}
</style>