<template>
  <div class="editecharts" >
      <div class="leftside" :style="{paddingLeft:sideleftpad,paddingTop:sidetoppad}" v-if="!screenmin">
            <div class="manage" :style="manage">
              <BusinessProfile :timeRange="timeRange"/>
            </div>
            <div class="target" :style="target">
              <KeyIndicators :timeRange="timeRange"/>
            </div>
      </div>
      <div class="rightside" :style="rightside" v-if="!screenmin">
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
      <div class="miniscreen" v-if="screenmin">
              <div class="manage" :style="manage">
                <BusinessProfile :timeRange="timeRange"/>
              </div>
              <div class="target" :style="target">
                <KeyIndicators :timeRange="timeRange"/>
              </div>
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
      screenmin: window.innerWidth < 756 ? true : false,
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
  }
};
</script>
<style scoped lang="less">
@media (max-width: 756px) {
  .page .editecharts {
    width: 100%;
    height: auto;
    min-height: 0px;
    padding: 0 0.3rem;
    background: rgba(26, 26, 41, 1);
    display: block;
    margin-top: -1px;
    padding-bottom:0.5rem;
  }

  .manage,
  .target,
  .sell,
  .efficiency,
  .competive {
    width: 100% !important;
    padding: 0.25rem 0.3rem !important;
    background-color: #21202e;
  }
  .target,
  .sell,
  .efficiency,
  .competive {
    margin-top: 0.29rem !important;
  }
  .target {
    height: 5.02rem !important;
  }
  .sell {
    height: 3.99rem !important;
  }
  .efficiency {
    height: 3rem !important;
  }
  .competive {
    height: 7.04rem !important;
  }
}

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