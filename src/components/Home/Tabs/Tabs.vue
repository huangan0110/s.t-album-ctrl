<template>
  <div class="tabs">
      <el-tabs v-model="editableTabsValue"  @tab-remove="removeTab"  @tab-click="click_tabs">
        <el-tab-pane
        v-for="(item,index) in editableTabs"
        :key="index"
        
        :name="item.name"
        :closable="item.closable"
        >
        <span slot="label"><i :class="item.icon"></i> {{item.title}}</span>
        </el-tab-pane>
      </el-tabs>
      <el-dropdown class="more_btn">
        <el-button type="primary" size="mini">
        更多
        <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="closeOthersTabs">关闭其他</el-dropdown-item>
        <el-dropdown-item @click.native="closeAllTabs">关闭全部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isFind:-1,
            path1:'',
            title1:'',
            editableTabsValue: '1',
            editableTabs: [
                {
                    title:'我的桌面',
                    name:'1',
                    content:'/wel',
                    closable:false,
                    icon:'el-icon-s-tools'
                }
            ],
            tabIndex: 2
            }
    },
    computed: {
      path(){
        return this.$store.state.path;
      },
      title(){
        return this.$store.state.title;
      }
    },
    watch: {
        path(path){
            
        },
        title(title){
            
        }
    },
    methods: {
        closeOthersTabs(){
            this.editableTabs.map((index)=>{
            if(index.name!=this.editableTabsValue&&index.name!=1){
              this.removeTab(index.name)
            }
        })
        },
        closeAllTabs(){
            this.editableTabs.map((index)=>{
                if(index.name!=1){
                this.removeTab(index.name)
                }
            })
        },
        click_tabs(item) {
            this.editableTabs.map((index)=>{
              if(index.name==item.name){
                this.$router.push(index.content)
              }
            })
        },
        removeTab(targetName) {
            let tabs = this.editableTabs;
            let activeName = this.editableTabsValue;
            if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                this.$router.push(nextTab.content)
                if (nextTab) {
                    activeName = nextTab.name;
                }
                }
            });
            }
            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
            
        },
        checkList(){
            this.editableTabs.map((index)=>{
                if(this.title==index.title){
                    this.isFind=0;
                    this.editableTabsValue=index.name;
                }
            })
            if(this.isFind==-1){
                this.addTab();
            }else{
                this.isFind = -1;
            }
        },
        addTab(targetName) {
            let newTabName = ++this.tabIndex + '';
            this.editableTabs.push({
            title: this.title,
            name: newTabName,
            content: this.path,
            closable:true,
            icon:''
            });
            this.editableTabsValue = newTabName;
        },
    }
}
</script>

<style >
.tabs .el-tabs__nav-wrap::after {
    background-color: #f1f1f1;
    height: 0;
}
.tabs .el-tabs__header {
    padding-left: 20px;
    margin-bottom: 0px;
}
.tabs .el-tabs {
    margin-right: 340px;
}
.tabs {
    min-width: 1200px;
    height: 40px;
    overflow: hidden;
    /* box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1); */
   
}
 .tabs .more_btn {
    position: absolute;
    right: 40px;
    top: 5px;
    z-index: 999;
} 
</style>