<template>
    <div class = 'content'>
        <div class = 'namesDate'>
            <el-select v-model="value"  size="mini" class="namechange" name="namechange">
                <el-option
                    v-for="item in names"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div id="saldata"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            names: [
                {
                    value: "1 ",
                    label: "同比"
                },
                {
                    value: "0",
                    label: "环比"
                }
            ],
            value: "同比",
            timeDate: [],
            amountDate: [],
            amountDate1: [],
            textData: 'WEEK',
            numDate:0
        }
    },
    mounted() {
        this.axios
        .get(
          "http://suneee.dcp.weilian.cn/njxs-demo/operationData/saleRate/data/WEEK/0"
        )
        .then(res => {
             console.log(res)
            res.data.data.dataCurrentWeek.map(val => {
                this.timeDate.push(val.time)
                console.log(this.timeDate)
                this.amountDate.push(val.amount)
            })
            res.data.data.dataPreWeek.map(val => {
                this.amountDate1.push(val.amount)
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
                        name:'当前数据',
                        type:'bar',
                        data:this.amountDate,
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
                        name:'比较数据',
                        type:'bar',
                        data:this.amountDate1,
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
        })
        .catch(res =>{
            console.log('请求失败')
        })
    },
    methods: {

        //  @change="onSelectedDrug($event)"
        // onSelectedDrug(event) {  
        //     //打印出绑定的对象  
        //     // console.log(event);  
        //     if(event == 1){
        //         this.textData = 'QUARTER'
        //         this.numDate = '1'
        //     }else{
        //         this.textData = 'WEEK'
        //         this.numDate = '0'
        //     }
        // }
    },
    watch: {

    }
}
</script>
<style lang="less" scoped>
    .content{
        width:100%;
        height: 100%;
        position: relative;
        // .namechange .el-input>input[name="namechange"]{
        //     background: rgba(45, 44, 63, 1);
        //     border-radius: 4px;
        //     color:#7A7899;
        //     border:1px solid #2D2C3F;
        // }
        .namesDate {
            position: absolute;
            right: 4%;
            top: 0;
            width: 75px;
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


