<template>
    <div class = 'content' :style="pagestyle" v-loading="loading">
        <div class="head" :style="headstyle">
            <h4 :style="headtitle">销售同环化</h4>
            <el-select v-model="value" :disabled="enable" size="mini" class="namechange" @change="initdata(value)" name="namechange">
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
  props: ["timeRange"],
  watch: {
    timeRange: function(val) {
      if (val == "QUARTER") {
        this.enable = false;
      } else {
        this.value = "0";
        this.enable = true;
      }
      this.initdata();
    }
  },
  data() {
    return {
      loading:true,
      enable: this.timeRange == "QUARTER" ? false : true,
      headstyle: {
        fontSize: Math.ceil(22 * this.baseScreenRate) + "px",
        paddingLeft: Math.ceil(40 * this.baseScreenRate) + "px",
        paddingRight: Math.ceil(20 * this.baseScreenRate) + "px",
        marginBottom: Math.ceil(10 * this.baseScreenRate) + "px"
      },
      headtitle: {
        fontSize: Math.ceil(22 * this.baseScreenRate) + "px",
        fontWeight: "normal"
      },
      pagestyle: {
        paddingTop: Math.ceil(23 * this.baseScreenRate) + "px"
      },
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
      value: "0",
      timeDate: [],
      timeDate2: [],
      amountDate: [],
      amountDate1: [],
      textData: "WEEK",
      numDate: 0,
      toolipform: {}
      // disabled:true
    };
  },
  mounted() {
    this.initdata();
  },
  methods: {
    initdata() {
      this.loading=true;
      var that = this;
      this.axios
        .get(
          "http://suneee.dcp.weilian.cn/njxs-demo/operationData/saleRate/data/" +
            this.timeRange +
            "/" +
            this.value
        )
        .then(res => {
          that.loading=false;
          that.toolipform["dataCurrentWeek"] = [];
          that.toolipform["dataPreWeek"] = [];
          that.toolipform["dataCurrentValue"] = [];
          that.toolipform["dataPreValue"] = [];

          that.timeDate = [];
          that.amountDate = [];
          that.amountDate1 = [];
          res.data.data.dataCurrentWeek.map(val => {
            that.timeDate.push(val.time);
            that.amountDate.push(val.amount);
            that.toolipform["dataCurrentWeek"].push(val.time);
            that.toolipform["dataCurrentValue"].push(val.amount);
          });
          res.data.data.dataPreWeek.map(val => {
            that.amountDate1.push(val.amount);
            that.timeDate2.push(val.time);
            that.toolipform["dataPreWeek"].push(val.time);
            that.toolipform["dataPreValue"].push(val.amount);
          });

          that.initbar(that.toolipform);
        })
        .catch(res => {
          console.log("请求失败");
        });
    },
    initbar(data) {
      let doc = document.getElementById("saldata");
      this.$echarts.dispose(doc);
      let myMain = this.$echarts.init(doc);
      let option = {
        tooltip: {
          trigger: "axis",
          formatter: function(d) {
            function comdify(n){
　　var re=/\d{1,3}(?=(\d{3})+$)/g;
　　var n1=n.replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
　　return n1;
}

            for (let i = 0; i < data.dataCurrentWeek.length; i++) {
              if (data.dataCurrentWeek[i] == d[0].name) {
                return (
                  "<div>" +
                  data.dataCurrentWeek[i] +
                  ":" +
                  comdify(String(data.dataCurrentValue[i]))+
                  "<br />" +
                  data.dataPreWeek[i] +
                  ":" +
                  comdify(String(data.dataPreValue[i]))  +
                  "</div>"
                );
              }
            }
          }
        },
        xAxis: [
          {
            type: "category",
            data: this.timeDate,
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                color: ["#21202E"]
              }
            },
            nameTextStyle: {
              color: ["#21202E"]
            },
            axisLine: {
              lineStyle: {
                color: "#75becb"
                // width:1,//这里是为了突出显示加上的
              }
            }
          }
        ],
        yAxis: [
           {
            name: "单位(元)",
            nameGap :"5",
            type: "value",
            splitLine: {
              lineStyle: {
                color: "#21202E"
              }
            },
            nameTextStyle: {
              color: "#75becb"
            },
            axisLine: {
              lineStyle: {
                color: "#75becb"
              }
            }
          }
        ],
        grid: {
          top: "15%",
          left: "2%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        series: [
          {
            name: "比较数据",
            type: "bar",
            data: this.amountDate1,
            barWidth: 12, //柱宽
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#5EFCF6"
                  },
                  {
                    offset: 1,
                    color: "#5D27A0"
                  }
                ])
              }
            }
          },
          {
            name: "当前数据",
            type: "bar",
            data: this.amountDate,
            barWidth: 12, //柱宽
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#FECC44"
                  },
                  {
                    offset: 1,
                    color: "#EC6783"
                  }
                ])
              }
            }
          }
        ]
      };
      myMain.setOption(option);
    }
  }
};
</script>
<style>
.namechange {
  max-width: 60px;
}
.namechange .el-input > input[name="namechange"] {
  background: rgba(45, 44, 63, 1);
  border-radius: 4px;
  color: #7a7899;
  border: 1px solid #2d2c3f;
  font-size: 0.2em;
  height: 22px;
  line-height: 22px;
  padding: 0 10px;
}
.namechange .el-input .el-select__caret {
  font-size: 0.2em;
}
</style>
<style lang="less" scoped>
@media (max-width: 756px) {
  .sell .content{
    padding:0 !important;
    .head{
      padding-left:0 !important;
    }
  }
}
.content {
  width: 100%;
  height: 100%;
  position: relative;
  .head {
    max-height: 15%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #75becb;
  }
  .namesDate {
    position: fixed;
    right: 4%;
    top: 0;
    width: 75px;
  }
}
#saldata {
  width: 100%;
  height: 80%;
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


