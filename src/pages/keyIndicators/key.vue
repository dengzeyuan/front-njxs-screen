<template>
    <div class="content">
    <div class="main">
        <div class="textd">
        <div id="main1" style="width: 250px;height:132px"></div>
            
            <div class="table-data">
                <el-table
                :data="textValue"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    width="100%"
                    height='30px'
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
        <div class="textd">
           <div id="main2" style="width: 250px;height:132px"></div>
            <div class="table-data">
                <el-table
                :data="textValue1"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    align="center"
                    width="100%"
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
            topValue: []
        }
    },
    mounted() {
                
        this.axios
        .get(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/kpi/WEEK"
        )
        .then(res => {
            console.log(res.data.data)
            // this.topValue.push(res.data.data[0].onLineRate)
            // this.topValue.push(res.data.data[0].onLineRate)
            // console.log(this.topValue)
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
                    fontSize: 18,
                },
            },
            color:['#FF7299','#FFBA4E'],  //手动设置每个图例的颜色
            legend: {  //图例组件
                //right:100,  //图例组件离右边的距离
                orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                width:40,      //图行例组件的宽度,默认自适应
                x : 150,   //图例显示在右边
                y: 50,   //图例在垂直方向上面显示居中
                itemWidth:5,  //图例标记的图形宽度
                itemHeight:5, //图例标记的图形高度
                data:['线上'+'20%','线下'+'10%'],
                textStyle:{    //图例文字的样式
                    color:'#000',  //文字颜色
                    fontSize:16,    //文字大小
                }
            },
            graphic:{
                type:'text',
                left:37,
                top:73,
                style:{
                    text:this.dateValue.name,
                    textAlign:'left',
                    fill:'#000',
                    width:50,
                    height:50
                }
            },
            series : [ //系列列表
                {
                    // name:'随访次数',  //系列名称
                    type:'pie',   //类型 pie表示饼图
                    center:['22%','60%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                    radius : ['50%', '60%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                    itemStyle : {  //图形样式
                        normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : false  //平常不显示
                            },
                            labelLine : {     //标签的视觉引导线样式
                                show : false  //平常不显示
                            }
                        },
                        // emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        //     label : {  //饼图图形上的文本标签
                        //         show : true,
                        //         position : 'center',
                        //         textStyle : {
                        //             fontSize : '10',
                        //             fontWeight : 'bold'
                        //         }
                        //     }
                        // }
                    },
                    data:[
                        {value:30, name:'线上'+'30%'},
                        {value:10, name:'线下'+'10%'},
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
            color:['#F436FF','#FF8FD8'],  //手动设置每个图例的颜色
            legend: {  //图例组件
                //right:100,  //图例组件离右边的距离
                orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                width:40,      //图行例组件的宽度,默认自适应
                x : 120,   //图例显示在右边
                y: 50,   //图例在垂直方向上面显示居中
                itemWidth:5,  //图例标记的图形宽度
                itemHeight:5, //图例标记的图形高度
                data:['线上'+'30%','线下'+'10%'],
                textStyle:{    //图例文字的样式
                    color:'#000',  //文字颜色
                    fontSize:16,    //文字大小
                }
            },
            graphic:{
                type:'text',
                left:37,
                top:73,
                style:{
                    text:this.dateValue1.name,
                    textAlign:'left',
                    fill:'#000',
                    width:50,
                    height:50
                }
            },
            series : [ //系列列表
                {
                    // name:'随访次数',  //系列名称
                    type:'pie',   //类型 pie表示饼图
                    center:['22%','60%'], //设置饼的原心坐标 不设置就会默认在中心的位置
                    radius : ['50%', '60%'],  //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                    itemStyle : {  //图形样式
                        normal : { //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                            label : {  //饼图图形上的文本标签
                                show : false  //平常不显示
                            },
                            labelLine : {     //标签的视觉引导线样式
                                show : false  //平常不显示
                            }
                        },
                        // emphasis : {   //normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        //     label : {  //饼图图形上的文本标签
                        //         show : true,
                        //         position : 'center',
                        //         textStyle : {
                        //             fontSize : '10',
                        //             fontWeight : 'bold'
                        //         }
                        //     }
                        // }
                    },
                    data:[
                        {value:30, name:'线上'+'30%'},
                        {value:10, name:'线下'+'10%'},
                    ]
                }
            ]
        }

        //使用刚指定的配置项和数据显示图表。        
        myChart2.setOption(option2);

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
        .textd{
            flex: 1;
        }
        overflow: hidden;
        
    }
    .table-data{
        width: 100%;
        height: 100%;
    }
 </style>


