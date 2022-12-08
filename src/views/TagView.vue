<script lang="ts" setup>
import { onMounted, onUpdated, ref } from "vue";
import type { Ref } from "vue";
import essayService from "@/serivice/EssayService";
import tagService from "@/serivice/TagService";
import type { Essay } from "@/types/Essay";
const props = defineProps({
  id: String,
});
let essays: Ref<Essay[]> = ref([]);
function reset() {
  tagService
    .getTagById(Number(props.id))
    .then((response) => {
      console.log(response.data);
      return essayService.getEssayByTagName(response.data.tagName);
    })
    .then((response) => {
      console.log(response.data);
      essays.value = response.data;
    });
}
onMounted(() => {
  reset();
});
onUpdated(() => {
  reset();
});
</script>
<template>
  <el-card v-for="essay in essays" :key="essay.id">{{ essay.tittle }}</el-card>
</template>
