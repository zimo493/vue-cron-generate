/* __placeholder__ */
// 引入driver逻辑
import { driver } from "driver.js";
// 引入driver样式
import "driver.js/dist/driver.css";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
onMounted(() => driverObj.drive());
const cronExpression = ref("");
// driver配置对象
const driverObj = driver({
    prevBtnText: "上一步", // 上一步按钮的文本
    nextBtnText: "下一步", // 下一步按钮的文本
    doneBtnText: "关闭", // 最后一个按钮的文本
    steps: [
        {
            element: ".step1",
            popover: { description: "生成的结果在这里哦", side: "top" },
        },
        {
            element: ".step2",
            popover: { description: "这是每个字段的表达式", side: "top" },
        },
        {
            element: ".step3",
            popover: { description: "按当前时间计算最近的5此运行时间", side: "top" },
        },
    ],
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
const __VLS_modelEmitsType = {};
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .CronGen;
    ({}.CronGen);
    __VLS_components.CronGen;
    // @ts-ignore
    [CronGen,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ref: ("crontabRef"), modelValue: ((__VLS_ctx.cronExpression)), }));
    const __VLS_2 = __VLS_1({ ref: ("crontabRef"), modelValue: ((__VLS_ctx.cronExpression)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ref: ("crontabRef"), modelValue: ((__VLS_ctx.cronExpression)), }));
    // @ts-ignore
    (__VLS_ctx.crontabRef);
    // @ts-ignore
    [cronExpression, crontabRef,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                cronExpression: cronExpression,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
