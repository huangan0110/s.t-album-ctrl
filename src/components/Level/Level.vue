<template>
  <div class="level">
      <div class="header">
          <span>等级特权</span> <el-button type="info" size="mini" class="edit">修改</el-button>
      </div>
      <div class="table_header">
         <span>等级</span><span>所需积分</span><span>特权</span>
      </div>
      <div class="table" v-for="item in 9" :key="item">
         <span>Lv.{{item}}</span><span>11000</span><span>2000张相片免费容量 · 相册上限20</span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        
        }
    }
}
</script>

<style scoped lang="scss">
.level {
    top: 20px;
    margin-right: 150px;
    margin-left: 150px;
    min-width: 600px;
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
            margin-top: 10px;
            float: right;
        }
    }
    .table_header {
        position: relative;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        span {
            font-size: 13px;
            color: #666
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
}
</style>