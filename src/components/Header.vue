<template>
  <!-- <el-container> -->
    <el-header :style="{height:headerheight}">
      <el-dropdown>
        <i class="el-icon-setting"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>年</el-dropdown-item>
          <el-dropdown-item>月</el-dropdown-item>
          <el-dropdown-item>周</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>时间维度</span>
    </el-header>
  <!-- </el-container> -->
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
</style>
<script>
  export default {
    data() {
      return {
        headerheight:Math.ceil(64*this.baseScreenRate)+"px"
        // activeIndex: this.$route.path,
        // isCollapse: true
      };
    },
    methods: {
      // handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      // handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    }
  }
</script>
