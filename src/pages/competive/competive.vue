<template>
  <div class="efficiency-page" :style="pagestyle" v-loading="loading">
        <div class="head"><h4 :style="headstyle">竞争力分析</h4>
            <span class="el-icon-more" style="cursor:pointer;" :style="{opacity:opacitys}" @click="clickdit()"
            @mouseover="hoveredit(1)" @mouseout="hoveredit(0)" v-if="role=='manage'"></span>
        </div>
        <div style="display:flex;width:100%;height:100%;">
          <div ref="efficienctRadar" id="efficienct-radar" :style="echartstyle"></div>
          <div style="height:90%;width:50%;position:relative;">
                    <div  class="hideform" :style="formstyletwo">
                        <div class="line"></div>
                        <form style="width:100%;">
                          <table border="0" cellpadding=0 cellspacing=0 :style="tablerightstyle">
                            <tr>
                              <td>&nbsp;</td><td v-for="(y,index) in radardata.yxisobj" :key="index">{{y.title}}</td>
                            </tr>
                            <tr v-for="(tr,inde) in radardata.legnedlistobj" :key="inde" class="colortd">
                              <td>{{tr.title}}</td>
                              <td v-for="(td,index) in radardata.rowcolobj[inde]" :key="index">{{td.targetValue}}</td>
                            </tr>
                          </table>
                        </form>
                    </div>
          </div>
        </div>
        <div v-show="hidefromfalg" class="hideform" :style="formstyle" v-if="role=='manage'">
            <!-- <table>行：</table> -->
            <div class="line"></div>
            <form>
              <div style="margin-bottom:1%"><span style="font-size:0.8em">行:</span><input type="number" v-model="rownumber" style="width:20%;" />
              <span style="padding-left:5%;font-size:0.8em">列:</span><input type="number" v-model="colnumber" style="width:20%;" />
              <span class="addrow" @click="addrowcol(rownumber,colnumber)">确定</span></div>
              <table border="1" cellpadding=0 cellspacing=0>
                <tr>
                  <td>&nbsp;</td><td v-for="(y,index) in radardata.yxisobj" :key="index"><input type="text" v-model="y.title" @change="changeyxisobj(radardata,y,index)"/></td>
                </tr>
                <tr v-for="(tr,inde) in radardata.legnedlistobj" :key="inde">
                  <td><input type="text" v-model="tr.title"  @change="changelegned(radardata,tr,inde)"/></td>
                  <td v-for="(td,index) in radardata.rowcolobj[inde]" :key="index"><input type="number" v-model="td.targetValue" @change="changevalue(radardata,td,index)"></td>
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
  props: ["role"],
  data() {
    return {
      loading: true,
      rownumber: 0,
      colnumber: 0,
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
        width: "50%",
        height: "90%"
        // margin: "0 auto"
        // marginTop: "-5%"
      },
      formstyle: {
        fontSize: Math.ceil(24 * this.baseScreenRate) + "px",
        paddingTop: Math.ceil(30 * this.baseScreenRate) + "px"
      },
      formstyletwo: {
        fontSize: Math.ceil(18 * this.baseScreenRate) + "px"
      },
      submitefficty: {
        padding: "1% 2%",
        fontSize: Math.ceil(18 * this.baseScreenRate) + "px"
      },
      tablerightstyle: {
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
    addrowcol: function(row, col) {
      var row = Number(row);
      var col = Number(col);
      let legendlength = this.radardata.legnedlistobj.length;
      // let rows = this.radardata.legnedlistobj.length + Number(row);
      let maxcol = 0;
      for (let i = 0; i < this.radardata.rowcolobj.length; i++) {
        if (maxcol < this.radardata.rowcolobj[i].length) {
          maxcol = this.radardata.rowcolobj[i].length;
        }
      }
      // let collength=maxcol;
      // let collength = this.radardata.rowcolobj[0];
      if (this.radardata.legnedlistobj.slice(0, row).length < row) {
        for (let i = legendlength; i < row; i++) {
          this.radardata.legnedlistobj.push({
            title: ""
          });
          this.radardata.rowcolobj[i] = [];
        }
      } else {
        this.radardata.legnedlistobj = this.radardata.legnedlistobj.slice(
          0,
          row
        );
        this.radardata.rowcolobj = this.radardata.rowcolobj.slice(0, row);
      }

      if (maxcol < col) {
        this.radardata.yxisobj = this.radardata.yxisobj.slice(0, col);
        for (let i = this.radardata.yxisobj.length; i < col; i++) {
          this.radardata.yxisobj.push({
            title: ""
          });
        }
        for (let j = 0; j < row; j++) {
          if (this.radardata.rowcolobj[j].length == 0) {
            for (let i = 0; i < col; i++) {
              this.radardata.rowcolobj[j].push({
                targetValue: "",
                businessName: "",
                targetName: ""
              });
            }
          } else {
            for (let i = this.radardata.rowcolobj[j].length; i < col; i++) {
              this.radardata.rowcolobj[j].push({
                targetValue: "",
                businessName: "",
                targetName: ""
              });
            }
          }
        }
      } else {
        this.radardata.yxisobj = this.radardata.yxisobj.slice(0, col);
        for (let j = 0; j < row; j++) {
          if (this.radardata.rowcolobj[j].length == 0) {
            for (let i = 0; i < col; i++) {
              this.radardata.rowcolobj[j].push({
                targetValue: "",
                businessName: "",
                targetName: ""
              });
            }
          } else {
            this.radardata.rowcolobj[j] = this.radardata.rowcolobj[j].slice(
              0,
              col
            );
          }
        }
      }
    },
    changevalue: function(radardata, va, index) {
      this.radardata.rowcolobj.forEach(function(val, ind) {
        val.forEach(function(vas, ins) {
          if (ins == index && va.businessName == vas.businessName) {
            vas.targetName = radardata.yxis[index];
          }
        });
      });
    },
    changeyxisobj: function(radardata, y, index) {
      var businessName = "";
      this.radardata.rowcolobj.forEach(function(val, ind) {
        val.forEach(function(vas, ins) {
          if (vas.businessName !== "") {
            businessName = vas.businessName;
          }
          // if(vas.businessName !== ""){
          //   businessName = vas.businessName;
          // }
          if (ins == index) {
            if (y.title == "") {
              vas.targetName = "";
            } else {
              vas.targetName = y.title;
              vas.businessName = businessName;
            }
          }
        });
      });
    },
    changelegned: function(radardata, tr, index) {
      this.radardata.rowcolobj[index].forEach(function(val, ind) {
        // if (index == ind) {
        // val.forEach(function(vas, ins) {
        if (tr.title == "") {
          val.businessName = "";
        } else {
          val.businessName = tr.title;
        }
        // });
        // }
      });
    },
    initdata: function() {
      let that = this;
      this.axios
        .get(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition"
        )
        .then(res => {
          that.loading = false;
          var res = res;
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
                  "沃尔玛"[(4000, 5000, 6000, 7000)]
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
                rowcolobj: [
                  [
                    {
                      targetValue: 2000,
                      businessName: "宁家鲜生",
                      targetName: "销售额"
                    },
                    {
                      targetValue: 3000,
                      businessName: "宁家鲜生",
                      targetName: "订单量"
                    },
                    {
                      targetValue: 4000,
                      businessName: "宁家鲜生",
                      targetName: "支付用户"
                    },
                    {
                      targetValue: 5000,
                      businessName: "宁家鲜生",
                      targetName: "新增用户"
                    }
                  ],
                  [
                    {
                      targetValue: 4000,
                      businessName: "沃尔玛",
                      targetName: "销售额"
                    },
                    {
                      targetValue: 5000,
                      businessName: "沃尔玛",
                      targetName: "销售额"
                    },
                    {
                      targetValue: 6000,
                      businessName: "沃尔玛",
                      targetName: "销售额"
                    },
                    {
                      targetValue: 7000,
                      businessName: "沃尔玛",
                      targetName: "销售额"
                    }
                  ]
                ] //最终提交结果
              };
              let colorobj = [
                "#0074ff",
                "#ffde00",
                "#f93c40",
                "#11c5d3",
                "#653cbb",
                "#ff8400"
                // "rgb(192,87,96)",
                // "rgb(186,126,182)",
                // "rgb(105,98,164)"
              ];
              colorobj = colorobj.concat(that.$d3.schemeCategory10);
              that.initleftecharts(
                "efficienct-radar",
                that.radardata,
                colorobj
              );
            } else {
              that.radardata = {
                yxis: [], //分类值
                yxislist: [],
                legnedlist: [],
                legnedvalue: {},
                serieslist: [],
                yxismax: {},
                legnedlistobj: [], //表格列
                yxisobj: [], //表格行
                rowcolobj: []
              };
              // console.log(that.$d3.schemeCategory10);
              let colorobj = [
                "#0074ff",
                "#ffde00",
                "#f93c40",
                "#11c5d3",
                "#653cbb",
                "#ff8400"
                // "rgb(192,87,96)",
                // "rgb(186,126,182)",
                // "rgb(105,98,164)"
              ];
              colorobj = colorobj.concat(that.$d3.schemeCategory10);
              res.data.data.forEach(function(value, index) {
                //获取lenged显示
                if (
                  that.radardata.legnedlist.indexOf(value.businessName) == -1
                ) {
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
                  res.data.data.forEach(function(valu, inde) {
                    if (valu.targetName == val && valu.businessName == value) {
                      that.radardata.rowcolobj[index].push({
                        targetValue: valu.targetValue,
                        businessName: value,
                        targetName: val
                      });
                      // break;
                    }
                  });
                  // that.radardata.rowcolobj[index].push({
                  //   targetValue: "",
                  //   businessName: value,
                  //   targetName: val
                  // });
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
                      opacity: 0.2
                    }
                  },
                  symbolSize: 0,
                  itemStyle: {
                    normal: {
                      borderColor: colorobj[index],
                      borderWidth: 2
                    }
                  },
                  lineStyle: {
                    normal: {
                      opacity: 0.2
                    }
                  }
                });
              });
              // that.radardata.rowcolobj.forEach(function(v,i){
              //   debugger
              // })
              that.initleftecharts(
                "efficienct-radar",
                that.radardata,
                colorobj
              );
            }
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
      this.radardata.rowcolobj.forEach(function(value, index) {
        // value.forEach(function(val, ind) {
        // if (val.targetValue == "") {
        //   val.targetValue = that.radardata.legnedvalue[val.businessName][ind];
        // }
        // });
        let flag = false;
        value.forEach(function(val, ind) {
          if (
            val.businessName !== "" ||
            val.targetName !== "" ||
            val.targetValue !== ""
          ) {
            flag = true;
          }
        });
        if (!flag) {
          value = null;
        } else {
          value.forEach(function(val, ind) {
            array.push(val);
          });
        }
      });

      let newvalue = [];
      array.forEach(function(value, index) {
        if (
          value.businessName !== "" ||
          value.targetValue !== "" ||
          value.targetName !== ""
        ) {
          newvalue.push(value);
        }
      });

      this.axios
        .post(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/competition",
          newvalue
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
      var radarradius = window.innerWidth < 756 ? 180 : 120;
      this.$echarts.dispose(document.getElementById(id));
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById(id));
      // 指定图表的配置项和数据
      var option = {
        color: colorobj,
        tooltip: {
          trigger: "axis"
        },
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
            // radius: Math.ceil(radarradius * this.baseScreenRate),
            radius: "50%",
            startAngle: 90,
            splitNumber: 0, //间隔
            nameGap:5,
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
            // axisLine: {
            //   lineStyle: {
            //     type: "dashed",
            //     color: "#4C545C",
            //     width: Math.ceil(5 * this.baseScreenRate)
            //   }
            // },
            axisLine: false
            // splitLine: {
            //   lineStyle: {
            //     type: "dashed",
            //     color: "#4C545C",
            //     width: Math.ceil(5 * this.baseScreenRate)
            //   }
            // }
          }
        ],
        series: [
          {
            name: "雷达图",
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            itemStyle: {
              emphasis: {
                lineStyle: {
                  width: 2
                }
              }
            },
            emphasis: {
              areaStyle: {
                opacity: 0.3
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
@media (max-width: 756px) {
  .competive .efficiency-page {
    padding: 0 !important;
    .head {
      padding-left: 0 !important;
    }
  }
  #efficienct-radar {
    width: 100% !important;
    height: 95% !important;
  }
}
.addrow {
  margin-left: 5%;
  font-size: 0.08em;
  padding: 0px 10px;
  height: 20px;
  line-height: 20px;
  display: inline-block;
}
.addrow:hover {
  background-color: #537f8c;
  font-size: 0.08em;
  color: #fff;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  padding: 0px 10px;
}
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
    // position: absolute;
    // display: flex;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    // z-index: 1;
    background-color: #21202e;
    padding-left: 5%;
    width: 100%;
    height: 100%;
    //   padding-top:5%;
    .line {
      position: absolute;
      left: 0;
      top: 10%;
      bottom: 10%;
      width: 1px;
      background: #6943d3;
      opacity: 0.3;
    }
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
      position: relative;
      table {
        width: 100%;
        min-height: 0%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        color: #ffffff;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%);
        border-left: 1px solid #38355b;
        border-top: 1px solid #38355b;
        tr:nth-child(odd) {
          background-color: #28263e;
        }
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
            border-bottom: 1px solid #38355b;
            border-right: 1px solid #38355b;
            padding: 4% 0;
            padding-left: 1%;
          }
        }
        input {
          background: none;
          color: #ffffff;
          border: 0;
        }
        .colortd td{
          color:#75becb
        }
        .colortd td:first-child{
          color:#fff;
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
