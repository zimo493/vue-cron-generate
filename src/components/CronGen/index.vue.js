/* __placeholder__ */
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const props = defineProps({
        modelValue: {
            type: String,
        },
    });
    const emit = defineEmits();
    const value = computed({
        get: () => props.modelValue,
        set: (v) => emit("update:modelValue", v),
    });
    // 初始值
    const defaultValue = {
        second: "*",
        min: "*",
        hour: "*",
        day: "*",
        month: "*",
        week: "?",
        year: "",
    };
    // 反解析 表达式
    const getValue = () => {
        if (value.value) {
            const arr = value.value.split(" ");
            if (arr.length >= 6) {
                //6 位以上是合法表达式
                const obj = {
                    second: arr[0],
                    min: arr[1],
                    hour: arr[2],
                    day: arr[3],
                    month: arr[4],
                    week: arr[5],
                    year: arr[6] ? arr[6] : "",
                };
                return { ...obj };
            }
            else {
                return { ...defaultValue };
            }
        }
        else {
            return { ...defaultValue };
        }
    };
    const cronGenValue = ref(getValue());
    const map = {
        second: "秒",
        min: "分钟",
        hour: "小时",
        day: "日",
        month: "月",
        week: "周",
        year: "年",
    };
    watch(() => cronGenValue.value.day, (v) => {
        if (v !== "?") {
            cronGenValue.value.week = "?";
        }
    });
    watch(() => cronGenValue.value.week, (v) => {
        if (v !== "?") {
            cronGenValue.value.day = "?";
        }
    });
    const cronGenValueString = computed(() => {
        const { second, min, hour, day, month, week, year } = cronGenValue.value;
        return `${second} ${min} ${hour} ${day} ${month} ${week}${year ? " " + year : ""}`;
    });
    const __VLS_fnComponent = (await import('vue')).defineComponent({
        props: {
            modelValue: {
                type: String,
            },
        },
        emits: {},
    });
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
        // @ts-ignore
        const __VLS_0 = {}
            .NGrid;
        ({}.NGrid);
        ({}.NGrid);
        __VLS_components.NGrid;
        __VLS_components.nGrid;
        __VLS_components.NGrid;
        __VLS_components.nGrid;
        // @ts-ignore
        [NGrid, NGrid,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ xGap: ("12"), yGap: ("12"), cols: ((1)), }));
        const __VLS_2 = __VLS_1({ xGap: ("12"), yGap: ("12"), cols: ((1)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ xGap: ("12"), yGap: ("12"), cols: ((1)), }));
        // @ts-ignore
        const __VLS_6 = {}
            .NGi;
        ({}.NGi);
        ({}.NGi);
        __VLS_components.NGi;
        __VLS_components.nGi;
        __VLS_components.NGi;
        __VLS_components.nGi;
        // @ts-ignore
        [NGi, NGi,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
        const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({}));
        // @ts-ignore
        const __VLS_12 = {}
            .NTabs;
        ({}.NTabs);
        ({}.NTabs);
        __VLS_components.NTabs;
        __VLS_components.nTabs;
        __VLS_components.NTabs;
        __VLS_components.nTabs;
        // @ts-ignore
        [NTabs, NTabs,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ type: ("segment"), animated: (true), }));
        const __VLS_14 = __VLS_13({ type: ("segment"), animated: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ type: ("segment"), animated: (true), }));
        // @ts-ignore
        const __VLS_18 = {}
            .NTabPane;
        ({}.NTabPane);
        ({}.NTabPane);
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        // @ts-ignore
        [NTabPane, NTabPane,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ name: ("second"), tab: ("秒"), }));
        const __VLS_20 = __VLS_19({ name: ("second"), tab: ("秒"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ name: ("second"), tab: ("秒"), }));
        // @ts-ignore
        const __VLS_24 = {}
            .Second;
        ({}.Second);
        __VLS_components.Second;
        // @ts-ignore
        [Second,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ modelValue: ((__VLS_ctx.cronGenValue.second)), }));
        const __VLS_26 = __VLS_25({ modelValue: ((__VLS_ctx.cronGenValue.second)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ modelValue: ((__VLS_ctx.cronGenValue.second)), }));
        // @ts-ignore
        [cronGenValue,];
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
        (__VLS_23.slots).default;
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        // @ts-ignore
        const __VLS_30 = {}
            .NTabPane;
        ({}.NTabPane);
        ({}.NTabPane);
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        // @ts-ignore
        [NTabPane, NTabPane,];
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ name: ("min"), tab: ("分"), }));
        const __VLS_32 = __VLS_31({ name: ("min"), tab: ("分"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ name: ("min"), tab: ("分"), }));
        // @ts-ignore
        const __VLS_36 = {}
            .Min;
        ({}.Min);
        __VLS_components.Min;
        // @ts-ignore
        [Min,];
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ modelValue: ((__VLS_ctx.cronGenValue.min)), }));
        const __VLS_38 = __VLS_37({ modelValue: ((__VLS_ctx.cronGenValue.min)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({ modelValue: ((__VLS_ctx.cronGenValue.min)), }));
        // @ts-ignore
        [cronGenValue,];
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        (__VLS_35.slots).default;
        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        // @ts-ignore
        const __VLS_42 = {}
            .NTabPane;
        ({}.NTabPane);
        ({}.NTabPane);
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        // @ts-ignore
        [NTabPane, NTabPane,];
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ name: ("hour"), tab: ("时"), }));
        const __VLS_44 = __VLS_43({ name: ("hour"), tab: ("时"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        ({}({ name: ("hour"), tab: ("时"), }));
        // @ts-ignore
        const __VLS_48 = {}
            .Hour;
        ({}.Hour);
        __VLS_components.Hour;
        // @ts-ignore
        [Hour,];
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ modelValue: ((__VLS_ctx.cronGenValue.hour)), }));
        const __VLS_50 = __VLS_49({ modelValue: ((__VLS_ctx.cronGenValue.hour)), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        ({}({ modelValue: ((__VLS_ctx.cronGenValue.hour)), }));
        // @ts-ignore
        [cronGenValue,];
        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
        (__VLS_47.slots).default;
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
        // @ts-ignore
        const __VLS_54 = {}
            .NTabPane;
        ({}.NTabPane);
        ({}.NTabPane);
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        // @ts-ignore
        [NTabPane, NTabPane,];
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ name: ("day"), tab: ("日"), }));
        const __VLS_56 = __VLS_55({ name: ("day"), tab: ("日"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        ({}({ name: ("day"), tab: ("日"), }));
        // @ts-ignore
        const __VLS_60 = {}
            .Day;
        ({}.Day);
        __VLS_components.Day;
        // @ts-ignore
        [Day,];
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ modelValue: ((__VLS_ctx.cronGenValue.day)), }));
        const __VLS_62 = __VLS_61({ modelValue: ((__VLS_ctx.cronGenValue.day)), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        ({}({ modelValue: ((__VLS_ctx.cronGenValue.day)), }));
        // @ts-ignore
        [cronGenValue,];
        const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
        (__VLS_59.slots).default;
        const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
        // @ts-ignore
        const __VLS_66 = {}
            .NTabPane;
        ({}.NTabPane);
        ({}.NTabPane);
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        // @ts-ignore
        [NTabPane, NTabPane,];
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ name: ("month"), tab: ("月"), }));
        const __VLS_68 = __VLS_67({ name: ("month"), tab: ("月"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        ({}({ name: ("month"), tab: ("月"), }));
        // @ts-ignore
        const __VLS_72 = {}
            .Month;
        ({}.Month);
        __VLS_components.Month;
        // @ts-ignore
        [Month,];
        // @ts-ignore
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ modelValue: ((__VLS_ctx.cronGenValue.month)), }));
        const __VLS_74 = __VLS_73({ modelValue: ((__VLS_ctx.cronGenValue.month)), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
        ({}({ modelValue: ((__VLS_ctx.cronGenValue.month)), }));
        // @ts-ignore
        [cronGenValue,];
        const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
        (__VLS_71.slots).default;
        const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
        // @ts-ignore
        const __VLS_78 = {}
            .NTabPane;
        ({}.NTabPane);
        ({}.NTabPane);
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        // @ts-ignore
        [NTabPane, NTabPane,];
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ name: ("week"), tab: ("周"), }));
        const __VLS_80 = __VLS_79({ name: ("week"), tab: ("周"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
        ({}({ name: ("week"), tab: ("周"), }));
        // @ts-ignore
        const __VLS_84 = {}
            .Week;
        ({}.Week);
        __VLS_components.Week;
        // @ts-ignore
        [Week,];
        // @ts-ignore
        const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ modelValue: ((__VLS_ctx.cronGenValue.week)), }));
        const __VLS_86 = __VLS_85({ modelValue: ((__VLS_ctx.cronGenValue.week)), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
        ({}({ modelValue: ((__VLS_ctx.cronGenValue.week)), }));
        // @ts-ignore
        [cronGenValue,];
        const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
        (__VLS_83.slots).default;
        const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
        // @ts-ignore
        const __VLS_90 = {}
            .NTabPane;
        ({}.NTabPane);
        ({}.NTabPane);
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        __VLS_components.NTabPane;
        __VLS_components.nTabPane;
        // @ts-ignore
        [NTabPane, NTabPane,];
        // @ts-ignore
        const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ name: ("year"), tab: ("年"), }));
        const __VLS_92 = __VLS_91({ name: ("year"), tab: ("年"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
        ({}({ name: ("year"), tab: ("年"), }));
        // @ts-ignore
        const __VLS_96 = {}
            .Year;
        ({}.Year);
        __VLS_components.Year;
        // @ts-ignore
        [Year,];
        // @ts-ignore
        const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ modelValue: ((__VLS_ctx.cronGenValue.year)), }));
        const __VLS_98 = __VLS_97({ modelValue: ((__VLS_ctx.cronGenValue.year)), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
        ({}({ modelValue: ((__VLS_ctx.cronGenValue.year)), }));
        // @ts-ignore
        [cronGenValue,];
        const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
        (__VLS_95.slots).default;
        const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
        (__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        (__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        // @ts-ignore
        const __VLS_102 = {}
            .NGi;
        ({}.NGi);
        ({}.NGi);
        __VLS_components.NGi;
        __VLS_components.nGi;
        __VLS_components.NGi;
        __VLS_components.nGi;
        // @ts-ignore
        [NGi, NGi,];
        // @ts-ignore
        const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({}));
        const __VLS_104 = __VLS_103({}, ...__VLS_functionalComponentArgsRest(__VLS_103));
        ({}({}));
        // @ts-ignore
        const __VLS_108 = {}
            .NCard;
        ({}.NCard);
        ({}.NCard);
        __VLS_components.NCard;
        __VLS_components.nCard;
        __VLS_components.NCard;
        __VLS_components.nCard;
        // @ts-ignore
        [NCard, NCard,];
        // @ts-ignore
        const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ title: ("时间表达式"), segmented: (({ content: true })), }));
        const __VLS_110 = __VLS_109({ title: ("时间表达式"), segmented: (({ content: true })), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
        ({}({ title: ("时间表达式"), segmented: (({ content: true })), }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            (__VLS_113.slots)["header-extra"];
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("step1") }, });
            // @ts-ignore
            const __VLS_114 = {}
                .NTag;
            ({}.NTag);
            ({}.NTag);
            __VLS_components.NTag;
            __VLS_components.nTag;
            __VLS_components.NTag;
            __VLS_components.nTag;
            // @ts-ignore
            [NTag, NTag,];
            // @ts-ignore
            const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ type: ("success"), bordered: ((false)), }));
            const __VLS_116 = __VLS_115({ type: ("success"), bordered: ((false)), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
            ({}({ type: ("success"), bordered: ((false)), }));
            (__VLS_ctx.cronGenValueString);
            // @ts-ignore
            [cronGenValueString,];
            (__VLS_119.slots).default;
            const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("cronGenValue step2") }, });
        for (const [item, key, index] of __VLS_getVForSourceType((__VLS_ctx.cronGenValue))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), });
            (__VLS_ctx.map[key]);
            if (item) {
                // @ts-ignore
                const __VLS_120 = {}
                    .NTag;
                ({}.NTag);
                ({}.NTag);
                __VLS_components.NTag;
                __VLS_components.nTag;
                __VLS_components.NTag;
                __VLS_components.nTag;
                // @ts-ignore
                [NTag, NTag,];
                // @ts-ignore
                const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ bordered: ((false)), size: ("small"), }));
                const __VLS_122 = __VLS_121({ bordered: ((false)), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
                ({}({ bordered: ((false)), size: ("small"), }));
                (item);
                // @ts-ignore
                [cronGenValue, map,];
                (__VLS_125.slots).default;
                const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
            }
        }
        const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
        (__VLS_107.slots).default;
        const __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104);
        // @ts-ignore
        const __VLS_126 = {}
            .NGi;
        ({}.NGi);
        ({}.NGi);
        __VLS_components.NGi;
        __VLS_components.nGi;
        __VLS_components.NGi;
        __VLS_components.nGi;
        // @ts-ignore
        [NGi, NGi,];
        // @ts-ignore
        const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({}));
        const __VLS_128 = __VLS_127({}, ...__VLS_functionalComponentArgsRest(__VLS_127));
        ({}({}));
        // @ts-ignore
        const __VLS_132 = {}
            .NCard;
        ({}.NCard);
        ({}.NCard);
        __VLS_components.NCard;
        __VLS_components.nCard;
        __VLS_components.NCard;
        __VLS_components.nCard;
        // @ts-ignore
        [NCard, NCard,];
        // @ts-ignore
        const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ title: ("最近5次运行时间"), segmented: (({ content: true })), }));
        const __VLS_134 = __VLS_133({ title: ("最近5次运行时间"), segmented: (({ content: true })), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
        ({}({ title: ("最近5次运行时间"), segmented: (({ content: true })), }));
        // @ts-ignore
        const __VLS_138 = {}
            .Result;
        ({}.Result);
        __VLS_components.Result;
        // @ts-ignore
        [Result,];
        // @ts-ignore
        const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ modelValue: ((__VLS_ctx.cronGenValueString)), ...{ class: ("step3") }, }));
        const __VLS_140 = __VLS_139({ modelValue: ((__VLS_ctx.cronGenValueString)), ...{ class: ("step3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_139));
        ({}({ modelValue: ((__VLS_ctx.cronGenValueString)), ...{ class: ("step3") }, }));
        // @ts-ignore
        [cronGenValueString,];
        const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
        (__VLS_137.slots).default;
        const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134);
        (__VLS_131.slots).default;
        const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128);
        (__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
            __VLS_styleScopedClasses['step1'];
            __VLS_styleScopedClasses['cronGenValue'];
            __VLS_styleScopedClasses['step2'];
            __VLS_styleScopedClasses['step3'];
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {};
        const __VLS_name = "CronGen";
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {
                    cronGenValue: cronGenValue,
                    map: map,
                    cronGenValueString: cronGenValueString,
                };
            },
            props: {
                modelValue: {
                    type: String,
                },
            },
            emits: {},
            name: "CronGen"
        });
    }
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        props: {
            modelValue: {
                type: String,
            },
        },
        emits: {},
        name: "CronGen"
    });
})();
;
