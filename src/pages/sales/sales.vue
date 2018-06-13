<template>
    <div class = 'content'>
        <div id="saldata"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.axios
        .get(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/kpi/WEEK"
        )
        .then(res => {
            
        })
        .catch(res =>{
            console.log('请求失败')
        })

        // 基于准备好的dom，初始化echarts实例
        let myMain =this.$echarts.init(document.getElementById('saldata'))

        // 指定图表的配置项和数据
        let option = {
            title : {
                text: '销售同环画',
                textStyle: {  
                    fontWeight: 'normal',              //标题颜色  
                    color: '#75becb',
                    fontSize: 18,  
                },
            },
            // color:['#FECC44','#5EFCF6'],
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月'],
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
                    name:'蒸发量',
                    type:'bar',
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7],
                    barWidth: 20,//柱宽
                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FECC44'
                            }, {
                                offset: 1,
                                color: '#EC6783'
                            }])
                        }
                    },
                },
                {
                    name:'降水量',
                    type:'bar',
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7],
                    barWidth: 20,//柱宽
                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#5EFCF6'
                            }, {
                                offset: 1,
                                color: '#5D27A0'
                            }])
                        }
                    },
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myMain.setOption(option)
    },
    methods: {
        
    },
    watch: {

    }
}
</script>
<style lang="less" scoped>
    .content{
        width:100%;
        height: 100%;
    }
    #saldata {
        width: 100%;
        height: 100%;
    }
</style>


