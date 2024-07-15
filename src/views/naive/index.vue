<template>
  <n-grid x-gap="20" y-gap="20" :cols="1">
    <n-gi>
      <n-card title="面板使用示例" :segmented="{ content: true }">
        <CronGen ref="crontabRef" v-model="cronExpression" />
      </n-card>
    </n-gi>
    <n-gi>
      <n-card title="弹窗使用示例" :segmented="{ content: true }">
        <n-input-group class="step4">
          <n-input
            placeholder="请输入Cron表达式"
            clearable
            v-model:value="value"
          />
          <n-button type="primary" class="step5" @click="visible = true">
            <template #icon>
              <nova-icon icon="ant-design:clock-circle-outlined" />
            </template>
            生成表达式
          </n-button>
        </n-input-group>
      </n-card>
    </n-gi>
  </n-grid>

  <n-modal
    style="width: 1000px"
    v-model:show="visible"
    preset="card"
    title="Cron表达式生成器"
  >
    <CronGen ref="crontabRef" v-model="value" />
  </n-modal>
</template>
<script lang="ts">
export default { name: "NaiveUi" };
</script>
<script lang="ts" setup>
import { usedDiver } from "@/hooks/useDriver";

const { cronExpression, value, visible } = usedDiver();

// onMounted(() => driverObj.drive());
</script>
