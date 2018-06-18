<template>
  <div class="efficiency-page" :style="pagestyle">
        <div class="head"><h4 :style="headstyle">竞争力分析</h4>
        <span class="el-icon-more" style="cursor:pointer;" :style="{opacity:opacitys}" @click="clickdit()"
          @mouseover="hoveredit(1)" @mouseout="hoveredit(0)"></span></div>
        <div ref="efficienctRadar" id="efficienct-radar" :style="echartstyle"></div>
        <div v-show="hidefromfalg" class="hideform" :style="formstyle">
            <form>
              <table border="1" cellpadding=0 cellspacing=0>
                <tr>
                  <td>&nbsp;</td><td v-for="(y,index) in radardata.yxisobj" :key="index"><input type="text" v-model="y.title" /></td>
                </tr>
                <tr v-for="(tr,index) in radardata.legnedlistobj" :key="index">
                  <td><input type="text" v-model="tr.title"  /></td>
                  <td v-for="(td,index) in radardata.rowcolobj[index]" :key="index"><input type="number" v-model="td.targetValue"></td>
                </tr>
              </table>
               <input @click.stop="submitcompetive" class="submit" type="button" readonly="readonly" value="确定" />
            </form>
            <span class="closeform el-icon-close" @click="clickdit()"></span>
        </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      loading: "true",
      headstyle: {
        fontSize: Math.ceil(22 * this.baseScreenRate) + "px",
        fontWeight: "normal"
      },
      pagestyle: {
        paddingLeft: Math.ceil(40 * this.baseScreenRate) + "px",
        paddingTop: Math.ceil(23 * this.baseScreenRate) + "px"
      },
      echartstyle: {
        // width: Math.ceil(77 * this.baseScreenRate) + "px",
        // height: Math.ceil(77 * this.baseScreenRate) + "px"
        width: "80%",
        height: "90%",
        margin: "0 auto"
        // marginTop: "-5%"
      },
      formstyle: {
        fontSize: Math.ceil(24 * this.baseScreenRate) + "px",
        paddingTop: Math.ceil(30 * this.baseScreenRate) + "px"
      },
      submitefficty: {
        padding: "1% 2%",
        fontSize: Math.ceil(18 * this.baseScreenRate) + "px"
      },
      opacitys: 0,
      hidefromfalg: false,
      radardata: {
        yxis: [], //分类值
        yxislist: [],
        legnedlist: [],
        legnedvalue: [],
        serieslist: [],
        yxismax: {},
        legnedlistobj: [], //表格列
        yxisobj: [], //表格行
        rowcolobj: [] //最终提交结果
      },
      cloneelement: ""
    };
  },
  components: {},
  mounted: function() {
    this.$nextTick(function() {
      this.initdata();
    });
  },
  methods: {
    initdata: function() {
      // if (this.cloneelement) {
      //   this.$refs.efficienctRadar = this.cloneelement;
      // }
      let that = this;
      this.axios
        .get(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition"
        )
        .then(res => {
          that.loading = false;
          if (res.data.data) {
            if (res.data.data.length == 0) {
              that.radardata = {
                yxis: ["销售额", "订单量", "支付用户", "新增用户"], //分类值
                yxislist: [
                  { text: "销售额", max: 10000 },
                  { text: "订单量", max: 10000 },
                  { text: "支付用户", max: 10000 },
                  { text: "新增用户", max: 10000 }
                ],
                legnedlist: ["宁家鲜生", "沃尔玛"],
                legnedvalue: [
                  "宁家鲜生"[(2000, 3000, 4000, 5000)],
                  "沃尔玛"[(40000, 5000, 6000, 7000)]
                ],
                serieslist: [],
                yxismax: {
                  支付用户: 10000,
                  新增用户: 10000,
                  订单量: 10000,
                  销售额: 10000
                },
                legnedlistobj: [{ title: "宁家鲜生" }, { title: "沃尔玛" }], //表格列
                yxisobj: [
                  { title: "销售额" },
                  { title: "订单量" },
                  { title: "支付用户" },
                  { title: "新增用户" }
                ], //表格行
                rowcolobj: [] //最终提交结果
              };
              that.initleftecharts(
                "efficienct-radar",
                that.radardata,
                colorobj
              );
              return;
            }
            that.radardata = {
              yxis: [], //分类值
              yxislist: [],
              legnedlist: [],
              legnedvalue: {},
              serieslist: [],
              yxismax: {},
              legnedlistobj: [], //表格列
              yxisobj: [], //表格行
              rowcolobj: [] //最终提交结果
            };
            let colorobj = [
              "rgb(192,87,96)",
              "rgb(186,126,182)",
              "rgb(105,98,164)"
            ];
            res.data.data.forEach(function(value, index) {
              //获取lenged显示
              if (that.radardata.legnedlist.indexOf(value.businessName) == -1) {
                that.radardata.legnedlist.push(value.businessName);
                that.radardata.legnedlistobj.push({
                  //表格列
                  title: value.businessName
                });
              }
              //表格行title显示和radar图形每个指标显示
              if (that.radardata.yxis.indexOf(value.targetName) == -1) {
                that.radardata.yxis.push(value.targetName);
                that.radardata.yxislist.push({
                  text: value.targetName,
                  max: that.radardata.yxismax[value.targetName]
                });
                that.radardata.yxisobj.push({ title: value.targetName }); //表格行
              }
            });

            //根据行和列计算table中的二维数据,并且添加分类和指标放在最后提交使用
            that.radardata.legnedlist.forEach(function(value, index) {
              that.radardata.rowcolobj[index] = [];
              that.radardata.yxis.forEach(function(val, ind) {
                that.radardata.rowcolobj[index].push({
                  targetValue: "",
                  businessName: value,
                  targetName: val
                });
              });
            });

            that.radardata.yxis.forEach(function(value, index) {
              //获取指标最大值
              that.radardata.yxismax[value] = "";
              var max = 0;
              res.data.data.forEach(function(val, ind) {
                if (value == val.targetName) {
                  if (Number(max) < Number(val.targetValue)) {
                    max = Number(val.targetValue);
                  }
                }
              });
              that.radardata.yxismax[value] = max;
            });
            that.radardata.yxislist.forEach(function(value, index) {
              value.max = that.radardata.yxismax[value.text];
            });
            // let color
            that.radardata.legnedlist.forEach(function(value, index) {
              //获取分类下的所有指标值
              that.radardata.legnedvalue[value] = [];
              res.data.data.forEach(function(val, ind) {
                if (val.businessName == value) {
                  that.radardata.legnedvalue[value].push(
                    Number(val.targetValue)
                  );
                }
              });
              that.radardata.serieslist.push({
                name: value,
                value: that.radardata.legnedvalue[value],
                areaStyle: {
                  normal: {
                    color: colorobj[index],
                    opacity: 0.4
                  }
                },
                symbolSize: 2.5,
                itemStyle: {
                  normal: {
                    borderColor: colorobj[index],
                    borderWidth: 2.5
                  }
                },
                lineStyle: {
                  normal: {
                    opacity: 0.5
                  }
                }
              });
            });
            that.initleftecharts("efficienct-radar", that.radardata, colorobj);
          }
        })
        .catch(res => {});
    },
    //提交
    submitcompetive: function() {
      this.clickdit();
      this.loading = true;
      let array = [],
        that = this;
      console.log(this.radardata);
      console.log(this.radardata.rowcolobj);
      this.radardata.rowcolobj.forEach(function(value, index) {
        value.forEach(function(val, ind) {
          if(val.targetValue == ""){
            val.targetValue = that.radardata.legnedvalue[val.businessName][ind];
          }
        });
        value.forEach(function(val, ind) {
          array.push(val);
        });
      });
      this.axios
        .post(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition",
          array
        )
        .then(res => {
          if (res.data.status == "SUCCESS") {
            // this.$refs.efficienctRadar = "";
            this.initdata();
          }
        });
    },
    clickdit: function() {
      this.hidefromfalg = !this.hidefromfalg;
    },
    hoveredit: function(num) {
      this.opacitys = num;
    },
    initleftecharts: function(id, radardata, colorobj) {
      this.$echarts.dispose(document.getElementById(id));
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(id));
      // 指定图表的配置项和数据
      var option = {
        color: colorobj,
        legend: {
          show: true,
          icon: "circle",
          bottom: 0,
          center: 0,
          itemWidth: Math.ceil(16 * this.baseScreenRate),
          itemHeight: Math.ceil(16 * this.baseScreenRate),
          textStyle: {
            fontSize: Math.ceil(18 * this.baseScreenRate),
            color: "#ffffff"
          },
          data: radardata.legnedlist
        },
        radar: [
          {
            indicator: radardata.yxislist, //坐标轴和最大值
            textStyle: {
              color: "red"
            },
            center: ["50%", "50%"],
            radius: Math.ceil(120 * this.baseScreenRate),
            startAngle: 90,
            splitNumber: 3,
            name: {
              formatter: "{value}",
              textStyle: {
                fontSize: Math.ceil(18 * this.baseScreenRate),
                color: "#3C6E81"
              }
            },
            splitArea: {
              areaStyle: {
                color: [
                  "transparent",
                  "transparent)",
                  "rgba(114, 172, 209, 0)",
                  "transparent",
                  "rgba(114, 172, 209, 0)"
                ]
              }
            },
            axisLine: {
              lineStyle: {
                color: "#4C545C"
              }
            },
            axisLine: {
              lineStyle: {
                type: "dashed",
                color: "#4C545C",
                width: Math.ceil(5 * this.baseScreenRate)
              }
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#4C545C",
                width: Math.ceil(5 * this.baseScreenRate)
              }
            }
          }
        ],
        series: [
          {
            name: "雷达图",
            type: "radar",
            itemStyle: {
              emphasis: {
                lineStyle: {
                  width: 4
                }
              }
            },
            data: radardata.serieslist
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped lang="less">
.efficiency-page {
  padding-right: 10px;
  width: 100%;
  height: 100%;
  clear: both;
  min-width: 0;
  overflow: hidden;
  background-color: #21202e;
  position: relative;
  .head {
    width: 100%;
    max-height: 10%;
    display: flex;
    justify-content: space-between;
    color: #75becb;
    span:last-child {
      transform: rotate(90deg);
    }
  }
  .hideform {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #21202e;
    //   padding-top:5%;
    span {
      color: #ffffff;
      margin-right: 10px;
      cursor: pointer;
    }
    form {
      width: 90%;
      height: 100%;
      min-height: 0;
      margin: 0 auto;
      table {
        width: 100%;
        min-height: 0%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        color: #ffffff;
        tr {
          height: 20%;
          width: 100%;
          display: flex;
          flex-direction: row;
          td {
            width: 10%;
            height: 100%;
            overflow: hidden;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            flex-shrink: 1;
            flex-grow: 1;
          }
        }
        input {
          background: none;
          color: #ffffff;
          border: 0;
        }
      }
      .submit {
        width: 100%;
        border-radius: 4px;
        background: #537f8c;
        outline: 0;
        box-shadow: none;
        border: 1px solid transparent;
        color: #ffffff;
      }
    }
  }
}
</style>
