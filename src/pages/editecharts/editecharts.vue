<template>
  <div class="editecharts" >
      <div class="leftside" :style="{paddingLeft:sideleftpad,paddingTop:sidetoppad}">
            <div class="manage" :style="manage">
              <BusinessProfile :timeRange="timeRange"/>
            </div>
            <div class="target" :style="target">
              <KeyIndicators :timeRange="timeRange"/>
            </div>
      </div>
      <div class="rightside" :style="rightside">
            <div class="sell" :style="sell">
                  <Sales :timeRange="timeRange"/>
            </div>
            <div class="efficiency" :style="efficiency">
                <efficiency :timeRange="timeRange" :role="role" />
            </div>
            <div class="competive" :style="competive">
                <competive :timeRange="timeRange" :role="role" />
            </div>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BusinessProfile from "../businessProfile/business.vue";
import KeyIndicators from "../keyIndicators/key.vue";
import Sales from "../sales/sales.vue";
import efficiency from "../efficiency/efficiency.vue";
import competive from "../competive/competive.vue";
export default {
  props: ["timeRange"],
  data() {
    return {
      role: this.$route.params.id,
      sideleftpad: Math.ceil(25 * this.baseScreenRate) + "px",
      sidetoppad: Math.ceil(25 * this.baseScreenRate) + "px",
      manage: {
        height: Math.ceil(454 * this.baseScreenRate) + "px",
        width: Math.ceil(1215 * this.baseScreenRate) + "px"
      },
      target: {
        height: Math.ceil(495 * this.baseScreenRate) + "px",
        width: Math.ceil(1215 * this.baseScreenRate) + "px",
        marginTop: Math.ceil(25 * this.baseScreenRate) + "px"
      },
      rightside: {
        paddingLeft: Math.ceil(25 * this.baseScreenRate) + "px",
        paddingTop: Math.ceil(25 * this.baseScreenRate) + "px"
      },
      sell: {
        width: Math.ceil(633 * this.baseScreenRate) + "px",
        height: Math.ceil(244 * this.baseScreenRate) + "px"
      },
      efficiency: {
        height: Math.ceil(217 * this.baseScreenRate) + "px",
        width: Math.ceil(633 * this.baseScreenRate) + "px",
        marginTop: Math.ceil(25 * this.baseScreenRate) + "px"
      },
      competive: {
        height: Math.ceil(463 * this.baseScreenRate) + "px",
        width: Math.ceil(633 * this.baseScreenRate) + "px",
        marginTop: Math.ceil(25 * this.baseScreenRate) + "px"
      }
    };
  },
  components: {
    efficiency,
    competive,
    BusinessProfile,
    KeyIndicators,
    Sales
  },
  mounted: function() {
    this.$nextTick(function() {
      // window.innerWidth
    });
  }
};
</script>
<style scoped lang="less">
.editecharts {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #201f2d;
  justify-content: center;
  .leftside,
  .rightside {
    height: 100%;
  }
  //   左边
  .leftside {
    .target,
    .manage {
      border: 1px solid #312f46;
      border-radius: 4px;
    }
  }
  .rightside {
    padding-right: 0.3%;
    .sell,
    .efficiency,
    .competive {
      border: 1px solid #312f46;
      border-radius: 4px;
    }
  }
}
</style>
<style>
@media (max-width: 750px) {
  .editecharts {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #201f2d;
    justify-content: center;
    flex-wrap: wrap;
    /* flex-direction: column; */
  }
  .leftside,
  .rightside {
    width: 100%;
    height: 100%;
  }
  .leftside .target,
  .leftside .manage,
  .rightside .sell,
  .rightside .efficiency,
  .rightside .competive {
    width: 100% !important;
  }
}
</style>