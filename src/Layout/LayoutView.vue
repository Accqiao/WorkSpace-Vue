<template>
  <el-container>
    <el-aside>
      <MenuLeft/>
    </el-aside>
    <el-container>
      <el-header>
        Top
      </el-header>
      <!-- <BreadCrumb /> -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang='ts' setup>
import MenuLeft from './MenuLeft.vue'
//import BreadCrumb from './BreadCrumb.vue'

</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  width: auto;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  min-height: 60px;
}
.el-main {
  background-color: #ffffff;
  /* color: #333; */
  /* text-align: center; */
  /* line-height: 160px; */
}

</style>
