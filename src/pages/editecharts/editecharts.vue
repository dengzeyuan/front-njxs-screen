<template>
  <div class="editecharts">
      <div class="leftside" :style="{paddingLeft:sideleftpad,paddingTop:sidetoppad}">
            <div class="manage" :style="{height:manageheight}">
              <BusinessProfile/>
            </div>
            <div class="target" :style="target">
                  <KeyIndicators/>
            </div>
      </div>
      <div class="rightside" :style="rightside">
            <div class="sell" :style="sell">
                  <Sales/>
            </div>
            <div class="efficiency" :style="efficiency"></div>
            <div class="competive" :style="competive"></div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BusinessProfile from '../businessProfile/business.vue';
import KeyIndicators from '../keyIndicators/key.vue';
import Sales from '../sales/sales.vue';
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
        height: Math.ceil(414 * this.baseScreenRate) + "px",
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
    BusinessProfile,
    KeyIndicators,
    Sales
  }
};
</script>

<style scoped lang="less">
.editecharts {
  width: 100%;
  height: 100%;
  display: flex;
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
