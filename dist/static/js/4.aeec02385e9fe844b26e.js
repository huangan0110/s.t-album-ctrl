webpackJsonp([4],{OLFm:function(e,t){},"fE+c":function(e,t){},qUdB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("mvHQ"),s=a.n(i),l=a("UMo0"),o={props:{LData:Array},data:function(){return{dialogVisible:!1,email:"",userAccount:"",passwd:"",spasswd:"",levelData:[]}},methods:{open:function(){this.levelData=JSON.parse(s()(this.LData)),this.dialogVisible=!0},reset:function(){this.levelData=JSON.parse(s()(this.LData))},submit:function(){console.log(this.levelData)},handleClose:function(){this.levelData=JSON.parse(s()(this.LData)),this.dialogVisible=!1}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"editlevel"},[a("el-dialog",{attrs:{title:"等级特权",visible:e.dialogVisible,width:"32%","before-close":e.handleClose,"modal-append-to-body":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"centent"},[a("table",[a("tr",[a("th",[e._v("等级")]),e._v(" "),a("th",[e._v("积分")]),e._v(" "),a("th",[e._v("相册数")]),e._v(" "),a("th",[e._v("相片数")])]),e._v(" "),e._l(e.levelData,function(t,i){return a("tr",{key:i},[a("td",[a("span",{staticClass:"red"},[e._v("Lv"+e._s(t.level))])]),e._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.point,expression:"row.point"}],attrs:{type:"number"},domProps:{value:t.point},on:{input:function(a){a.target.composing||e.$set(t,"point",a.target.value)}}})]),e._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.albumNum,expression:"row.albumNum"}],attrs:{type:"number"},domProps:{value:t.albumNum},on:{input:function(a){a.target.composing||e.$set(t,"albumNum",a.target.value)}}})]),e._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.photoNum,expression:"row.photoNum"}],attrs:{type:"number"},domProps:{value:t.photoNum},on:{input:function(a){a.target.composing||e.$set(t,"photoNum",a.target.value)}}})])])})],2)]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:e.reset}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("提交")])],1)])],1)},staticRenderFns:[]};var u={components:{EditLevel:a("VU/8")(o,n,!1,function(e){a("fE+c")},null,null).exports},data:function(){return{levelData:[{level:1,point:100,albumNum:4,photoNum:100},{level:2,point:200,albumNum:6,photoNum:200},{level:3,point:300,albumNum:8,photoNum:300},{level:4,point:400,albumNum:10,photoNum:400},{level:5,point:500,albumNum:12,photoNum:500},{level:6,point:600,albumNum:14,photoNum:600},{level:7,point:700,albumNum:16,photoNum:700},{level:8,point:800,albumNum:18,photoNum:800},{level:9,point:900,albumNum:"无上限",photoNum:"无上限"}],dialogVisible:!1,defaulExpanded:[],menuData:[],menuProp:{label:"name"},selectNode:[],defaulCheck:[],selectId:""}},mounted:function(){},methods:{select:function(e){var t=this;this.selectNode=[],this.selectId=e,this.defaulCheck=[],Object(l.f)(e).then(function(e){t.defaulCheck=e.data.object})},editLevel:function(){this.$refs.editLevel.open(this.levelData)},Authorize:function(){var e=this;this.dialogVisible=!0,Object(l.g)().then(function(t){for(var a in e.menuData=t.data.object,e.menuData)e.defaulExpanded.push(e.menuData[a].id);e.$emit("func",t.data.object[0])})},handleCheckChange:function(){},handleClose:function(){this.dialogVisible=!1},submit:function(){var e=this;this.selectNode=[];var t=this.$refs.tree.getCheckedNodes();for(var a in t)this.selectNode.push(t[a].id);Object(l.n)(this.selectNode,this.selectId).then(function(t){t.data.success?e.$message({message:"修改成功",type:"success"}):e.$message.error("修改失败"),e.dialogVisible=!1})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"level"},[a("div",{staticClass:"header"},[a("span",[e._v("等级特权")]),e._v(" "),a("el-button",{staticClass:"edit1",attrs:{type:"info",size:"mini"},on:{click:e.Authorize}},[e._v("授权")]),e._v("\n          \n        "),a("el-button",{staticClass:"edit",attrs:{type:"info",size:"mini"},on:{click:e.editLevel}},[e._v("修改")])],1),e._v(" "),e._m(0),e._v(" "),e._l(e.levelData,function(t,i){return a("div",{key:i,staticClass:"table",class:{tbBg:i+1==e.selectId},on:{click:function(t){return e.select(i+1)}}},[a("span",[e._v("Lv."+e._s(t.level))]),e._v(" "),a("span",[e._v(e._s(t.point))]),e._v(" "),a("span",[e._v(e._s(t.photoNum)+"张相片免费容量 · 相册上限"+e._s(t.albumNum))])])}),e._v(" "),a("EditLevel",{ref:"editLevel",attrs:{LData:e.levelData}}),e._v(" "),a("el-dialog",{attrs:{title:"等级特权",visible:e.dialogVisible,width:"32%","before-close":e.handleClose,"modal-append-to-body":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"centent"},[a("el-tree",{ref:"tree",attrs:{data:e.menuData,"default-expanded-keys":e.defaulExpanded,"default-checked-keys":e.defaulCheck,"check-strictly":"","node-key":"id","show-checkbox":"",props:e.menuProp},on:{"check-change":e.handleCheckChange}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")])],1)])],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"table_header"},[t("span",[this._v("等级")]),this._v(" "),t("span",[this._v("所需积分")]),this._v(" "),t("span",[this._v("特权")])])}]};var r=a("VU/8")(u,c,!1,function(e){a("OLFm")},"data-v-52045a5c",null);t.default=r.exports}});