<template>
  <div class="member_list">
      <div class="content">
        <div class="search">
            <el-button  type="danger" size="mini" icon="el-icon-delete" >批量删除</el-button>
            <el-button  type="primary" size="mini" icon="el-icon-plus" @click="addUser">添加用户</el-button>
          <el-input
            placeholder="请输入内容"
            v-model="searchData"
            size="mini"
            >
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-button icon="el-icon-search" type="primary" size="mini"></el-button>
          <el-button type="primary" icon="el-icon-refresh" circle size="mini"></el-button>
        </div>
        <div class="table">
          
            <el-table
              stripe
              size="mini"
              :data="tableData"
              style="width: 100%"
              :row-class-name="tableRowClassName"
              :header-cell-style="headerColor"
              >
              <el-table-column type="selection" width="55" fixed></el-table-column>
              <el-table-column
                v-for="(item,index) in tableHeader"
                :key="index"
                :prop="item.prop"
                :label="item.label"
                :width="item.width"
                >
              </el-table-column> 
              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
      <AddUser ref="adduser"></AddUser>
  </div>
</template>

<script>
import AddUser from './AddUser'
export default {
  components: {
    AddUser
  },
  data(){
    return {
      dialogVisible:false,
      searchData:'',
      tableHeader:[
        {label:'ID' ,prop:'userId',width:'100'},
        {label:'用户名' ,prop:'userAccount',width:'250'},
        {label:'积分' ,prop:'point',width:'200'},
        {label:'等级' ,prop:'level',width:'150'},
        {label:'邮箱' ,prop:'email',width:'300'},
        {label:'状态' ,prop:'status',width:'200'},
      ],
      tableData: [{
          userId: '1',
          userAccount: '王小虎',
          point: '234',
          level: '3',
          email: '877347136@qq.com',
          status: '有效'
        },
        {
          userId: '1',
          userAccount: '王小虎',
          point: '234',
          level: '3',
          email: '877347136@qq.com',
          status: '有效'
        },
        {
          userId: '1',
          userAccount: '王小虎',
          point: '234',
          level: '3',
          email: '877347136@qq.com',
          status: '有效'
        },
        {
          userId: '1',
          userAccount: '王小虎',
          point: '234',
          level: '3',
          email: '877347136@qq.com',
          status: '有效'
        },
         {
          userId: '1',
          userAccount: '王小虎',
          point: '234',
          level: '3',
          email: '877347136@qq.com',
          status: '有效'
        },
         {
          userId: '1',
          userAccount: '王小虎',
          point: '234',
          level: '3',
          email: '877347136@qq.com',
          status: '有效'
        },
         {
          userId: '1',
          userAccount: '王小虎',
          point: '234',
          level: '3',
          email: '877347136@qq.com',
          status: '有效'
        },
        ]
    }
  },
  methods: {
    addUser(){
      this.$refs.adduser.open();
    },
    headerColor(){
      var obj = {
        background: '#f1f1f1',
        color:'#666',
      };
      return obj;
    }
  }
}
</script>

<style  lang="scss">
.member_list {
  min-width: 1200px;
  .content {
    padding: 15px;
    background-color: #fff;
  }
  .search {
    position: relative;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  .table {
    margin-top: 10px;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
  }
  .page {
    text-align: right;
    margin-top: 20px;
    margin-right: 30px;
  }
}
.search {
  .el-input {
    width: 200px;
    margin-left: 40px;
  }
  .el-button:nth-child(1),
  .el-button:nth-child(2),
  .el-button:nth-child(3)
  {
    padding: 7px 3px;
  }
  .el-button:last-child {
    float: right;
    margin-right: 50px;
  }
}



</style>