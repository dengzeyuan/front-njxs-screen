<template>
  <div class="editecharts">
      <div class="leftside" :style="{paddingLeft:sideleftpad,paddingTop:sidetoppad}">
            <div class="manage" :style="{height:manageheight}"> </div>
            <div class="target" :style="target"></div>
      </div>
      <div class="rightside" :style="rightside">
            <div class="sell" :style="sell"></div>
            <div class="efficiency" :style="efficiency">
                <efficiency />
            </div>
            <div class="competive" :style="competive">
                <competive />
            </div>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
import efficiency from "../efficiency/efficiency.vue";
import competive from "../competive/competive.vue";
export default {
  data() {
    return {
      sideleftpad: Math.ceil(40 * this.baseScreenRate) + "px",
      sidetoppad: Math.ceil(40 * this.baseScreenRate) + "px",
      manageheight: Math.ceil(723 * this.baseScreenRate) + "px",
      target: {
        height: Math.ceil(745 * this.baseScreenRate) + "px",
        marginTop: Math.ceil(40 * this.baseScreenRate) + "px"
      },
      rightside: {
        paddingLeft: Math.ceil(40 * this.baseScreenRate) + "px",
        paddingTop: Math.ceil(40 * this.baseScreenRate) + "px"
      },
      sell: {
        height: Math.ceil(414 * this.baseScreenRate) + "px"
      },
      efficiency: {
        height: Math.ceil(368 * this.baseScreenRate) + "px",
        marginTop: Math.ceil(40 * this.baseScreenRate) + "px"
      },
      competive: {
        height: Math.ceil(646 * this.baseScreenRate) + "px",
        marginTop: Math.ceil(40 * this.baseScreenRate) + "px"
      }
    };
  },
  components: {
    efficiency,
    competive
  }
};
</script>

<style scoped lang="less">
.editecharts {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #201F2D;
  .leftside,
  .rightside {
    height: 100%;
  }
  //   左边
  .leftside {
    width: 59.64%;
    .manage {
      width: 100%;
      border: 1px solid #312f46;
    }
    .target {
      width: 100%;
      border: 1px solid #312f46;
    }
  }
  .rightside {
    width: 40.36%;
    padding-right: 0.3%;
    .sell {
      width: 100%;
      border: 1px solid #312f46;
    }
    .efficiency {
      width: 100%;
      border: 1px solid #312f46;
    }
    .competive {
      width: 100%;
      border: 1px solid #312f46;
    }
  }
}
</style>
