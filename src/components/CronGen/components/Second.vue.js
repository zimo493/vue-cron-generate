/* __placeholder__ */
import { zeroFill, checkNumber } from "@/utils";
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const props = defineProps({
        modelValue: {
            required: true,
            type: String,
        },
    });
    const emit = defineEmits();
    const radioValue = ref(1);
    const cycle01 = ref(1);
    const cycle02 = ref(2);
    const average01 = ref(0);
    const average02 = ref(1);
    const checkboxList = ref([]);
    const value = computed({
        get: () => props.modelValue,
        set: (v) => emit("update:modelValue", v),
    });
    watch(() => value.value, () => assign());
    onMounted(() => assign());
    // 赋值
    const assign = () => {
        if (value.value === "*") {
            radioValue.value = 1;
        }
        else if (value.value.indexOf("-") > -1) {
            const indexArr = value.value.split("-");
            cycle01.value = isNaN(+indexArr[0]) ? 0 : +indexArr[0];
            cycle02.value = +indexArr[1];
            radioValue.value = 2;
        }
        else if (value.value.indexOf("/") > -1) {
            const indexArr = value.value.split("/");
            average01.value = isNaN(+indexArr[0]) ? 0 : +indexArr[0];
            average02.value = +indexArr[1];
            radioValue.value = 3;
        }
        else {
            radioValue.value = 4;
            checkboxList.value = value.value.split(",").map((i) => +i);
        }
    };
    // 单选按钮值变化时
    const radioChange = (v) => {
        if (radioValue.value !== v) {
            radioValue.value = v;
        }
    };
    watch(() => radioValue.value, (v) => {
        if (v === 1) {
            value.value = "*";
        }
        else if (v === 2) {
            value.value = cycleTotal.value;
        }
        else if (v === 3) {
            value.value = averageTotal.value;
        }
        else if (v === 4) {
            value.value = checkboxString.value;
        }
        else {
            value.value = "*";
        }
    });
    // 计算两个周期值
    const cycleTotal = computed(() => {
        const cycle1 = checkNumber(cycle01.value, 0, 58);
        const cycle2 = checkNumber(cycle02.value, cycle1 ? cycle1 + 1 : 1, 59);
        return cycle1 + "-" + cycle2;
    });
    watch(() => cycleTotal.value, (v) => (value.value = v));
    // 计算平均用到的值
    const averageTotal = computed(() => {
        const average1 = checkNumber(average01.value, 0, 58);
        const average2 = checkNumber(average02.value, 1, 59 - average1 || 0);
        return average1 + "/" + average2;
    });
    watch(() => averageTotal.value, (v) => (value.value = v));
    // 计算勾选的checkbox值合集
    const checkboxString = computed(() => {
        const str = checkboxList.value.join();
        return str == "" ? "*" : str;
    });
    watch(() => checkboxString.value, (v) => (value.value = v));
    const __VLS_fnComponent = (await import('vue')).defineComponent({
        props: {
            modelValue: {
                required: true,
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
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
        const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({}));
        // @ts-ignore
        const __VLS_6 = {}
            .NRadioGroup;
        ({}.NRadioGroup);
        ({}.NRadioGroup);
        __VLS_components.NRadioGroup;
        __VLS_components.nRadioGroup;
        __VLS_components.NRadioGroup;
        __VLS_components.nRadioGroup;
        // @ts-ignore
        [NRadioGroup, NRadioGroup,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ value: ((__VLS_ctx.radioValue)), name: ("selectSecond"), }));
        const __VLS_8 = __VLS_7({ value: ((__VLS_ctx.radioValue)), name: ("selectSecond"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ value: ((__VLS_ctx.radioValue)), name: ("selectSecond"), }));
        // @ts-ignore
        const __VLS_12 = {}
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
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ xGap: ("20"), yGap: ("20"), cols: ((1)), }));
        const __VLS_14 = __VLS_13({ xGap: ("20"), yGap: ("20"), cols: ((1)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({ xGap: ("20"), yGap: ("20"), cols: ((1)), }));
        // @ts-ignore
        const __VLS_18 = {}
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
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
        const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({}));
        // @ts-ignore
        const __VLS_24 = {}
            .NFlex;
        ({}.NFlex);
        ({}.NFlex);
        __VLS_components.NFlex;
        __VLS_components.nFlex;
        __VLS_components.NFlex;
        __VLS_components.nFlex;
        // @ts-ignore
        [NFlex, NFlex,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ align: ("center"), }));
        const __VLS_26 = __VLS_25({ align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ align: ("center"), }));
        // @ts-ignore
        const __VLS_30 = {}
            .NRadio;
        ({}.NRadio);
        __VLS_components.NRadio;
        __VLS_components.nRadio;
        // @ts-ignore
        [NRadio,];
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ value: ((1)), }));
        const __VLS_32 = __VLS_31({ value: ((1)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ value: ((1)), }));
        // @ts-ignore
        [radioValue,];
        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        (__VLS_29.slots).default;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
        (__VLS_23.slots).default;
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        // @ts-ignore
        const __VLS_36 = {}
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
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
        const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({}));
        // @ts-ignore
        const __VLS_42 = {}
            .NFlex;
        ({}.NFlex);
        ({}.NFlex);
        __VLS_components.NFlex;
        __VLS_components.nFlex;
        __VLS_components.NFlex;
        __VLS_components.nFlex;
        // @ts-ignore
        [NFlex, NFlex,];
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ align: ("center"), }));
        const __VLS_44 = __VLS_43({ align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        ({}({ align: ("center"), }));
        // @ts-ignore
        const __VLS_48 = {}
            .NRadio;
        ({}.NRadio);
        __VLS_components.NRadio;
        __VLS_components.nRadio;
        // @ts-ignore
        [NRadio,];
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ value: ((2)), }));
        const __VLS_50 = __VLS_49({ value: ((2)), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        ({}({ value: ((2)), }));
        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
        // @ts-ignore
        const __VLS_54 = {}
            .NInputNumber;
        ({}.NInputNumber);
        __VLS_components.NInputNumber;
        __VLS_components.nInputNumber;
        // @ts-ignore
        [NInputNumber,];
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.cycle01)), min: ((0)), max: ((58)), clearable: (true), }));
        const __VLS_56 = __VLS_55({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.cycle01)), min: ((0)), max: ((58)), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        ({}({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.cycle01)), min: ((0)), max: ((58)), clearable: (true), }));
        let __VLS_60;
        const __VLS_61 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(2);
                // @ts-ignore
                [cycle01, radioChange,];
            }
        };
        const __VLS_62 = {
            onFocus: (...[$event]) => {
                __VLS_ctx.radioChange(2);
                // @ts-ignore
                [radioChange,];
            }
        };
        const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
        let __VLS_57;
        let __VLS_58;
        // @ts-ignore
        const __VLS_63 = {}
            .NInputNumber;
        ({}.NInputNumber);
        __VLS_components.NInputNumber;
        __VLS_components.nInputNumber;
        // @ts-ignore
        [NInputNumber,];
        // @ts-ignore
        const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.cycle02)), min: ((__VLS_ctx.cycle01 ? __VLS_ctx.cycle01 + 1 : 1)), clearable: (true), }));
        const __VLS_65 = __VLS_64({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.cycle02)), min: ((__VLS_ctx.cycle01 ? __VLS_ctx.cycle01 + 1 : 1)), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
        ({}({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.cycle02)), min: ((__VLS_ctx.cycle01 ? __VLS_ctx.cycle01 + 1 : 1)), clearable: (true), }));
        let __VLS_69;
        const __VLS_70 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(2);
                // @ts-ignore
                [cycle01, cycle01, radioChange, cycle02,];
            }
        };
        const __VLS_71 = {
            onFocus: (...[$event]) => {
                __VLS_ctx.radioChange(2);
                // @ts-ignore
                [radioChange,];
            }
        };
        const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65);
        let __VLS_66;
        let __VLS_67;
        (__VLS_47.slots).default;
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
        (__VLS_41.slots).default;
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        // @ts-ignore
        const __VLS_72 = {}
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
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
        const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
        ({}({}));
        // @ts-ignore
        const __VLS_78 = {}
            .NFlex;
        ({}.NFlex);
        ({}.NFlex);
        __VLS_components.NFlex;
        __VLS_components.nFlex;
        __VLS_components.NFlex;
        __VLS_components.nFlex;
        // @ts-ignore
        [NFlex, NFlex,];
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ align: ("center"), }));
        const __VLS_80 = __VLS_79({ align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
        ({}({ align: ("center"), }));
        // @ts-ignore
        const __VLS_84 = {}
            .NRadio;
        ({}.NRadio);
        __VLS_components.NRadio;
        __VLS_components.nRadio;
        // @ts-ignore
        [NRadio,];
        // @ts-ignore
        const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({ value: ((3)), }));
        const __VLS_86 = __VLS_85({ value: ((3)), }, ...__VLS_functionalComponentArgsRest(__VLS_85));
        ({}({ value: ((3)), }));
        const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
        // @ts-ignore
        const __VLS_90 = {}
            .NInputNumber;
        ({}.NInputNumber);
        __VLS_components.NInputNumber;
        __VLS_components.nInputNumber;
        // @ts-ignore
        [NInputNumber,];
        // @ts-ignore
        const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average01)), min: ((0)), max: ((58)), clearable: (true), }));
        const __VLS_92 = __VLS_91({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average01)), min: ((0)), max: ((58)), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
        ({}({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average01)), min: ((0)), max: ((58)), clearable: (true), }));
        let __VLS_96;
        const __VLS_97 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(3);
                // @ts-ignore
                [radioChange, average01,];
            }
        };
        const __VLS_98 = {
            onFocus: (...[$event]) => {
                __VLS_ctx.radioChange(3);
                // @ts-ignore
                [radioChange,];
            }
        };
        const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
        let __VLS_93;
        let __VLS_94;
        // @ts-ignore
        const __VLS_99 = {}
            .NInputNumber;
        ({}.NInputNumber);
        __VLS_components.NInputNumber;
        __VLS_components.nInputNumber;
        // @ts-ignore
        [NInputNumber,];
        // @ts-ignore
        const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average02)), min: ((1)), max: ((59 - __VLS_ctx.average01 || 0)), clearable: (true), }));
        const __VLS_101 = __VLS_100({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average02)), min: ((1)), max: ((59 - __VLS_ctx.average01 || 0)), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_100));
        ({}({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average02)), min: ((1)), max: ((59 - __VLS_ctx.average01 || 0)), clearable: (true), }));
        let __VLS_105;
        const __VLS_106 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(3);
                // @ts-ignore
                [radioChange, average01, average02,];
            }
        };
        const __VLS_107 = {
            onFocus: (...[$event]) => {
                __VLS_ctx.radioChange(3);
                // @ts-ignore
                [radioChange,];
            }
        };
        const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_99, __VLS_101);
        let __VLS_102;
        let __VLS_103;
        (__VLS_83.slots).default;
        const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
        (__VLS_77.slots).default;
        const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
        // @ts-ignore
        const __VLS_108 = {}
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
        const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({}));
        const __VLS_110 = __VLS_109({}, ...__VLS_functionalComponentArgsRest(__VLS_109));
        ({}({}));
        // @ts-ignore
        const __VLS_114 = {}
            .NFlex;
        ({}.NFlex);
        ({}.NFlex);
        __VLS_components.NFlex;
        __VLS_components.nFlex;
        __VLS_components.NFlex;
        __VLS_components.nFlex;
        // @ts-ignore
        [NFlex, NFlex,];
        // @ts-ignore
        const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({}));
        const __VLS_116 = __VLS_115({}, ...__VLS_functionalComponentArgsRest(__VLS_115));
        ({}({}));
        // @ts-ignore
        const __VLS_120 = {}
            .NRadio;
        ({}.NRadio);
        __VLS_components.NRadio;
        __VLS_components.nRadio;
        // @ts-ignore
        [NRadio,];
        // @ts-ignore
        const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ value: ((4)), }));
        const __VLS_122 = __VLS_121({ value: ((4)), }, ...__VLS_functionalComponentArgsRest(__VLS_121));
        ({}({ value: ((4)), }));
        const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
        // @ts-ignore
        const __VLS_126 = {}
            .NCheckboxGroup;
        ({}.NCheckboxGroup);
        ({}.NCheckboxGroup);
        __VLS_components.NCheckboxGroup;
        __VLS_components.nCheckboxGroup;
        __VLS_components.NCheckboxGroup;
        __VLS_components.nCheckboxGroup;
        // @ts-ignore
        [NCheckboxGroup, NCheckboxGroup,];
        // @ts-ignore
        const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.checkboxList)), }));
        const __VLS_128 = __VLS_127({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.checkboxList)), }, ...__VLS_functionalComponentArgsRest(__VLS_127));
        ({}({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.checkboxList)), }));
        let __VLS_132;
        const __VLS_133 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(4);
                // @ts-ignore
                [radioChange, checkboxList,];
            }
        };
        // @ts-ignore
        const __VLS_134 = {}
            .NSpace;
        ({}.NSpace);
        ({}.NSpace);
        __VLS_components.NSpace;
        __VLS_components.nSpace;
        __VLS_components.NSpace;
        __VLS_components.nSpace;
        // @ts-ignore
        [NSpace, NSpace,];
        // @ts-ignore
        const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({}));
        const __VLS_136 = __VLS_135({}, ...__VLS_functionalComponentArgsRest(__VLS_135));
        ({}({}));
        for (const [item] of __VLS_getVForSourceType((60))) {
            // @ts-ignore
            const __VLS_140 = {}
                .NCheckbox;
            ({}.NCheckbox);
            __VLS_components.NCheckbox;
            __VLS_components.nCheckbox;
            // @ts-ignore
            [NCheckbox,];
            // @ts-ignore
            const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ key: ((item)), value: ((item - 1)), label: ((__VLS_ctx.zeroFill(item - 1))), }));
            const __VLS_142 = __VLS_141({ key: ((item)), value: ((item - 1)), label: ((__VLS_ctx.zeroFill(item - 1))), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
            ({}({ key: ((item)), value: ((item - 1)), label: ((__VLS_ctx.zeroFill(item - 1))), }));
            // @ts-ignore
            [zeroFill,];
            const __VLS_145 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142);
        }
        (__VLS_139.slots).default;
        const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136);
        (__VLS_131.slots).default;
        const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128);
        let __VLS_129;
        let __VLS_130;
        (__VLS_119.slots).default;
        const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116);
        (__VLS_113.slots).default;
        const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
        (__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        (__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        (__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {};
        const __VLS_name = "CronGenSecond";
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {
                    zeroFill: zeroFill,
                    radioValue: radioValue,
                    cycle01: cycle01,
                    cycle02: cycle02,
                    average01: average01,
                    average02: average02,
                    checkboxList: checkboxList,
                    radioChange: radioChange,
                };
            },
            props: {
                modelValue: {
                    required: true,
                    type: String,
                },
            },
            emits: {},
            name: "CronGenSecond"
        });
    }
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        props: {
            modelValue: {
                required: true,
                type: String,
            },
        },
        emits: {},
        name: "CronGenSecond"
    });
})();
;
