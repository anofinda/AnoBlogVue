<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import type { AxiosResponse } from "axios";
import essayService from "@/serivice/EssayService";
import type { Essay } from "@/types/Essay";
import { emptyEssay } from "@/types/Essay";
let introduction: Ref<Essay> = ref(emptyEssay);
onMounted(async () => {
  const introductionResponse: AxiosResponse =
    await essayService.getEssaysByTagName("个人介绍");
  introduction.value = introductionResponse.data;
});
</script>
<template>
  <el-card>
    <div id="introduction-tittle">{{ introduction.tittle }}</div>
    <div>创建时间：{{ introduction.createdTime }}</div>
    <div>最近更新时间：{{ introduction.lastUpdate }}</div>
    <v-md-preview :text="introduction.content"></v-md-preview>
  </el-card>
</template>
<style>
#introduction-tittle {
  font-size: 32px;
}
</style>
