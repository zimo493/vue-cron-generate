<template>
  <el-form>
    <el-form-item>
      <el-radio v-model="radioValue" :label="1">
        周，允许的通配符[, - * ? / L #]
      </el-radio>
    </el-form-item>

    <el-form-item>
      <el-radio v-model="radioValue" :label="2"> 不指定 </el-radio>
    </el-form-item>

    <el-form-item>
      <el-radio v-model="radioValue" :label="3">
        周期从
        <el-select v-model="cycle01" class="mx-1em my-0">
          <el-option
            v-for="(item, index) of weekList"
            :key="index"
            :label="item.label"
            :value="item.value"
            :disabled="item.value === 1"
            >{{ item.label }}</el-option
          >
        </el-select>
        到
        <el-select v-model="cycle02" class="mx-1em my-0">
          <el-option
            v-for="(item, index) of weekList"
            :key="index"
            :label="item.label"
            :value="item.value"
            :disabled="item.value < cycle01 && item.value !== 1"
            >{{ item.label }}</el-option
          >
        </el-select>
      </el-radio>
    </el-form-item>

    <el-form-item>
      <el-radio v-model="radioValue" :label="4">
        周期从第
        <el-input-number
          class="mx-1em my-0"
          v-model="average01"
          :min="1"
          :max="4"
          controls-position="right"
          @focus="radioChange(4)"
        />
        周的
        <el-select v-model="average02" class="mx-1em my-0">
          <el-option
            v-for="(item, index) of weekList"
            :key="index"
            :label="item.label"
            :value="item.value"
            >{{ item.label }}</el-option
          >
        </el-select>
      </el-radio>
    </el-form-item>

    <el-form-item>
      <el-radio v-model="radioValue" :label="5">
        本月最后一个
        <el-select v-model="weekday" class="mx-1em my-0">
          <el-option
            v-for="(item, index) of weekList"
            :key="index"
            :label="item.label"
            :value="item.value"
            >{{ item.label }}</el-option
          >
        </el-select>
      </el-radio>
    </el-form-item>

    <!-- <el-form-item>
      <el-radio v-model="radioValue" :label="6">
        指定
        <el-select
          clearable
          v-model="checkboxList"
          placeholder="可多选"
          multiple
          style="width: 100%"
        >
          <el-option
            v-for="(item, index) of weekList"
            :key="index"
            :label="item.label"
            :value="String(item.value)"
            >{{ item.label }}</el-option
          >
        </el-select>
      </el-radio>
    </el-form-item> -->
    <el-form-item class="start">
      <el-radio v-model="radioValue" :label="6"> 指定周 </el-radio>
      <div class="flex">
        <el-checkbox-group
          v-model="checkboxList"
          @update:value="radioChange(6)"
          class="grid grid-cols-10 justify-items-stretch"
        >
          <el-checkbox
            v-for="item in weekList"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          />
        </el-checkbox-group>
      </div>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
export default { name: "ElWeek" };
</script>

<script lang="ts" setup>
import { checkNumber } from "@/utils";

const props = defineProps({
  modelValue: {
    required: true,
    type: String,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", v: string): void;
}>();

const radioValue = ref<number>(2);
const weekday = ref<number>(2);
const cycle01 = ref<number>(2);
const cycle02 = ref<number>(3);
const average01 = ref<number>(1);
const average02 = ref<number>(2);
const checkboxList = ref<number[]>([]);
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

watch(
  () => value.value,
  () => assign()
);
onMounted(() => assign());

// 赋值
const assign = () => {
  if (value.value === "*") {
    radioValue.value = 1;
  } else if (value.value === "?") {
    radioValue.value = 2;
  } else if (value.value.indexOf("-") > -1) {
    let indexArr = value.value.split("-");
    cycle01.value = isNaN(+indexArr[0]) ? 0 : +indexArr[0];
    cycle02.value = +indexArr[1];
    radioValue.value = 3;
  } else if (value.value.indexOf("#") > -1) {
    let indexArr = value.value.split("#");
    average01.value = isNaN(+indexArr[1]) ? 1 : +indexArr[1];
    average02.value = +indexArr[0];
    radioValue.value = 4;
  } else if (value.value.indexOf("L") > -1) {
    let indexArr = value.value.split("L");
    weekday.value = isNaN(+indexArr[0]) ? 1 : +indexArr[0];
    radioValue.value = 5;
  } else {
    checkboxList.value = value.value.split(",").map((i) => +i);
    radioValue.value = 6;
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
      value.value = "?";
    } else if (v === 3) {
      value.value = cycleTotal.value;
    } else if (v === 4) {
      value.value = averageTotal.value;
    } else if (v === 5) {
      value.value = weekdayCheck.value;
    } else if (v === 6) {
      value.value = checkboxString.value;
    } else {
      value.value = "*";
    }
  }
);

// 计算两个周期值
const cycleTotal = computed(() => {
  return (
    checkNumber(cycle01.value, 1, 7) + "-" + checkNumber(cycle02.value, 1, 7)
  );
});

watch(
  () => cycleTotal.value,
  (v) => (value.value = v)
);

// 计算平均用到的值
const averageTotal = computed(() => {
  return (
    checkNumber(average02.value, 1, 7) +
    "#" +
    checkNumber(average01.value, 1, 4)
  );
});
watch(
  () => averageTotal.value,
  (v) => (value.value = v)
);

// 最近的工作日（格式）
const weekdayCheck = computed(() => {
  return checkNumber(weekday.value, 1, 7) + "L";
});
watch(
  () => weekdayCheck.value,
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
.el-select {
  width: 150px;
}
</style>
