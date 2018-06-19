<template>
    <div class="content">
    <div class="main" :style="mainstyle">
        <div class="textd1">
            <div id="main1" :style="lineNum" style="width: 100%;height:40%"></div> 
            <div class="table-data">
                <table rules=rows>
                    <tr class='trs' :style="contentTitle">
                        <td>&nbsp;</td><td>线上</td><td>线下</td>
                    </tr>
                    <tr :style="contentText" v-for="(item,index) in textValue" :key='index'>
                        <td>{{item.name}}</td>
                        <td>{{item.onLineValue}}</td>
                        <td>{{item.underLineValue}}</td>
                    </tr>
                    
                </table>
            </div>
        </div>
        <div class="textd2">
           <div id="main2" :style="lineNum" style="width: 100%;height:40%"></div>
           <div class="table-data">
            <table rules=rows>
                    <tr class='trs' :style="contentTitle">
                        <td>&nbsp;</td><td>线上</td><td>线下</td>
                    </tr>
                    <tr  :style="contentText" v-for="(item,index) in textValue1" :key='index'>
                        <td>{{item.name}}</td>
                        <td>{{item.onLineValue}}</td>
                        <td>{{item.underLineValue}}</td>
                    </tr>
                    
                </table>
            </div>
        </div>
        <div class="textd3">
           <div id="main3" :style="lineNum" style="width: 100%;height:40%"></div>
           <div class="table-data">
            <table rules=rows>
                <tr class='trs' :style="contentTitle">
                    <td>&nbsp;</td><td>线上</td><td>线下</td>
                </tr>
                <tr  :style="contentText" v-for="(item,index) in textValue2" :key='index'>
                    <td>{{item.name}}</td>
                    <td>{{item.onLineValue}}</td>
                    <td>{{item.underLineValue}}</td>
                </tr>
            </table>
            </div>
        </div>
    </div>
    </div>    
