<template>
    <div class="content">
            <div id = 'main'>
        
             </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sideleftpad: Math.ceil(30 * this.baseScreenRate) + "px",
            textDate: [],
            timeDate: [],
            valDate: [],
            valDate1: [],
            valDate2: [],
        }
    },
    mounted() {
        this.axios
        .get(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/situation/WEEK"
        )
        .then(res => {
            let ress =res.data.data;
            ress.map(val => {
                this.textDate.push(val.name)
            })
            ress[0].singleList.map(val =>{
                this.timeDate.push(val.date)
                this.valDate.push(val.value)
                // console.log(this.timeDate)
            }) 
            ress[1].singleList.map(val =>{
                this.valDate1.push(val.value)
                // console.log(this.timeDate)
            }) 
            ress[2].singleList.map(val =>{
                this.valDate2.push(val.value)
                // console.log(this.timeDate)
            })       
                // 基于准备好的dom，初始化echarts实例
                let myMain =this.$echarts.init(document.getElementById('main'))

                // 指定图表的配置项和数据
                let option = {
                    title: {
                        text: '经营概况',
                        textStyle: {  
                            fontWeight: 'normal',              //标题颜色  
                            color: '#75becb',
                            fontSize: 18,  
                        },
                    },
                    tooltip : {
                        trigger: 'axis',
                        // axisPointer: {
                        //     type: 'cross',
                        //     label: {
                        //         backgroundColor: '#6a7985'
                        //     }
                        // }
                    },
                    // color: ['#FF3D7A99','#FFDD6C51','#FF706AAF'],
                    legend: {
                        data:this.textDate,
                        textStyle: {  
                            color: '#fff',
                        },
                        left: 'right',
                        top: 20
                    },
                    // toolbox: {
                    //     feature: {
                    //         saveAsImage: {}
                    //     }
                    // },
                    // grid: {
                    //     left: '3%',
                    //     right: '4%',
                    //     bottom: '3%',
                    //     containLabel: true
                    // },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : this.timeDate,
                            splitLine: {  
                                lineStyle: {  
                                    // 使用深浅的间隔色  
                                    color: ['#21202E']  
                                }  
                            }, 
                            nameTextStyle: {  
                                color: ['#21202E']  
                            }, 
                            axisLine:{  
                                lineStyle:{  
                                    color:'#75becb',  
                                    // width:1,//这里是为了突出显示加上的  
                                }  
                            } 
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            splitLine: {  
                                lineStyle: {  
                                    // 使用深浅的间隔色  
                                    color: ['#21202E']  
                                }  
                            },  
                            nameTextStyle: {  
                                color: ['#21202E']  
                            }, 
                            axisLine:{  
                                lineStyle:{  
                                    color:'#75becb',  
                                    // width:1,//这里是为了突出显示加上的  
                                }  
                            }  
                        }
                    ],
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    series : [
                        {
                            name:'销售收入',
                            type:'line',
                            stack: '总量',
                            smooth:true,
                            areaStyle: {normal: {}},
                            data:this.valDate,
                            areaStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#8ec6ad'
                                    }, {
                                        offset: 1,
                                        color: '#FF3D7A99'
                                    }])
                                }
                            },
                        },
                        {
                            name:'毛利',
                            type:'line',
                            stack: '总量',
                            smooth:true,
                            areaStyle: {normal: {}},
                            data:this.valDate1,
                            areaStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#8ec6ad'
                                    }, {
                                        offset: 1,
                                        color: '#FFDD6C51'
                                    }])
                                }
                            },
                        },
                        {
                            name:'采购成本',
                            type:'line',
                            stack: '总量',
                            smooth:true,
                            areaStyle: {normal: {}},
                            data:this.valDate2,
                            areaStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#8ec6ad'
                                    }, {
                                        offset: 1,
                                        color: '#FF706AAF'
                                    }])
                                }
                            },
                        }
                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                myMain.setOption(option)
        })
        .catch(res => {
            console.log('请求失败')
        });

    },
    methods: {
        
    },
    watch: {

    }
}
</script>
<style lang="less" scoped>
    .content {
        width: 100%;
        height: 100%;
    }
    #main {
        width:100%;
        height:100%;
        border: 1px solid #21202E;
        box-shadow:4px 0px 0px rgba(61,58,91,0.08);
    }
</style>


