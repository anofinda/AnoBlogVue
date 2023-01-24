<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import essayService from "@/serivice/EssayService";
import tagService from "@/serivice/TagService";
import type { Essay } from "@/types/Essay";
import type { AxiosResponse } from "axios";
import type { Tag } from "@/types/Tag";
const route = useRoute();
let essays: Ref<Essay[]> = ref([]);
async function getEssays(id: number): Promise<any> {
  const tag: AxiosResponse<Tag, any> = await tagService.getTagById(id);
  return await essayService.getEssaysByTag(tag.data);
}
function resetEssays(id: number): void {
  getEssays(id).then((response: AxiosResponse<Essay[], any>) => {
    console.log(response.data);
    essays.value = response.data;
  });
}
onMounted(() => {
  resetEssays(Number(route.params.id));
});
onBeforeRouteUpdate((to, from) => {
  if (to.params.id != from.params.id) {
    resetEssays(Number(to.params.id));
  }
});
</script>
<template>
  <el-card v-for="essay in essays" :key="essay.id">
    <router-link :to="'/essay/' + essay.id.toString()" custom v-slot="{ href }">
      <el-link :href="href" :underline="false" type="primary" class="tag-link">
        {{ essay.tittle }}
      </el-link>
      <div>创建时间：{{ essay.createdTime }}</div>
      <div>最近更新时间：{{ essay.lastUpdate }}</div>
    </router-link>
  </el-card>
</template>
<style>
.tag-link {
  font-size: 32px;
}
</style>
