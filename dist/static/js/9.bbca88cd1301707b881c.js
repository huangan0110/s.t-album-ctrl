webpackJsonp([9],{oKEt:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("UMo0"),s={data:function(){return{yData:[820,932,901,934,1290,1330,1320],viewsCheck:1,userCheck:1,downloadCheck:1,viewsData:[],vipData:[{value:0,name:"Lv.1"},{value:0,name:"Lv.2"},{value:0,name:"Lv.3"},{value:0,name:"Lv.4"},{value:0,name:"Lv.5"},{value:0,name:"Lv.6"},{value:0,name:"Lv.7"},{value:0,name:"Lv.8"},{value:0,name:"Lv.9"}]}},created:function(){},mounted:function(){for(var t=this,a=[],e=-6;e<1;e++)a.push(this.getDay(e));var s=[],n=[];Object(i.j)("1","2").then(function(a){for(var e=1;e<a.data.object.length;e++)s.push(a.data.object[e].number),n.push(a.data.object[e].time.slice(5,11));t.drawLine("test1","line","访问量",s,n)});var c=[],r=[];Object(i.i)("1","2").then(function(a){for(var e=1;e<a.data.object.length;e++)c.push(a.data.object[e].number),r.push(a.data.object[e].time.slice(5,11));t.drawLine("test2","line","新增用户量",c,r)}),Object(i.k)().then(function(a){for(var e=0;e<a.data.object.length;e++)switch(a.data.object[e].title){case"Vip1":t.vipData[0].value=a.data.object[e].number;break;case"Vip2":t.vipData[1].value=a.data.object[e].number;break;case"Vip3":t.vipData[2].value=a.data.object[e].number;break;case"Vip4":t.vipData[3].value=a.data.object[e].number;break;case"Vip5":t.vipData[4].value=a.data.object[e].number;break;case"Vip6":t.vipData[5].value=a.data.object[e].number;break;case"Vip7":t.vipData[6].value=a.data.object[e].number;break;case"Vip8":t.vipData[7].value=a.data.object[e].number;break;case"Vip9":t.vipData[8].value=a.data.object[e].number}t.drawCircle("test4")}),this.drawLine("test3","line","下载量",this.yData,a)},methods:{switchYM:function(){var t=this,a="1",e="2";1==this.viewsCheck?(a="1",e="2"):(a="2",e="7");var s=[],n=[];Object(i.j)(a,e).then(function(a){for(var e=1;e<a.data.object.length;e++)s.push(a.data.object[e].number),n.push(a.data.object[e].time);t.drawLine("test1","line","访问量",s,n)})},switchUser:function(){var t=this,a="1",e="2";1==this.usersCheck?(a="1",e="2"):(a="2",e="7");var s=[],n=[];Object(i.i)(a,e).then(function(a){for(var e=1;e<a.data.object.length;e++)s.push(a.data.object[e].number),n.push(a.data.object[e].time);t.drawLine("test2","line","访问量",s,n)})},getDay:function(t){var a=new Date,e=a.getTime()+864e5*t;a.setTime(e);var i=a.getMonth(),s=a.getDate();return(i=this.doHandleMonth(i+1))+"."+(s=this.doHandleMonth(s))},doHandleMonth:function(t){var a=t;return 1==t.toString().length&&(a="0"+t),a},drawLine:function(t,a,e,i,s){this.$echarts.init(document.getElementById(t)).setOption({title:{text:this.title},tooltip:{trigger:"axis"},xAxis:{data:s},grid:{left:"5%",right:"5%",top:"10%",bottom:"6%",containLabel:!0},yAxis:{},series:[{barWidth:20,name:e,type:a,data:i}]})},drawCircle:function(t){this.$echarts.init(document.getElementById(t)).setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{top:40,orient:"vertical",left:100,data:["Lv.1","Lv.2","Lv.3","Lv.4","Lv.5","Lv.6","Lv.7","Lv.8","Lv.9"]},series:[{name:"用户数量",type:"pie",radius:"55%",center:["60%","50%"],data:this.vipData}]})}}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"data_account clearfix"},[e("div",{staticClass:"card clearfix"},[e("div",{staticClass:"click_volume clearfix"},[e("div",{staticClass:"header"},[e("span",{staticClass:"iconfont ctrlicon",staticStyle:{"font-weight":"600"},attrs:{id:"icon"}}),t._v(" "),e("span",{attrs:{id:"number"}},[t._v("访问量")]),t._v(" "),e("div",{staticClass:"check"},[e("el-radio-group",{attrs:{size:"mini"},on:{change:function(a){return t.switchYM()}},model:{value:t.viewsCheck,callback:function(a){t.viewsCheck=a},expression:"viewsCheck"}},[e("el-radio-button",{attrs:{label:"1"}},[t._v("周")]),t._v(" "),e("el-radio-button",{attrs:{label:"2"}},[t._v("月")])],1)],1)]),t._v(" "),e("div",{staticClass:"click_echarts",attrs:{id:"test1"}})]),t._v(" "),e("div",{staticClass:"click_volume"},[e("div",{staticClass:"header"},[e("span",{staticClass:"iconfont ctrluser-plus",attrs:{id:"icon"}}),t._v(" "),e("span",{attrs:{id:"number"}},[t._v("新增用户量")]),t._v(" "),e("div",{staticClass:"check"},[e("el-radio-group",{attrs:{size:"mini"},on:{change:function(a){return t.switchUser()}},model:{value:t.userCheck,callback:function(a){t.userCheck=a},expression:"userCheck"}},[e("el-radio-button",{attrs:{label:"1"}},[t._v("周")]),t._v(" "),e("el-radio-button",{attrs:{label:"2"}},[t._v("月")])],1)],1)]),t._v(" "),e("div",{staticClass:"click_echarts",attrs:{id:"test2"}})]),t._v(" "),e("div",{staticClass:"click_volume"},[e("div",{staticClass:"header"},[e("span",{staticClass:"iconfont ctrlxiazai3",attrs:{id:"icon"}}),t._v(" "),e("span",{attrs:{id:"number"}},[t._v("下载量")]),t._v(" "),e("div",{staticClass:"check"},[e("el-radio-group",{attrs:{size:"mini"},model:{value:t.downloadCheck,callback:function(a){t.downloadCheck=a},expression:"downloadCheck"}},[e("el-radio-button",{attrs:{label:"1"}},[t._v("周")]),t._v(" "),e("el-radio-button",{attrs:{label:"2"}},[t._v("月")])],1)],1)]),t._v(" "),e("div",{staticClass:"click_echarts",attrs:{id:"test3"}})]),t._v(" "),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"click_volume"},[a("div",{staticClass:"header"},[a("span",{staticClass:"iconfont ctrldengji1",attrs:{id:"icon"}}),this._v(" "),a("span",{attrs:{id:"number"}},[this._v("会员等级分布")])]),this._v(" "),a("div",{staticClass:"click_echarts",attrs:{id:"test4"}})])}]};var c=e("VU/8")(s,n,!1,function(t){e("wEsH")},"data-v-5a6f7804",null);a.default=c.exports},wEsH:function(t,a){}});