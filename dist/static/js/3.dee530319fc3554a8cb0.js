webpackJsonp([3],{CArg:function(t,e){},hgl4:function(t,e){},nx1A:function(t,e){},tzLl:function(t,e){},wqTG:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{framShow:!0,positionX:0,positionY:0,show:!1,min:!0,showMenu:!0}},methods:{adminInfo:function(t){"a"==t&&(this.$store.commit("setPath","/admin_info"),this.$store.commit("setTitle","个人信息"),this.$emit("open"),this.$router.push("/admin_info"))},setCollapse:function(){this.showMenu=!this.showMenu,this.$store.commit("setCollapse")},tshow:function(){this.show=!0,this.min=!0},closeGateOne:function(){this.show=!1},move:function(t){var e=this;this.framShow=!1;var n=this;onselectstart="return false",onselect="return false";var i=t.target,s=t.clientX-i.offsetLeft,o=t.clientY-i.offsetTop;document.onmousemove=function(t){document.onselectstart=function(){return!1},document.ondragstart=function(){return!1};var a=t.clientX-s,l=t.clientY-o;e.positionX=l,e.positionY=a,l<0&&(l=0),a<0&&(a=0),l+n.$refs.gateone.offsetHeight>document.documentElement.clientHeight&&(l=document.documentElement.clientHeight-n.$refs.gateone.offsetHeight),a+n.$refs.gateone.offsetWidth>document.body.clientWidth&&(a=document.body.clientWidth-n.$refs.gateone.offsetWidth),i.style.left=a+"px",i.style.top=l+"px"},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}},moveout:function(){this.framShow=!0},minGateOne:function(){this.min=!1},maxGateOne:function(){this.min=!0}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("p",[t._v("S.T Album")]),t._v(" "),n("i",{staticClass:"iconfont ctrlzhedie",class:{"icon-collapse":!t.showMenu},on:{click:t.setCollapse}}),t._v(" "),n("div",{staticClass:"person"},[n("i",{staticClass:"el-icon-menu gateoneIcon",on:{click:t.tshow}}),t._v(" "),n("el-dropdown",{on:{command:t.adminInfo}},[n("span",{staticClass:"el-dropdown-link"},[t._v("\n                admin\n                "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{staticClass:"item",attrs:{command:"a"}},[t._v("个人信息")]),t._v(" "),n("el-dropdown-item",{staticClass:"item",attrs:{command:"b"}},[t._v("退出登录")])],1)],1)],1),t._v(" "),t.show?n("div",{directives:[{name:"show",rawName:"v-show",value:t.min,expression:"min"}],ref:"gateone",staticClass:"gateone",on:{mousedown:t.move,mouseup:t.moveout}},[n("i",{staticClass:"el-icon-minus",staticStyle:{"font-size":"20px","font-weight":"bold",right:"40px",top:"5px",cursor:"pointer",position:"absolute","border-radius":"50%","background-color":"pink"},on:{click:t.minGateOne}}),t._v(" "),n("i",{staticClass:"el-icon-close",staticStyle:{"font-size":"20px","font-weight":"bold",right:"10px",top:"5px",cursor:"pointer",position:"absolute","border-radius":"50%","background-color":"pink"},on:{click:t.closeGateOne}}),t._v(" "),n("iframe",{directives:[{name:"show",rawName:"v-show",value:t.framShow,expression:"framShow"}],staticStyle:{border:"none","margin-top":"30px"},attrs:{src:"http://47.106.199.167:9800/",width:"100%",height:"94%",scrolling:"no"}})]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.min,expression:"!min"}],staticClass:"mini-gate",on:{click:t.maxGateOne}},[n("i",{staticClass:"el-icon-set-up",staticStyle:{position:"absolute",top:"6px",left:"4px","font-size":"18px",color:"#fff"}}),t._v(" "),n("i",{staticClass:"el-icon-success",staticStyle:{color:"#6fce7f",position:"absolute",top:"9px",left:"28px"}}),t._v(" "),n("span",{staticStyle:{position:"absolute",top:"-8px",left:"46px",color:"#fff"}},[t._v("SSH")])])])},staticRenderFns:[]};var o={data:function(){return{menuList:[{title:"会员管理",index:"1",icon:"iconfont ctrlhuiyuan",children:[{title:"数据统计",index:"1-1",path:"/data_statistics"},{title:"会员列表",index:"1-2",path:"/member_list"},{title:"等级管理",index:"1-3",path:"/level"}]},{title:"系统管理",index:"2",icon:"iconfont ctrlxitongguanli",children:[{title:"系统日志",index:"2-1",path:"/sys_log"},{title:"菜单管理",index:"2-2",path:"/menu_manage"}]},{title:"微服务管理",index:"3",icon:"iconfont ctrlxitongguanli",children:[{title:"服务监控",index:"3-1",path:"/service"},{title:"链路追踪",index:"3-2",path:"/link"}]}]}},computed:{isCollapse:function(){return this.$store.state.isCollapse}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},open:function(t,e){this.$store.commit("setPath",t),this.$store.commit("setTitle",e),this.$emit("open"),this.$router.push(t)}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side_bar"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":this.$route.path,collapse:t.isCollapse,"collapse-transition":!1,"unique-opened":"","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},[t._l(t.menuList,function(e,i){return[n("el-submenu",{key:i,attrs:{index:e.index}},[n("template",{slot:"title"},[n("i",{class:e.icon}),t._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.children,function(e,i){return[n("el-menu-item",{key:i,attrs:{index:e.path},on:{click:function(n){return t.open(e.path,e.title)}}},[n("i",{staticClass:"el-icon-arrow-right"}),t._v("\n                        "+t._s(e.title)+"\n                    ")])]})],2)]})],2)],1)},staticRenderFns:[]};var l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabs"},[n("el-tabs",{on:{"tab-remove":t.removeTab,"tab-click":t.click_tabs},model:{value:t.editableTabsValue,callback:function(e){t.editableTabsValue=e},expression:"editableTabsValue"}},t._l(t.editableTabs,function(e,i){return n("el-tab-pane",{key:i,attrs:{name:e.name,closable:e.closable}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("i",{class:e.icon}),t._v("\n                "+t._s(e.title)+"\n            ")])])}),1),t._v(" "),n("el-dropdown",{staticClass:"more_btn"},[n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("\n            更多\n            "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(e){return t.closeOthersTabs(e)}}},[t._v("关闭其他")]),t._v(" "),n("el-dropdown-item",{nativeOn:{click:function(e){return t.closeAllTabs(e)}}},[t._v("关闭全部")])],1)],1)],1)},staticRenderFns:[]};var c={components:{Header:n("VU/8")(i,s,!1,function(t){n("hgl4")},"data-v-1db5282a",null).exports,SideBar:n("VU/8")(o,a,!1,function(t){n("CArg")},"data-v-75809cc1",null).exports,Tabs:n("VU/8")({data:function(){return{isFind:-1,path1:"",title1:"",editableTabsValue:"1",editableTabs:[{title:"我的桌面",name:"1",content:"/wel",closable:!1,icon:"iconfont ctrlshouyezhuyezhuomian1000"}],tabIndex:2}},computed:{path:function(){return this.$store.state.path},title:function(){return this.$store.state.title}},watch:{path:function(t){},title:function(t){}},methods:{closeOthersTabs:function(){var t=this;this.editableTabs.map(function(e){e.name!=t.editableTabsValue&&1!=e.name&&t.removeTab(e.name)})},closeAllTabs:function(){var t=this;this.editableTabs.map(function(e){1!=e.name&&t.removeTab(e.name)})},click_tabs:function(t){var e=this;this.editableTabs.map(function(n){n.name==t.name&&e.$router.push(n.content)})},removeTab:function(t){var e=this,n=this.editableTabs,i=this.editableTabsValue;i===t&&n.forEach(function(s,o){if(s.name===t){var a=n[o+1]||n[o-1];e.$router.push(a.content),a&&(i=a.name)}}),this.editableTabsValue=i,this.editableTabs=n.filter(function(e){return e.name!==t})},checkList:function(){var t=this;this.editableTabs.map(function(e){t.title==e.title&&(t.isFind=0,t.editableTabsValue=e.name)}),-1==this.isFind?this.addTab():this.isFind=-1},addTab:function(t){var e=++this.tabIndex+"";this.editableTabs.push({title:this.title,name:e,content:this.path,closable:!0,icon:""}),this.editableTabsValue=e}}},l,!1,function(t){n("nx1A")},null,null).exports},data:function(){return{}},created:function(){this.$router.push("/wel")},methods:{open:function(){this.$refs.brother.checkList()}},computed:{isCollapse:function(){return this.$store.state.isCollapse}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("div",{staticClass:"header"},[e("Header",{on:{open:this.open}})],1),this._v(" "),e("div",{staticClass:"center",class:{"center-collapse":this.isCollapse}},[e("div",{staticClass:"left_nav"},[e("SideBar",{on:{open:this.open}})],1),this._v(" "),e("div",{staticClass:"right-content"},[e("div",{staticClass:"tabstop"},[e("Tabs",{ref:"brother"})],1),this._v(" "),e("el-scrollbar",{attrs:{id:"scroll"}},[e("router-view",{staticClass:"router"})],1)],1)])])},staticRenderFns:[]};var u=n("VU/8")(c,r,!1,function(t){n("tzLl")},null,null);e.default=u.exports}});