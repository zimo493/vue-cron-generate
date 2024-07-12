<template>
  <el-form>
    <el-form-item>
      <el-radio v-model="radioValue" :label="1">
        每日，允许的通配符 [, - * ? / L W]
      </el-radio>
    </el-form-item>

    <el-form-item>
      <el-radio v-model="radioValue" :label="2"> 不指定 </el-radio>
    </el-form-item>

    <el-form-item>
      <el-radio v-model="radioValue" :label="3">
        周期从
        <el-input-number
          class="m-4"
          controls-position="right"
          v-model="cycle01"
          :min="1"
          :max="30"
          @focus="radioChange(3)"
        />到
        <el-input-number
          class="m-4"
          controls-position="right"
          v-model="cycle02"
          :min="cycle01 ? cycle01 + 1 : 2"
          :max="31"
          @focus="radioChange(3)"
        />
        日
      </el-radio>
    </el-form-item>

    <el-form-item>
      <el-radio v-model="radioValue" :label="4">
        周期从
        <el-input-number
          class="m-4"
          controls-position="right"
          v-model="average01"
          :min="1"
          :max="30"
          @focus="radioChange(4)"
        />
        号开始，每
        <el-input-number
          class="m-4"
          controls-position="right"
          v-model="average02"
          :min="1"
          :max="31 - average01 || 1"
          @focus="radioChange(4)"
        />
        日执行一次
      </el-radio>
    </el-form-item>

    <el-form-item>
      <el-radio v-model="radioValue" :label="5">
        每个月
        <el-input-number
          class="m-4"
          controls-position="right"
          v-model="workday"
          :min="1"
          :max="31"
          @focus="radioChange(5)"
        />
        号最近的那个工作日
      </el-radio>
    </el-form-item>

    <el-form-item>
      <el-radio v-model="radioValue" :label="6"> 本月最后一天 </el-radio>
    </el-form-item>

    <el-form-item class="start">
      <el-radio v-model="radioValue" :label="7" style="margin-right: 16px">
        指定日
      </el-radio>
      <div class="flex">
        <el-checkbox-group
          v-model="checkboxList"
          class="grid grid-cols-12 justify-items-stretch"
        >
          <el-checkbox
            v-for="item in 31"
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
export default { name: "ElDay" };
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
const workday = ref<number>(1);
const cycle01 = ref<number>(1);
const cycle02 = ref<number>(2);
const average01 = ref<number>(1);
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
  } else if (value.value == "?") {
    radioValue.value = 2;
  } else if (value.value.indexOf("-") > -1) {
    let indexArr = value.value.split("-");
    cycle01.value = isNaN(+indexArr[0]) ? 0 : +indexArr[0];
    cycle02.value = +indexArr[1];
    radioValue.value = 3;
  } else if (value.value.indexOf("/") > -1) {
    let indexArr = value.value.split("/");
    average01.value = isNaN(+indexArr[0]) ? 0 : +indexArr[0];
    average02.value = +indexArr[1];
    radioValue.value = 4;
  } else if (value.value.indexOf("W") > -1) {
    let indexArr = value.value.split("W");
    workday.value = isNaN(+indexArr[0]) ? 0 : +indexArr[0];
    radioValue.value = 5;
  } else if (value.value === "L") {
    radioValue.value = 6;
  } else {
    checkboxList.value = value.value.split(",").map((i) => +i);
    radioValue.value = 7;
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
      value.value = workdayCheck.value;
    } else if (v === 6) {
      value.value = "L";
    } else if (v === 7) {
      value.value = checkboxString.value;
    } else {
      value.value = "*";
    }
  }
);

// 计算两个周期值
const cycleTotal = computed(() => {
  const cycle1 = checkNumber(cycle01.value, 1, 30);
  const cycle2 = checkNumber(cycle02.value, cycle1 ? cycle1 + 1 : 2, 31);
  return cycle1 + "-" + cycle2;
});
watch(
  () => cycleTotal.value,
  (v) => (value.value = v)
);

// 计算平均用到的值
const averageTotal = computed(() => {
  const average1 = checkNumber(average01.value, 1, 30);
  const average2 = checkNumber(average02.value, 1, 31 - average1 || 0);
  return average1 + "/" + average2;
});
watch(
  () => averageTotal.value,
  (v) => (value.value = v)
);

// 计算工作日格式
const workdayCheck = computed(() => {
  return checkNumber(workday.value, 1, 31) + "W";
});
watch(
  () => workdayCheck.value,
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
