// 引入driver逻辑
import { driver } from "driver.js";
// 引入driver样式
import "driver.js/dist/driver.css";

export const usedDiver = () => {
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
        popover: {
          description: "按当前时间计算最近的5次运行时间",
          side: "top",
        },
      },
      {
        element: ".step4",
        popover: {
          description:
            "这种方式可以用于表单提交哦~ 也可在这里输入表达式点击按钮进行反解析",
          side: "top",
        },
      },
      {
        element: ".step5",
        popover: { description: "点击这里", side: "top" },
      },
    ],
  });

  const value = ref<string>("");
  const visible = ref<boolean>(false);
  return {
    driverObj,
    cronExpression,
    value,
    visible,
  };
};
