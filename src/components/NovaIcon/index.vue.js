/* __placeholder__ */
import { Icon } from "@iconify/vue";
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    let __VLS_typeProps;
    const props = withDefaults(defineProps(), {
        size: 18,
    });
    const __VLS_withDefaultsArg = (function (t) { return t; })({
        size: 18,
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
        // CSS variable injection 
        // CSS variable injection end 
        let __VLS_resolvedLocalAndGlobalComponents;
        if (props.icon) {
            // @ts-ignore
            const __VLS_0 = {}
                .NIcon;
            ({}.NIcon);
            ({}.NIcon);
            __VLS_components.NIcon;
            __VLS_components.nIcon;
            __VLS_components.NIcon;
            __VLS_components.nIcon;
            // @ts-ignore
            [NIcon, NIcon,];
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ size: ((props.size)), depth: ((props.depth)), color: ((props.color)), }));
            const __VLS_2 = __VLS_1({ size: ((props.size)), depth: ((props.depth)), color: ((props.color)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            ({}({ size: ((props.size)), depth: ((props.depth)), color: ((props.color)), }));
            // @ts-ignore
            const __VLS_6 = {}
                .Icon;
            ({}.Icon);
            __VLS_components.Icon;
            // @ts-ignore
            [Icon,];
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ icon: ((props.icon)), }));
            const __VLS_8 = __VLS_7({ icon: ((props.icon)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            ({}({ icon: ((props.icon)), }));
            const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
            (__VLS_5.slots).default;
            const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        }
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {};
        const __VLS_name = "NovaIcon";
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {
                    Icon: Icon,
                };
            },
            props: {},
            name: "NovaIcon"
        });
    }
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        props: {},
        name: "NovaIcon"
    });
})();
;
