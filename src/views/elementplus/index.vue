<template>
  <el-form>
    <el-form-item label="Cron表达式：">
      <el-input v-model="cronExpression" placeholder="请输入Cron表达式">
        <template #append>
          <el-button type="primary" @click="handle"> 生成表达式 </el-button>
        </template>
      </el-input>
    </el-form-item>
  </el-form>

  <ElCronGen ref="cronGenRef" v-model="cronExpression" />
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
