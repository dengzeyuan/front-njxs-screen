<template>
  <div class="page">
     <editecharts :timeRange="timeRange" />
  </div>
</template>

<script type="text/ecmascript-6">
import editecharts from "../editecharts/editecharts.vue";
export default {
  props: ["timeRange"],
  data() {
    return {};
  },
  components: {
    editecharts
  },
};
</script>

<style scoped lang="less">
@media (max-width: 756px) {
  .container-home .page{
    display: block;
    flex:inherit;
    height: auto;
    min-width: 0px;
    width: 100%;
  }
}
.page {
  display: flex;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  height: 100%;
}
.header {
  background-color: #b3c0d1;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>

