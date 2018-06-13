<template>
  <div class="efficiency-page" :style="pagestyle">
        <div class="head" :style="headstyle"><h4>经营效率</h4>
        <span class="el-icon-more" style="cursor:pointer;" :style="{opacity:opacitys}"
          @click="clickdit()" @mouseover="hoveredit(1)"   @mouseout="hoveredit(0)"></span></div>
        <div class="content-left">
            <div :style="contentTitle">线下</div>
            <div class="contentfirst" :style="contentfirst"><span :style="leftContent">均效</span><span :style="leftContent">888/平</span></div>
            <div class="contentsecond" :style="contentsecond"><span :style="leftContent">人效</span><span :style="leftContent">888/人</span></div>
        </div>
        <div class="content-right" :style="cententRight">
            <div :style="contentTitle">线下</div>
            <div class="contentfirst" :style="contentfirst"><span :style="leftContent">配送及时率</span><span :style="leftContent">客户满意度</span></div>
            <div class="contentfirst" :style="contentfirst">
                <span><div id="main" :style="echartstyle"></div></span>
                <span><div id="maintwo" :style="echartstyle"></div></span>
            </div>
        </div>

        <div v-show="hidefromfalg" class="hideform" :style="formstyle">
            <form>
                <div class="form-group">
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
                <div class="form-group" style="text-align:right;padding-top:4%;">
                  <el-button size="mini" type="primary" plain>确定</el-button>
                </div>
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
        fontSize: Math.ceil(30 * this.baseScreenRate) + "px",
        height: Math.ceil(44 * this.baseScreenRate) + "px",
      },
      pagestyle: {
        paddingLeft: Math.ceil(40 * this.baseScreenRate) + "px",
        paddingTop: Math.ceil(23 * this.baseScreenRate) + "px"
      },
      contentTitle: {
        fontSize: Math.ceil(24 * this.baseScreenRate) + "px",
        color: "#537F8C",
        paddingBottom: Math.ceil(20 * this.baseScreenRate) + "px"
      },
      leftContent: {
        fontSize: Math.ceil(20 * this.baseScreenRate) + "px"
      },
      contentfirst: {
        color: "#537F8C"
      },
      contentsecond: {
        fontSize: Math.ceil(24 * this.baseScreenRate) + "px",
        color: "#537F8C",
        paddingTop: Math.ceil(50 * this.baseScreenRate) + "px"
      },
      cententRight: {
        paddingRight: Math.ceil(50 * this.baseScreenRate) + "px"
      },
      echartstyle: {
        // width: Math.ceil(77 * this.baseScreenRate) + "px",
        // height: Math.ceil(77 * this.baseScreenRate) + "px"
        width: "80%",
        height: "80%",
        margin: "0 auto"
      },
      formstyle: {
        fontSize: Math.ceil(24 * this.baseScreenRate) + "px",
        paddingTop: Math.ceil(30 * this.baseScreenRate) + "px"
      },
      opacitys: 0,
      hidefromfalg: false
    };
  },
  components: {},
  mounted: function() {
    this.$nextTick(function() {
      this.initleftecharts("main");
      this.initleftecharts("maintwo");
    });
  },
  methods: {
    clickdit: function() {
      console.log(1111);
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
        title: {
          text: "80%",
          x: "center",
          y: "center",
          textStyle: {
            fontWeight: "normal",
            color: id == "main" ? "#49CDD9" : "#C551A3",
            fontSize: Math.ceil(18 * this.baseScreenRate)
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
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
  position: relative;
  padding-right: 10px;
  width: 100%;
  height: 100%;
  clear: both;
  min-width: 0;
  overflow: hidden;
  background-color: #21202e;
  .head {
    max-height: 15%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #75becb;
    span:last-child {
      transform: rotate(90deg);
    }
  }
  .content-left {
    width: 40%;
    height: 80%;
    float: left;
    text-align: center;
    .contentfirst {
      span:first-child {
        color: #ffffff;
        width: 30%;
      }
      span {
        display: inline-block;
        width: 70%;
        text-align: left;
        color: #ed6b80;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .contentsecond {
      span:first-child {
        color: #ffffff;
        width: 30%;
      }
      span {
        display: inline-block;
        width: 70%;
        text-align: left;
        color: #ed6b80;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .content-right {
    width: 60%;
    height: 80%;
    float: left;
    text-align: center;
    overflow: hidden;
    .contentfirst {
      span {
        float: left;
        width: 50%;
        text-align: center;
        color: #ffffff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .contentsecond {
      span {
        float: left;
        width: 50%;
        text-align: center;
        color: #ffffff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
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
      width: 80%;
      min-height: 0;
      margin: 0 auto;
      //   border:1px solid #fff;
      .form-group {
        width: 100%;
        padding-bottom: 1%;
        label,
        input {
          width: 49%;
          display: inline-block;
        }
        label {
          text-align: right;
        }
      }
    }
  }
}
</style>
