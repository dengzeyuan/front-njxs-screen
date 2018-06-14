<template>
  <div class="container">
    <!-- <Header class="header"/> -->
    <div class="header" :style="headerheight">
      <span :style="headertitltstyle"> <span class="trigon" :style="trigonleft"></span>宁家鲜生运营数据展示<span class="trigon" :style="trigonright"></span></span>
      
        <el-select v-model="value"  size="mini" class="timechange" name="timechange">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
   </div>
    <div class='container-home'>
         <router-view></router-view> 
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
      headertitltstyle: {
        fontSize: Math.ceil(36 * this.baseScreenRate) + "px",
        height: "100%"
      },
      headerheight: {
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
          value: "WEEK ",
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
      value: "the week"
    };
  },
  components: {
    // Header
    // Left,
    // editecharts
  }
};
</script>
<style>
.timechange .el-input>input[name="timechange"]{
  background: rgba(45, 44, 63, 1);
  border-radius: 4px;
  color:#7A7899;
  border:1px solid #2D2C3F;
}
</style>
<style lang="less" scoped>
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
      width: 128px;
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


