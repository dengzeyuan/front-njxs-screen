<template>
    <div class="content">
    <div class="main">
        <div class="textd1">
        <div id="main1" style="width: 100%;height:40%"></div>        
            <div class="table-data">
                <el-table
                :data="textValue"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    align="center"
                    >
                </el-table-column>
                <el-table-column
                    prop="onLineValue"
                    label="线上"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="underLineValue"
                    label="线下"
                    align="center"
                >
                </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="textd2">
           <div id="main2" style="width: 100%;height:40%"></div>
            <div class="table-data">
                <el-table
                :data="textValue1"
                style="width:100%;height:100%">
                <el-table-column
                    prop="name"
                    align="center"
                    height='30px'
                    >
                </el-table-column>
                <el-table-column
                    prop="onLineValue"
                    label="线上"
                    align="center"
                    
                >
                </el-table-column>
                <el-table-column
                    prop="underLineValue"
                    label="线下"
                    align="center"
                    width="90px"
                    height='30px'
                >
                </el-table-column>
                </el-table>
            </div>
        </div>
        <div class="textd3">
           <div id="main3" style="width: 100%;height:40%"></div>
            <div class="table-data">
                <el-table
                :data="textValue"
                style="width:100%;height:100%">
                <el-table-column
                    prop="name"
                    align="center"
                    height='30px'
                    >
                </el-table-column>
                <el-table-column
                    prop="onLineValue"
                    label="线上"
                    align="center"
                >
                </el-table-column>
                <el-table-column
                    prop="underLineValue"
                    label="线下"
                    align="center"

                >
                </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
    </div>    
