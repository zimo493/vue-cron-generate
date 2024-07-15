<template>
  <div class="container">
    <n-flex vertical class="mt-[10px]">
      <n-flex>
        <n-button type="primary" @click="router.push('/')">
          NaiveUi封装
        </n-button>
        <n-button type="info" @click="router.push('/el')">
          Element Plus 封装（Dialog方式）
        </n-button>
      </n-flex>
      <RouterView />
    </n-flex>
  </div>
</template>
<script lang="ts" setup>
import router from "@/router";
</script>
