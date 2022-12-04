<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import { useRoute } from "vue-router";
import tagService from "@/serivice/TagService";
import type { Tag } from "@/types/Tag";
let tags: Ref<Tag[]> = ref([]);
const route = useRoute();
onMounted(() => {
  tagService.getTags().then((response) => {
    tags.value = response.data;
  });
});
const prefix = "/tag/";
</script>
<template>
  <el-menu
    class="blog-menu"
    mode="horizontal"
    :default-active="route.path"
    router
  >
    <el-menu-item
      v-for="tag in tags"
      :key="tag.id"
      :index="prefix + tag.id.toString()"
      >{{ tag.tagName }}</el-menu-item
    >
  </el-menu>
</template>
<style>
.blog-menu {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
  --el-menu-bg-color: #87ceeb;
  --el-menu-text-color: #f5f5f5;
  --el-menu-active-color: #ffa500;
}
</style>