</template>
<script>
export default {
    data() {
        return {
            dateValue: [],
            textValue: [],
            dateValue1: [],
            textValue1: [],
            topValue: [],
            textValue3:[],
            topValue1: [],
            topValuex: [],
            topValuex1: [],
            topValuey: [],
            topValuey1: []
        }
    },
    mounted() {
                
        this.axios
        .get(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/kpi/WEEK"
        )
        .then(res => {
            this.topValue.push(res.data.data[0].onLineValue)
            this.topValue1.push(res.data.data[0].underLineValue)
            this.topValuex.push(res.data.data[1].onLineValue)
            this.topValuex1.push(res.data.data[1].underLineValue)
            // this.topValuey.push(res.data.data[2].onLineValue)
            // this.topValuey1.push(res.data.data[2].underLineValue)
            this.dateValue = res.data.data[0]
            this.dateValue1 = res.data.data[1]
            // console.log(this.dateValue.singleList)
            this.dateValue.singleList.map(val => {
                this.textValue.push(val)
            })
            this.dateValue1.singleList.map(val => {
                this.textValue1.push(val)
            })
            // this.lineName.push(this.dateValue.name)

        //指定图表的配置项和数据
        var myChart1 = this.$echarts.init(document.getElementById('main1'));
        // 指定图表的配置项和数据
        var option1 = {
            title : {
                text: '关键指标',
                textStyle: {  
                    fontWeight: 'normal',              //标题颜色  
                    color: '#75becb',
                    fontSize: 12,
                },
            },
            opcity: 0.4,
            color:['rgba(255, 114, 153, 0.7)','rgba(255, 186, 78, 0.7)'],  //手动设置每个图例的颜色
            legend: {  //图例组件
                //right:100,  //图例组件离右边的距离
                orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                width:40,      //图行例组件的宽度,默认自适应
                x : '50%',   //图例显示在右边
                y: '35%',   //图例在垂直方向上面显示居中
                itemWidth:5,  //图例标记的图形宽度
                itemHeight:5, //图例标记的图形高度
                data:['线上'+this.topValue,'线下'+this.topValue1],
                textStyle:{    //图例文字的样式
                    color:'#fff',  //文字颜色
                    fontSize:11,    //文字大小
                }
            },
            graphic:{
                type:'text',
                left:'15%',
                top:'45%',
                style:{
                    text:this.dateValue.name,
                    // textAlign:'left',
                    fill:'#fff',
                    width:10,
                    height:10
                },
            },
            series : [ //系列列表
                {
                    // name:'随访次数',  //系列名称
                    type:'pie',   //类型 pie表示饼图
                    center:['22%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                    radius : ['35%', '45%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                    itemStyle : {  //图形样式
                        normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : false  //平常不显示
                            },
                            labelLine : {     //标签的视觉引导线样式
                                show : false  //平常不显示
                            }
                        },
                        emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '10',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data:[
                        {value:30, name:'线上'+this.topValue},
                        {value:10, name:'线下'+this.topValue1},
                    ]
                }
            ]
        }

        //使用刚指定的配置项和数据显示图表。        
        myChart1.setOption(option1);

        //指定图表的配置项和数据
        var myChart2 = this.$echarts.init(document.getElementById('main2'));
        // 指定图表的配置项和数据
        var option2 = {
            color:['rgba(244, 54, 255, 0.7)','rgba(255, 143, 216, 0.7)'],  //手动设置每个图例的颜色
            legend: {  //图例组件
                //right:100,  //图例组件离右边的距离
                orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                width:40,      //图行例组件的宽度,默认自适应
                x : '50%',   //图例显示在右边
                y: '35%',   //图例在垂直方向上面显示居中
                itemWidth:5,  //图例标记的图形宽度
                itemHeight:5, //图例标记的图形高度
                data:['线上'+this.topValuex,'线下'+this.topValuex1],
                textStyle:{    //图例文字的样式
                    color:'#fff',  //文字颜色
                    fontSize:11,    //文字大小
                }
            },
            graphic:{
                type:'text',
                left:'15%',
                top:'45%',
                style:{
                    text:this.dateValue1.name,
                    // textAlign:'left',
                    fill:'#fff',
                    width:10,
                    height:10
                },
            },
            series : [ //系列列表
                {
                    // name:'随访次数',  //系列名称
                    type:'pie',   //类型 pie表示饼图
                    center:['22%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                    radius : ['35%', '45%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                    itemStyle : {  //图形样式
                        normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : false  //平常不显示
                            },
                            labelLine : {     //标签的视觉引导线样式
                                show : false  //平常不显示
                            }
                        },
                        emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '10',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data:[
                        {value:30, name:'线上'+this.topValuex},
                        {value:10, name:'线下'+this.topValuex1},
                    ]
                }
            ]
        }

        //使用刚指定的配置项和数据显示图表。        
        myChart2.setOption(option2);

         //指定图表的配置项和数据
        var myChart3 = this.$echarts.init(document.getElementById('main3'));
        // 指定图表的配置项和数据
        var option3 = {
            color:['rgba(74, 163, 112, 0.7)','rgba(183, 201, 175, 0.7)'],  //手动设置每个图例的颜色
                    // effectOption: {backgroundColor: 'rgba(0, 0, 0, 0.2)'},            
            legend: {  //图例组件
                //right:100,  //图例组件离右边的距离
                orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                width:40,      //图行例组件的宽度,默认自适应
                x : '50%',   //图例显示在右边
                y: '35%',   //图例在垂直方向上面显示居中
                itemWidth:5,  //图例标记的图形宽度
                itemHeight:5, //图例标记的图形高度
                data:['线上'+this.topValue,'线下'+this.topValue1],
                textStyle:{    //图例文字的样式
                    color:'#fff',  //文字颜色
                    fontSize:11,    //文字大小
                }
            },
            graphic:{
                type:'text',
                left:'15%',
                top:'45%',
                style:{
                    text:this.dateValue.name,
                    // textAlign:'left',
                    fill:'#fff',
                    width:10,
                    height:10
                },
            },
            series : [ //系列列表
                {
                    // name:'随访次数',  //系列名称
                    type:'pie',   //类型 pie表示饼图
                    center:['22%','50%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                    radius : ['35%', '45%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                    itemStyle : {  //图形样式
                        normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : false  //平常不显示
                            },
                            labelLine : {     //标签的视觉引导线样式
                                show : false  //平常不显示
                            }
                        },
                        emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '10',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data:[
                        {value:30, name:'线上'+this.topValue},
                        {value:10, name:'线下'+this.topValue1},
                    ]
                }
            ]
        }

        //使用刚指定的配置项和数据显示图表。        
        myChart3.setOption(option3);

    })
    .catch(res => {
        console.log('请求失败')
    })
       
    },
    methods: {
        rowClass: function(row, rowIndex) {
             return "backcol";
        },
    },
    watch:{

    }
}
</script>
<style lang="less" scoped>
    .content {
        width: 100%;
        height: 100%;
        overflow: hidden;
        
    }
    .main {
        width: 100%;
        height: 100%;
        display: flex;
        .textd1{
            flex: 1;
            .table-data {
                 width: 100%;
                 height: 60%;
            }
        }
        .textd2{
            flex: 1;
            .table-data {
                 width: 100%;
                 height: 60%;
            }
        }
        .textd3{
            flex: 1;
            .table-data {
                 width: 100%;
                 height: 60%;
            }
        }
        
    }
 </style>


