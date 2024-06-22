<template>
  <div class="container">
    <CronGen ref="crontabRef" v-model="cronExpression" />
  </div>
</template>
<script setup lang="ts">
// 引入driver逻辑
import {driver} from "driver.js";
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
            popover: {description: "生成的结果在这里哦", side: "top"},
        },
        {
            element: ".step2",
            popover: {description: "这是每个字段的表达式", side: "top"},
        },
        {
            element: ".step3",
            popover: {description: "按当前时间计算最近的5次运行时间", side: "top"},
        },
    ],
});
</script>
