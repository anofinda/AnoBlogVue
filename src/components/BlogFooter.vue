<script lang="ts" setup>
import GithubMarkIcon from "@/components/icons/GithubMarkIcon.vue";
</script>
<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <div>anofinda的博客&copy;Copyright 2022</div>
      <div>博客前后端均为本人独立开发，欢迎提出建议</div>
    </el-col>
    <el-col :span="12" id="links">
      <el-link
        :icon="GithubMarkIcon"
        href="https://github.com/anofinda"
        target="_blank"
        id="github-mark"
      ></el-link>
    </el-col>
  </el-row>
</template>
