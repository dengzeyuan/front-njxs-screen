webpackJsonp([0],{"5OON":function(e,t){},"9bBU":function(e,t,a){a("mClu");var i=a("FeBl").Object;e.exports=function(e,t,a){return i.defineProperty(e,t,a)}},C4MV:function(e,t,a){e.exports={default:a("9bBU"),__esModule:!0}},LlW5:function(e,t){},OwBM:function(e,t){},Pir0:function(e,t){},Ve1z:function(e,t){},WA0U:function(e,t){},bOdI:function(e,t,a){"use strict";t.__esModule=!0;var i,n=a("C4MV"),s=(i=n)&&i.__esModule?i:{default:i};t.default=function(e,t,a){return t in e?(0,s.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},mClu:function(e,t,a){var i=a("kM2E");i(i.S+i.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})},mcx5:function(e,t){},qSvD:function(e,t){},uUni:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={props:["timeRange"],watch:{timeRange:function(e){this.initdata()}},data:function(){return{loading:"true",contentstyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px",paddingLeft:"2%",paddingRight:"2%"},sideleftpad:Math.ceil(30*this.baseScreenRate)+"px",textDate:[],timeDate:[],valDate:[],valDate1:[],valDate2:[]}},mounted:function(){this.$nextTick(function(){this.initdata()})},methods:{initdata:function(){var e=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/situation/"+this.timeRange.time+"/"+this.timeRange.change).then(function(t){e.loading=!1,e.textDate=[],e.timeDate=[],e.valDate=[],e.valDate1=[],e.valDate2=[];var a=t.data.data;a.map(function(t){e.textDate.push(t.name)}),a[0].singleList.map(function(t){e.timeDate.push(t.date),e.valDate.push(t.value)}),a[1].singleList.map(function(t){e.valDate1.push(t.value)}),a[2].singleList.map(function(t){e.valDate2.push(t.value)}),e.$echarts.dispose(document.getElementById("main"));var i=e.$echarts.init(document.getElementById("main")),n={color:["rgba(192,87,96,1)","rgba(186,126,182,1)","rgba(105,98,164,1)"],title:{text:"经营概况",textStyle:{fontWeight:"normal",color:"#75becb",fontSize:Math.ceil(22*e.baseScreenRate)}},tooltip:{trigger:"axis"},legend:{data:e.textDate,textStyle:{color:"#fff"},left:"right",icon:"circle"},xAxis:[{axisLabel:{show:!0,interval:function(t,a){return"WEEK"==e.timeRange.time||("MONTH"==e.timeRange.time?t%4==0:"QUARTER"==e.timeRange.time?t%14==0:void 0)}},type:"category",boundaryGap:!1,data:e.timeDate,splitLine:{lineStyle:{color:["#21202E"]}},nameTextStyle:{color:["#21202E"]},axisLine:{lineStyle:{color:"#75becb"}}}],yAxis:[{name:"单位(元)",type:"value",splitLine:{lineStyle:{color:"#21202E"}},nameTextStyle:{color:"#75becb"},axisLine:{lineStyle:{color:"#75becb"}}}],grid:{left:"2%",right:"6%",bottom:"3%",containLabel:!0},series:[{name:"销售收入",type:"line",symbol:"circle",smooth:!0,smoothMonotone:"none",data:e.valDate,areaStyle:{opacity:.4},label:{show:!0,position:"top",color:"#fff",formatter:function(t){return"WEEK"==e.timeRange.time?t.data:"MONTH"==e.timeRange.time?t.dataIndex%4==0?t.data:"":"QUARTER"==e.timeRange.time?t.dataIndex%14==0?t.data:"":void 0}},itemStyle:{normal:{color:"rgba(61, 122, 153, 0.7)"}},lineStyle:{normal:{color:"rgba(61, 122, 153, 1)"}}},{name:"毛利",type:"line",symbol:"circle",smooth:!0,data:e.valDate1,areaStyle:{opacity:.4},label:{show:!0,position:"top",color:"#fff",formatter:function(t){return"WEEK"==e.timeRange.time?t.data:"MONTH"==e.timeRange.time?t.dataIndex%4==0?t.data:"":"QUARTER"==e.timeRange.time?t.dataIndex%14==0?t.data:"":void 0}},itemStyle:{normal:{color:"rgba(221, 108, 81, 0.7)"}},lineStyle:{normal:{color:"rgba(221, 108, 81, 1)"}}},{name:"采购成本",type:"line",symbol:"circle",smooth:!0,data:e.valDate2,areaStyle:{opacity:.4},label:{show:!0,position:"bottom",color:"#fff",formatter:function(t){return"WEEK"==e.timeRange.time?t.data:"MONTH"==e.timeRange.time?t.dataIndex%4==0?t.data:"":"QUARTER"==e.timeRange.time?t.dataIndex%14==0?t.data:"":void 0}},itemStyle:{normal:{color:"rgba(112, 106, 175, 0.7)"}},lineStyle:{normal:{color:"rgba(112, 106, 175, 1)"}}}]};i.setOption(n)}).catch(function(e){console.log("请求失败")})}}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:this.loading,expression:"loading"}],staticClass:"content",style:this.contentstyle},[t("div",{staticStyle:{"box-shadow":"none",border:"0px"},attrs:{id:"main"}})])},staticRenderFns:[]};var s=a("VU/8")(i,n,!1,function(e){a("OwBM")},"data-v-b9581148",null).exports,r={props:["timeRange"],watch:{timeRange:function(e){this.initdata()}},data:function(){return{loading:!0,dateValue:[],textValue:[],dateValue1:[],textValue1:[],topValue:[],textValue2:[],topValue1:[],topValuex:[],topValuex1:[],topValuey:[],topValuey1:[],headstyle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",fontWeight:"normal",color:"#75becb"},contentTitle:{fontSize:Math.ceil(18*this.baseScreenRate)+"px",color:"#537F8C"},contentText:{fontSize:Math.ceil(18*this.baseScreenRate)+"px",color:"#fff"},lineNum:{fontSize:Math.ceil(18*this.baseScreenRate)+"px",color:"#fff"},mainstyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px",paddingLeft:"2%",paddingRight:"2%",paddingBottom:"2%"},onlineorder:"",underlineorder:"",onlineordervalue:0,underlineordervalue:0,ordername:"",onlinecustomer:"",underlinecustomer:"",onlinecustomervalue:0,underlinecustomervalue:0,customername:"",onlineuser:"",underlineuser:"",onlineuservalue:0,underlineuservalue:0,uservaluename:""}},mounted:function(){this.initdata()},methods:{formattitleunit:function(e){"销售额"==e.name&&(e.onLineValue=e.onLineValue+"元",e.underLineValue=e.underLineValue+"元"),"订单量"==e.name&&(e.onLineValue=e.onLineValue+"个",e.underLineValue=e.underLineValue+"个"),"客单价"==e.name&&(e.onLineValue=e.onLineValue+"元",e.underLineValue=e.underLineValue+"元")},formatunit:function(e){-1===e.name.indexOf("销售额")&&-1===e.name.indexOf("利额")||(e.unit="元"),-1!==e.name.indexOf("用户")&&(e.unit="人"),-1!==e.name.indexOf("订单量")&&(e.unit="个"),"率"==e.name.substr(-1)&&(e.unit="%",e.totalValue>0&&(e.totalValue=parseInt(100*e.totalValue))),-1!==e.name.indexOf("天数")&&(e.unit="天"),"-"==e.totalValue&&(e.unit="-"),"配送及时率"==e.name&&this.$emit("sendrate",e.totalValue)},initdata:function(){var e=this,t=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/kpi/"+this.timeRange.time+"/"+this.timeRange.change).then(function(a){t.loading=!1;var i=window.innerWidth<756?["38%","45%"]:["45%","55%"],n=window.innerWidth<756?16:18;t.formattitleunit(a.data.data[0]),t.onlineorder=a.data.data[0].onLineRate,t.underlineorder=a.data.data[0].underLineRate,t.onlineordervalue=a.data.data[0].onLineValue,t.underlineordervalue=a.data.data[0].underLineValue,t.ordername=a.data.data[0].name,t.formattitleunit(a.data.data[1]),t.onlinecustomer=a.data.data[1].onLineRate,t.underlinecustomer=a.data.data[1].underLineRate,t.onlinecustomervalue=a.data.data[1].onLineValue,t.underlinecustomervalue=a.data.data[1].underLineValue,t.customername=a.data.data[1].name,t.formattitleunit(a.data.data[2]),t.onlineuser=a.data.data[2].onLineRate,t.underlineuser=a.data.data[2].underLineRate,t.onlineuservalue=a.data.data[2].onLineValue,t.underlineuservalue=a.data.data[2].underLineValue,t.uservaluename=a.data.data[2].name,e.textValue=[],a.data.data[0].singleList.map(function(a){t.formatunit(a),e.textValue.push(a)}),e.textValue1=[],a.data.data[1].singleList.map(function(a){t.formatunit(a),e.textValue1.push(a)}),t.textValue2=[],a.data.data[2].singleList.map(function(e){t.formatunit(e),t.textValue2.push(e)});for(var s=0;s<5-t.textValue2.length;s++)t.textValue2.push({name:"无",onLineValue:"0",underLineValue:"0"});e.$echarts.init(document.getElementById("main1")),Math.ceil(22*e.baseScreenRate),Math.ceil(n*e.baseScreenRate),t.ordername,Math.ceil(n*e.baseScreenRate),t.onlineordervalue,t.onlineorder,t.underlineordervalue,t.underlineorder,e.$echarts.init(document.getElementById("main2")),Math.ceil(n*e.baseScreenRate),t.customername,Math.ceil(n*e.baseScreenRate),t.onlinecustomervalue,t.onlinecustomer,t.underlinecustomervalue,t.underlinecustomer,e.$echarts.init(document.getElementById("main3")),Math.ceil(n*e.baseScreenRate),t.uservaluename,Math.ceil(n*e.baseScreenRate),t.onlineuservalue,t.onlineuser,t.underlineuservalue,t.underlineuser}).catch(function(e){console.log("请求失败")})},rowClass:function(e,t){return"backcol"}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main",style:e.mainstyle},[a("div",[a("h4",{style:e.headstyle},[e._v("关键指标")])]),e._v(" "),a("div",{staticStyle:{display:"flex","flex-direction":"row",width:"100%",height:"100%"}},[a("div",{staticClass:"textd1"},[a("div",{staticStyle:{width:"100%",height:"40%"},style:e.lineNum,attrs:{id:"head1"}},[a("div",{staticClass:"head"},[a("div",{staticClass:"head-left"},[e._v(e._s(e.ordername))]),e._v(" "),a("div",{staticClass:"head-right"},[e._m(0),e._v(" "),a("div",{staticClass:"bottom"},[a("span",[e._v(e._s(e.onlineordervalue))]),a("span",[e._v(e._s(e.underlineordervalue))])])])])]),e._v(" "),a("div",{staticClass:"table-data"},[a("table",{attrs:{rules:"rows"}},e._l(e.textValue,function(t,i){return a("tr",{key:i,style:e.contentText},[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.totalValue))]),e._v(" "),a("td",[e._v(e._s(t.unit))])])}))])]),e._v(" "),a("div",{staticClass:"textd2"},[a("div",{staticStyle:{width:"100%",height:"40%"},style:e.lineNum,attrs:{id:"head2"}},[a("div",{staticClass:"head"},[a("div",{staticClass:"head-left"},[e._v(e._s(e.customername))]),e._v(" "),a("div",{staticClass:"head-right"},[e._m(1),e._v(" "),a("div",{staticClass:"bottom"},[a("span",[e._v(e._s(e.onlinecustomervalue))]),a("span",[e._v(e._s(e.underlinecustomervalue))])])])])]),e._v(" "),a("div",{staticClass:"table-data"},[a("table",{attrs:{rules:"rows"}},e._l(e.textValue1,function(t,i){return a("tr",{key:i,style:e.contentText},[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.totalValue))]),e._v(" "),a("td",[e._v(e._s(t.unit))])])}))])]),e._v(" "),a("div",{staticClass:"textd3"},[a("div",{staticStyle:{width:"100%",height:"40%"},style:e.lineNum,attrs:{id:"head3"}},[a("div",{staticClass:"head"},[a("div",{staticClass:"head-left"},[e._v(e._s(e.uservaluename))]),e._v(" "),a("div",{staticClass:"head-right"},[e._m(2),e._v(" "),a("div",{staticClass:"bottom"},[a("span",[e._v(e._s(e.onlineuservalue))]),e._v(" "),a("span",[e._v(e._s(e.underlineuservalue))])])])])]),e._v(" "),a("div",{staticClass:"table-data"},[a("table",{attrs:{rules:"rows"}},e._l(e.textValue2,function(t,i){return a("tr",{key:i,style:e.contentText},[a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.totalValue))]),e._v(" "),a("td",[e._v(e._s(t.unit))])])}))])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("span",[this._v("线上")]),t("span",[this._v("线下")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("span",[this._v("线上")]),t("span",[this._v("线下")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top"},[t("span",[this._v("线上")]),t("span",[this._v("线下")])])}]};var o=a("VU/8")(r,l,!1,function(e){a("mcx5")},"data-v-3083cdfa",null).exports,c={props:["timeRange","timeRangevalue"],watch:{timeRange:function(e){"QUARTER"==e?this.enable=!1:(this.value="0",this.enable=!0),this.initdata()}},data:function(){return{loading:!0,enable:"QUARTER"!=this.timeRange,headstyle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",paddingRight:Math.ceil(20*this.baseScreenRate)+"px",marginBottom:Math.ceil(10*this.baseScreenRate)+"px"},headtitle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",fontWeight:"normal"},pagestyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px"},names:[{value:"1 ",label:"同比"},{value:"0",label:"环比"}],value:"0",timeDate:[],timeDate2:[],amountDate:[],amountDate1:[],textData:"WEEK",numDate:0,toolipform:{}}},mounted:function(){this.initdata()},methods:{initdata:function(){this.loading=!0;var e=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operationData/saleRate/data/"+this.timeRange.time+"/"+this.value+"/"+this.timeRange.change).then(function(t){e.loading=!1,e.toolipform.dataCurrentWeek=[],e.toolipform.dataPreWeek=[],e.toolipform.dataCurrentValue=[],e.toolipform.dataPreValue=[],e.timeDate=[],e.amountDate=[],e.amountDate1=[],t.data.data.dataCurrentWeek.map(function(t){e.timeDate.push(t.time),e.amountDate.push(t.amount),e.toolipform.dataCurrentWeek.push(t.time),e.toolipform.dataCurrentValue.push(t.amount)}),t.data.data.dataPreWeek.map(function(t){e.amountDate1.push(t.amount),e.timeDate2.push(t.time),e.toolipform.dataPreWeek.push(t.time),e.toolipform.dataPreValue.push(t.amount)}),e.initbar(e.toolipform)}).catch(function(e){console.log("请求失败")})},initbar:function(e){var t=document.getElementById("saldata");this.$echarts.dispose(t);var a=this.$echarts.init(t),i={tooltip:{trigger:"axis",formatter:function(t){function a(e){var t=/\d{1,3}(?=(\d{3})+$)/g;return e.replace(/^(\d+)((\.\d+)?)$/,function(e,a,i){return a.replace(t,"$&,")+i})}for(var i=0;i<e.dataCurrentWeek.length;i++)if(e.dataCurrentWeek[i]==t[0].name)return"<div>"+e.dataCurrentWeek[i]+":"+a(String(e.dataCurrentValue[i]))+"<br />"+e.dataPreWeek[i]+":"+a(String(e.dataPreValue[i]))+"</div>"}},xAxis:[{type:"category",data:this.timeDate,splitLine:{lineStyle:{color:["#21202E"]}},nameTextStyle:{color:["#21202E"]},axisLine:{lineStyle:{color:"#75becb"}}}],yAxis:[{name:"单位(元)",nameGap:"5",type:"value",splitLine:{lineStyle:{color:"#21202E"}},nameTextStyle:{color:"#75becb"},axisLine:{lineStyle:{color:"#75becb"}}}],grid:{top:"15%",left:"2%",right:"4%",bottom:"5%",containLabel:!0},series:[{name:"比较数据",type:"bar",data:this.amountDate1,barWidth:12,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5EFCF6"},{offset:1,color:"#5D27A0"}])}}},{name:"当前数据",type:"bar",data:this.amountDate,barWidth:12,itemStyle:{normal:{color:new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#FECC44"},{offset:1,color:"#EC6783"}])}}}]};a.setOption(i)}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"content",style:e.pagestyle},[a("div",{staticClass:"head",style:e.headstyle},[a("h4",{style:e.headtitle},[e._v("销售同环化")]),e._v(" "),a("el-select",{staticClass:"namechange",attrs:{disabled:e.enable,size:"mini",name:"namechange"},on:{change:function(t){e.initdata(e.value)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.names,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("div",{attrs:{id:"saldata"}})])},staticRenderFns:[]};var u=a("VU/8")(c,d,!1,function(e){a("WA0U"),a("Pir0")},"data-v-f7173116",null).exports,m=a("bOdI"),h=a.n(m),f={props:["role","propsendrate"],data:function(){return{loading:"true",contentleft:{},headtitle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",fontWeight:"normal"},headstyle:{fontSize:Math.ceil(22*this.baseScreenRate)+"px",height:Math.ceil(22*this.baseScreenRate)+"px",paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",marginBottom:Math.ceil(15*this.baseScreenRate)+"px"},pagestyle:{paddingTop:Math.ceil(23*this.baseScreenRate)+"px"},contentTitle:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",color:"#537F8C",paddingBottom:Math.ceil(20*this.baseScreenRate)+"px"},leftContent:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"right",float:"left"},rightContent:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"center"},sendrate:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"center"},customer:{fontSize:Math.ceil(20*this.baseScreenRate)+"px",textAlign:"center"},rightcontentfirst:h()({color:"#537F8C",height:Math.ceil(19*this.baseScreenRate)+"px"},"height","20%"),contentfirst:{color:"#537F8C",height:Math.ceil(19*this.baseScreenRate)+"px"},contentsecond:{minHeight:Math.ceil(19*this.baseScreenRate)+"px",fontSize:Math.ceil(24*this.baseScreenRate)+"px",color:"#537F8C",paddingTop:Math.ceil(45*this.baseScreenRate)+"px",clear:"both"},cententRight:{paddingRight:Math.ceil(50*this.baseScreenRate)+"px"},echartstyle:{margin:"0 auto",height:"100%",width:"100%"},formstyle:{fontSize:Math.ceil(24*this.baseScreenRate)+"px",paddingTop:Math.ceil(30*this.baseScreenRate)+"px"},opacitys:0,hidefromfalg:!1,responseDate:{avgEfficiency:"",personEfficiency:"",distributionRate:"",customerRate:""}}},components:{},mounted:function(){this.$nextTick(function(){this.initdata()})},methods:{initdata:function(){var e=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/efficiency").then(function(t){if(e.loading=!1,t.data.data){e.responseDate=t.data.data;var a=[[{value:100-Number(t.data.data.distributionRate),name:""},{value:t.data.data.distributionRate,name:"配送及时率"}],[{value:100-Number(t.data.data.customerRate),name:""},{value:t.data.data.customerRate,name:"客户满意度"}]];e.initleftecharts("main-first",e.propsendrate+"%",a[0]),e.initleftecharts("main-two",t.data.data.customerRate+"%",a[1])}})},submitefficty:function(){var e=this;this.loading=!0,this.axios.post("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/efficiency",{avgEfficiency:this.responseDate.avgEfficiency,personEfficiency:this.responseDate.personEfficiency,distributionRate:this.responseDate.distributionRate,customerRate:this.responseDate.customerRate}).then(function(t){"SUCCESS"==t.data.status&&(e.clickdit(),e.initdata())})},clickdit:function(){this.hidefromfalg=!this.hidefromfalg},hoveredit:function(e){this.opacitys=e},initleftecharts:function(e,t,a){var i=this.$echarts.init(document.getElementById(e)),n={grid:{left:0,bottom:0,top:0,right:0},title:{text:t,x:"center",y:"center",textStyle:{fontWeight:"normal",color:"main"==e?"#49CDD9":"#C551A3",fontSize:Math.ceil(16*this.baseScreenRate)}},series:[{color:"main-first"==e?["#4f4f56",new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1C0C99"},{offset:1,color:"#49F9FF"}])]:["#4f4f56",new this.$echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#BA51E9"},{offset:1,color:"#E852B0"}])],name:"访问来源",type:"pie",center:["50%","50%"],radius:["70%","85%"],avoidLabelOverlap:!1,hoverAnimation:!1,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:a}]};i.setOption(n)}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"efficiency-page",style:e.pagestyle},[a("div",{staticClass:"head",style:e.headstyle},[a("h4",{style:e.headtitle},[e._v("经营效率")]),e._v(" "),"manage"==e.role?a("span",{staticClass:"el-icon-more",staticStyle:{cursor:"pointer"},style:{opacity:e.opacitys},on:{click:function(t){e.clickdit()},mouseover:function(t){e.hoveredit(1)},mouseout:function(t){e.hoveredit(0)}}}):e._e()]),e._v(" "),a("div",{staticClass:"content-left",style:e.contentleft},[a("div",{staticClass:"contentfirst",style:e.contentfirst},[a("span",{style:e.leftContent},[e._v("坪效")]),e._v(" "),a("span",{style:e.leftContent},[e._v(e._s(e.responseDate.avgEfficiency+" 元/平"))])]),e._v(" "),a("div",{staticClass:"contentsecond",style:e.contentsecond},[a("span",{style:e.leftContent},[e._v("人效")]),e._v(" "),a("span",{style:e.leftContent},[e._v(e._s(e.responseDate.personEfficiency+" 元/人"))])])]),e._v(" "),a("div",{staticClass:"content-right",style:e.cententRight},[a("div",{staticClass:"contentfirst",style:e.rightcontentfirst},[a("span",{style:e.sendrate},[e._v("配送及时率")]),a("span",{style:e.customer},[e._v("客户满意度")])]),e._v(" "),a("div",{staticClass:"contentfirst",staticStyle:{height:"79%"}},[a("span",{staticStyle:{height:"96%"}},[a("div",{style:e.echartstyle,attrs:{id:"main-first"}})]),e._v(" "),a("span",{staticStyle:{height:"96%"}},[a("div",{style:e.echartstyle,attrs:{id:"main-two"}})])])]),e._v(" "),"manage"==e.role?a("div",{directives:[{name:"show",rawName:"v-show",value:e.hidefromfalg,expression:"hidefromfalg"}],staticClass:"hideform",style:e.formstyle},[a("form",{ref:"forms",attrs:{action:"",novalidate:""}},[a("table",{staticStyle:{color:"#ffffff"},attrs:{border:"1",cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td",[e._v("坪效")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.responseDate.avgEfficiency,expression:"responseDate.avgEfficiency"}],attrs:{name:"avgEfficiency",type:"number"},domProps:{value:e.responseDate.avgEfficiency},on:{input:function(t){t.target.composing||e.$set(e.responseDate,"avgEfficiency",t.target.value)}}}),e._v("元/平")])]),e._v(" "),a("tr",[a("td",[e._v("人效")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.responseDate.personEfficiency,expression:"responseDate.personEfficiency"}],attrs:{name:"personEfficiency",type:"number"},domProps:{value:e.responseDate.personEfficiency},on:{input:function(t){t.target.composing||e.$set(e.responseDate,"personEfficiency",t.target.value)}}}),e._v("元/人")])]),e._v(" "),a("tr",[a("td",[e._v("配送及时率")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.responseDate.distributionRate,expression:"responseDate.distributionRate"}],attrs:{name:"distributionRate",type:"number"},domProps:{value:e.responseDate.distributionRate},on:{input:function(t){t.target.composing||e.$set(e.responseDate,"distributionRate",t.target.value)}}}),e._v("%")])]),e._v(" "),a("tr",[a("td",[e._v("客户满意度")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.responseDate.customerRate,expression:"responseDate.customerRate"}],attrs:{name:"customerRate",type:"number"},domProps:{value:e.responseDate.customerRate},on:{input:function(t){t.target.composing||e.$set(e.responseDate,"customerRate",t.target.value)}}}),e._v("%")])])]),e._v(" "),a("input",{staticClass:"submit",attrs:{type:"button",readonly:"readonly",value:"确定"},on:{click:function(t){return t.stopPropagation(),e.submitefficty(t)}}})]),e._v(" "),a("span",{staticClass:"closeform el-icon-close",on:{click:function(t){e.clickdit()}}})]):e._e()])},staticRenderFns:[]};var p={props:["role"],data:function(){var e;return e={loading:!0,rownumber:0,colnumber:0},h()(e,"loading","true"),h()(e,"headstyle",{fontSize:Math.ceil(22*this.baseScreenRate)+"px",fontWeight:"normal"}),h()(e,"pagestyle",{paddingLeft:Math.ceil(40*this.baseScreenRate)+"px",paddingTop:Math.ceil(23*this.baseScreenRate)+"px"}),h()(e,"echartstyle",{width:"50%",height:"90%"}),h()(e,"formstyle",{fontSize:Math.ceil(24*this.baseScreenRate)+"px",paddingTop:Math.ceil(30*this.baseScreenRate)+"px"}),h()(e,"formstyletwo",{fontSize:Math.ceil(18*this.baseScreenRate)+"px"}),h()(e,"submitefficty",{padding:"1% 2%",fontSize:Math.ceil(18*this.baseScreenRate)+"px"}),h()(e,"tablerightstyle",{fontSize:Math.ceil(18*this.baseScreenRate)+"px"}),h()(e,"opacitys",0),h()(e,"hidefromfalg",!1),h()(e,"radardata",{yxis:[],yxislist:[],legnedlist:[],legnedvalue:[],serieslist:[],yxismax:{},legnedlistobj:[],yxisobj:[],rowcolobj:[]}),h()(e,"cloneelement",""),e},components:{},mounted:function(){this.$nextTick(function(){this.initdata()})},methods:{addrowcol:function(e,t){e=Number(e),t=Number(t);for(var a=this.radardata.legnedlistobj.length,i=0,n=0;n<this.radardata.rowcolobj.length;n++)i<this.radardata.rowcolobj[n].length&&(i=this.radardata.rowcolobj[n].length);if(this.radardata.legnedlistobj.slice(0,e).length<e)for(var s=a;s<e;s++)this.radardata.legnedlistobj.push({title:""}),this.radardata.rowcolobj[s]=[];else this.radardata.legnedlistobj=this.radardata.legnedlistobj.slice(0,e),this.radardata.rowcolobj=this.radardata.rowcolobj.slice(0,e);if(i<t){this.radardata.yxisobj=this.radardata.yxisobj.slice(0,t);for(var r=this.radardata.yxisobj.length;r<t;r++)this.radardata.yxisobj.push({title:""});for(var l=0;l<e;l++)if(0==this.radardata.rowcolobj[l].length)for(var o=0;o<t;o++)this.radardata.rowcolobj[l].push({targetValue:"",businessName:"",targetName:""});else for(var c=this.radardata.rowcolobj[l].length;c<t;c++)this.radardata.rowcolobj[l].push({targetValue:"",businessName:"",targetName:""})}else{this.radardata.yxisobj=this.radardata.yxisobj.slice(0,t);for(var d=0;d<e;d++)if(0==this.radardata.rowcolobj[d].length)for(var u=0;u<t;u++)this.radardata.rowcolobj[d].push({targetValue:"",businessName:"",targetName:""});else this.radardata.rowcolobj[d]=this.radardata.rowcolobj[d].slice(0,t)}},changevalue:function(e,t,a){this.radardata.rowcolobj.forEach(function(i,n){i.forEach(function(i,n){n==a&&t.businessName==i.businessName&&(i.targetName=e.yxis[a])})})},changeyxisobj:function(e,t,a){var i="";this.radardata.rowcolobj.forEach(function(e,n){e.forEach(function(e,n){""!==e.businessName&&(i=e.businessName),n==a&&(""==t.title?e.targetName="":(e.targetName=t.title,e.businessName=i))})})},changelegned:function(e,t,a){this.radardata.rowcolobj[a].forEach(function(e,a){""==t.title?e.businessName="":e.businessName=t.title})},initdata:function(){var e=this;this.axios.get("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition").then(function(t){if(e.loading=!1,(t=t).data.data)if(0==t.data.data.length){e.radardata={yxis:["销售额","订单量","支付用户","新增用户"],yxislist:[{text:"销售额",max:1e4},{text:"订单量",max:1e4},{text:"支付用户",max:1e4},{text:"新增用户",max:1e4}],legnedlist:["宁家鲜生","沃尔玛"],legnedvalue:["宁家鲜生"[5e3],"沃尔玛"[7e3]],serieslist:[],yxismax:{"支付用户":1e4,"新增用户":1e4,"订单量":1e4,"销售额":1e4},legnedlistobj:[{title:"宁家鲜生"},{title:"沃尔玛"}],yxisobj:[{title:"销售额"},{title:"订单量"},{title:"支付用户"},{title:"新增用户"}],rowcolobj:[[{targetValue:2e3,businessName:"宁家鲜生",targetName:"销售额"},{targetValue:3e3,businessName:"宁家鲜生",targetName:"订单量"},{targetValue:4e3,businessName:"宁家鲜生",targetName:"支付用户"},{targetValue:5e3,businessName:"宁家鲜生",targetName:"新增用户"}],[{targetValue:4e3,businessName:"沃尔玛",targetName:"销售额"},{targetValue:5e3,businessName:"沃尔玛",targetName:"销售额"},{targetValue:6e3,businessName:"沃尔玛",targetName:"销售额"},{targetValue:7e3,businessName:"沃尔玛",targetName:"销售额"}]]};var a=["#0074ff","#ffde00","#f93c40","#11c5d3","#653cbb","#ff8400"];a=a.concat(e.$d3.schemeCategory10),e.initleftecharts("efficienct-radar",e.radardata,a)}else{e.radardata={yxis:[],yxislist:[],legnedlist:[],legnedvalue:{},serieslist:[],yxismax:{},legnedlistobj:[],yxisobj:[],rowcolobj:[]};var i=["#0074ff","#ffde00","#f93c40","#11c5d3","#653cbb","#ff8400"];i=i.concat(e.$d3.schemeCategory10),t.data.data.forEach(function(t,a){-1==e.radardata.legnedlist.indexOf(t.businessName)&&(e.radardata.legnedlist.push(t.businessName),e.radardata.legnedlistobj.push({title:t.businessName})),-1==e.radardata.yxis.indexOf(t.targetName)&&(e.radardata.yxis.push(t.targetName),e.radardata.yxislist.push({text:t.targetName,max:e.radardata.yxismax[t.targetName]}),e.radardata.yxisobj.push({title:t.targetName}))}),e.radardata.legnedlist.forEach(function(a,i){e.radardata.rowcolobj[i]=[],e.radardata.yxis.forEach(function(n,s){t.data.data.forEach(function(t,s){t.targetName==n&&t.businessName==a&&e.radardata.rowcolobj[i].push({targetValue:t.targetValue,businessName:a,targetName:n})})})}),e.radardata.yxis.forEach(function(a,i){e.radardata.yxismax[a]="";var n=0;t.data.data.forEach(function(e,t){a==e.targetName&&Number(n)<Number(e.targetValue)&&(n=Number(e.targetValue))}),e.radardata.yxismax[a]=n}),e.radardata.yxislist.forEach(function(t,a){t.max=e.radardata.yxismax[t.text]}),e.radardata.legnedlist.forEach(function(a,n){e.radardata.legnedvalue[a]=[],t.data.data.forEach(function(t,i){t.businessName==a&&e.radardata.legnedvalue[a].push(Number(t.targetValue))}),e.radardata.serieslist.push({name:a,value:e.radardata.legnedvalue[a],areaStyle:{normal:{color:i[n],opacity:.2}},symbolSize:0,itemStyle:{normal:{borderColor:i[n],borderWidth:2}},lineStyle:{normal:{opacity:.2}}})}),e.initleftecharts("efficienct-radar",e.radardata,i)}}).catch(function(e){})},submitcompetive:function(){var e=this;this.clickdit(),this.loading=!0;var t=[];this.radardata.rowcolobj.forEach(function(e,a){var i=!1;e.forEach(function(e,t){""===e.businessName&&""===e.targetName&&""===e.targetValue||(i=!0)}),i?e.forEach(function(e,a){t.push(e)}):e=null});var a=[];t.forEach(function(e,t){""===e.businessName&&""===e.targetValue&&""===e.targetName||a.push(e)}),this.axios.post("http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition",a).then(function(t){"SUCCESS"==t.data.status&&e.initdata()})},clickdit:function(){this.hidefromfalg=!this.hidefromfalg},hoveredit:function(e){this.opacitys=e},initleftecharts:function(e,t,a){window.innerWidth;this.$echarts.dispose(document.getElementById(e));var i=this.$echarts.init(document.getElementById(e)),n={color:a,tooltip:{trigger:"axis"},legend:{show:!0,icon:"circle",bottom:0,center:0,itemWidth:Math.ceil(16*this.baseScreenRate),itemHeight:Math.ceil(16*this.baseScreenRate),textStyle:{fontSize:Math.ceil(18*this.baseScreenRate),color:"#ffffff"},data:t.legnedlist},radar:[{indicator:t.yxislist,textStyle:{color:"red"},center:["50%","50%"],radius:"50%",startAngle:90,splitNumber:0,nameGap:5,name:{formatter:"{value}",textStyle:{fontSize:Math.ceil(18*this.baseScreenRate),color:"#3C6E81"}},splitArea:{areaStyle:{color:["transparent","transparent)","rgba(114, 172, 209, 0)","transparent","rgba(114, 172, 209, 0)"]}},axisLine:!1}],series:[{name:"雷达图",type:"radar",tooltip:{trigger:"item"},itemStyle:{emphasis:{lineStyle:{width:2}}},emphasis:{areaStyle:{opacity:.3}},data:t.serieslist}]};i.setOption(n)}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"efficiency-page",style:e.pagestyle},[a("div",{staticClass:"head"},[a("h4",{style:e.headstyle},[e._v("竞争力分析")]),e._v(" "),"manage"==e.role?a("span",{staticClass:"el-icon-more",staticStyle:{cursor:"pointer"},style:{opacity:e.opacitys},on:{click:function(t){e.clickdit()},mouseover:function(t){e.hoveredit(1)},mouseout:function(t){e.hoveredit(0)}}}):e._e()]),e._v(" "),a("div",{staticStyle:{display:"flex",width:"100%",height:"100%"}},[a("div",{ref:"efficienctRadar",style:e.echartstyle,attrs:{id:"efficienct-radar"}}),e._v(" "),a("div",{staticStyle:{height:"90%",width:"50%",position:"relative"}},[a("div",{staticClass:"hideform",style:e.formstyletwo},[a("div",{staticClass:"line"}),e._v(" "),a("form",{staticStyle:{width:"100%"}},[a("table",{style:e.tablerightstyle,attrs:{border:"0",cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td",[e._v(" ")]),e._l(e.radardata.yxisobj,function(t,i){return a("td",{key:i},[e._v(e._s(t.title))])})],2),e._v(" "),e._l(e.radardata.legnedlistobj,function(t,i){return a("tr",{key:i,staticClass:"colortd"},[a("td",[e._v(e._s(t.title))]),e._v(" "),e._l(e.radardata.rowcolobj[i],function(t,i){return a("td",{key:i},[e._v(e._s(t.targetValue))])})],2)})],2)])])])]),e._v(" "),"manage"==e.role?a("div",{directives:[{name:"show",rawName:"v-show",value:e.hidefromfalg,expression:"hidefromfalg"}],staticClass:"hideform",style:e.formstyle},[a("div",{staticClass:"line"}),e._v(" "),a("form",[a("div",{staticStyle:{"margin-bottom":"1%"}},[a("span",{staticStyle:{"font-size":"0.8em"}},[e._v("行:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.rownumber,expression:"rownumber"}],staticStyle:{width:"20%"},attrs:{type:"number"},domProps:{value:e.rownumber},on:{input:function(t){t.target.composing||(e.rownumber=t.target.value)}}}),e._v(" "),a("span",{staticStyle:{"padding-left":"5%","font-size":"0.8em"}},[e._v("列:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.colnumber,expression:"colnumber"}],staticStyle:{width:"20%"},attrs:{type:"number"},domProps:{value:e.colnumber},on:{input:function(t){t.target.composing||(e.colnumber=t.target.value)}}}),e._v(" "),a("span",{staticClass:"addrow",on:{click:function(t){e.addrowcol(e.rownumber,e.colnumber)}}},[e._v("确定")])]),e._v(" "),a("table",{attrs:{border:"1",cellpadding:"0",cellspacing:"0"}},[a("tr",[a("td",[e._v(" ")]),e._l(e.radardata.yxisobj,function(t,i){return a("td",{key:i},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"y.title"}],attrs:{type:"text"},domProps:{value:t.title},on:{change:function(a){e.changeyxisobj(e.radardata,t,i)},input:function(a){a.target.composing||e.$set(t,"title",a.target.value)}}})])})],2),e._v(" "),e._l(e.radardata.legnedlistobj,function(t,i){return a("tr",{key:i},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"tr.title"}],attrs:{type:"text"},domProps:{value:t.title},on:{change:function(a){e.changelegned(e.radardata,t,i)},input:function(a){a.target.composing||e.$set(t,"title",a.target.value)}}})]),e._v(" "),e._l(e.radardata.rowcolobj[i],function(t,i){return a("td",{key:i},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.targetValue,expression:"td.targetValue"}],attrs:{type:"number"},domProps:{value:t.targetValue},on:{change:function(a){e.changevalue(e.radardata,t,i)},input:function(a){a.target.composing||e.$set(t,"targetValue",a.target.value)}}})])})],2)})],2),e._v(" "),a("input",{staticClass:"submit",attrs:{type:"button",readonly:"readonly",value:"确定"},on:{click:function(t){return t.stopPropagation(),e.submitcompetive(t)}}})]),e._v(" "),a("span",{staticClass:"closeform el-icon-close",on:{click:function(t){e.clickdit()}}})]):e._e()])},staticRenderFns:[]};var b={props:["timeRange"],data:function(){return{effectiverate:0,screenmin:window.innerWidth<756,role:this.$route.params.id,sideleftpad:Math.ceil(25*this.baseScreenRate)+"px",sidetoppad:Math.ceil(25*this.baseScreenRate)+"px",manage:{height:Math.ceil(486*this.baseScreenRate)+"px",width:Math.ceil(1215*this.baseScreenRate)+"px"},target:{height:Math.ceil(463*this.baseScreenRate)+"px",width:Math.ceil(900*this.baseScreenRate)+"px",marginTop:Math.ceil(25*this.baseScreenRate)+"px"},rightside:{paddingLeft:Math.ceil(25*this.baseScreenRate)+"px",paddingTop:Math.ceil(25*this.baseScreenRate)+"px"},sell:{width:Math.ceil(633*this.baseScreenRate)+"px",height:Math.ceil(244*this.baseScreenRate)+"px"},efficiency:{height:Math.ceil(217*this.baseScreenRate)+"px",width:Math.ceil(633*this.baseScreenRate)+"px",marginTop:Math.ceil(25*this.baseScreenRate)+"px"},competive:{height:Math.ceil(463*this.baseScreenRate)+"px",width:Math.ceil(948*this.baseScreenRate)+"px",marginTop:Math.ceil(25*this.baseScreenRate)+"px",marginLeft:Math.ceil(-315*this.baseScreenRate)+"px"}}},components:{efficiency:a("VU/8")(f,v,!1,function(e){a("5OON")},"data-v-5f662242",null).exports,competive:a("VU/8")(p,g,!1,function(e){a("LlW5")},"data-v-3836d118",null).exports,BusinessProfile:s,KeyIndicators:o,Sales:u},methods:{sendratefunc:function(e){this.effectiverate=e}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"editecharts"},[e.screenmin?e._e():a("div",{staticClass:"leftside",style:{paddingLeft:e.sideleftpad,paddingTop:e.sidetoppad}},[a("div",{staticClass:"manage",style:e.manage},[a("div",{staticClass:"trianglet"}),e._v(" "),a("div",{staticClass:"triangler"}),e._v(" "),a("div",{staticClass:"triangleb"}),e._v(" "),a("div",{staticClass:"trianglel"}),e._v(" "),a("BusinessProfile",{attrs:{timeRange:e.timeRange}})],1),e._v(" "),a("div",{staticClass:"target",style:e.target},[a("div",{staticClass:"trianglet"}),e._v(" "),a("div",{staticClass:"triangler"}),e._v(" "),a("div",{staticClass:"triangleb"}),e._v(" "),a("div",{staticClass:"trianglel"}),e._v(" "),a("KeyIndicators",{attrs:{timeRange:e.timeRange},on:{sendrate:e.sendratefunc}})],1)]),e._v(" "),e.screenmin?e._e():a("div",{staticClass:"rightside",style:e.rightside},[a("div",{staticClass:"sell",style:e.sell},[a("div",{staticClass:"trianglet"}),e._v(" "),a("div",{staticClass:"triangler"}),e._v(" "),a("div",{staticClass:"triangleb"}),e._v(" "),a("div",{staticClass:"trianglel"}),e._v(" "),a("Sales",{attrs:{timeRange:e.timeRange}})],1),e._v(" "),a("div",{staticClass:"efficiency",style:e.efficiency},[a("div",{staticClass:"trianglet"}),e._v(" "),a("div",{staticClass:"triangler"}),e._v(" "),a("div",{staticClass:"triangleb"}),e._v(" "),a("div",{staticClass:"trianglel"}),e._v(" "),a("efficiency",{attrs:{timeRange:e.timeRange,role:e.role,propsendrate:e.effectiverate}})],1),e._v(" "),a("div",{staticClass:"competive",style:e.competive},[a("div",{staticClass:"trianglet"}),e._v(" "),a("div",{staticClass:"triangler"}),e._v(" "),a("div",{staticClass:"triangleb"}),e._v(" "),a("div",{staticClass:"trianglel"}),e._v(" "),a("competive",{attrs:{timeRange:e.timeRange,role:e.role}})],1)]),e._v(" "),e.screenmin?a("div",{staticClass:"miniscreen"},[a("div",{staticClass:"manage",style:e.manage},[a("div",{staticClass:"trianglet"}),e._v(" "),a("div",{staticClass:"triangler"}),e._v(" "),a("div",{staticClass:"triangleb"}),e._v(" "),a("div",{staticClass:"trianglel"}),e._v(" "),a("BusinessProfile",{attrs:{timeRange:e.timeRange}})],1),e._v(" "),a("div",{staticClass:"target",style:e.target},[a("div",{staticClass:"trianglet"}),e._v(" "),a("div",{staticClass:"triangler"}),e._v(" "),a("div",{staticClass:"triangleb"}),e._v(" "),a("div",{staticClass:"trianglel"}),e._v(" "),a("KeyIndicators",{attrs:{timeRange:e.timeRange},on:{sendrate:e.sendratefunc}})],1),e._v(" "),a("div",{staticClass:"sell",style:e.sell},[a("div",{staticClass:"trianglet"}),e._v(" "),a("div",{staticClass:"triangler"}),e._v(" "),a("div",{staticClass:"triangleb"}),e._v(" "),a("div",{staticClass:"trianglel"}),e._v(" "),a("Sales",{attrs:{timeRange:e.timeRange}})],1),e._v(" "),a("div",{staticClass:"efficiency",style:e.efficiency},[a("div",{staticClass:"trianglet"}),e._v(" "),a("div",{staticClass:"triangler"}),e._v(" "),a("div",{staticClass:"triangleb"}),e._v(" "),a("div",{staticClass:"trianglel"}),e._v(" "),a("efficiency",{attrs:{timeRange:e.timeRange,role:e.role,propsendrate:e.effectiverate}})],1),e._v(" "),a("div",{staticClass:"competive",style:e.competive},[a("div",{staticClass:"trianglet"}),e._v(" "),a("div",{staticClass:"triangler"}),e._v(" "),a("div",{staticClass:"triangleb"}),e._v(" "),a("div",{staticClass:"trianglel"}),e._v(" "),a("competive",{attrs:{timeRange:e.timeRange,role:e.role}})],1)]):e._e()])},staticRenderFns:[]};var x={props:["timeRange"],data:function(){return{}},components:{editecharts:a("VU/8")(b,y,!1,function(e){a("qSvD")},"data-v-aac2fa86",null).exports}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page"},[t("editecharts",{attrs:{timeRange:this.timeRange}})],1)},staticRenderFns:[]};var R=a("VU/8")(x,_,!1,function(e){a("Ve1z")},"data-v-01380482",null);t.default=R.exports}});
//# sourceMappingURL=0.a0f7fe4067406bf88029.js.map