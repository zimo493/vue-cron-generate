<template>
  <el-dialog
    v-model="visible"
    title="Cron表达式生成器"
    width="1000"
    top="5vh"
    :before-close="cancel"
  >
    <div class="flex justify-center flex-col gap-12px">
      <el-tabs type="border-card" v-model="activeName" stretch>
        <el-tab-pane label="秒" name="second">
          <ElSecond v-model="crontabValue.second" />
        </el-tab-pane>
        <el-tab-pane label="分" name="min">
          <ElMin v-model="crontabValue.min" />
        </el-tab-pane>
        <el-tab-pane label="时" name="hour">
          <ElHour v-model="crontabValue.hour" />
        </el-tab-pane>
        <el-tab-pane label="日" name="day">
          <ElDay v-model="crontabValue.day" />
        </el-tab-pane>
        <el-tab-pane label="月" name="month">
          <ElMonth v-model="crontabValue.month" />
        </el-tab-pane>
        <el-tab-pane label="周" name="week">
          <ElWeek v-model="crontabValue.week" />
        </el-tab-pane>
        <el-tab-pane label="年" name="year">
          <ElYear v-model="crontabValue.year" />
        </el-tab-pane>
      </el-tabs>
      <el-card>
        <template #header>
          <div class="text-16px">
            <span>Cron 表达式</span>
          </div>
          <!-- <div class="text-16px flex justify-between items-center">
            <span>Cron 表达式</span>
            <el-text type="primary" size="large">
              {{ crontabValueString }}
            </el-text>
          </div> -->
        </template>
        <!-- <div class="crontabValue">
          <div v-for="(item, key, index) in crontabValue" :key="index">
            {{ map[key] }}：
            <el-tag v-if="item">
              {{ item }}
            </el-tag>
          </div>
        </div> -->

        <div class="popup-result">
          <table>
            <thead>
              <th v-for="item of tabTitles" width="80" :key="item">
                {{ item }}
              </th>
              <th>Cron 表达式</th>
            </thead>
            <tbody>
              <td v-for="(item, _, index) in crontabValue" :key="index">
                <span>{{ item }}</span>
              </td>
              <td>
                <span>{{ crontabValueString }}</span>
              </td>
            </tbody>
          </table>
        </div>
      </el-card>
      <el-card title="">
        <template #header>
          <div class="text-16px">
            <span>最近5次运行时间</span>
          </div>
        </template>
        <Result v-model="crontabValueString" />
      </el-card>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="handleSubmit"> 确定 </el-button>
        <el-button type="warning" @click="clearCron"> 重置 </el-button>
        <el-button @click="cancel">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts">
export default { name: "ElCronGen" };
</script>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", v?: string): void;
}>();

interface CrontabValue {
  second: string;
  min: string;
  hour: string;
  day: string;
  month: string;
  week: string;
  year: string;
}

const value = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});

defineExpose({
  open: () => {
    visible.value = true;
    crontabValue.value = getValue(); // 初始化值
  },
});

const tabTitles = ["秒", "分", "时", "日", "月", "周", "年"];

// 默认选中秒
const activeName = ref<keyof CrontabValue>("second");

// 初始值
const defaultValue: CrontabValue = {
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
      const obj: CrontabValue = {
        second: arr[0],
        min: arr[1],
        hour: arr[2],
        day: arr[3],
        month: arr[4],
        week: arr[5],
        year: arr[6] ? arr[6] : "",
      };
      return { ...obj };
    } else {
      return { ...defaultValue };
    }
  } else {
    return { ...defaultValue };
  }
};

const crontabValue = ref<CrontabValue>(getValue());

// const map: CrontabValue = {
//   second: "秒",
//   min: "分",
//   hour: "时",
//   day: "日",
//   month: "月",
//   week: "周",
//   year: "年",
// };

watch(
  () => crontabValue.value.day,
  (v) => {
    if (v !== "?") {
      crontabValue.value.week = "?";
    }
  }
);

watch(
  () => crontabValue.value.week,
  (v) => {
    if (v !== "?") {
      crontabValue.value.day = "?";
    }
  }
);

const crontabValueString = computed(() => {
  const { second, min, hour, day, month, week, year } = crontabValue.value;
  return `${second} ${min} ${hour} ${day} ${month} ${week}${
    year ? " " + year : ""
  }`;
});

const visible = ref<boolean>(false);

// 确定
const handleSubmit = () => {
  value.value = crontabValueString.value;
  cancel();
};

// 重置
const clearCron = () => {
  crontabValue.value = { ...defaultValue };
};

// 取消
const cancel = () => {
  activeName.value = "second";
  visible.value = false;
};
</script>
<style lang="scss" scoped>
.crontabValue {
  display: flex;
  & > div {
    flex: 1;
    white-space: nowrap;
  }
}

.popup-result {
  box-sizing: border-box;
  line-height: 24px;
  // padding: 10px;
  // border: 1px solid var(--el-border-color-light);
  position: relative;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
  table {
    text-align: center;
    width: 100%;
    margin: 0 auto;
    span {
      display: block;
      width: 100%;
      line-height: 30px;
      height: 30px;
      white-space: nowrap;
      overflow: hidden;
      border: 1px solid var(--el-border-color-light);
      box-sizing: border-box;
      border-radius: 4px;
    }
  }
}
</style>
