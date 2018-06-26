<template>
  <div class="container">
    <!-- <Header class="header"/> -->
    <!-- pc -->
    <div class="header" :style="headerheight" v-if="!screenmin">
      <span :style="headertitltstyle"> <span class="trigon" :style="trigonleft"></span>宁家鲜生经营分析<span class="trigon" :style="trigonright"></span></span>
        <span class="el-icon-arrow-left" @click="changetimeRange('add')"></span>
        <el-select v-model="value"  size="mini" class="timechange" name="timechange">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="el-icon-arrow-right" @click="changetimeRange('del')" v-show="deldisabled"></span>
   </div>

<!-- 移动 -->
    <div class="header" :style="headerheight" v-if="screenmin">
       宁家鲜生运营数据展示
   </div>
    <div class='container-home'>
         <!-- 移动 -->
          <div class="minitimeRange" v-if="screenmin">
            <span class="el-icon-arrow-left" @click="changetimeRange('add')"></span>
            <el-select v-model="value"  size="mini" class="timechange" name="timechange">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <span class="el-icon-arrow-right" @click="changetimeRange('del')" v-show="deldisabled"></span>
          </div>
         <router-view :timeRange="{time:value,change:timevalue}" ></router-view> 
    </div>
  </div>
</template>
<script>
// import Header from "../components/Header.vue";
// import Left from "../components/Left.vue";
// import editecharts from "./editecharts/editecharts.vue";
export default {
  data() {
    return {
      deldisabled:true,
      screenmin: window.innerWidth < 756 ? true : false,
      screenwidth: 0,
      headertitltstyle: {
        fontSize: Math.ceil(36 * this.baseScreenRate) + "px",
        height: "100%"
      },
      headerheight: {
        // height:window.innerWidth>750?Math.ceil(64 * this.baseScreenRate) + "px":Math.ceil(80 * this.baseScreenRate) + "px",
        height: Math.ceil(64 * this.baseScreenRate) + "px",
        lineHeight: Math.ceil(64 * this.baseScreenRate) + "px"
      },
      trigonleft: {
        float: "left",
        borderTop:
          Math.ceil(64 * this.baseScreenRate) + "px solid rgba(40,39,55,1)",
        borderBottom: "0px"
      },
      trigonright: {
        float: "right",
        borderBottom: Math.ceil(64 * this.baseScreenRate) + "px solid #1a1a29",
        borderTop: "0px"
      },
      timechange: {
        width: Math.ceil(128 * this.baseScreenRate) + "px",
        height: Math.ceil(35 * this.baseScreenRate) + "px"
      },
      options: [
        {
          value: "WEEK",
          label: "the week"
        },
        {
          value: "MONTH",
          label: "the month"
        },
        {
          value: "QUARTER",
          label: "the quarter"
        }
      ],
      value: "WEEK",
      timevalue: "1",
    };
  },
  components: {
    // Header
    // Left,
    // editecharts
  },
  methods: {
    changetimeRange: function(flag) {
        if (flag == "add") {
           this.timevalue++;
           this.deldisabled=true;
        } else {
          if(this.timevalue>0){
            this.timevalue--;
            if(this.timevalue==0){
              this.deldisabled=false;
            }
          }
        }
    }
  }
};
</script>
<style>
.timechange .el-input > input[name="timechange"] {
  background: rgba(45, 44, 63, 1);
  border-radius: 4px;
  color: #7a7899;
  border: 1px solid #2d2c3f;
}
.el-loading-mask {
  background: rgba(0, 0, 0, 0.4) !important;
}
</style>

<style lang="less" scoped>
@media (max-width: 756px) {
  div.container {
    width: 100%;
    height: auto;
    min-width: 0px;
  }
  div.container .header {
    height: 0.8rem;
    line-height: 0.8rem;
    background: rgba(26, 26, 41, 1);
    color: #ffffff;
    font-size: 0.34rem;
  }
  .minitimeRange {
    width: 100%;
    min-width: 0px;
    background: rgba(26, 26, 41, 1);
    padding-right: 0.3rem;
    position: relative;
    .el-icon-arrow-left {
      display: inline-block;
      height: 50%;
      position: absolute;
      top: 30%;
      cursor: pointer;
      color: #c0c4cc;
      width: 0.1rem;
      right: 2.8rem;
      font-size: 0.4em;
    }
    .el-icon-arrow-right {
      display: inline-block;
      height: 50%;
      position: absolute;
      top: 30%;
      cursor: pointer;
      color: #c0c4cc;
      width: 0.3rem;
      right: 0.3rem;
      font-size: 0.4em;
    }
  }
  .timechange {
    float: right;
    width: 1.57rem;
    padding: 0.23rem 0;
    margin-right: 0.5rem;
  }
  .container-home {
    width: 100%;
    height: auto;
    min-width: 0px;
    flex-flow: column;
  }
}

.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  height: 100vh;
  .container-home {
    height: 100%;
  }
  .header {
    background: rgba(40, 39, 55, 1);
    color: #333;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    text-align: center;
    position: relative;
    .el-icon-arrow-left {
      display: inline-block;
      width: 1%;
      height: 50%;
      position: absolute;
      right: 15%;
      top: 36%;
      cursor: pointer;
      background: #282737;
      color: #c0c4cc;
    }
    .el-icon-arrow-right {
      display: inline-block;
      width: 1%;
      height: 50%;
      position: absolute;
      right: 2%;
      top: 36%;
      cursor: pointer;
      background: #282737;
      color: #c0c4cc;
    }
    span {
      display: inline-block;
      width: 42.23%;
      background: rgba(26, 26, 41, 1);
      color: #ffffff;
    }
    .trigon:first-child {
      display: inline-block;
      width: 1px;
      height: 1px;
      border-left: 0px;
      border-right: 20px solid transparent;
      height: 100%;
    }
    .trigon:last-child {
      display: inline-block;
      width: 1px;
      height: 1px;
      border-left: 0px;
      border-right: 20px solid rgb(40, 39, 55);
      height: 100%;
    }
    .timechange {
      overflow: hidden;
      position: absolute;
      right: 4%;
      top: 0;
      width: 10%;
    }
  }
  .container-home {
    display: flex;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    .aside {
      width: 200px;
      background-color: #dddddd;
      color: #333;
      box-sizing: border-box;
      flex-shrink: 0;
      overflow: auto;
    }
    .view {
      background-color: #e9eef3;
      color: #333;
      box-sizing: border-box;
      flex: 1;
      flex-basis: auto;
      padding: 20px;
      overflow: auto;
    }
  }
}
</style>


