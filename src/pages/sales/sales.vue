<template>
    <div class = 'content'>
        <!-- <div class="same">
            <select name="" id="">
                <option value="1">同比</option><i class="el-icon-arrow-down el-icon--right"></i>
                <option value="0">环比</option><i class="el-icon-arrow-down el-icon--right"></i>
            </select>
         </div> -->
        <div id="saldata"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            names: '',
            timeDate: [],
            amountDate: [],
            amountDate1: []
        }
    },
    mounted() {
        this.axios
        .get(
          "http://suneee.dcp.weilian.cn/njxs-demo/operationData/saleRate/data/QUARTER/1"
        )
        .then(res => {
            //  console.log(res)
            res.data.data.dataCurrentWeek.map(val => {
                this.timeDate.push(val.time)
                this.amountDate.push(val.amount)
            })
            res.data.data.dataPreWeek.map(val => {
                this.amountDate1.push(val.amount)
                // console.log(this.amountDate)
            })
        })
        .catch(res =>{
            console.log('请求失败')
        })

        // 基于准备好的dom，初始化echarts实例
        let myMain =this.$echarts.init(document.getElementById('saldata'))

        // 指定图表的配置项和数据
        let option = {
            title : {
                text: '销售同环比',
                textStyle: {  
                    fontWeight: 'normal',              //标题颜色  
                    color: '#75becb',
                    fontSize: 12,  
                },
            },
            tooltip : {
                trigger: 'axis'
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
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7],
                    barWidth: 12,//柱宽
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
                    barWidth: 12,//柱宽
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
        // position: relative;
        .same {
            // position: absolute;
            // right: 30px;
            // top: 10px;
            float: right;
        }
    }
    #saldata {
        width: 100%;
        height: 100%;
    }
    .el-dropdown {
        vertical-align: top;
    }
    .el-dropdown + .el-dropdown {
        margin-left: 15px;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>


