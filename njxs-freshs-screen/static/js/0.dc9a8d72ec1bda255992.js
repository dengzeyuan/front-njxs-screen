webpackJsonp([0],{"9bBU":function(e,t,a){a("mClu");var i=a("FeBl").Object;e.exports=function(e,t,a){return i.defineProperty(e,t,a)}},C4MV:function(e,t,a){e.exports={default:a("9bBU"),__esModule:!0}},F7x9:function(e,t){},Fd9N:function(e,t){},JfBw:function(e,t){},M7S0:function(e,t){},Ve1z:function(e,t){},bOdI:function(e,t,a){"use strict";t.__esModule=!0;var i,n=a("C4MV"),s=(i=n)&&i.__esModule?i:{default:i};t.default=function(e,t,a){return t in e?(0,s.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},dg0P:function(e,t){},jmlc:function(e,t){},mClu:function(e,t,a){var i=a("kM2E");i(i.S+i.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})},uUni:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={props:["timeRange"],watch:{timeRange:function(e){this.initdata()}},data:function(){return{loading:"true",contentstyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px",paddingLeft:"2%",paddingRight:"2%"},sideleftpad:Math.ceil(30*this.baseScreenRate)+"px",textDate:[],timeDate:[],valDate:[],valDate1:[],valDate2:[]}},mounted:function(){this.initdata()},methods:{initdata:function(){var e=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/situation/"+this.timeRange).then(function(t){e.loading=!1,e.textDate=[],e.timeDate=[],e.valDate=[],e.valDate1=[],e.valDate2=[];var a=t.data.data;a.map(function(t){e.textDate.push(t.name)}),a[0].singleList.map(function(t){e.timeDate.push(t.date),e.valDate.push(t.value)}),a[1].singleList.map(function(t){e.valDate1.push(t.value)}),a[2].singleList.map(function(t){e.valDate2.push(t.value)}),e.$echarts.dispose(document.getElementById("main"));var i=e.$echarts.init(document.getElementById("main")),n={color:["rgba(192,87,96,1)","rgba(186,126,182,1)","rgba(105,98,164,1)"],title:{text:"经营概况",textStyle:{fontWeight:"normal",color:"#75becb",fontSize:Math.ceil(22*e.baseScreenRate)}},tooltip:{trigger:"axis"},legend:{data:e.textDate,textStyle:{color:"#fff"},left:"right",icon:"circle"},xAxis:[{axisLabel:{show:!0,interval:function(t,a){return"WEEK"==e.timeRange||("MONTH"==e.timeRange?t%4==0:"QUARTER"==e.timeRange?t%14==0:void 0)}},type:"category",boundaryGap:!1,data:e.timeDate,splitLine:{lineStyle:{color:["#21202E"]}},nameTextStyle:{color:["#21202E"]},axisLine:{lineStyle:{color:"#75becb"}}}],yAxis:[{name:"单位(元)",type:"value",splitLine:{lineStyle:{color:"#21202E"}},nameTextStyle:{color:"#75becb"},axisLine:{lineStyle:{color:"#75becb"}}}],grid:{left:"2%",right:"6%",bottom:"3%",containLabel:!0},series:[{name:"销售收入",type:"line",symbol:"circle",smooth:!0,smoothMonotone:"none",data:e.valDate,areaStyle:{opacity:.4},label:{show:!0,position:"top",color:"#fff",formatter:function(t){return"WEEK"==e.timeRange?t.data:"MONTH"==e.timeRange?t.dataIndex%4==0?t.data:"":"QUARTER"==e.timeRange?t.dataIndex%14==0?t.data:"":void 0}},itemStyle:{normal:{color:"rgba(61, 122, 153, 0.7)"}},lineStyle:{normal:{color:"rgba(61, 122, 153, 1)"}}},{name:"毛利",type:"line",symbol:"circle",smooth:!0,data:e.valDate1,areaStyle:{opacity:.4},label:{show:!0,position:"top",color:"#fff",formatter:function(t){return"WEEK"==e.timeRange?t.data:"MONTH"==e.timeRange?t.dataIndex%4==0?t.data:"":"QUARTER"==e.timeRange?t.dataIndex%14==0?t.data:"":void 0}},itemStyle:{normal:{color:"rgba(221, 108, 81, 0.7)"}},lineStyle:{normal:{color:"rgba(221, 108, 81, 1)"}}},{name:"采购成本",type:"line",symbol:"circle",smooth:!0,data:e.valDate2,areaStyle:{opacity:.4},label:{show:!0,position:"bottom",color:"#fff",formatter:function(t){return"WEEK"==e.timeRange?t.data:"MONTH"==e.timeRange?t.dataIndex%4==0?t.data:"":"QUARTER"==e.timeRange?t.dataIndex%14==0?t.data:"":void 0}},itemStyle:{normal:{color:"rgba(112, 106, 175, 0.7)"}},lineStyle:{normal:{color:"rgba(112, 106, 175, 1)"}}}]};i.setOption(n)}).catch(function(e){console.log("请求失败")})}}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"content",style:this.contentstyle},[t("div",{attrs:{id:"main"}})])},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(e){a("M7S0")},"data-v-47603bfa",null).exports,r={props:["timeRange"],watch:{timeRange:function(e){this.initdata()}},data:function(){return{loading:!0,dateValue:[],textValue:[],dateValue1:[],textValue1:[],topValue:[],textValue2:[],topValue1:[],topValuex:[],topValuex1:[],topValuey:[],topValuey1:[],contentTitle:{fontSize:Math.ceil(18*this.baseScreenRate)+"px",color:"#537F8C"},contentText:{fontSize:Math.ceil(18*this.baseScreenRate)+"px",color:"#fff"},lineNum:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",color:"#fff"},mainstyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px",paddingLeft:"2%",paddingRight:"2%"},onlineorder:"",underlineorder:"",onlineordervalue:0,underlineordervalue:0,ordername:"",onlinecustomer:"",underlinecustomer:"",onlinecustomervalue:0,underlinecustomervalue:0,customername:"",onlineuser:"",underlineuser:"",onlineuservalue:0,underlineuservalue:0,uservaluename:""}},mounted:function(){this.initdata()},methods:{initdata:function(){var e=this,t=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/kpi/"+this.timeRange).then(function(a){t.loading=!1;var i=window.innerWidth<756?["38%","45%"]:["45%","55%"],n=window.innerWidth<756?16:18;t.onlineorder=a.data.data[0].onLineRate,t.underlineorder=a.data.data[0].underLineRate,t.onlineordervalue=a.data.data[0].onLineValue,t.underlineordervalue=a.data.data[0].underLineValue,t.ordername=a.data.data[0].name,t.onlinecustomer=a.data.data[1].onLineRate,t.underlinecustomer=a.data.data[1].underLineRate,t.onlinecustomervalue=a.data.data[1].onLineValue,t.underlinecustomervalue=a.data.data[1].underLineValue,t.customername=a.data.data[1].name,t.onlineuser=a.data.data[2].onLineRate,t.underlineuser=a.data.data[2].underLineRate,t.onlineuservalue=a.data.data[2].onLineValue,t.underlineuservalue=a.data.data[2].underLineValue,t.uservaluename=a.data.data[2].name,e.textValue=[],a.data.data[0].singleList.map(function(t){e.textValue.push(t)}),e.textValue1=[],a.data.data[1].singleList.map(function(t){e.textValue1.push(t)}),t.textValue2=[],a.data.data[2].singleList.map(function(e){t.textValue2.push(e)});for(var s=0;s<6-t.textValue2.length;s++)t.textValue2.push({name:"无",onLineValue:"无",underLineValue:"无"});var r=e.$echarts.init(document.getElementById("main1")),o={title:{text:"关键指标",textStyle:{fontWeight:"normal",color:"#75becb",fontSize:Math.ceil(22*e.baseScreenRate)}},opcity:.4,color:["rgba(255, 114, 153, 0.7)","rgba(255, 186, 78, 0.7)"],legend:{orient:"vertical",left:"40%",top:"45%",itemWidth:5,itemHeight:5,textStyle:{color:"#fff",fontSize:Math.ceil(n*e.baseScreenRate)},selectedMode:!1},series:[{type:"pie",center:["20%","60%"],radius:i,label:{position:"center",color:"#fff"},hoverAnimation:!1,legendHoverLink:!1,data:[{label:{formatter:t.ordername,padding:[10,0,0,0],textStyle:{fontSize:Math.ceil(n*e.baseScreenRate)}},value:t.onlineordervalue,name:"线上"+t.onlineorder},{label:{show:!1},value:t.underlineordervalue,name:"线下"+t.underlineorder}]}]};r.setOption(o);var l=e.$echarts.init(document.getElementById("main2")),c={color:["rgba(244, 54, 255, 0.7)","rgba(255, 143, 216, 0.7)"],legend:{orient:"vertical",left:"40%",top:"45%",itemWidth:5,itemHeight:5,textStyle:{color:"#fff",fontSize:Math.ceil(n*e.baseScreenRate)},selectedMode:!1},series:[{type:"pie",center:["20%","60%"],radius:i,label:{position:"center",color:"#fff"},hoverAnimation:!1,legendHoverLink:!1,data:[{label:{formatter:t.customername,padding:[10,0,0,0],textStyle:{fontSize:Math.ceil(n*e.baseScreenRate)}},value:t.onlinecustomervalue,name:"线上"+t.onlinecustomer},{label:{show:!1},value:t.underlinecustomervalue,name:"线下"+t.underlinecustomer}]}]};l.setOption(c);var d=e.$echarts.init(document.getElementById("main3")),u={color:["rgba(74, 163, 112, 0.7)","rgba(183, 201, 175, 0.7)"],legend:{orient:"vertical",left:"40%",top:"45%",itemWidth:5,itemHeight:5,textStyle:{color:"#fff",fontSize:Math.ceil(n*e.baseScreenRate)},selectedMode:!1},series:[{type:"pie",center:["20%","60%"],radius:i,label:{position:"center",color:"#fff"},hoverAnimation:!1,legendHoverLink:!1,data:[{label:{formatter:t.uservaluename,padding:[10,0,0,0],textStyle:{fontSize:Math.ceil(n*e.baseScreenRate)}},value:t.onlineuservalue,name:"线上"+t.onlineuser},{label:{show:!1},value:t.underlineuservalue,name:"线下"+t.underlineuser}]}]};d.setOption(u)}).catch(function(e){console.log("请求失败")})},rowClass:function(e,t){return"backcol"}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main",style:e.mainstyle},[a("div",{staticClass:"textd1"},[a("div",{staticStyle:{width:"100%",height:"40%"},style:e.lineNum,attrs:{id:"main1"}}),e._v(" "),a("div",{staticClass:"table-data"},[a("table",{attrs:{rules:"rows"}},[a("tr",{staticClass:"trs",style:e.contentTitle},[a("td",[e._v(" ")]),a("td",[e._v("线上")]),a("td",[e._v("线下")])]),e._v(" "),e._l(e.textValue,function(t,i){return a("tr",{key:i,style:e.contentText},[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.onLineValue))]),e._v(" "),a("td",[e._v(e._s(t.underLineValue))])])})],2)])]),e._v(" "),a("div",{staticClass:"textd2"},[a("div",{staticStyle:{width:"100%",height:"40%"},style:e.lineNum,attrs:{id:"main2"}}),e._v(" "),a("div",{staticClass:"table-data"},[a("table",{attrs:{rules:"rows"}},[a("tr",{staticClass:"trs",style:e.contentTitle},[a("td",[e._v(" ")]),a("td",[e._v("线上")]),a("td",[e._v("线下")])]),e._v(" "),e._l(e.textValue1,function(t,i){return a("tr",{key:i,style:e.contentText},[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.onLineValue))]),e._v(" "),a("td",[e._v(e._s(t.underLineValue))])])})],2)])]),e._v(" "),a("div",{staticClass:"textd3"},[a("div",{staticStyle:{width:"100%",height:"40%"},style:e.lineNum,attrs:{id:"main3"}}),e._v(" "),a("div",{staticClass:"table-data"},[a("table",{attrs:{rules:"rows"}},[a("tr",{staticClass:"trs",style:e.contentTitle},[a("td",[e._v(" ")]),a("td",[e._v("线上")]),a("td",[e._v("线下")])]),e._v(" "),e._l(e.textValue2,function(t,i){return a("tr",{key:i,style:e.contentText},[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.onLineValue))]),e._v(" "),a("td",[e._v(e._s(t.underLineValue))])])})],2)])])])])},staticRenderFns:[]};var l=a("VU/8")(r,o,!1,function(e){a("ut2j")},"data-v-95d9fc4c",null).exports,c={props:["timeRange"],watch:{timeRange:function(e){"QUARTER"==e?this.enable=!1:(this.value="0",this.enable=!0),this.initdata()}},data:function(){return{loading:!0,enable:"QUARTER"!=this.timeRange,headstyle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",paddingRight:Math.ceil(20*this.baseScreenRate)+"px",marginBottom:Math.ceil(10*this.baseScreenRate)+"px"},headtitle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",fontWeight:"normal"},pagestyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px"},names:[{value:"1 ",label:"同比"},{value:"0",label:"环比"}],value:"0",timeDate:[],timeDate2:[],amountDate:[],amountDate1:[],textData:"WEEK",numDate:0,toolipform:{}}},mounted:function(){this.initdata()},methods:{initdata:function(){this.loading=!0;var e=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operationData/saleRate/data/"+this.timeRange+"/"+this.value).then(function(t){e.loading=!1,e.toolipform.dataCurrentWeek=[],e.toolipform.dataPreWeek=[],e.toolipform.dataCurrentValue=[],e.toolipform.dataPreValue=[],e.timeDate=[],e.amountDate=[],e.amountDate1=[],t.data.data.dataCurrentWeek.map(function(t){e.timeDate.push(t.time),e.amountDate.push(t.amount),e.toolipform.dataCurrentWeek.push(t.time),e.toolipform.dataCurrentValue.push(t.amount)}),t.data.data.dataPreWeek.map(function(t){e.amountDate1.push(t.amount),e.timeDate2.push(t.time),e.toolipform.dataPreWeek.push(t.time),e.toolipform.dataPreValue.push(t.amount)}),e.initbar(e.toolipform)}).catch(function(e){console.log("请求失败")})},initbar:function(e){var t=document.getElementById("saldata");this.$echarts.dispose(t);var a=this.$echarts.init(t),i={tooltip:{trigger:"axis",formatter:function(t){function a(e){var t=/\d{1,3}(?=(\d{3})+$)/g;return e.replace(/^(\d+)((\.\d+)?)$/,function(e,a,i){return a.replace(t,"$&,")+i})}for(var i=0;i<e.dataCurrentWeek.length;i++)if(e.dataCurrentWeek[i]==t[0].name)return"<div>"+e.dataCurrentWeek[i]+":"+a(String(e.dataCurrentValue[i]))+"<br />"+e.dataPreWeek[i]+":"+a(String(e.dataPreValue[i]))+"</div>"}},xAxis:[{type:"category",data:this.timeDate,splitLine:{lineStyle:{color:["#21202E"]}},nameTextStyle:{color:["#21202E"]},axisLine:{lineStyle:{color:"#75becb"}}}],yAxis:[{name:"单位(元)",nameGap:"5",type:"value",splitLine:{lineStyle:{color:"#21202E"}},nameTextStyle:{color:"#75becb"},axisLine:{lineStyle:{color:"#75becb"}}}],grid:{top:"15%",left:"2%",right:"4%",bottom:"3%",containLabel:!0},series:[{name:"比较数据",type:"bar",data:this.amountDate1,barWidth:12,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5EFCF6"},{offset:1,color:"#5D27A0"}])}}},{name:"当前数据",type:"bar",data:this.amountDate,barWidth:12,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FECC44"},{offset:1,color:"#EC6783"}])}}}]};a.setOption(i)}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"content",style:e.pagestyle},[a("div",{staticClass:"head",style:e.headstyle},[a("h4",{style:e.headtitle},[e._v("销售同环化")]),e._v(" "),a("el-select",{staticClass:"namechange",attrs:{disabled:e.enable,size:"mini",name:"namechange"},on:{change:function(t){e.initdata(e.value)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.names,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("div",{attrs:{id:"saldata"}})])},staticRenderFns:[]};var u=a("VU/8")(c,d,!1,function(e){a("jmlc"),a("JfBw")},"data-v-4e13c1a8",null).exports,m={props:["role"],data:function(){return{loading:"true",contentleft:{paddingLeft:Math.ceil(67*this.baseScreenRate)+"px"},headtitle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",fontWeight:"normal"},headstyle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",height:Math.ceil(22*this.baseScreenRate)+"px",paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",marginBottom:Math.ceil(10*this.baseScreenRate)+"px"},pagestyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px"},contentTitle:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",color:"#537F8C",paddingBottom:Math.ceil(20*this.baseScreenRate)+"px"},leftContent:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"right"},rightContent:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"center"},sendrate:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"center"},customer:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"center"},contentfirst:{color:"#537F8C",height:Math.ceil(19*this.baseScreenRate)+"px"},contentsecond:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",color:"#537F8C",paddingTop:Math.ceil(45*this.baseScreenRate)+"px"},cententRight:{paddingRight:Math.ceil(50*this.baseScreenRate)+"px"},echartstyle:{width:Math.ceil(77*this.baseScreenRate)+"px",height:Math.ceil(77*this.baseScreenRate)+"px",margin:"0 auto"},formstyle:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",paddingTop:Math.ceil(30*this.baseScreenRate)+"px"},opacitys:0,hidefromfalg:!1,responseDate:{avgEfficiency:"",personEfficiency:"",distributionRate:"",customerRate:""}}},components:{},mounted:function(){this.$nextTick(function(){this.initdata()})},methods:{initdata:function(){var e=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/efficiency").then(function(t){if(e.loading=!1,t.data.data){e.responseDate=t.data.data;var a=[[{value:100,name:""},{value:t.data.data.distributionRate.slice(0,-1),name:"配送及时率"}],[{value:t.data.data.customerRate.slice(0,-1),name:"顾客满意度"},{value:100,name:""}]];e.initleftecharts("main-first",t.data.data.distributionRate,a[0]),e.initleftecharts("main-two",t.data.data.customerRate,a[1])}})},submitefficty:function(){var e=this;this.loading=!0,this.axios.post("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/efficiency",{avgEfficiency:/平/g.test(String(this.responseDate.avgEfficiency))?this.responseDate.avgEfficiency:this.responseDate.avgEfficiency+"/平",personEfficiency:/人/g.test(String(this.responseDate.personEfficiency))?this.responseDate.personEfficiency:this.responseDate.personEfficiency+"/人",distributionRate:/%/g.test(String(this.responseDate.distributionRate))?this.responseDate.distributionRate:this.responseDate.distributionRate+"%",customerRate:/%/g.test(String(this.responseDate.customerRate))?this.responseDate.customerRate:this.responseDate.customerRate+"%"}).then(function(t){"SUCCESS"==t.data.status&&(e.clickdit(),e.initdata())})},clickdit:function(){this.hidefromfalg=!this.hidefromfalg},hoveredit:function(e){this.opacitys=e},initleftecharts:function(e,t,a){var i=this.$echarts.init(document.getElementById(e)),n={grid:{left:0,bottom:0,top:0,right:0},title:{text:t,x:"center",y:"center",textStyle:{fontWeight:"normal",color:"main"==e?"#49CDD9":"#C551A3",fontSize:Math.ceil(16*this.baseScreenRate)}},series:[{color:"main-first"==e?["#4f4f56",new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1C0C99"},{offset:1,color:"#49F9FF"}])]:["#4f4f56",new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#BA51E9"},{offset:1,color:"#E852B0"}])],name:"访问来源",type:"pie",radius:["60%","80%"],avoidLabelOverlap:!1,hoverAnimation:!1,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:a}]};i.setOption(n)}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"efficiency-page",style:e.pagestyle},[a("div",{staticClass:"head",style:e.headstyle},[a("h4",{style:e.headtitle},[e._v("经营效率")]),e._v(" "),"manage"==e.role?a("span",{staticClass:"el-icon-more",staticStyle:{cursor:"pointer"},style:{opacity:e.opacitys},on:{click:function(t){e.clickdit()},mouseover:function(t){e.hoveredit(1)},mouseout:function(t){e.hoveredit(0)}}}):e._e()]),e._v(" "),a("div",{staticClass:"content-left",style:e.contentleft},[a("div",{style:e.contentTitle},[e._v("线下")]),e._v(" "),a("div",{staticClass:"contentfirst",style:e.contentfirst},[a("span",{style:e.leftContent},[e._v("坪效")]),a("span",{style:e.leftContent},[e._v(e._s(e.responseDate.avgEfficiency))])]),e._v(" "),a("div",{staticClass:"contentsecond",style:e.contentsecond},[a("span",{style:e.leftContent},[e._v("人效")]),a("span",{style:e.leftContent},[e._v(e._s(e.responseDate.personEfficiency))])])]),e._v(" "),a("div",{staticClass:"content-right",style:e.cententRight},[a("div",{style:e.contentTitle},[e._v("线下")]),e._v(" "),a("div",{staticClass:"contentfirst",style:e.contentfirst},[a("span",{style:e.sendrate},[e._v("配送及时率")]),a("span",{style:e.customer},[e._v("客户满意度")])]),e._v(" "),a("div",{staticClass:"contentfirst"},[a("span",[a("div",{style:e.echartstyle,attrs:{id:"main-first"}})]),e._v(" "),a("span",[a("div",{style:e.echartstyle,attrs:{id:"main-two"}})])])]),e._v(" "),"manage"==e.role?a("div",{directives:[{name:"show",rawName:"v-show",value:e.hidefromfalg,expression:"hidefromfalg"}],staticClass:"hideform",style:e.formstyle},[a("form",{ref:"forms",attrs:{action:"",novalidate:""}},[a("table",{staticStyle:{color:"#ffffff"},attrs:{border:"1",cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td",[e._v("坪效")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.responseDate.avgEfficiency,expression:"responseDate.avgEfficiency"}],attrs:{name:"avgEfficiency",type:"text"},domProps:{value:e.responseDate.avgEfficiency},on:{input:function(t){t.target.composing||e.$set(e.responseDate,"avgEfficiency",t.target.value)}}})])]),e._v(" "),a("tr",[a("td",[e._v("人效")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.responseDate.personEfficiency,expression:"responseDate.personEfficiency"}],attrs:{name:"personEfficiency",type:"text"},domProps:{value:e.responseDate.personEfficiency},on:{input:function(t){t.target.composing||e.$set(e.responseDate,"personEfficiency",t.target.value)}}})])]),e._v(" "),a("tr",[a("td",[e._v("配送及时率")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.responseDate.distributionRate,expression:"responseDate.distributionRate"}],attrs:{name:"distributionRate",type:"text"},domProps:{value:e.responseDate.distributionRate},on:{input:function(t){t.target.composing||e.$set(e.responseDate,"distributionRate",t.target.value)}}})])]),e._v(" "),a("tr",[a("td",[e._v("客户满意度")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.responseDate.customerRate,expression:"responseDate.customerRate"}],attrs:{name:"customerRate",type:"text"},domProps:{value:e.responseDate.customerRate},on:{input:function(t){t.target.composing||e.$set(e.responseDate,"customerRate",t.target.value)}}})])])]),e._v(" "),a("input",{staticClass:"submit",attrs:{type:"button",readonly:"readonly",value:"确定"},on:{click:function(t){return t.stopPropagation(),e.submitefficty(t)}}})]),e._v(" "),a("span",{staticClass:"closeform el-icon-close",on:{click:function(t){e.clickdit()}}})]):e._e()])},staticRenderFns:[]};var f=a("VU/8")(m,h,!1,function(e){a("dg0P")},"data-v-199c1ea8",null).exports,p=a("bOdI"),g=a.n(p),v={props:["role"],data:function(){var e;return e={loading:!0,rownumber:0,colnumber:0},g()(e,"loading","true"),g()(e,"headstyle",{fontSize:Math.ceil(22*this.baseScreenRate)+"px",fontWeight:"normal"}),g()(e,"pagestyle",{paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",paddingTop:Math.ceil(23*this.baseScreenRate)+"px"}),g()(e,"echartstyle",{width:"80%",height:"90%",margin:"0 auto"}),g()(e,"formstyle",{fontSize:Math.ceil(24*this.baseScreenRate)+"px",paddingTop:Math.ceil(30*this.baseScreenRate)+"px"}),g()(e,"submitefficty",{padding:"1% 2%",fontSize:Math.ceil(18*this.baseScreenRate)+"px"}),g()(e,"opacitys",0),g()(e,"hidefromfalg",!1),g()(e,"radardata",{yxis:[],yxislist:[],legnedlist:[],legnedvalue:[],serieslist:[],yxismax:{},legnedlistobj:[],yxisobj:[],rowcolobj:[]}),g()(e,"cloneelement",""),e},components:{},mounted:function(){this.$nextTick(function(){this.initdata()})},methods:{addrowcol:function(e,t){e=Number(e),t=Number(t);for(var a=this.radardata.legnedlistobj.length,i=0,n=0;n<this.radardata.rowcolobj.length;n++)i<this.radardata.rowcolobj[n].length&&(i=this.radardata.rowcolobj[n].length);if(this.radardata.legnedlistobj.slice(0,e).length<e)for(var s=a;s<e;s++)this.radardata.legnedlistobj.push({title:""}),this.radardata.rowcolobj[s]=[];else this.radardata.legnedlistobj=this.radardata.legnedlistobj.slice(0,e),this.radardata.rowcolobj=this.radardata.rowcolobj.slice(0,e);if(i<t){this.radardata.yxisobj=this.radardata.yxisobj.slice(0,t);for(var r=this.radardata.yxisobj.length;r<t;r++)this.radardata.yxisobj.push({title:""});for(var o=0;o<e;o++)if(0==this.radardata.rowcolobj[o].length)for(var l=0;l<t;l++)this.radardata.rowcolobj[o].push({targetValue:"",businessName:"",targetName:""});else for(var c=this.radardata.rowcolobj[o].length;c<t;c++)this.radardata.rowcolobj[o].push({targetValue:"",businessName:"",targetName:""})}else{this.radardata.yxisobj=this.radardata.yxisobj.slice(0,t);for(var d=0;d<e;d++)if(0==this.radardata.rowcolobj[d].length)for(var u=0;u<t;u++)this.radardata.rowcolobj[d].push({targetValue:"",businessName:"",targetName:""});else this.radardata.rowcolobj[d]=this.radardata.rowcolobj[d].slice(0,t)}},changevalue:function(e,t,a){this.radardata.rowcolobj.forEach(function(i,n){i.forEach(function(i,n){n==a&&t.businessName==i.businessName&&(i.targetName=e.yxis[a])})})},changeyxisobj:function(e,t,a){var i="";this.radardata.rowcolobj.forEach(function(e,n){e.forEach(function(e,n){""!==e.businessName&&(i=e.businessName),n==a&&(""==t.title?e.targetName="":(e.targetName=t.title,e.businessName=i))})})},changelegned:function(e,t,a){this.radardata.rowcolobj[a].forEach(function(e,a){""==t.title?e.businessName="":e.businessName=t.title})},initdata:function(){var e=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition").then(function(t){if(e.loading=!1,(t=t).data.data)if(0==t.data.data.length){e.radardata={yxis:["销售额","订单量","支付用户","新增用户"],yxislist:[{text:"销售额",max:1e4},{text:"订单量",max:1e4},{text:"支付用户",max:1e4},{text:"新增用户",max:1e4}],legnedlist:["宁家鲜生","沃尔玛"],legnedvalue:["宁家鲜生"[5e3],"沃尔玛"[7e3]],serieslist:[],yxismax:{"支付用户":1e4,"新增用户":1e4,"订单量":1e4,"销售额":1e4},legnedlistobj:[{title:"宁家鲜生"},{title:"沃尔玛"}],yxisobj:[{title:"销售额"},{title:"订单量"},{title:"支付用户"},{title:"新增用户"}],rowcolobj:[[{targetValue:2e3,businessName:"宁家鲜生",targetName:"销售额"},{targetValue:3e3,businessName:"宁家鲜生",targetName:"订单量"},{targetValue:4e3,businessName:"宁家鲜生",targetName:"支付用户"},{targetValue:5e3,businessName:"宁家鲜生",targetName:"新增用户"}],[{targetValue:4e3,businessName:"沃尔玛",targetName:"销售额"},{targetValue:5e3,businessName:"沃尔玛",targetName:"销售额"},{targetValue:6e3,businessName:"沃尔玛",targetName:"销售额"},{targetValue:7e3,businessName:"沃尔玛",targetName:"销售额"}]]};e.initleftecharts("efficienct-radar",e.radardata,["rgb(192,87,96)","rgb(186,126,182)","rgb(105,98,164)"])}else{e.radardata={yxis:[],yxislist:[],legnedlist:[],legnedvalue:{},serieslist:[],yxismax:{},legnedlistobj:[],yxisobj:[],rowcolobj:[]};var a=["rgb(192,87,96)","rgb(186,126,182)","rgb(105,98,164)"];t.data.data.forEach(function(t,a){-1==e.radardata.legnedlist.indexOf(t.businessName)&&(e.radardata.legnedlist.push(t.businessName),e.radardata.legnedlistobj.push({title:t.businessName})),-1==e.radardata.yxis.indexOf(t.targetName)&&(e.radardata.yxis.push(t.targetName),e.radardata.yxislist.push({text:t.targetName,max:e.radardata.yxismax[t.targetName]}),e.radardata.yxisobj.push({title:t.targetName}))}),e.radardata.legnedlist.forEach(function(a,i){e.radardata.rowcolobj[i]=[],e.radardata.yxis.forEach(function(n,s){t.data.data.forEach(function(t,s){t.targetName==n&&t.businessName==a&&e.radardata.rowcolobj[i].push({targetValue:t.targetValue,businessName:a,targetName:n})})})}),e.radardata.yxis.forEach(function(a,i){e.radardata.yxismax[a]="";var n=0;t.data.data.forEach(function(e,t){a==e.targetName&&Number(n)<Number(e.targetValue)&&(n=Number(e.targetValue))}),e.radardata.yxismax[a]=n}),e.radardata.yxislist.forEach(function(t,a){t.max=e.radardata.yxismax[t.text]}),e.radardata.legnedlist.forEach(function(i,n){e.radardata.legnedvalue[i]=[],t.data.data.forEach(function(t,a){t.businessName==i&&e.radardata.legnedvalue[i].push(Number(t.targetValue))}),e.radardata.serieslist.push({name:i,value:e.radardata.legnedvalue[i],areaStyle:{normal:{color:a[n],opacity:.4}},symbolSize:2.5,itemStyle:{normal:{borderColor:a[n],borderWidth:2.5}},lineStyle:{normal:{opacity:.5}}})}),e.initleftecharts("efficienct-radar",e.radardata,a)}}).catch(function(e){})},submitcompetive:function(){var e=this;this.clickdit(),this.loading=!0;var t=[];console.log(this.radardata),console.log(this.radardata.rowcolobj),this.radardata.rowcolobj.forEach(function(e,a){var i=!1;e.forEach(function(e,t){""===e.businessName&&""===e.targetName&&""===e.targetValue||(i=!0)}),i?e.forEach(function(e,a){t.push(e)}):e=null});var a=[];t.forEach(function(e,t){""===e.businessName&&""===e.targetValue&&""===e.targetName||a.push(e)}),this.axios.post("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition",a).then(function(t){"SUCCESS"==t.data.status&&e.initdata()})},clickdit:function(){this.hidefromfalg=!this.hidefromfalg},hoveredit:function(e){this.opacitys=e},initleftecharts:function(e,t,a){var i,n=window.innerWidth<756?200:120;this.$echarts.dispose(document.getElementById(e));var s=this.$echarts.init(document.getElementById(e)),r={color:a,legend:{show:!0,icon:"circle",bottom:0,center:0,itemWidth:Math.ceil(16*this.baseScreenRate),itemHeight:Math.ceil(16*this.baseScreenRate),textStyle:{fontSize:Math.ceil(18*this.baseScreenRate),color:"#ffffff"},data:t.legnedlist},radar:[(i={indicator:t.yxislist,textStyle:{color:"red"},center:["50%","50%"],radius:Math.ceil(n*this.baseScreenRate),startAngle:90,splitNumber:3,name:{formatter:"{value}",textStyle:{fontSize:Math.ceil(18*this.baseScreenRate),color:"#3C6E81"}},splitArea:{areaStyle:{color:["transparent","transparent)","rgba(114, 172, 209, 0)","transparent","rgba(114, 172, 209, 0)"]}},axisLine:{lineStyle:{color:"#4C545C"}}},g()(i,"axisLine",{lineStyle:{type:"dashed",color:"#4C545C",width:Math.ceil(5*this.baseScreenRate)}}),g()(i,"splitLine",{lineStyle:{type:"dashed",color:"#4C545C",width:Math.ceil(5*this.baseScreenRate)}}),i)],series:[{name:"雷达图",type:"radar",itemStyle:{emphasis:{lineStyle:{width:4}}},data:t.serieslist}]};s.setOption(r)}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"efficiency-page",style:e.pagestyle},[a("div",{staticClass:"head"},[a("h4",{style:e.headstyle},[e._v("竞争力分析")]),e._v(" "),"manage"==e.role?a("span",{staticClass:"el-icon-more",staticStyle:{cursor:"pointer"},style:{opacity:e.opacitys},on:{click:function(t){e.clickdit()},mouseover:function(t){e.hoveredit(1)},mouseout:function(t){e.hoveredit(0)}}}):e._e()]),e._v(" "),a("div",{ref:"efficienctRadar",style:e.echartstyle,attrs:{id:"efficienct-radar"}}),e._v(" "),"manage"==e.role?a("div",{directives:[{name:"show",rawName:"v-show",value:e.hidefromfalg,expression:"hidefromfalg"}],staticClass:"hideform",style:e.formstyle},[a("form",[a("div",{staticStyle:{"margin-bottom":"1%"}},[a("span",{staticStyle:{"font-size":"0.8em"}},[e._v("行:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.rownumber,expression:"rownumber"}],staticStyle:{width:"20%"},attrs:{type:"number"},domProps:{value:e.rownumber},on:{input:function(t){t.target.composing||(e.rownumber=t.target.value)}}}),e._v(" "),a("span",{staticStyle:{"padding-left":"5%","font-size":"0.8em"}},[e._v("列:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.colnumber,expression:"colnumber"}],staticStyle:{width:"20%"},attrs:{type:"number"},domProps:{value:e.colnumber},on:{input:function(t){t.target.composing||(e.colnumber=t.target.value)}}}),e._v(" "),a("span",{staticClass:"addrow",on:{click:function(t){e.addrowcol(e.rownumber,e.colnumber)}}},[e._v("确定")])]),e._v(" "),a("table",{attrs:{border:"1",cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td",[e._v(" ")]),e._l(e.radardata.yxisobj,function(t,i){return a("td",{key:i},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"y.title"}],attrs:{type:"text"},domProps:{value:t.title},on:{change:function(a){e.changeyxisobj(e.radardata,t,i)},input:function(a){a.target.composing||e.$set(t,"title",a.target.value)}}})])})],2),e._v(" "),e._l(e.radardata.legnedlistobj,function(t,i){return a("tr",{key:i},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"tr.title"}],attrs:{type:"text"},domProps:{value:t.title},on:{change:function(a){e.changelegned(e.radardata,t,i)},input:function(a){a.target.composing||e.$set(t,"title",a.target.value)}}})]),e._v(" "),e._l(e.radardata.rowcolobj[i],function(t,i){return a("td",{key:i},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.targetValue,expression:"td.targetValue"}],attrs:{type:"number"},domProps:{value:t.targetValue},on:{change:function(a){e.changevalue(e.radardata,t,i)},input:function(a){a.target.composing||e.$set(t,"targetValue",a.target.value)}}})])})],2)})],2),e._v(" "),a("input",{staticClass:"submit",attrs:{type:"button",readonly:"readonly",value:"确定"},on:{click:function(t){return t.stopPropagation(),e.submitcompetive(t)}}})]),e._v(" "),a("span",{staticClass:"closeform el-icon-close",on:{click:function(t){e.clickdit()}}})]):e._e()])},staticRenderFns:[]};var y={props:["timeRange"],data:function(){return{screenmin:window.innerWidth<756,role:this.$route.params.id,sideleftpad:Math.ceil(25*this.baseScreenRate)+"px",sidetoppad:Math.ceil(25*this.baseScreenRate)+"px",manage:{height:Math.ceil(454*this.baseScreenRate)+"px",width:Math.ceil(1215*this.baseScreenRate)+"px"},target:{height:Math.ceil(495*this.baseScreenRate)+"px",width:Math.ceil(1215*this.baseScreenRate)+"px",marginTop:Math.ceil(25*this.baseScreenRate)+"px"},rightside:{paddingLeft:Math.ceil(25*this.baseScreenRate)+"px",paddingTop:Math.ceil(25*this.baseScreenRate)+"px"},sell:{width:Math.ceil(633*this.baseScreenRate)+"px",height:Math.ceil(244*this.baseScreenRate)+"px"},efficiency:{height:Math.ceil(217*this.baseScreenRate)+"px",width:Math.ceil(633*this.baseScreenRate)+"px",marginTop:Math.ceil(25*this.baseScreenRate)+"px"},competive:{height:Math.ceil(463*this.baseScreenRate)+"px",width:Math.ceil(633*this.baseScreenRate)+"px",marginTop:Math.ceil(25*this.baseScreenRate)+"px"}}},components:{efficiency:f,competive:a("VU/8")(v,b,!1,function(e){a("Fd9N")},"data-v-f568e002",null).exports,BusinessProfile:s,KeyIndicators:l,Sales:u}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"editecharts"},[e.screenmin?e._e():a("div",{staticClass:"leftside",style:{paddingLeft:e.sideleftpad,paddingTop:e.sidetoppad}},[a("div",{staticClass:"manage",style:e.manage},[a("BusinessProfile",{attrs:{timeRange:e.timeRange}})],1),e._v(" "),a("div",{staticClass:"target",style:e.target},[a("KeyIndicators",{attrs:{timeRange:e.timeRange}})],1)]),e._v(" "),e.screenmin?e._e():a("div",{staticClass:"rightside",style:e.rightside},[a("div",{staticClass:"sell",style:e.sell},[a("Sales",{attrs:{timeRange:e.timeRange}})],1),e._v(" "),a("div",{staticClass:"efficiency",style:e.efficiency},[a("efficiency",{attrs:{timeRange:e.timeRange,role:e.role}})],1),e._v(" "),a("div",{staticClass:"competive",style:e.competive},[a("competive",{attrs:{timeRange:e.timeRange,role:e.role}})],1)]),e._v(" "),e.screenmin?a("div",{staticClass:"miniscreen"},[a("div",{staticClass:"manage",style:e.manage},[a("BusinessProfile",{attrs:{timeRange:e.timeRange}})],1),e._v(" "),a("div",{staticClass:"target",style:e.target},[a("KeyIndicators",{attrs:{timeRange:e.timeRange}})],1),e._v(" "),a("div",{staticClass:"sell",style:e.sell},[a("Sales",{attrs:{timeRange:e.timeRange}})],1),e._v(" "),a("div",{staticClass:"efficiency",style:e.efficiency},[a("efficiency",{attrs:{timeRange:e.timeRange,role:e.role}})],1),e._v(" "),a("div",{staticClass:"competive",style:e.competive},[a("competive",{attrs:{timeRange:e.timeRange,role:e.role}})],1)]):e._e()])},staticRenderFns:[]};var R={props:["timeRange"],data:function(){return{}},components:{editecharts:a("VU/8")(y,x,!1,function(e){a("F7x9")},"data-v-73adb4c1",null).exports}},S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page"},[t("editecharts",{attrs:{timeRange:this.timeRange}})],1)},staticRenderFns:[]};var _=a("VU/8")(R,S,!1,function(e){a("Ve1z")},"data-v-01380482",null);t.default=_.exports},ut2j:function(e,t){}});
//# sourceMappingURL=0.dc9a8d72ec1bda255992.js.map