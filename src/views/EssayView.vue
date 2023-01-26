<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import type { Essay } from "@/types/Essay";
import { emptyEssay } from "@/types/Essay";
import essayService from "@/serivice/EssayService";
import type { AxiosResponse } from "axios";
const route = useRoute();
let essay: Ref<Essay> = ref(emptyEssay);
function resetEssay() {
  essayService
    .getEssayById(Number(route.params.id))
    .then((essayResponse: AxiosResponse<Essay, any>) => {
      essay.value = essayResponse.data;
    });
}
onMounted(() => {
  resetEssay();
});
onBeforeRouteUpdate(() => {
  resetEssay();
});
</script>
<template>
  <el-card>
    <div id="essay-tittle">{{ essay.tittle }}</div>
    <div>创建时间：{{ essay.createdTime }}</div>
    <div>最近更新时间：{{ essay.lastUpdate }}</div>
    <v-md-preview :text="essay.content"></v-md-preview>
  </el-card>
</template>
<style>
#essay-tittle {
  font-size: 32px;
}
.vuepress-markdown-body {
  padding: 0px;
}
</style>
