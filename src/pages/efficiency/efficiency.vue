<template>
  <div class="efficiency-page" :style="pagestyle">
        <div class="head" :style="headstyle">
            <h4 :style="headtitle">经营效率</h4>
            <span class="el-icon-more" style="cursor:pointer;" :style="{opacity:opacitys}"
            @click="clickdit()" @mouseover="hoveredit(1)"   @mouseout="hoveredit(0)"></span>
        </div>
        <div class="content-left" :style="contentleft">
            <div :style="contentTitle">线下</div>
            <div class="contentfirst" :style="contentfirst"><span :style="leftContent">均效</span><span :style="leftContent">888/平</span></div>
            <div class="contentsecond" :style="contentsecond"><span :style="leftContent">人效</span><span :style="leftContent">888/人</span></div>
        </div>
        <div class="content-right" :style="cententRight">
            <div :style="contentTitle">线下</div>
            <div class="contentfirst" :style="contentfirst"><span :style="sendrate">配送及时率</span><span :style="customer">客户满意度</span></div>
            <div class="contentfirst">
                <span><div id="main-first" :style="echartstyle"></div></span>
                <span><div id="main-two" :style="echartstyle"></div></span>
            </div>
        </div>

        <div v-show="hidefromfalg" class="hideform" :style="formstyle">
            <form>
              <table border="1" cellpadding=0 cellspacing=0 style="color:#ffffff;">
                <tr><td>坪效</td><td><input type="number"></td></tr>
                <tr><td>人效</td><td><input type="number"></td></tr>
                <tr><td>配送及时率</td><td><input type="number"></td></tr>
                <tr><td>客户满意度</td><td><input type="number"></td></tr>
              </table>
              <button>确定</button>

                <!-- <div class="form-group">
                    <label for="average">
                       <span>坪效</span> 
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
      contentleft: {
        paddingLeft: Math.ceil(67 * this.baseScreenRate) + "px"
      },
      headtitle: {
        fontSize: Math.ceil(22 * this.baseScreenRate) + "px"
      },
      headstyle: {
        fontSize: Math.ceil(22 * this.baseScreenRate) + "px",
        height: Math.ceil(22 * this.baseScreenRate) + "px",
        paddingLeft: Math.ceil(40 * this.baseScreenRate) + "px",
        marginBottom: Math.ceil(10 * this.baseScreenRate) + "px"
      },
      pagestyle: {
        paddingTop: Math.ceil(23 * this.baseScreenRate) + "px"
      },
      contentTitle: {
        fontSize: Math.ceil(20 * this.baseScreenRate) + "px",
        color: "#537F8C",
        paddingBottom: Math.ceil(20 * this.baseScreenRate) + "px"
      },
      leftContent: {
        fontSize: Math.ceil(20 * this.baseScreenRate) + "px",
        textAlign: "right"
      },
      rightContent: {
        fontSize: Math.ceil(20 * this.baseScreenRate) + "px",
        textAlign: "center"
      },
      sendrate: {
        fontSize: Math.ceil(20 * this.baseScreenRate) + "px",
        textAlign: "center"
        // width:Math.ceil(100 * this.baseScreenRate) + "px",
        // marginRight:Math.ceil(60 * this.baseScreenRate) + "px",
      },
      customer: {
        fontSize: Math.ceil(20 * this.baseScreenRate) + "px",
        textAlign: "center"
        // width:Math.ceil(100 * this.baseScreenRate) + "px",
      },
      contentfirst: {
        color: "#537F8C",
        height: Math.ceil(19 * this.baseScreenRate) + "px"
      },
      contentsecond: {
        fontSize: Math.ceil(24 * this.baseScreenRate) + "px",
        color: "#537F8C",
        paddingTop: Math.ceil(45 * this.baseScreenRate) + "px"
      },
      cententRight: {
        paddingRight: Math.ceil(50 * this.baseScreenRate) + "px"
      },
      echartstyle: {
        width: Math.ceil(80 * this.baseScreenRate) + "px",
        height: Math.ceil(80 * this.baseScreenRate) + "px",
        margin: "0 auto"
      },
      formstyle: {
        fontSize: Math.ceil(24 * this.baseScreenRate) + "px",
        paddingTop: Math.ceil(30 * this.baseScreenRate) + "px"
      },
      // submitefficty: {
      //   padding: "1% 2%",
      //   fontSize: Math.ceil(18 * this.baseScreenRate) + "px"
      // },
      opacitys: 0,
      hidefromfalg: false
    };
  },
  components: {},
  mounted: function() {
    this.$nextTick(function() {
      this.initleftecharts("main-first");
      this.initleftecharts("main-two");
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
            color:id == "main-first"?[
              "#4f4f56",
              new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#1C0C99" },
                { offset: 1, color: "#49F9FF" }
              ])
            ]:[
              "#4f4f56",
              new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#BA51E9" },
                { offset: 1, color: "#E852B0" }
              ])
            ],
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
              { value: 310, name: "邮件营销" }
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
  // padding-right: 10px;
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
    max-width: 60%;
    width: 50%;
    height: 80%;
    float: right;
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
      //   .submitefficty.el-button.is-plain{

      //   }
      // }
      table {
        width: 100%;
        td {
          width: 50%;
          input {
            background: none;
            color: #ffffff;
            border: 0;
          }
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
