/* __placeholder__ */
import { checkNumber, zeroFill } from "@/utils";
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
    const workday = ref(1);
    const cycle01 = ref(1);
    const cycle02 = ref(2);
    const average01 = ref(1);
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
        else if (value.value == "?") {
            radioValue.value = 2;
        }
        else if (value.value.indexOf("-") > -1) {
            let indexArr = value.value.split("-");
            cycle01.value = isNaN(+indexArr[0]) ? 0 : +indexArr[0];
            cycle02.value = +indexArr[1];
            radioValue.value = 3;
        }
        else if (value.value.indexOf("/") > -1) {
            let indexArr = value.value.split("/");
            average01.value = isNaN(+indexArr[0]) ? 0 : +indexArr[0];
            average02.value = +indexArr[1];
            radioValue.value = 4;
        }
        else if (value.value.indexOf("W") > -1) {
            let indexArr = value.value.split("W");
            workday.value = isNaN(+indexArr[0]) ? 0 : +indexArr[0];
            radioValue.value = 5;
        }
        else if (value.value === "L") {
            radioValue.value = 6;
        }
        else {
            checkboxList.value = value.value.split(",").map((i) => +i);
            radioValue.value = 7;
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
            value.value = "?";
        }
        else if (v === 3) {
            value.value = cycleTotal.value;
        }
        else if (v === 4) {
            value.value = averageTotal.value;
        }
        else if (v === 5) {
            value.value = workdayCheck.value;
        }
        else if (v === 6) {
            value.value = "L";
        }
        else if (v === 7) {
            value.value = checkboxString.value;
        }
        else {
            value.value = "*";
        }
    });
    // 计算两个周期值
    const cycleTotal = computed(() => {
        const cycle1 = checkNumber(cycle01.value, 1, 30);
        const cycle2 = checkNumber(cycle02.value, cycle1 ? cycle1 + 1 : 2, 31);
        return cycle1 + "-" + cycle2;
    });
    watch(() => cycleTotal.value, (v) => (value.value = v));
    // 计算平均用到的值
    const averageTotal = computed(() => {
        const average1 = checkNumber(average01.value, 1, 30);
        const average2 = checkNumber(average02.value, 1, 31 - average1 || 0);
        return average1 + "/" + average2;
    });
    watch(() => averageTotal.value, (v) => (value.value = v));
    // 计算工作日格式
    const workdayCheck = computed(() => {
        workday.value = checkNumber(workday.value, 1, 31);
        return workday.value + "W";
    });
    watch(() => workdayCheck.value, (v) => (value.value = v));
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
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ value: ((__VLS_ctx.radioValue)), name: ("selectDay"), }));
        const __VLS_8 = __VLS_7({ value: ((__VLS_ctx.radioValue)), name: ("selectDay"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ value: ((__VLS_ctx.radioValue)), name: ("selectDay"), }));
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
        (__VLS_47.slots).default;
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
        (__VLS_41.slots).default;
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        // @ts-ignore
        const __VLS_54 = {}
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
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
        const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
        ({}({}));
        // @ts-ignore
        const __VLS_60 = {}
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
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ align: ("center"), }));
        const __VLS_62 = __VLS_61({ align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        ({}({ align: ("center"), }));
        // @ts-ignore
        const __VLS_66 = {}
            .NRadio;
        ({}.NRadio);
        __VLS_components.NRadio;
        __VLS_components.nRadio;
        // @ts-ignore
        [NRadio,];
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ value: ((3)), }));
        const __VLS_68 = __VLS_67({ value: ((3)), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        ({}({ value: ((3)), }));
        const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
        // @ts-ignore
        const __VLS_72 = {}
            .NInputNumber;
        ({}.NInputNumber);
        __VLS_components.NInputNumber;
        __VLS_components.nInputNumber;
        // @ts-ignore
        [NInputNumber,];
        // @ts-ignore
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.cycle01)), min: ((1)), max: ((30)), clearable: (true), }));
        const __VLS_74 = __VLS_73({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.cycle01)), min: ((1)), max: ((30)), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
        ({}({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.cycle01)), min: ((1)), max: ((30)), clearable: (true), }));
        let __VLS_78;
        const __VLS_79 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(3);
                // @ts-ignore
                [cycle01, radioChange,];
            }
        };
        const __VLS_80 = {
            onFocus: (...[$event]) => {
                __VLS_ctx.radioChange(3);
                // @ts-ignore
                [radioChange,];
            }
        };
        const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
        let __VLS_75;
        let __VLS_76;
        // @ts-ignore
        const __VLS_81 = {}
            .NInputNumber;
        ({}.NInputNumber);
        __VLS_components.NInputNumber;
        __VLS_components.nInputNumber;
        // @ts-ignore
        [NInputNumber,];
        // @ts-ignore
        const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.cycle02)), min: ((__VLS_ctx.cycle01 ? __VLS_ctx.cycle01 + 1 : 2)), max: ((31)), clearable: (true), }));
        const __VLS_83 = __VLS_82({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.cycle02)), min: ((__VLS_ctx.cycle01 ? __VLS_ctx.cycle01 + 1 : 2)), max: ((31)), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
        ({}({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.cycle02)), min: ((__VLS_ctx.cycle01 ? __VLS_ctx.cycle01 + 1 : 2)), max: ((31)), clearable: (true), }));
        let __VLS_87;
        const __VLS_88 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(3);
                // @ts-ignore
                [cycle01, cycle01, radioChange, cycle02,];
            }
        };
        const __VLS_89 = {
            onFocus: (...[$event]) => {
                __VLS_ctx.radioChange(3);
                // @ts-ignore
                [radioChange,];
            }
        };
        const __VLS_86 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
        let __VLS_84;
        let __VLS_85;
        (__VLS_65.slots).default;
        const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
        (__VLS_59.slots).default;
        const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
        // @ts-ignore
        const __VLS_90 = {}
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
        const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({}));
        const __VLS_92 = __VLS_91({}, ...__VLS_functionalComponentArgsRest(__VLS_91));
        ({}({}));
        // @ts-ignore
        const __VLS_96 = {}
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
        const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ align: ("center"), }));
        const __VLS_98 = __VLS_97({ align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
        ({}({ align: ("center"), }));
        // @ts-ignore
        const __VLS_102 = {}
            .NRadio;
        ({}.NRadio);
        __VLS_components.NRadio;
        __VLS_components.nRadio;
        // @ts-ignore
        [NRadio,];
        // @ts-ignore
        const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ value: ((4)), }));
        const __VLS_104 = __VLS_103({ value: ((4)), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
        ({}({ value: ((4)), }));
        const __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104);
        // @ts-ignore
        const __VLS_108 = {}
            .NInputNumber;
        ({}.NInputNumber);
        __VLS_components.NInputNumber;
        __VLS_components.nInputNumber;
        // @ts-ignore
        [NInputNumber,];
        // @ts-ignore
        const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average01)), min: ((1)), max: ((30)), clearable: (true), }));
        const __VLS_110 = __VLS_109({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average01)), min: ((1)), max: ((30)), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
        ({}({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average01)), min: ((1)), max: ((30)), clearable: (true), }));
        let __VLS_114;
        const __VLS_115 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(4);
                // @ts-ignore
                [radioChange, average01,];
            }
        };
        const __VLS_116 = {
            onFocus: (...[$event]) => {
                __VLS_ctx.radioChange(4);
                // @ts-ignore
                [radioChange,];
            }
        };
        const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
        let __VLS_111;
        let __VLS_112;
        // @ts-ignore
        const __VLS_117 = {}
            .NInputNumber;
        ({}.NInputNumber);
        __VLS_components.NInputNumber;
        __VLS_components.nInputNumber;
        // @ts-ignore
        [NInputNumber,];
        // @ts-ignore
        const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average02)), min: ((1)), max: ((31 - __VLS_ctx.average01 || 1)), clearable: (true), }));
        const __VLS_119 = __VLS_118({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average02)), min: ((1)), max: ((31 - __VLS_ctx.average01 || 1)), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_118));
        ({}({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average02)), min: ((1)), max: ((31 - __VLS_ctx.average01 || 1)), clearable: (true), }));
        let __VLS_123;
        const __VLS_124 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(4);
                // @ts-ignore
                [radioChange, average01, average02,];
            }
        };
        const __VLS_125 = {
            onFocus: (...[$event]) => {
                __VLS_ctx.radioChange(4);
                // @ts-ignore
                [radioChange,];
            }
        };
        const __VLS_122 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119);
        let __VLS_120;
        let __VLS_121;
        (__VLS_101.slots).default;
        const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
        (__VLS_95.slots).default;
        const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
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
        const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ align: ("center"), }));
        const __VLS_134 = __VLS_133({ align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
        ({}({ align: ("center"), }));
        // @ts-ignore
        const __VLS_138 = {}
            .NRadio;
        ({}.NRadio);
        __VLS_components.NRadio;
        __VLS_components.nRadio;
        // @ts-ignore
        [NRadio,];
        // @ts-ignore
        const __VLS_139 = __VLS_asFunctionalComponent(__VLS_138, new __VLS_138({ value: ((5)), }));
        const __VLS_140 = __VLS_139({ value: ((5)), }, ...__VLS_functionalComponentArgsRest(__VLS_139));
        ({}({ value: ((5)), }));
        const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_138, __VLS_140);
        // @ts-ignore
        const __VLS_144 = {}
            .NInputNumber;
        ({}.NInputNumber);
        __VLS_components.NInputNumber;
        __VLS_components.nInputNumber;
        // @ts-ignore
        [NInputNumber,];
        // @ts-ignore
        const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.workday)), min: ((1)), max: ((31)), clearable: (true), }));
        const __VLS_146 = __VLS_145({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.workday)), min: ((1)), max: ((31)), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
        ({}({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.workday)), min: ((1)), max: ((31)), clearable: (true), }));
        let __VLS_150;
        const __VLS_151 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(5);
                // @ts-ignore
                [radioChange, workday,];
            }
        };
        const __VLS_152 = {
            onFocus: (...[$event]) => {
                __VLS_ctx.radioChange(5);
                // @ts-ignore
                [radioChange,];
            }
        };
        const __VLS_149 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146);
        let __VLS_147;
        let __VLS_148;
        (__VLS_137.slots).default;
        const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134);
        (__VLS_131.slots).default;
        const __VLS_131 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128);
        // @ts-ignore
        const __VLS_153 = {}
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
        const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({}));
        const __VLS_155 = __VLS_154({}, ...__VLS_functionalComponentArgsRest(__VLS_154));
        ({}({}));
        // @ts-ignore
        const __VLS_159 = {}
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
        const __VLS_160 = __VLS_asFunctionalComponent(__VLS_159, new __VLS_159({ align: ("center"), }));
        const __VLS_161 = __VLS_160({ align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_160));
        ({}({ align: ("center"), }));
        // @ts-ignore
        const __VLS_165 = {}
            .NRadio;
        ({}.NRadio);
        __VLS_components.NRadio;
        __VLS_components.nRadio;
        // @ts-ignore
        [NRadio,];
        // @ts-ignore
        const __VLS_166 = __VLS_asFunctionalComponent(__VLS_165, new __VLS_165({ value: ((6)), }));
        const __VLS_167 = __VLS_166({ value: ((6)), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
        ({}({ value: ((6)), }));
        const __VLS_170 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167);
        (__VLS_164.slots).default;
        const __VLS_164 = __VLS_pickFunctionalComponentCtx(__VLS_159, __VLS_161);
        (__VLS_158.slots).default;
        const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_153, __VLS_155);
        // @ts-ignore
        const __VLS_171 = {}
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
        const __VLS_172 = __VLS_asFunctionalComponent(__VLS_171, new __VLS_171({}));
        const __VLS_173 = __VLS_172({}, ...__VLS_functionalComponentArgsRest(__VLS_172));
        ({}({}));
        // @ts-ignore
        const __VLS_177 = {}
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
        const __VLS_178 = __VLS_asFunctionalComponent(__VLS_177, new __VLS_177({}));
        const __VLS_179 = __VLS_178({}, ...__VLS_functionalComponentArgsRest(__VLS_178));
        ({}({}));
        // @ts-ignore
        const __VLS_183 = {}
            .NRadio;
        ({}.NRadio);
        __VLS_components.NRadio;
        __VLS_components.nRadio;
        // @ts-ignore
        [NRadio,];
        // @ts-ignore
        const __VLS_184 = __VLS_asFunctionalComponent(__VLS_183, new __VLS_183({ value: ((7)), }));
        const __VLS_185 = __VLS_184({ value: ((7)), }, ...__VLS_functionalComponentArgsRest(__VLS_184));
        ({}({ value: ((7)), }));
        const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
        // @ts-ignore
        const __VLS_189 = {}
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
        const __VLS_190 = __VLS_asFunctionalComponent(__VLS_189, new __VLS_189({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.checkboxList)), }));
        const __VLS_191 = __VLS_190({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.checkboxList)), }, ...__VLS_functionalComponentArgsRest(__VLS_190));
        ({}({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.checkboxList)), }));
        let __VLS_195;
        const __VLS_196 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(7);
                // @ts-ignore
                [radioChange, checkboxList,];
            }
        };
        // @ts-ignore
        const __VLS_197 = {}
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
        const __VLS_198 = __VLS_asFunctionalComponent(__VLS_197, new __VLS_197({}));
        const __VLS_199 = __VLS_198({}, ...__VLS_functionalComponentArgsRest(__VLS_198));
        ({}({}));
        for (const [item] of __VLS_getVForSourceType((31))) {
            // @ts-ignore
            const __VLS_203 = {}
                .NCheckbox;
            ({}.NCheckbox);
            __VLS_components.NCheckbox;
            __VLS_components.nCheckbox;
            // @ts-ignore
            [NCheckbox,];
            // @ts-ignore
            const __VLS_204 = __VLS_asFunctionalComponent(__VLS_203, new __VLS_203({ key: ((item)), value: ((item)), label: ((__VLS_ctx.zeroFill(item))), }));
            const __VLS_205 = __VLS_204({ key: ((item)), value: ((item)), label: ((__VLS_ctx.zeroFill(item))), }, ...__VLS_functionalComponentArgsRest(__VLS_204));
            ({}({ key: ((item)), value: ((item)), label: ((__VLS_ctx.zeroFill(item))), }));
            // @ts-ignore
            [zeroFill,];
            const __VLS_208 = __VLS_pickFunctionalComponentCtx(__VLS_203, __VLS_205);
        }
        (__VLS_202.slots).default;
        const __VLS_202 = __VLS_pickFunctionalComponentCtx(__VLS_197, __VLS_199);
        (__VLS_194.slots).default;
        const __VLS_194 = __VLS_pickFunctionalComponentCtx(__VLS_189, __VLS_191);
        let __VLS_192;
        let __VLS_193;
        (__VLS_182.slots).default;
        const __VLS_182 = __VLS_pickFunctionalComponentCtx(__VLS_177, __VLS_179);
        (__VLS_176.slots).default;
        const __VLS_176 = __VLS_pickFunctionalComponentCtx(__VLS_171, __VLS_173);
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
        const __VLS_name = "CronGenDay";
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {
                    zeroFill: zeroFill,
                    radioValue: radioValue,
                    workday: workday,
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
            name: "CronGenDay"
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
        name: "CronGenDay"
    });
})();
;
