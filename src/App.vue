<template>
  <div class="container">
    <n-grid x-gap="20" y-gap="20" :cols="1">
      <n-gi>
        <n-card title="面板使用示例" :segmented="{ content: true }">
          <CronGen ref="crontabRef" v-model="cronExpression" />
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="弹窗使用示例" :segmented="{ content: true }">
          <n-input-group class="step4">
            <n-input placeholder="请输入Cron表达式" clearable v-model:value="value" />
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

    <n-modal style="width: 1000px" v-model:show="visible" preset="card" title="Cron表达式生成器">
      <CronGen ref="crontabRef" v-model="value" />
    </n-modal>
  </div>
</template>
<script setup lang="ts">
// 引入driver逻辑
import { driver } from "driver.js";
// 引入driver样式
import "driver.js/dist/driver.css";

onMounted(() => driverObj.drive());
const cronExpression = ref<string>("");
// driver配置对象
const driverObj = driver({
  prevBtnText: "上一步", // 上一步按钮的文本
  nextBtnText: "下一步", // 下一步按钮的文本
  doneBtnText: "关闭", // 最后一个按钮的文本
  steps: [
    {
      element: ".step1",
      popover: { description: "生成的结果在这里哦~", side: "top" },
    },
    {
      element: ".step2",
      popover: { description: "这是每个字段的表达式", side: "top" },
    },
    {
      element: ".step3",
      popover: { description: "按当前时间计算最近的5次运行时间", side: "top" },
    },
    {
      element: ".step4",
      popover: { description: "这种方式可以用于表单提交哦~ 也可在这里输入表达式点击按钮进行反解析", side: "top" },
    },
    {
      element: ".step5",
      popover: { description: "点击这里", side: "top" },
    },
  ],
});

const value = ref<string>("");
const visible = ref<boolean>(false);
</script>
