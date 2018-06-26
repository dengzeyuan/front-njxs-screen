<template>
  <div class="editecharts" >
      <div class="leftside" :style="{paddingLeft:sideleftpad,paddingTop:sidetoppad}" v-if="!screenmin">
            <div class="manage" :style="manage">
              <div class="trianglet"></div>
              <div class="triangler"></div>
              <div class="triangleb"></div>
              <div class="trianglel"></div>
              <BusinessProfile :timeRange="timeRange"/>
            </div>
            <div class="target" :style="target">
               <div class="trianglet"></div>
              <div class="triangler"></div>
              <div class="triangleb"></div>
              <div class="trianglel"></div>
              <KeyIndicators :timeRange="timeRange" @sendrate="sendratefunc" />
            </div>
      </div>
      <div class="rightside" :style="rightside" v-if="!screenmin">
            <div class="sell" :style="sell">
                  <div class="trianglet"></div>
                  <div class="triangler"></div>
                  <div class="triangleb"></div>
                  <div class="trianglel"></div>
                  <Sales :timeRange="timeRange"/>
            </div>
            <div class="efficiency" :style="efficiency">
                <div class="trianglet"></div>
                <div class="triangler"></div>
                <div class="triangleb"></div>
                <div class="trianglel"></div>
                <efficiency :timeRange="timeRange" :role="role" :propsendrate="effectiverate" />
            </div>
            <div class="competive" :style="competive">
                <div class="trianglet"></div>
                <div class="triangler"></div>
                <div class="triangleb"></div>
                <div class="trianglel"></div>
                <competive :timeRange="timeRange" :role="role"/>
            </div>
      </div>
      <div class="miniscreen" v-if="screenmin">
              <div class="manage" :style="manage">
                <div class="trianglet"></div>
                <div class="triangler"></div>
                <div class="triangleb"></div>
                <div class="trianglel"></div>
                <BusinessProfile :timeRange="timeRange"/>
              </div>
              <div class="target" :style="target">
                <div class="trianglet"></div>
                <div class="triangler"></div>
                <div class="triangleb"></div>
                <div class="trianglel"></div>
                <KeyIndicators :timeRange="timeRange"  @sendrate="sendratefunc"/>
              </div>
              <div class="sell" :style="sell">
                <div class="trianglet"></div>
                <div class="triangler"></div>
                <div class="triangleb"></div>
                <div class="trianglel"></div>
                    <Sales :timeRange="timeRange"/>
              </div>
              <div class="efficiency" :style="efficiency">
                  <div class="trianglet"></div>
                  <div class="triangler"></div>
                  <div class="triangleb"></div>
                  <div class="trianglel"></div>
                  <efficiency :timeRange="timeRange" :role="role" :propsendrate="effectiverate"/>
              </div>
              <div class="competive" :style="competive">
                  <div class="trianglet"></div>
                  <div class="triangler"></div>
                  <div class="triangleb"></div>
                  <div class="trianglel"></div>
                  <competive :timeRange="timeRange" :role="role"/>
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
      effectiverate: 0,
      screenmin: window.innerWidth < 756 ? true : false,
      role: this.$route.params.id,
      sideleftpad: Math.ceil(25 * this.baseScreenRate) + "px",
      sidetoppad: Math.ceil(25 * this.baseScreenRate) + "px",
      manage: {
        height: Math.ceil(486 * this.baseScreenRate) + "px",
        width: Math.ceil(1215 * this.baseScreenRate) + "px"
      },
      target: {
        // height: Math.ceil(495 * this.baseScreenRate) + "px",
        height: Math.ceil(463 * this.baseScreenRate) + "px",
        width: Math.ceil(900 * this.baseScreenRate) + "px",
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
        width: Math.ceil(948 * this.baseScreenRate) + "px",
        marginTop: Math.ceil(25 * this.baseScreenRate) + "px",
        marginLeft: Math.ceil(-315 * this.baseScreenRate) + "px"
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
  methods: {
    sendratefunc: function(ev) {
      this.effectiverate = ev;
    }
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
    padding-bottom: 0.5rem;
  }

  .manage,
  .target,
  .sell,
  .efficiency,
  .competive {
    width: 100% !important;
    padding: 0.25rem 0.3rem !important;
    background-color: #21202e;
    margin-left: 0 !important;
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
      // border: 1px solid #312f46;
      // border-radius: 4px;
        // box-shadow: 0px 8px 13px rgb(24, 23, 23);
        box-shadow: 0px 8px 13px #1a1927;
      // box-shadow: 2px 2px 10px black;
      position: relative;
      .trianglet {
        position: absolute;
        top: 0;
        left: 0;
        width: 2%;
        height: 5%;
        border-left: 2px solid #3c375f;
        border-top: 2px solid #3c375f;
      }
      .triangler {
        position: absolute;
        top: 0;
        right: 0;
        width: 2%;
        height: 5%;
        border-right: 2px solid #3c375f;
        border-top: 2px solid #3c375f;
      }
      .triangleb {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 2%;
        height: 5%;
        border-right: 2px solid #3c375f;
        border-bottom: 2px solid #3c375f;
      }
      .trianglel {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 2%;
        height: 5%;
        border-left: 2px solid #3c375f;
        border-bottom: 2px solid #3c375f;
      }
    }
    .target {
      .trianglet,
      .triangler,
      .triangleb,
      .trianglel {
        width:3%;
      }
    }
  }
  .rightside {
    padding-right: 0.3%;
    .sell,
    .efficiency,
    .competive {
      // border: 1px solid #312f46;
      // border-radius: 4px;
        box-shadow: 0px 8px 13px #1a1927;
      // box-shadow: 0px 8px 13px rgb(20, 20, 20);
      // box-shadow: 2px 2px 15px black;
      position: relative;
      .trianglet {
        position: absolute;
        top: 0;
        left: 0;
        width: 2%;
        height: 5%;
        border-left: 2px solid #3c375f;
        border-top: 2px solid #3c375f;
      }
      .triangler {
        position: absolute;
        top: 0;
        right: 0;
        width: 2%;
        height: 5%;
        border-right: 2px solid #3c375f;
        border-top: 2px solid #3c375f;
      }
      .triangleb {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 2%;
        height: 5%;
        border-right: 2px solid #3c375f;
        border-bottom: 2px solid #3c375f;
      }
      .trianglel {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 2%;
        height: 5%;
        border-left: 2px solid #3c375f;
        border-bottom: 2px solid #3c375f;
      }
    }
     .sell {
      .trianglet,
      .triangler,
      .triangleb,
      .trianglel {
        width:4%;
        height:9%;
      }
    }
     .efficiency {
      .trianglet,
      .triangler,
      .triangleb,
      .trianglel {
        width:4%;
        height:11%;
        z-index: 1;
      }
    }
     .competive {
      .trianglet,
      .triangler,
      .triangleb,
      .trianglel {
        width:3%;
        height:5%;
        z-index: 1;
      }
    }
  }
}
</style>