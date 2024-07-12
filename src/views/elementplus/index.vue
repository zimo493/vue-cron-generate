<template>
  <el-input
    v-model="cronExpression"
    style="max-width: 600px"
    placeholder="Please input"
    class="input-with-select"
  >
    <template #append>
      <el-button type="primary" @click="handle"> 生成表达式 </el-button>
    </template>
  </el-input>

  <ElCronGen ref="cronGenRef" />
</template>
<script lang="ts">
export default { name: "ElementPlusCronTab" };
</script>

<script lang="ts" setup>
import ElCronGen from "@/components/ElCronGen/index.vue";

const cronExpression = ref<string>("");

const cronGenRef = ref<typeof ElCronGen>();
const handle = () => {
  cronGenRef.value?.open();
};
</script>
