/* __placeholder__ */
import { checkNumber } from "@/utils";
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const props = defineProps({
        modelValue: {
            required: true,
            type: String,
        },
    });
    const emit = defineEmits();
    const radioValue = ref(2);
    const weekday = ref(2);
    const cycle01 = ref(2);
    const cycle02 = ref(3);
    const average01 = ref(1);
    const average02 = ref(2);
    const checkboxList = ref([]);
    const weekList = [
        { value: 2, label: "周一" },
        { value: 3, label: "周二" },
        { value: 4, label: "周三" },
        { value: 5, label: "周四" },
        { value: 6, label: "周五" },
        { value: 7, label: "周六" },
        { value: 1, label: "周日" },
    ];
    const value = computed({
        get: () => props.modelValue,
        set: (v) => emit("update:modelValue", v),
    });
    console.log(value.value);
    watch(() => value.value, () => assign());
    onMounted(() => assign());
    // 赋值
    const assign = () => {
        if (value.value === "*") {
            radioValue.value = 1;
        }
        else if (value.value === "?") {
            radioValue.value = 2;
        }
        else if (value.value.indexOf("-") > -1) {
            let indexArr = value.value.split("-");
            cycle01.value = isNaN(+indexArr[0]) ? 0 : +indexArr[0];
            cycle02.value = +indexArr[1];
            radioValue.value = 3;
        }
        else if (value.value.indexOf("#") > -1) {
            let indexArr = value.value.split("#");
            average01.value = isNaN(+indexArr[1]) ? 1 : +indexArr[1];
            average02.value = +indexArr[0];
            radioValue.value = 4;
        }
        else if (value.value.indexOf("L") > -1) {
            let indexArr = value.value.split("L");
            weekday.value = isNaN(+indexArr[0]) ? 1 : +indexArr[0];
            radioValue.value = 5;
        }
        else {
            checkboxList.value = value.value.split(",").map((i) => +i);
            radioValue.value = 6;
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
            value.value = weekdayCheck.value;
        }
        else if (v === 6) {
            value.value = checkboxString.value;
        }
        else {
            value.value = "*";
        }
    });
    // 计算两个周期值
    const cycleTotal = computed(() => {
        cycle01.value = checkNumber(cycle01.value, 1, 7);
        cycle02.value = checkNumber(cycle02.value, 1, 7);
        return cycle01.value + "-" + cycle02.value;
    });
    watch(() => cycleTotal.value, (v) => (value.value = v));
    // 计算平均用到的值
    const averageTotal = computed(() => {
        average02.value = checkNumber(average02.value, 1, 7);
        average01.value = checkNumber(average01.value, 1, 4);
        return average02.value + "#" + average01.value;
    });
    watch(() => averageTotal.value, (v) => (value.value = v));
    // 最近的工作日（格式）
    const weekdayCheck = computed(() => {
        weekday.value = checkNumber(weekday.value, 1, 7);
        return weekday.value + "L";
    });
    watch(() => weekdayCheck.value, (v) => (value.value = v));
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
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ value: ((__VLS_ctx.radioValue)), name: ("selectWeek"), }));
        const __VLS_8 = __VLS_7({ value: ((__VLS_ctx.radioValue)), name: ("selectWeek"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ value: ((__VLS_ctx.radioValue)), name: ("selectWeek"), }));
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
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.cycle01)), name: ("radiobuttongroup1"), size: ("small"), }));
        const __VLS_74 = __VLS_73({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.cycle01)), name: ("radiobuttongroup1"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
        ({}({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.cycle01)), name: ("radiobuttongroup1"), size: ("small"), }));
        let __VLS_78;
        const __VLS_79 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(3);
                // @ts-ignore
                [cycle01, radioChange,];
            }
        };
        for (const [song] of __VLS_getVForSourceType((__VLS_ctx.weekList))) {
            // @ts-ignore
            const __VLS_80 = {}
                .NRadioButton;
            ({}.NRadioButton);
            __VLS_components.NRadioButton;
            __VLS_components.nRadioButton;
            // @ts-ignore
            [NRadioButton,];
            // @ts-ignore
            const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ key: ((song.value)), value: ((song.value)), disabled: ((song.value === 1)), label: ((song.label)), }));
            const __VLS_82 = __VLS_81({ key: ((song.value)), value: ((song.value)), disabled: ((song.value === 1)), label: ((song.label)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
            ({}({ key: ((song.value)), value: ((song.value)), disabled: ((song.value === 1)), label: ((song.label)), }));
            // @ts-ignore
            [weekList,];
            const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
        }
        (__VLS_77.slots).default;
        const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
        let __VLS_75;
        let __VLS_76;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        // @ts-ignore
        const __VLS_86 = {}
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
        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.cycle02)), name: ("radiobuttongroup2"), size: ("small"), }));
        const __VLS_88 = __VLS_87({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.cycle02)), name: ("radiobuttongroup2"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
        ({}({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.cycle02)), name: ("radiobuttongroup2"), size: ("small"), }));
        let __VLS_92;
        const __VLS_93 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(3);
                // @ts-ignore
                [radioChange, cycle02,];
            }
        };
        for (const [song] of __VLS_getVForSourceType((__VLS_ctx.weekList))) {
            // @ts-ignore
            const __VLS_94 = {}
                .NRadioButton;
            ({}.NRadioButton);
            __VLS_components.NRadioButton;
            __VLS_components.nRadioButton;
            // @ts-ignore
            [NRadioButton,];
            // @ts-ignore
            const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ key: ((song.value)), value: ((song.value)), disabled: ((song.value < __VLS_ctx.cycle01 && song.value !== 1)), label: ((song.label)), }));
            const __VLS_96 = __VLS_95({ key: ((song.value)), value: ((song.value)), disabled: ((song.value < __VLS_ctx.cycle01 && song.value !== 1)), label: ((song.label)), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
            ({}({ key: ((song.value)), value: ((song.value)), disabled: ((song.value < __VLS_ctx.cycle01 && song.value !== 1)), label: ((song.label)), }));
            // @ts-ignore
            [cycle01, weekList,];
            const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_94, __VLS_96);
        }
        (__VLS_91.slots).default;
        const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
        let __VLS_89;
        let __VLS_90;
        (__VLS_65.slots).default;
        const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
        (__VLS_59.slots).default;
        const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
        // @ts-ignore
        const __VLS_100 = {}
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
        const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({}));
        const __VLS_102 = __VLS_101({}, ...__VLS_functionalComponentArgsRest(__VLS_101));
        ({}({}));
        // @ts-ignore
        const __VLS_106 = {}
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
        const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ align: ("center"), }));
        const __VLS_108 = __VLS_107({ align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
        ({}({ align: ("center"), }));
        // @ts-ignore
        const __VLS_112 = {}
            .NRadio;
        ({}.NRadio);
        __VLS_components.NRadio;
        __VLS_components.nRadio;
        // @ts-ignore
        [NRadio,];
        // @ts-ignore
        const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({ value: ((4)), }));
        const __VLS_114 = __VLS_113({ value: ((4)), }, ...__VLS_functionalComponentArgsRest(__VLS_113));
        ({}({ value: ((4)), }));
        const __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_112, __VLS_114);
        // @ts-ignore
        const __VLS_118 = {}
            .NInputNumber;
        ({}.NInputNumber);
        __VLS_components.NInputNumber;
        __VLS_components.nInputNumber;
        // @ts-ignore
        [NInputNumber,];
        // @ts-ignore
        const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average01)), min: ((1)), max: ((4)), clearable: (true), }));
        const __VLS_120 = __VLS_119({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average01)), min: ((1)), max: ((4)), clearable: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
        ({}({ ...{ 'onUpdate:value': {} }, ...{ 'onFocus': {} }, value: ((__VLS_ctx.average01)), min: ((1)), max: ((4)), clearable: (true), }));
        let __VLS_124;
        const __VLS_125 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(4);
                // @ts-ignore
                [radioChange, average01,];
            }
        };
        const __VLS_126 = {
            onFocus: (...[$event]) => {
                __VLS_ctx.radioChange(4);
                // @ts-ignore
                [radioChange,];
            }
        };
        const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
        let __VLS_121;
        let __VLS_122;
        // @ts-ignore
        const __VLS_127 = {}
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
        const __VLS_128 = __VLS_asFunctionalComponent(__VLS_127, new __VLS_127({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.average02)), name: ("radiobuttongroup3"), size: ("small"), }));
        const __VLS_129 = __VLS_128({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.average02)), name: ("radiobuttongroup3"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_128));
        ({}({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.average02)), name: ("radiobuttongroup3"), size: ("small"), }));
        let __VLS_133;
        const __VLS_134 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(4);
                // @ts-ignore
                [radioChange, average02,];
            }
        };
        for (const [song] of __VLS_getVForSourceType((__VLS_ctx.weekList))) {
            // @ts-ignore
            const __VLS_135 = {}
                .NRadioButton;
            ({}.NRadioButton);
            __VLS_components.NRadioButton;
            __VLS_components.nRadioButton;
            // @ts-ignore
            [NRadioButton,];
            // @ts-ignore
            const __VLS_136 = __VLS_asFunctionalComponent(__VLS_135, new __VLS_135({ key: ((song.value)), value: ((song.value)), label: ((song.label)), }));
            const __VLS_137 = __VLS_136({ key: ((song.value)), value: ((song.value)), label: ((song.label)), }, ...__VLS_functionalComponentArgsRest(__VLS_136));
            ({}({ key: ((song.value)), value: ((song.value)), label: ((song.label)), }));
            // @ts-ignore
            [weekList,];
            const __VLS_140 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137);
        }
        (__VLS_132.slots).default;
        const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_127, __VLS_129);
        let __VLS_130;
        let __VLS_131;
        (__VLS_111.slots).default;
        const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
        (__VLS_105.slots).default;
        const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
        // @ts-ignore
        const __VLS_141 = {}
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
        const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({}));
        const __VLS_143 = __VLS_142({}, ...__VLS_functionalComponentArgsRest(__VLS_142));
        ({}({}));
        // @ts-ignore
        const __VLS_147 = {}
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
        const __VLS_148 = __VLS_asFunctionalComponent(__VLS_147, new __VLS_147({ align: ("center"), }));
        const __VLS_149 = __VLS_148({ align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_148));
        ({}({ align: ("center"), }));
        // @ts-ignore
        const __VLS_153 = {}
            .NRadio;
        ({}.NRadio);
        __VLS_components.NRadio;
        __VLS_components.nRadio;
        // @ts-ignore
        [NRadio,];
        // @ts-ignore
        const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({ value: ((5)), }));
        const __VLS_155 = __VLS_154({ value: ((5)), }, ...__VLS_functionalComponentArgsRest(__VLS_154));
        ({}({ value: ((5)), }));
        const __VLS_158 = __VLS_pickFunctionalComponentCtx(__VLS_153, __VLS_155);
        // @ts-ignore
        const __VLS_159 = {}
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
        const __VLS_160 = __VLS_asFunctionalComponent(__VLS_159, new __VLS_159({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.weekday)), name: ("radiobuttongroup4"), size: ("small"), }));
        const __VLS_161 = __VLS_160({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.weekday)), name: ("radiobuttongroup4"), size: ("small"), }, ...__VLS_functionalComponentArgsRest(__VLS_160));
        ({}({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.weekday)), name: ("radiobuttongroup4"), size: ("small"), }));
        let __VLS_165;
        const __VLS_166 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(5);
                // @ts-ignore
                [radioChange, weekday,];
            }
        };
        for (const [song] of __VLS_getVForSourceType((__VLS_ctx.weekList))) {
            // @ts-ignore
            const __VLS_167 = {}
                .NRadioButton;
            ({}.NRadioButton);
            __VLS_components.NRadioButton;
            __VLS_components.nRadioButton;
            // @ts-ignore
            [NRadioButton,];
            // @ts-ignore
            const __VLS_168 = __VLS_asFunctionalComponent(__VLS_167, new __VLS_167({ key: ((song.value)), value: ((song.value)), label: ((song.label)), }));
            const __VLS_169 = __VLS_168({ key: ((song.value)), value: ((song.value)), label: ((song.label)), }, ...__VLS_functionalComponentArgsRest(__VLS_168));
            ({}({ key: ((song.value)), value: ((song.value)), label: ((song.label)), }));
            // @ts-ignore
            [weekList,];
            const __VLS_172 = __VLS_pickFunctionalComponentCtx(__VLS_167, __VLS_169);
        }
        (__VLS_164.slots).default;
        const __VLS_164 = __VLS_pickFunctionalComponentCtx(__VLS_159, __VLS_161);
        let __VLS_162;
        let __VLS_163;
        (__VLS_152.slots).default;
        const __VLS_152 = __VLS_pickFunctionalComponentCtx(__VLS_147, __VLS_149);
        (__VLS_146.slots).default;
        const __VLS_146 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
        // @ts-ignore
        const __VLS_173 = {}
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
        const __VLS_174 = __VLS_asFunctionalComponent(__VLS_173, new __VLS_173({}));
        const __VLS_175 = __VLS_174({}, ...__VLS_functionalComponentArgsRest(__VLS_174));
        ({}({}));
        // @ts-ignore
        const __VLS_179 = {}
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
        const __VLS_180 = __VLS_asFunctionalComponent(__VLS_179, new __VLS_179({ align: ("center"), }));
        const __VLS_181 = __VLS_180({ align: ("center"), }, ...__VLS_functionalComponentArgsRest(__VLS_180));
        ({}({ align: ("center"), }));
        // @ts-ignore
        const __VLS_185 = {}
            .NRadio;
        ({}.NRadio);
        __VLS_components.NRadio;
        __VLS_components.nRadio;
        // @ts-ignore
        [NRadio,];
        // @ts-ignore
        const __VLS_186 = __VLS_asFunctionalComponent(__VLS_185, new __VLS_185({ value: ((6)), }));
        const __VLS_187 = __VLS_186({ value: ((6)), }, ...__VLS_functionalComponentArgsRest(__VLS_186));
        ({}({ value: ((6)), }));
        const __VLS_190 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
        // @ts-ignore
        const __VLS_191 = {}
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
        const __VLS_192 = __VLS_asFunctionalComponent(__VLS_191, new __VLS_191({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.checkboxList)), }));
        const __VLS_193 = __VLS_192({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.checkboxList)), }, ...__VLS_functionalComponentArgsRest(__VLS_192));
        ({}({ ...{ 'onUpdate:value': {} }, value: ((__VLS_ctx.checkboxList)), }));
        let __VLS_197;
        const __VLS_198 = {
            'onUpdate:value': (...[$event]) => {
                __VLS_ctx.radioChange(6);
                // @ts-ignore
                [radioChange, checkboxList,];
            }
        };
        // @ts-ignore
        const __VLS_199 = {}
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
        const __VLS_200 = __VLS_asFunctionalComponent(__VLS_199, new __VLS_199({}));
        const __VLS_201 = __VLS_200({}, ...__VLS_functionalComponentArgsRest(__VLS_200));
        ({}({}));
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.weekList))) {
            // @ts-ignore
            const __VLS_205 = {}
                .NCheckbox;
            ({}.NCheckbox);
            __VLS_components.NCheckbox;
            __VLS_components.nCheckbox;
            // @ts-ignore
            [NCheckbox,];
            // @ts-ignore
            const __VLS_206 = __VLS_asFunctionalComponent(__VLS_205, new __VLS_205({ key: ((item.value)), value: ((item.value)), label: ((item.label)), }));
            const __VLS_207 = __VLS_206({ key: ((item.value)), value: ((item.value)), label: ((item.label)), }, ...__VLS_functionalComponentArgsRest(__VLS_206));
            ({}({ key: ((item.value)), value: ((item.value)), label: ((item.label)), }));
            // @ts-ignore
            [weekList,];
            const __VLS_210 = __VLS_pickFunctionalComponentCtx(__VLS_205, __VLS_207);
        }
        (__VLS_204.slots).default;
        const __VLS_204 = __VLS_pickFunctionalComponentCtx(__VLS_199, __VLS_201);
        (__VLS_196.slots).default;
        const __VLS_196 = __VLS_pickFunctionalComponentCtx(__VLS_191, __VLS_193);
        let __VLS_194;
        let __VLS_195;
        (__VLS_184.slots).default;
        const __VLS_184 = __VLS_pickFunctionalComponentCtx(__VLS_179, __VLS_181);
        (__VLS_178.slots).default;
        const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_173, __VLS_175);
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
        const __VLS_name = "CronGenWeek";
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {
                    radioValue: radioValue,
                    weekday: weekday,
                    cycle01: cycle01,
                    cycle02: cycle02,
                    average01: average01,
                    average02: average02,
                    checkboxList: checkboxList,
                    weekList: weekList,
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
            name: "CronGenWeek"
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
        name: "CronGenWeek"
    });
})();
;
