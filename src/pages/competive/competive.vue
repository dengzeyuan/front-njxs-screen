<template>
  <div class="efficiency-page" :style="pagestyle">
        <div class="head"><h4 :style="headstyle">竞争力分析</h4><span class="el-icon-more"></span></div>
        <div id="efficienct-radar" :style="echartstyle"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      headstyle: {
        fontSize: Math.ceil(30 * this.baseScreenRate) + "px"
      },
      pagestyle: {
        paddingLeft: Math.ceil(40 * this.baseScreenRate) + "px",
        paddingTop: Math.ceil(23 * this.baseScreenRate) + "px"
      },
      echartstyle: {
        // width: Math.ceil(77 * this.baseScreenRate) + "px",
        // height: Math.ceil(77 * this.baseScreenRate) + "px"
        width: "100%",
        height: "100%",
        margin: "0 auto",
        marginTop:"-5%"

      }
    };
  },
  components: {},
  mounted: function() {
    this.$nextTick(function() {
      this.initleftecharts("efficienct-radar");
    });
  },
  methods: {
    initleftecharts: function(id) {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(id));
      // 指定图表的配置项和数据
      var imgPath = [
        "http://bmob-cdn-15355.b0.upaiyun.com/2017/12/01/bee4341c4089af7980b87074a77479ad.png"
      ];
      var option = {
        // backgroundColor: '#000000',
        color: ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
        legend: {
          show: true,
          icon: "circle",
          bottom: 0,
          center: 0,
          itemWidth: 5,
          itemHeight: 5,
          textStyle: {
            fontSize: 14,
            color: "#ade3ff"
          },
          data: ["宁家鲜生", "河马鲜生"]
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
            radius: 90,
            startAngle: 90,
            splitNumber: 3,
            backgroundColor: {
              image: imgPath[0]
            },
            name: {
              formatter: "{value}",
              textStyle: {
                fontSize: 14,
                color: "#ffffff"
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
                color: "#2770ab"
              }
            },
            splitLine: {
              lineStyle: {
                color: "#2770ab"
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
                value: [50, 50, 50, 50, 50,80,90],
                areaStyle: {
                  normal: {
                    color: "rgba(245, 166, 35, 0.4)"
                  }
                },
                symbolSize: 2.5,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(245, 166, 35, 1)",
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
                value: [30, 60, 55, 60, 70,80,90],
                symbolSize: 2.5,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(19, 173, 255, 1)",
                    borderWidth: 2.5
                  }
                },
                areaStyle: {
                  normal: {
                    color: "rgba(19, 173, 255, 0.5)"
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
}
</style>
