<template>
  <div class="efficiency-page" :style="pagestyle">
        <div class="head"><h4 :style="headstyle">竞争力分析</h4>
        <span class="el-icon-more" style="cursor:pointer;" :style="{opacity:opacitys}" @click="clickdit()"
          @mouseover="hoveredit(1)" @mouseout="hoveredit(0)"></span></div>
        <div id="efficienct-radar" :style="echartstyle"></div>
        <div v-show="hidefromfalg" class="hideform" :style="formstyle">
            <!-- <form> -->
              <!-- <table border="1" cellpadding=0 cellspacing=0 style="color:#ffffff;"> -->
                <!-- <tr><td>&nbsp;</td><td>指标一</td><td>指标二</td><td>指标三</td><td>指标四</td><td>指标五</td><td>指标六</td><td>指标七</td></tr>
                <tr><td>河马鲜生</td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td></tr>
                <tr><td>宁家鲜生</td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td></tr>
                <tr><td>沃尔玛</td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td></tr> -->
                <!-- <tr><td>等等</td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td><td><input type="number"></td></tr> -->
              <!-- </table> -->
              <!-- <button>确定</button> -->
            <!-- </form> -->
            <form>
              <table border="1" cellpadding=0 cellspacing=0>
                <tr>
                  <td>&nbsp;</td><td v-for="(y,index) in radardata.yxisobj" :key="index"><input type="text" v-model="y.title" /></td>
                </tr>
                <tr v-for="(tr,index) in radardata.legnedlistobj" :key="index">
                  <td><input type="text" v-model="tr.title"  /></td>
                  <td v-for="(td,index) in radardata.rowcolobj[index]" :key="index"><input type="number" v-model="td.value"></td>
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
      hidefromfalg: false,
      radardata: {
        yxis: [], //分类值
        yxislist: [],
        legnedlist: [],
        legnedvalue: [],
        serieslist: [],
        yxismax: [],
        legnedlistobj: [], //提交
        yxisobj: [],
        rowcolobj: []   //最终提交结果
      }
    };
  },
  components: {},
  mounted: function() {
    this.$nextTick(function() {
      let that = this;
      this.axios
        .get(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition"
        )
        .then(res => {
          if (res.data.data) {
            let colorobj = [
              "rgb(192,87,96)",
              "rgb(186,126,182)",
              "rgb(105,98,164)"
            ];
            res.data.data.forEach(function(value, index) {
              //获取指标和标识名称
              if (that.radardata.legnedlist.indexOf(value.businessName) == -1) {
                that.radardata.legnedlist.push(value.businessName);
                that.radardata.legnedlistobj.push({
                  title: value.businessName
                });
              }
              if (that.radardata.yxis.indexOf(value.targetName) == -1) {
                that.radardata.yxis.push(value.targetName);
                that.radardata.yxislist.push({
                  text: value.targetName,
                  max: that.radardata.yxismax[value.targetName]
                });
                that.radardata.yxisobj.push({ title: value.targetName });
                // that.radardata.rowcolvalue.push({ value: "" });
              }
            });

            //根据行和列计算table中的二维数据,并且添加分类和指标放在最后提交使用
            that.radardata.legnedlist.forEach(function(value, index) {
              that.radardata.rowcolobj[index] = [];
              that.radardata.yxis.forEach(function(val, ind) {
                that.radardata.rowcolobj[index].push({
                  value: "",
                  businessName: value,
                  targetName: val
                });
              });
            });

            that.radardata.yxis.forEach(function(value, index) {
              //获取指标最大值
              that.radardata.yxismax[value] = [];
              var max = 0;
              res.data.data.forEach(function(val, ind) {
                if (value == val.targetName) {
                  if (max < val.targetValue) {
                    max = val.targetValue;
                  }
                }
              });
              that.radardata.yxismax[value] = Number(max);
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
                    opacity:0.4
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
    });
  },
  methods: {
    //提交
    submitcompetive: function() {
      let array = [];
      console.log(this.radardata.rowcolobj);
      // let param = JSON.stringify({
      //   avgEfficiency: this.responseDate.avgEfficiency,
      //   personEfficiency: this.responseDate.personEfficiency,
      //   distributionRate: this.responseDate.distributionRate,
      //   customerRate: this.responseDate.customerRate
      // });
      // axios({
      //   method: "post",
      //   url: "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/efficiency",
      //   data: param
      // }) .then(res => {
      //     if (res.data.status == "SUCCESS") {
      //       this.clickdit();
      //       this.initdata();
      //     }
      //   });

      this.axios
        .post(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition",
          []
        )
        .then(res => {
          if (res.data.status == "SUCCESS") {
            this.clickdit();
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
      console.log(radardata);
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
