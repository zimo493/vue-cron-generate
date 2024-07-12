<template>
  <el-form>
    <el-form-item>
      <el-radio v-model="radioValue" :label="1">
        每分钟，允许的通配符 [, - * /]
      </el-radio>
    </el-form-item>

    <el-form-item>
      <el-radio v-model="radioValue" :label="2">
        周期从
        <el-input-number
          class="m-4"
          v-model="cycle01"
          :min="0"
          :max="58"
          controls-position="right"
          @focus="radioChange(2)"
        />
        到
        <el-input-number
          class="m-4"
          v-model="cycle02"
          :min="cycle01 ? cycle01 + 1 : 1"
          :max="59"
          controls-position="right"
          @focus="radioChange(2)"
        />
        分钟
      </el-radio>
    </el-form-item>

    <el-form-item>
      <el-radio v-model="radioValue" :label="3">
        周期从
        <el-input-number
          class="m-4"
          v-model="average01"
          :min="0"
          :max="58"
          controls-position="right"
          @focus="radioChange(3)"
        />
        分钟开始，每
        <el-input-number
          class="m-4"
          v-model="average02"
          :min="1"
          :max="59 - average01 || 0"
          controls-position="right"
          @focus="radioChange(3)"
        />
        分钟执行一次
      </el-radio>
    </el-form-item>

    <el-form-item class="start">
      <el-radio v-model="radioValue" :label="4" style="margin-right: 16px">
        指定分
      </el-radio>
      <div class="flex">
        <el-checkbox-group
          v-model="checkboxList"
          class="grid grid-cols-10 justify-items-stretch"
        >
          <el-checkbox
            v-for="item in 60"
            :key="item"
            :value="item - 1"
            :label="zeroFill(item - 1)"
          />
        </el-checkbox-group>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
export default { name: "ElMin" };
</script>
<script lang="ts" setup>
import { checkNumber, zeroFill } from "@/utils";

const props = defineProps({
  modelValue: {
    required: true,
    type: String,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", v: string): void;
}>();

const radioValue = ref<number>(1);
const cycle01 = ref<number>(1);
const cycle02 = ref<number>(2);
const average01 = ref<number>(0);
const average02 = ref<number>(1);
const checkboxList = ref<number[]>([]);

const value = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});
watch(
  () => value.value,
  () => assign()
);
onMounted(() => assign());

// 赋值
const assign = () => {
  if (value.value === "*") {
    radioValue.value = 1;
  } else if (value.value.indexOf("-") > -1) {
    const indexArr = value.value.split("-");
    cycle01.value = isNaN(+indexArr[0]) ? 0 : +indexArr[0];
    cycle02.value = +indexArr[1];
    radioValue.value = 2;
  } else if (value.value.indexOf("/") > -1) {
    const indexArr = value.value.split("/");
    average01.value = isNaN(+indexArr[0]) ? 0 : +indexArr[0];
    average02.value = +indexArr[1];
    radioValue.value = 3;
  } else {
    radioValue.value = 4;
    checkboxList.value = value.value.split(",").map((i) => +i);
  }
};

// 单选按钮值变化时
const radioChange = (v: number) => {
  if (radioValue.value !== v) {
    radioValue.value = v;
  }
};

watch(
  () => radioValue.value,
  (v) => {
    if (v === 1) {
      value.value = "*";
    } else if (v === 2) {
      value.value = cycleTotal.value;
    } else if (v === 3) {
      value.value = averageTotal.value;
    } else if (v === 4) {
      value.value = checkboxString.value;
    } else {
      value.value = "*";
    }
  }
);

// 计算两个周期值
const cycleTotal = computed(() => {
  const cycle1 = checkNumber(cycle01.value, 0, 58);
  const cycle2 = checkNumber(cycle02.value, cycle1 ? cycle1 + 1 : 1, 59);
  return cycle1 + "-" + cycle2;
});
watch(
  () => cycleTotal.value,
  (v) => (value.value = v)
);

// 计算平均用到的值
const averageTotal = computed(() => {
  const average1 = checkNumber(average01.value, 0, 58);
  const average2 = checkNumber(average02.value, 1, 59 - average1 || 0);
  return average1 + "/" + average2;
});
watch(
  () => averageTotal.value,
  (v) => (value.value = v)
);

// 计算勾选的checkbox值合集
const checkboxString = computed(() => {
  const str = checkboxList.value.join();
  return str == "" ? "*" : str;
});
watch(
  () => checkboxString.value,
  (v) => (value.value = v)
);
</script>
<style lang="scss" scoped>
::v-deep(.start) {
  margin-bottom: 0;
  .el-form-item__content {
    align-items: flex-start;
  }
}
</style>
