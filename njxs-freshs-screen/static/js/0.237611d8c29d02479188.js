webpackJsonp([0],{"9BpL":function(e,t){},"9bBU":function(e,t,a){a("mClu");var i=a("FeBl").Object;e.exports=function(e,t,a){return i.defineProperty(e,t,a)}},BRWC:function(e,t){},C4MV:function(e,t,a){e.exports={default:a("9bBU"),__esModule:!0}},CEzr:function(e,t){},J3Nl:function(e,t){},Vv0P:function(e,t){},bOdI:function(e,t,a){"use strict";t.__esModule=!0;var i,n=a("C4MV"),s=(i=n)&&i.__esModule?i:{default:i};t.default=function(e,t,a){return t in e?(0,s.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},fxJJ:function(e,t){},"i/Pf":function(e,t){},mClu:function(e,t,a){var i=a("kM2E");i(i.S+i.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})},sG21:function(e,t){},uUni:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={props:["timeRange"],watch:{timeRange:function(e){this.initdata()}},data:function(){return{contentstyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px",paddingLeft:"2%",paddingRight:"2%"},sideleftpad:Math.ceil(30*this.baseScreenRate)+"px",textDate:[],timeDate:[],valDate:[],valDate1:[],valDate2:[]}},mounted:function(){this.initdata()},methods:{initdata:function(){var e=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/situation/"+this.timeRange).then(function(t){e.timeRan="sdf";var a=t.data.data;a.map(function(t){e.textDate.push(t.name)}),a[0].singleList.map(function(t){e.timeDate.push(t.date),e.valDate.push(t.value.toFixed(2))}),a[1].singleList.map(function(t){e.valDate1.push(t.value.toFixed(2))}),a[2].singleList.map(function(t){e.valDate2.push(t.value.toFixed(2))});var i=e.$echarts.init(document.getElementById("main")),n={color:["rgba(192,87,96,1)","rgba(186,126,182,1)","rgba(105,98,164,1)"],title:{text:"经营概况",textStyle:{fontWeight:"normal",color:"#75becb",fontSize:Math.ceil(22*e.baseScreenRate)}},tooltip:{trigger:"axis"},legend:{data:e.textDate,textStyle:{color:"#fff"},left:"right",icon:"circle"},xAxis:[{type:"category",boundaryGap:!1,data:e.timeDate,splitLine:{lineStyle:{color:["#21202E"]}},nameTextStyle:{color:["#21202E"]},axisLine:{lineStyle:{color:"#75becb"}}}],yAxis:[{type:"value",splitLine:{lineStyle:{color:["#21202E"]}},nameTextStyle:{color:["#21202E"]},axisLine:{lineStyle:{color:"#75becb"}}}],grid:{left:"2%",right:"6%",bottom:"3%",containLabel:!0},series:[{name:"销售收入",type:"line",symbol:"circle",smooth:!0,smoothMonotone:"none",data:e.valDate,areaStyle:{opacity:.4},label:{show:!0,position:"top",color:"#fff"},itemStyle:{normal:{color:"rgba(61, 122, 153, 0.7)"}},lineStyle:{normal:{color:"rgba(61, 122, 153, 1)"}}},{name:"毛利",type:"line",symbol:"circle",smooth:!0,data:e.valDate1,areaStyle:{opacity:.4},label:{show:!0,position:"top",color:"#fff"},itemStyle:{normal:{color:"rgba(221, 108, 81, 0.7)"}},lineStyle:{normal:{color:"rgba(221, 108, 81, 1)"}}},{name:"采购成本",type:"line",symbol:"circle",smooth:!0,data:e.valDate2,areaStyle:{opacity:.4},label:{show:!0,position:"top",color:"#fff"},itemStyle:{normal:{color:"rgba(112, 106, 175, 0.7)"}},lineStyle:{normal:{color:"rgba(112, 106, 175, 1)"}}}]};i.setOption(n)}).catch(function(e){console.log("请求失败")})}}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content",style:this.contentstyle},[t("div",{attrs:{id:"main"}})])},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(e){a("J3Nl")},"data-v-7bf367e4",null).exports,r={data:function(){return{dateValue:[],textValue:[],dateValue1:[],textValue1:[],topValue:[],textValue2:[],topValue1:[],topValuex:[],topValuex1:[],topValuey:[],topValuey1:[],contentTitle:{fontSize:Math.ceil(18*this.baseScreenRate)+"px",color:"#537F8C"},contentText:{fontSize:Math.ceil(18*this.baseScreenRate)+"px",color:"#fff"},lineNum:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",color:"#fff"},mainstyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px",paddingLeft:"2%",paddingRight:"2%"},onlineorder:"",underlineorder:"",onlineordervalue:0,underlineordervalue:0,onlinecustomer:"",underlinecustomer:"",onlinecustomervalue:0,underlinecustomervalue:0,onlineuser:"",underlineuser:"",onlineuservalue:0,underlineuservalue:0}},mounted:function(){var e=this,t=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/kpi/WEEK").then(function(a){t.onlineorder=a.data.data[0].onLineRate,t.underlineorder=a.data.data[0].underLineRate,t.onlineordervalue=a.data.data[0].onLineValue,t.underlineordervalue=a.data.data[0].underLineValue,t.onlinecustomer=a.data.data[1].onLineRate,t.underlinecustomer=a.data.data[1].underLineRate,t.onlinecustomervalue=a.data.data[1].onLineValue,t.underlinecustomervalue=a.data.data[1].underLineValue,t.onlineuser=a.data.data[2].onLineRate+"%",t.underlineuser=a.data.data[2].underLineRate+"%",t.onlineuservalue=a.data.data[2].onLineValue,t.underlineuservalue=a.data.data[2].underLineValue,a.data.data[0].singleList.map(function(t){e.textValue.push(t)}),a.data.data[1].singleList.map(function(t){e.textValue1.push(t)}),a.data.data[2].singleList.map(function(t){e.textValue2.push(t)}),e.textValue2=e.textValue2.concat([{name:"无",onLineValue:"无",underLineValue:"无"},{name:"无",onLineValue:"无",underLineValue:"无"}]);var i=e.$echarts.init(document.getElementById("main1")),n={title:{text:"关键指标",textStyle:{fontWeight:"normal",color:"#75becb",fontSize:Math.ceil(22*e.baseScreenRate)}},opcity:.4,color:["rgba(255, 114, 153, 0.7)","rgba(255, 186, 78, 0.7)"],legend:{orient:"vertical",left:"40%",top:"45%",itemWidth:5,itemHeight:5,textStyle:{color:"#fff",fontSize:Math.ceil(18*e.baseScreenRate)}},series:[{type:"pie",center:["20%","60%"],radius:["45%","55%"],label:{position:"center",color:"#fff"},hoverAnimation:!1,data:[{label:{formatter:"订单量",padding:[10,0,0,0],textStyle:{fontSize:Math.ceil(18*e.baseScreenRate)}},value:t.onlineordervalue,name:"线上"+t.onlineorder},{label:{show:!1},value:t.underlineordervalue,name:"线下"+t.underlineorder}]}]};i.setOption(n);var s=e.$echarts.init(document.getElementById("main2")),r={color:["rgba(244, 54, 255, 0.7)","rgba(255, 143, 216, 0.7)"],legend:{orient:"vertical",left:"40%",top:"45%",itemWidth:5,itemHeight:5,textStyle:{color:"#fff",fontSize:Math.ceil(18*e.baseScreenRate)}},series:[{type:"pie",center:["20%","60%"],radius:["55%","45%"],label:{position:"center",color:"#fff"},hoverAnimation:!1,data:[{label:{formatter:"客单价",padding:[10,0,0,0],textStyle:{fontSize:Math.ceil(18*e.baseScreenRate)}},value:t.onlinecustomervalue,name:"线上"+t.onlinecustomer},{label:{show:!1},value:t.underlinecustomervalue,name:"线下"+t.underlinecustomer}]}]};s.setOption(r);var o=e.$echarts.init(document.getElementById("main3")),l={color:["rgba(74, 163, 112, 0.7)","rgba(183, 201, 175, 0.7)"],legend:{orient:"vertical",left:"40%",top:"45%",itemWidth:5,itemHeight:5,textStyle:{color:"#fff",fontSize:Math.ceil(18*e.baseScreenRate)}},series:[{type:"pie",center:["20%","60%"],radius:["45%","55%"],label:{position:"center",color:"#fff"},hoverAnimation:!1,data:[{label:{formatter:"用户数",padding:[10,0,0,0],textStyle:{fontSize:Math.ceil(18*e.baseScreenRate)}},value:t.onlineuservalue,name:"线上"+t.onlineuser},{label:{show:!1},value:t.underlineuservalue,name:"线下"+t.underlineuser}]}]};o.setOption(l)}).catch(function(e){console.log("请求失败")})},methods:{rowClass:function(e,t){return"backcol"}},watch:{}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"main",style:e.mainstyle},[a("div",{staticClass:"textd1"},[a("div",{staticStyle:{width:"100%",height:"40%"},style:e.lineNum,attrs:{id:"main1"}}),e._v(" "),a("div",{staticClass:"table-data"},[a("table",{attrs:{rules:"rows"}},[a("tr",{staticClass:"trs",style:e.contentTitle},[a("td",[e._v(" ")]),a("td",[e._v("线上")]),a("td",[e._v("线下")])]),e._v(" "),e._l(e.textValue,function(t,i){return a("tr",{key:i,style:e.contentText},[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.onLineValue))]),e._v(" "),a("td",[e._v(e._s(t.underLineValue))])])})],2)])]),e._v(" "),a("div",{staticClass:"textd2"},[a("div",{staticStyle:{width:"100%",height:"40%"},style:e.lineNum,attrs:{id:"main2"}}),e._v(" "),a("div",{staticClass:"table-data"},[a("table",{attrs:{rules:"rows"}},[a("tr",{staticClass:"trs",style:e.contentTitle},[a("td",[e._v(" ")]),a("td",[e._v("线上")]),a("td",[e._v("线下")])]),e._v(" "),e._l(e.textValue1,function(t,i){return a("tr",{key:i,style:e.contentText},[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.onLineValue))]),e._v(" "),a("td",[e._v(e._s(t.underLineValue))])])})],2)])]),e._v(" "),a("div",{staticClass:"textd3"},[a("div",{staticStyle:{width:"100%",height:"40%"},style:e.lineNum,attrs:{id:"main3"}}),e._v(" "),a("div",{staticClass:"table-data"},[a("table",{attrs:{rules:"rows"}},[a("tr",{staticClass:"trs",style:e.contentTitle},[a("td",[e._v(" ")]),a("td",[e._v("线上")]),a("td",[e._v("线下")])]),e._v(" "),e._l(e.textValue2,function(t,i){return a("tr",{key:i,style:e.contentText},[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.onLineValue))]),e._v(" "),a("td",[e._v(e._s(t.underLineValue))])])})],2)])])])])},staticRenderFns:[]};var l=a("VU/8")(r,o,!1,function(e){a("sG21")},"data-v-2bb2feaa",null).exports,c={props:["timeRange"],watch:{timeRange:function(e){"QUARTER"==e?this.enable=!1:(this.value="0",this.enable=!0),this.initdata()}},data:function(){return{enable:"QUARTER"!=this.timeRange,headstyle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",paddingRight:Math.ceil(20*this.baseScreenRate)+"px",marginBottom:Math.ceil(10*this.baseScreenRate)+"px"},headtitle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",fontWeight:"normal"},pagestyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px"},names:[{value:"1 ",label:"同比"},{value:"0",label:"环比"}],value:"0",timeDate:[],amountDate:[],amountDate1:[],textData:"WEEK",numDate:0}},mounted:function(){this.initdata()},methods:{initdata:function(){var e=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operationData/saleRate/data/"+this.timeRange+"/"+this.value).then(function(t){e.timeDate=[],e.amountDate=[],e.amountDate1=[],t.data.data.dataCurrentWeek.map(function(t){e.timeDate.push(t.time),e.amountDate.push(t.amount)}),t.data.data.dataPreWeek.map(function(t){e.amountDate1.push(t.amount)}),e.initbar()}).catch(function(e){console.log("请求失败")})},initbar:function(e){var t=document.getElementById("saldata");this.$echarts.dispose(t);var a=this.$echarts.init(t),i={tooltip:{trigger:"axis"},xAxis:[{type:"category",data:this.timeDate,splitLine:{lineStyle:{color:["#21202E"]}},nameTextStyle:{color:["#21202E"]},axisLine:{lineStyle:{color:"#75becb"}}}],yAxis:[{type:"value",splitLine:{lineStyle:{color:["#21202E"]}},nameTextStyle:{color:["#21202E"]},axisLine:{lineStyle:{color:"#75becb"}}}],grid:{top:"4%",left:"2%",right:"4%",bottom:"3%",containLabel:!0},series:[{name:"当前数据",type:"bar",data:this.amountDate,barWidth:12,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FECC44"},{offset:1,color:"#EC6783"}])}}},{name:"比较数据",type:"bar",data:this.amountDate1,barWidth:12,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5EFCF6"},{offset:1,color:"#5D27A0"}])}}}]};a.setOption(i)}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content",style:e.pagestyle},[a("div",{staticClass:"head",style:e.headstyle},[a("h4",{style:e.headtitle},[e._v("销售同环化")]),e._v(" "),a("el-select",{staticClass:"namechange",attrs:{disabled:e.enable,size:"mini",name:"namechange"},on:{change:function(t){e.initdata(e.value)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.names,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("div",{attrs:{id:"saldata"}})])},staticRenderFns:[]};var u=a("VU/8")(c,d,!1,function(e){a("Vv0P"),a("CEzr")},"data-v-0813316c",null).exports,h={data:function(){return{loading:"true",contentleft:{paddingLeft:Math.ceil(67*this.baseScreenRate)+"px"},headtitle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",fontWeight:"normal"},headstyle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",height:Math.ceil(22*this.baseScreenRate)+"px",paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",marginBottom:Math.ceil(10*this.baseScreenRate)+"px"},pagestyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px"},contentTitle:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",color:"#537F8C",paddingBottom:Math.ceil(20*this.baseScreenRate)+"px"},leftContent:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"right"},rightContent:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"center"},sendrate:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"center"},customer:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"center"},contentfirst:{color:"#537F8C",height:Math.ceil(19*this.baseScreenRate)+"px"},contentsecond:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",color:"#537F8C",paddingTop:Math.ceil(45*this.baseScreenRate)+"px"},cententRight:{paddingRight:Math.ceil(50*this.baseScreenRate)+"px"},echartstyle:{width:Math.ceil(77*this.baseScreenRate)+"px",height:Math.ceil(77*this.baseScreenRate)+"px",margin:"0 auto"},formstyle:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",paddingTop:Math.ceil(30*this.baseScreenRate)+"px"},opacitys:0,hidefromfalg:!1,responseDate:{avgEfficiency:"",personEfficiency:"",distributionRate:"",customerRate:""}}},components:{},mounted:function(){this.$nextTick(function(){this.initdata()})},methods:{initdata:function(){var e=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/efficiency").then(function(t){if(e.loading=!1,t.data.data){e.responseDate=t.data.data;var a=[[{value:100,name:""},{value:t.data.data.distributionRate.slice(0,-1),name:"配送及时率"}],[{value:t.data.data.customerRate.slice(0,-1),name:"顾客满意度"},{value:100,name:""}]];e.initleftecharts("main-first",t.data.data.distributionRate,a[0]),e.initleftecharts("main-two",t.data.data.customerRate,a[1])}})},submitefficty:function(){var e=this;this.loading=!0,this.axios.post("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/efficiency",{avgEfficiency:/平/g.test(String(this.responseDate.avgEfficiency))?this.responseDate.avgEfficiency:this.responseDate.avgEfficiency+"/平",personEfficiency:/人/g.test(String(this.responseDate.personEfficiency))?this.responseDate.personEfficiency:this.responseDate.personEfficiency+"/人",distributionRate:/%/g.test(String(this.responseDate.distributionRate))?this.responseDate.distributionRate:this.responseDate.distributionRate+"%",customerRate:/%/g.test(String(this.responseDate.customerRate))?this.responseDate.customerRate:this.responseDate.customerRate+"%"}).then(function(t){"SUCCESS"==t.data.status&&(e.clickdit(),e.initdata())})},clickdit:function(){this.hidefromfalg=!this.hidefromfalg},hoveredit:function(e){this.opacitys=e},initleftecharts:function(e,t,a){var i=this.$echarts.init(document.getElementById(e)),n={grid:{left:0,bottom:0,top:0,right:0},title:{text:t,x:"center",y:"center",textStyle:{fontWeight:"normal",color:"main"==e?"#49CDD9":"#C551A3",fontSize:Math.ceil(16*this.baseScreenRate)}},series:[{color:"main-first"==e?["#4f4f56",new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1C0C99"},{offset:1,color:"#49F9FF"}])]:["#4f4f56",new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#BA51E9"},{offset:1,color:"#E852B0"}])],name:"访问来源",type:"pie",radius:["60%","80%"],avoidLabelOverlap:!1,hoverAnimation:!1,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:a}]};i.setOption(n)}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"efficiency-page",style:e.pagestyle},[a("div",{staticClass:"head",style:e.headstyle},[a("h4",{style:e.headtitle},[e._v("经营效率")]),e._v(" "),a("span",{staticClass:"el-icon-more",staticStyle:{cursor:"pointer"},style:{opacity:e.opacitys},on:{click:function(t){e.clickdit()},mouseover:function(t){e.hoveredit(1)},mouseout:function(t){e.hoveredit(0)}}})]),e._v(" "),a("div",{staticClass:"content-left",style:e.contentleft},[a("div",{style:e.contentTitle},[e._v("线下")]),e._v(" "),a("div",{staticClass:"contentfirst",style:e.contentfirst},[a("span",{style:e.leftContent},[e._v("坪效")]),a("span",{style:e.leftContent},[e._v(e._s(e.responseDate.avgEfficiency))])]),e._v(" "),a("div",{staticClass:"contentsecond",style:e.contentsecond},[a("span",{style:e.leftContent},[e._v("人效")]),a("span",{style:e.leftContent},[e._v(e._s(e.responseDate.personEfficiency))])])]),e._v(" "),a("div",{staticClass:"content-right",style:e.cententRight},[a("div",{style:e.contentTitle},[e._v("线下")]),e._v(" "),a("div",{staticClass:"contentfirst",style:e.contentfirst},[a("span",{style:e.sendrate},[e._v("配送及时率")]),a("span",{style:e.customer},[e._v("客户满意度")])]),e._v(" "),a("div",{staticClass:"contentfirst"},[a("span",[a("div",{style:e.echartstyle,attrs:{id:"main-first"}})]),e._v(" "),a("span",[a("div",{style:e.echartstyle,attrs:{id:"main-two"}})])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hidefromfalg,expression:"hidefromfalg"}],staticClass:"hideform",style:e.formstyle},[a("form",{ref:"forms",attrs:{action:"",novalidate:""}},[a("table",{staticStyle:{color:"#ffffff"},attrs:{border:"1",cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td",[e._v("坪效")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.responseDate.avgEfficiency,expression:"responseDate.avgEfficiency"}],attrs:{name:"avgEfficiency",type:"number"},domProps:{value:e.responseDate.avgEfficiency},on:{input:function(t){t.target.composing||e.$set(e.responseDate,"avgEfficiency",t.target.value)}}})])]),e._v(" "),a("tr",[a("td",[e._v("人效")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.responseDate.personEfficiency,expression:"responseDate.personEfficiency"}],attrs:{name:"personEfficiency",type:"number"},domProps:{value:e.responseDate.personEfficiency},on:{input:function(t){t.target.composing||e.$set(e.responseDate,"personEfficiency",t.target.value)}}})])]),e._v(" "),a("tr",[a("td",[e._v("配送及时率")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.responseDate.distributionRate,expression:"responseDate.distributionRate"}],attrs:{name:"distributionRate",type:"number"},domProps:{value:e.responseDate.distributionRate},on:{input:function(t){t.target.composing||e.$set(e.responseDate,"distributionRate",t.target.value)}}})])]),e._v(" "),a("tr",[a("td",[e._v("客户满意度")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.responseDate.customerRate,expression:"responseDate.customerRate"}],attrs:{name:"customerRate",type:"number"},domProps:{value:e.responseDate.customerRate},on:{input:function(t){t.target.composing||e.$set(e.responseDate,"customerRate",t.target.value)}}})])])]),e._v(" "),a("input",{staticClass:"submit",attrs:{type:"button",readonly:"readonly",value:"确定"},on:{click:function(t){return t.stopPropagation(),e.submitefficty(t)}}})]),e._v(" "),a("span",{staticClass:"closeform el-icon-close",on:{click:function(t){e.clickdit()}}})])])},staticRenderFns:[]};var p=a("VU/8")(h,f,!1,function(e){a("i/Pf")},"data-v-5ad9548c",null).exports,m=a("bOdI"),v=a.n(m),g={data:function(){return{loading:"true",headstyle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",fontWeight:"normal"},pagestyle:{paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",paddingTop:Math.ceil(23*this.baseScreenRate)+"px"},echartstyle:{width:"80%",height:"90%",margin:"0 auto"},formstyle:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",paddingTop:Math.ceil(30*this.baseScreenRate)+"px"},submitefficty:{padding:"1% 2%",fontSize:Math.ceil(18*this.baseScreenRate)+"px"},opacitys:0,hidefromfalg:!1,radardata:{yxis:[],yxislist:[],legnedlist:[],legnedvalue:[],serieslist:[],yxismax:{},legnedlistobj:[],yxisobj:[],rowcolobj:[]},cloneelement:""}},components:{},mounted:function(){this.$nextTick(function(){this.initdata()})},methods:{initdata:function(){var e=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition").then(function(t){if(e.loading=!1,t.data.data){if(0==t.data.data.length)return e.radardata={yxis:["销售额","订单量","支付用户","新增用户"],yxislist:[{text:"销售额",max:1e4},{text:"订单量",max:1e4},{text:"支付用户",max:1e4},{text:"新增用户",max:1e4}],legnedlist:["宁家鲜生","沃尔玛"],legnedvalue:["宁家鲜生"[5e3],"沃尔玛"[7e3]],serieslist:[],yxismax:{"支付用户":1e4,"新增用户":1e4,"订单量":1e4,"销售额":1e4},legnedlistobj:[{title:"宁家鲜生"},{title:"沃尔玛"}],yxisobj:[{title:"销售额"},{title:"订单量"},{title:"支付用户"},{title:"新增用户"}],rowcolobj:[]},void e.initleftecharts("efficienct-radar",e.radardata,a);e.radardata={yxis:[],yxislist:[],legnedlist:[],legnedvalue:{},serieslist:[],yxismax:{},legnedlistobj:[],yxisobj:[],rowcolobj:[]};var a=["rgb(192,87,96)","rgb(186,126,182)","rgb(105,98,164)"];t.data.data.forEach(function(t,a){-1==e.radardata.legnedlist.indexOf(t.businessName)&&(e.radardata.legnedlist.push(t.businessName),e.radardata.legnedlistobj.push({title:t.businessName})),-1==e.radardata.yxis.indexOf(t.targetName)&&(e.radardata.yxis.push(t.targetName),e.radardata.yxislist.push({text:t.targetName,max:e.radardata.yxismax[t.targetName]}),e.radardata.yxisobj.push({title:t.targetName}))}),e.radardata.legnedlist.forEach(function(t,a){e.radardata.rowcolobj[a]=[],e.radardata.yxis.forEach(function(i,n){e.radardata.rowcolobj[a].push({targetValue:"",businessName:t,targetName:i})})}),e.radardata.yxis.forEach(function(a,i){e.radardata.yxismax[a]="";var n=0;t.data.data.forEach(function(e,t){a==e.targetName&&Number(n)<Number(e.targetValue)&&(n=Number(e.targetValue))}),e.radardata.yxismax[a]=n}),e.radardata.yxislist.forEach(function(t,a){t.max=e.radardata.yxismax[t.text]}),e.radardata.legnedlist.forEach(function(i,n){e.radardata.legnedvalue[i]=[],t.data.data.forEach(function(t,a){t.businessName==i&&e.radardata.legnedvalue[i].push(Number(t.targetValue))}),e.radardata.serieslist.push({name:i,value:e.radardata.legnedvalue[i],areaStyle:{normal:{color:a[n],opacity:.4}},symbolSize:2.5,itemStyle:{normal:{borderColor:a[n],borderWidth:2.5}},lineStyle:{normal:{opacity:.5}}})}),e.initleftecharts("efficienct-radar",e.radardata,a)}}).catch(function(e){})},submitcompetive:function(){var e=this;this.clickdit(),this.loading=!0;var t=[],a=this;console.log(this.radardata),console.log(this.radardata.rowcolobj),this.radardata.rowcolobj.forEach(function(e,i){e.forEach(function(e,t){""==e.targetValue&&(e.targetValue=a.radardata.legnedvalue[e.businessName][t])}),e.forEach(function(e,a){t.push(e)})}),this.axios.post("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition",t).then(function(t){"SUCCESS"==t.data.status&&e.initdata()})},clickdit:function(){this.hidefromfalg=!this.hidefromfalg},hoveredit:function(e){this.opacitys=e},initleftecharts:function(e,t,a){var i;this.$echarts.dispose(document.getElementById(e));var n=this.$echarts.init(document.getElementById(e)),s={color:a,legend:{show:!0,icon:"circle",bottom:0,center:0,itemWidth:Math.ceil(16*this.baseScreenRate),itemHeight:Math.ceil(16*this.baseScreenRate),textStyle:{fontSize:Math.ceil(18*this.baseScreenRate),color:"#ffffff"},data:t.legnedlist},radar:[(i={indicator:t.yxislist,textStyle:{color:"red"},center:["50%","50%"],radius:Math.ceil(120*this.baseScreenRate),startAngle:90,splitNumber:3,name:{formatter:"{value}",textStyle:{fontSize:Math.ceil(18*this.baseScreenRate),color:"#3C6E81"}},splitArea:{areaStyle:{color:["transparent","transparent)","rgba(114, 172, 209, 0)","transparent","rgba(114, 172, 209, 0)"]}},axisLine:{lineStyle:{color:"#4C545C"}}},v()(i,"axisLine",{lineStyle:{type:"dashed",color:"#4C545C",width:Math.ceil(5*this.baseScreenRate)}}),v()(i,"splitLine",{lineStyle:{type:"dashed",color:"#4C545C",width:Math.ceil(5*this.baseScreenRate)}}),i)],series:[{name:"雷达图",type:"radar",itemStyle:{emphasis:{lineStyle:{width:4}}},data:t.serieslist}]};n.setOption(s)}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"efficiency-page",style:e.pagestyle},[a("div",{staticClass:"head"},[a("h4",{style:e.headstyle},[e._v("竞争力分析")]),e._v(" "),a("span",{staticClass:"el-icon-more",staticStyle:{cursor:"pointer"},style:{opacity:e.opacitys},on:{click:function(t){e.clickdit()},mouseover:function(t){e.hoveredit(1)},mouseout:function(t){e.hoveredit(0)}}})]),e._v(" "),a("div",{ref:"efficienctRadar",style:e.echartstyle,attrs:{id:"efficienct-radar"}}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hidefromfalg,expression:"hidefromfalg"}],staticClass:"hideform",style:e.formstyle},[a("form",[a("table",{attrs:{border:"1",cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td",[e._v(" ")]),e._l(e.radardata.yxisobj,function(t,i){return a("td",{key:i},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"y.title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(a){a.target.composing||e.$set(t,"title",a.target.value)}}})])})],2),e._v(" "),e._l(e.radardata.legnedlistobj,function(t,i){return a("tr",{key:i},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"tr.title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(a){a.target.composing||e.$set(t,"title",a.target.value)}}})]),e._v(" "),e._l(e.radardata.rowcolobj[i],function(t,i){return a("td",{key:i},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.targetValue,expression:"td.targetValue"}],attrs:{type:"number"},domProps:{value:t.targetValue},on:{input:function(a){a.target.composing||e.$set(t,"targetValue",a.target.value)}}})])})],2)})],2),e._v(" "),a("input",{staticClass:"submit",attrs:{type:"button",readonly:"readonly",value:"确定"},on:{click:function(t){return t.stopPropagation(),e.submitcompetive(t)}}})]),e._v(" "),a("span",{staticClass:"closeform el-icon-close",on:{click:function(t){e.clickdit()}}})])])},staticRenderFns:[]};var b={props:["timeRange"],data:function(){return{sideleftpad:Math.ceil(25*this.baseScreenRate)+"px",sidetoppad:Math.ceil(25*this.baseScreenRate)+"px",manage:{height:Math.ceil(454*this.baseScreenRate)+"px",width:Math.ceil(1215*this.baseScreenRate)+"px"},target:{height:Math.ceil(495*this.baseScreenRate)+"px",width:Math.ceil(1215*this.baseScreenRate)+"px",marginTop:Math.ceil(25*this.baseScreenRate)+"px"},rightside:{paddingLeft:Math.ceil(25*this.baseScreenRate)+"px",paddingTop:Math.ceil(25*this.baseScreenRate)+"px"},sell:{width:Math.ceil(633*this.baseScreenRate)+"px",height:Math.ceil(244*this.baseScreenRate)+"px"},efficiency:{height:Math.ceil(217*this.baseScreenRate)+"px",width:Math.ceil(633*this.baseScreenRate)+"px",marginTop:Math.ceil(25*this.baseScreenRate)+"px"},competive:{height:Math.ceil(463*this.baseScreenRate)+"px",width:Math.ceil(633*this.baseScreenRate)+"px",marginTop:Math.ceil(25*this.baseScreenRate)+"px"}}},components:{efficiency:p,competive:a("VU/8")(g,y,!1,function(e){a("9BpL")},"data-v-af2664a6",null).exports,BusinessProfile:s,KeyIndicators:l,Sales:u}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"editecharts"},[a("div",{staticClass:"leftside",style:{paddingLeft:e.sideleftpad,paddingTop:e.sidetoppad}},[a("div",{staticClass:"manage",style:e.manage},[a("BusinessProfile",{attrs:{timeRange:e.timeRange}})],1),e._v(" "),a("div",{staticClass:"target",style:e.target},[a("KeyIndicators",{attrs:{timeRange:e.timeRange}})],1)]),e._v(" "),a("div",{staticClass:"rightside",style:e.rightside},[a("div",{staticClass:"sell",style:e.sell},[a("Sales",{attrs:{timeRange:e.timeRange}})],1),e._v(" "),a("div",{staticClass:"efficiency",style:e.efficiency},[a("efficiency",{attrs:{timeRange:e.timeRange}})],1),e._v(" "),a("div",{staticClass:"competive",style:e.competive},[a("competive",{attrs:{timeRange:e.timeRange}})],1)])])},staticRenderFns:[]};var S={props:["timeRange"],data:function(){return{}},components:{editecharts:a("VU/8")(b,x,!1,function(e){a("fxJJ")},"data-v-0281d342",null).exports}},R={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page"},[t("editecharts",{attrs:{timeRange:this.timeRange}})],1)},staticRenderFns:[]};var _=a("VU/8")(S,R,!1,function(e){a("BRWC")},"data-v-6cc06bbc",null);t.default=_.exports}});
//# sourceMappingURL=0.237611d8c29d02479188.js.map