</template>
<script>
export default {
  props: ["timeRange"],
  watch: {
    timeRange: function(val) {
      this.initdata();
    }
  },
  data() {
    return {
      dateValue: [],
      textValue: [],
      dateValue1: [],
      textValue1: [],
      topValue: [],
      textValue2: [],
      topValue1: [],
      topValuex: [],
      topValuex1: [],
      topValuey: [],
      topValuey1: [],
      contentTitle: {
        fontSize: Math.ceil(18 * this.baseScreenRate) + "px",
        color: "#537F8C"
      },
      contentText: {
        fontSize: Math.ceil(18 * this.baseScreenRate) + "px",
        color: "#fff"
      },
      lineNum: {
        fontSize: Math.ceil(24 * this.baseScreenRate) + "px",
        color: "#fff"
      },
      mainstyle: {
        paddingTop: Math.ceil(23 * this.baseScreenRate) + "px",
        paddingLeft: "2%",
        paddingRight: "2%"
      },
      onlineorder: "",
      underlineorder: "",
      onlineordervalue: 0,
      underlineordervalue: 0,

      onlinecustomer: "",
      underlinecustomer: "",
      onlinecustomervalue: 0,
      underlinecustomervalue: 0,

      onlineuser: "",
      underlineuser: "",
      onlineuservalue: 0,
      underlineuservalue: 0
    };
  },
  mounted() {
    this.initdata();
  },
  methods: {
    initdata() {
      var that = this;
      this.axios
        .get(
          "http://suneee.dcp.weilian.cn/njxs-demo/operation/data/kpi/" +
            this.timeRange
        )
        .then(res => {
          that.onlineorder = res.data.data[0].onLineRate;
          that.underlineorder = res.data.data[0].underLineRate;
          that.onlineordervalue = res.data.data[0].onLineValue;
          that.underlineordervalue = res.data.data[0].underLineValue;

          that.onlinecustomer = res.data.data[1].onLineRate;
          that.underlinecustomer = res.data.data[1].underLineRate;
          that.onlinecustomervalue = res.data.data[1].onLineValue;
          that.underlinecustomervalue = res.data.data[1].underLineValue;

          that.onlineuser = res.data.data[2].onLineRate + "%";
          that.underlineuser = res.data.data[2].underLineRate + "%";
          that.onlineuservalue = res.data.data[2].onLineValue;
          that.underlineuservalue = res.data.data[2].underLineValue;
          this.textValue = [];
          res.data.data[0].singleList.map(val => {
            this.textValue.push(val);
          });
          this.textValue1 = [];
          res.data.data[1].singleList.map(val => {
            this.textValue1.push(val);
          });
          this.textValue2 = [];
          res.data.data[2].singleList.map(val => {
            this.textValue2.push(val);
          });
          this.textValue2 = this.textValue2.concat([
            { name: "无", onLineValue: "无", underLineValue: "无" },
            { name: "无", onLineValue: "无", underLineValue: "无" }
          ]);
          // this.lineName.push(this.dateValue.name)

          //指定图表的配置项和数据
          var myChart1 = this.$echarts.init(document.getElementById("main1"));
          // 指定图表的配置项和数据
          var option1 = {
            title: {
              text: "关键指标",
              // left: Math.ceil(30 * this.baseScreenRate),
              // top: Math.ceil(23 * this.baseScreenRate),
              textStyle: {
                fontWeight: "normal", //标题颜色
                color: "#75becb",
                fontSize: Math.ceil(22 * this.baseScreenRate)
              }
            },
            opcity: 0.4,
            color: ["rgba(255, 114, 153, 0.7)", "rgba(255, 186, 78, 0.7)"], //手动设置每个图例的颜色
            legend: {
              orient: "vertical",
              left: "40%",
              top: "45%",
              itemWidth: 5, //图例标记的图形宽度
              itemHeight: 5, //图例标记的图形高度
              textStyle: {
                color: "#fff", //文字颜色
                fontSize: Math.ceil(18 * this.baseScreenRate)
              }
            },
            series: [
              //系列列表
              {
                type: "pie", //类型 pie表示饼图
                center: ["20%", "60%"], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius: ["45%", "55%"], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                label: {
                  position: "center",
                  color: "#fff"
                },
                hoverAnimation: false,
                data: [
                  {
                    label: {
                      formatter: "订单量",
                      padding: [10, 0, 0, 0],
                      textStyle: {
                        fontSize: Math.ceil(18 * this.baseScreenRate)
                      }
                    },
                    value: that.onlineordervalue,
                    name: "线上" + that.onlineorder
                  },
                  {
                    label: {
                      show: false
                    },
                    value: that.underlineordervalue,
                    name: "线下" + that.underlineorder
                  }
                ]
              }
            ]
          };

          //使用刚指定的配置项和数据显示图表。
          myChart1.setOption(option1);

          //指定图表的配置项和数据
          var myChart2 = this.$echarts.init(document.getElementById("main2"));
          // 指定图表的配置项和数据
          var option2 = {
            color: ["rgba(244, 54, 255, 0.7)", "rgba(255, 143, 216, 0.7)"], //手动设置每个图例的颜色
            legend: {
              orient: "vertical",
              left: "40%",
              top: "45%",
              itemWidth: 5, //图例标记的图形宽度
              itemHeight: 5, //图例标记的图形高度
              textStyle: {
                color: "#fff", //文字颜色
                fontSize: Math.ceil(18 * this.baseScreenRate)
              }
            },
            series: [
              //系列列表
              {
                type: "pie", //类型 pie表示饼图
                center: ["20%", "60%"], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius: ["55%", "45%"], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                label: {
                  position: "center",
                  color: "#fff"
                },
                hoverAnimation: false,
                data: [
                  {
                    label: {
                      formatter: "客单价",
                      padding: [10, 0, 0, 0],
                      textStyle: {
                        fontSize: Math.ceil(18 * this.baseScreenRate)
                      }
                    },
                    value: that.onlinecustomervalue,
                    name: "线上" + that.onlinecustomer
                  },
                  {
                    label: {
                      show: false
                    },
                    value: that.underlinecustomervalue,
                    name: "线下" + that.underlinecustomer
                  }
                ]
              }
            ]
          };

          //使用刚指定的配置项和数据显示图表。
          myChart2.setOption(option2);

          //指定图表的配置项和数据
          var myChart3 = this.$echarts.init(document.getElementById("main3"));
          // 指定图表的配置项和数据
          var option3 = {
            color: ["rgba(74, 163, 112, 0.7)", "rgba(183, 201, 175, 0.7)"], //手动设置每个图例的颜色
            // effectOption: {backgroundColor: 'rgba(0, 0, 0, 0.2)'},
            legend: {
              orient: "vertical",
              left: "40%",
              top: "45%",
              itemWidth: 5, //图例标记的图形宽度
              itemHeight: 5, //图例标记的图形高度
              textStyle: {
                color: "#fff", //文字颜色
                fontSize: Math.ceil(18 * this.baseScreenRate)
              }
            },
            series: [
              //系列列表
              {
                type: "pie", //类型 pie表示饼图
                center: ["20%", "60%"], //设置饼的原心坐标 不设置就会默认在中心的位置
                radius: ["45%", "55%"], //饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
                label: {
                  position: "center",
                  color: "#fff"
                },
                hoverAnimation: false,
                data: [
                  {
                    label: {
                      formatter: "用户数",
                      padding: [10, 0, 0, 0],
                      textStyle: {
                        fontSize: Math.ceil(18 * this.baseScreenRate)
                      }
                    },
                    value: that.onlineuservalue,
                    name: "线上" + that.onlineuser
                  },
                  {
                    label: {
                      show: false
                    },
                    value: that.underlineuservalue,
                    name: "线下" + that.underlineuser
                  }
                ]
              }
            ]
          };

          //使用刚指定的配置项和数据显示图表。
          myChart3.setOption(option3);
        })
        .catch(res => {
          console.log("请求失败");
        });
    },
    rowClass: function(row, rowIndex) {
      return "backcol";
    }
  }
};
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
  .textd1 {
    flex: 1;
    .table-data {
      width: 100%;
      height: 60%;
      table {
        width: 100%;
        height: 100%;
        color: #fff;
        .trs {
          color: #537f8c;
        }
        tr > td:first-child {
          width: 40%;
        }
        tr > td {
          width: 30%;
        }
      }
    }
  }
  .textd2 {
    flex: 1;
    .table-data {
      width: 100%;
      height: 60%;
      table {
        width: 100%;
        height: 100%;
        font-size: 10%;
        color: #fff;
        .trs {
          color: #537f8c;
        }
        tr > td:first-child {
          width: 40%;
        }
        tr > td {
          width: 30%;
        }
      }
    }
  }
  .textd3 {
    flex: 1;
    .table-data {
      width: 100%;
      height: 60%;
      table {
        width: 100%;
        height: 100%;
        font-size: 10%;
        color: #fff;
        .trs {
          color: #537f8c;
        }
        tr > td:first-child {
          width: 40%;
        }
        tr > td {
          width: 30%;
        }
      }
    }
  }
}
</style>


