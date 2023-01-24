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
    <h1>{{ essay.tittle }}</h1>
    <div>{{ essay.content }}</div>
  </el-card>
</template>
