<script lang="ts" setup>
import BlogMenu from "@/components/BlogMenu.vue";
import BlogFooter from "@/components/BlogFooter.vue";
</script>
<template>
  <div class="layout-container">
    <el-container>
      <el-header>
        <BlogMenu></BlogMenu>
      </el-header>
      <el-main> <router-view></router-view> </el-main>
      <el-footer>
        <BlogFooter></BlogFooter>
      </el-footer>
    </el-container>
  </div>
</template>
<style>
.layout-container {
  position: relative;
  min-height: 100%;
}
.layout-container .el-header {
  padding: 0;
}
.layout-container .el-main {
  /*
  给footer留空间
  */
  padding-bottom: 80px;
}
.layout-container .el-footer {
  position: absolute;
  bottom: 0;
  min-width: 100%;
}
</style>
