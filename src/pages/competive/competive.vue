<template>
  <div class="efficiency-page" :style="pagestyle">
        <div class="head"><h4 :style="headstyle">竞争力分析</h4>
        <span class="el-icon-more" style="cursor:pointer;" :style="{opacity:opacitys}" @click="clickdit()"
          @mouseover="hoveredit(1)" @mouseout="hoveredit(0)"></span></div>
        <div id="efficienct-radar" :style="echartstyle"></div>
        <div v-show="hidefromfalg" class="hideform" :style="formstyle">
            <form>
              <table border="1" cellpadding=0 cellspacing=0 style="color:#ffffff;">
                <tr><td></td><td>指标一</td><td>指标二</td><td>指标三</td><td>指标四</td><td>指标五</td><td>指标六</td><td>指标七</td></tr>
                <tr><td>河马鲜生</td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td></tr>
                <tr><td>宁家鲜生</td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td></tr>
                <tr><td>沃尔玛</td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td></tr>
                <tr><td>等等</td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td></tr>
              </table>
              <button>确定</button>
                <!-- <div class="form-group">
                    <label for="average">
                       <span>均效</span> 
                    </label>
                    <input id="average" type="number">
                </div>
                <div class="form-group">
                    <label for="people">
                       <span>人效</span> 
                    </label>
                    <input id="people" type="number">
                </div>
                <div class="form-group">
                    <label for="distribute">
                        <span>配送及时率</span> 
                    </label>
                    <input id="distribute" type="number">
                </div>
                <div class="form-group">
                    <label for="customer">
                     <span>客户满意度</span> 
                    </label>
                    <input id="customer" type="number">
                </div>
                <div class="form-group" style="text-align:right;padding-top:1%;">
                  <el-button class="submitefficty" size="mini" type="primary" :style="submitefficty" plain>确定</el-button>
                </div> -->
            </form>
            <span class="closeform el-icon-close" @click="clickdit()"></span>
        </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      headstyle: {
        fontSize: Math.ceil(22 * this.baseScreenRate) + "px"
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
      hidefromfalg: false
    };
  },
  components: {},
  mounted: function() {
    this.$nextTick(function() {
      this.initleftecharts("efficienct-radar");
    });
  },
  methods: {
    clickdit: function() {
      this.hidefromfalg = !this.hidefromfalg;
    },
    hoveredit: function(num) {
      this.opacitys = num;
    },
    initleftecharts: function(id) {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(id));
      // 指定图表的配置项和数据
      var option = {
        color: [
          "rgba(192,87,96,1)",
          "rgba(186,126,182,1)",
          "rgba(105,98,164,1)"
        ],
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
          data: ["宁家鲜生", "河马鲜生", "沃尔玛"]
        },
        radar: [
          {
            indicator: [
              {
                text: "指标一",
                max: 100
              },
              {
                text: "指标二",
                max: 100
              },
              {
                text: "指标三",
                max: 100
              },
              {
                text: "指标四",
                max: 100
              },
              {
                text: "指标五",
                max: 100
              },
              {
                text: "指标六",
                max: 100
              },
              {
                text: "指标七",
                max: 100
              }
            ],
            textStyle: {
              color: "red"
            },
            center: ["50%", "50%"],
            radius: Math.ceil(120 * this.baseScreenRate),
            startAngle: 90,
            splitNumber: 3,
            // backgroundColor: {
            //   image: imgPath[0]
            // },
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
                width:  Math.ceil(5 * this.baseScreenRate),
              }
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
                color: "#4C545C",
                width:  Math.ceil(5 * this.baseScreenRate),
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
            data: [
              {
                name: "宁家鲜生",
                value: [50, 50, 50, 50, 50, 80, 90],
                areaStyle: {
                  normal: {
                    color: "rgba(192,87,96,0.4)"
                  }
                },
                symbolSize: 2.5,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(192,87,96,1)",
                    borderWidth: 2.5
                  }
                },
                lineStyle: {
                  normal: {
                    opacity: 0.5
                  }
                }
              },
              {
                name: "河马鲜生",
                value: [30, 60, 55, 60, 70, 80, 90],
                symbolSize: 2.5,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(186,126,182,1)",
                    borderWidth: 2.5
                  }
                },
                areaStyle: {
                  normal: {
                    color: "rgba(186,126,182,0.5)"
                  }
                },
                lineStyle: {
                  normal: {
                    opacity: 0.5
                  }
                }
              },
              {
                name: "沃尔玛",
                value: [30, 60, 55, 60, 70, 80, 90],
                symbolSize: 2.5,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(105,98,164,1)",
                    borderWidth: 2.5
                  }
                },
                areaStyle: {
                  normal: {
                    color: "rgba(105,98,164,0.5)"
                  }
                },
                lineStyle: {
                  normal: {
                    opacity: 0.5
                  }
                }
              }
            ]
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
      min-height: 0;
      margin: 0 auto;
      //   border:1px solid #fff;
      // .form-group {
      //   width: 100%;
      //   padding-bottom: 1%;
      //   label,
      //   input {
      //     width: 49%;
      //     display: inline-block;
      //   }
      //   label {
      //     text-align: right;
      //   }
      //   .submitefficty.el-button.is-plain {
      //   }
      // }
      table {
        width: 100%;
        input {
          background: none;
          color: #ffffff;
          border: 0;
        }
      }
      button {
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
