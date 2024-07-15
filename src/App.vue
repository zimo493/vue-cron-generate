<template>
  <div class="container">
    <n-flex vertical class="mt-[10px]">
      <n-flex align="center" justify="space-between">
        <n-flex>
          <n-button type="primary" @click="router.push('/')">
            NaiveUi封装
          </n-button>
          <n-button type="info" @click="router.push('/el')">
            Element Plus 封装（Dialog方式）
          </n-button>
        </n-flex>
        <n-flex>
          <n-tooltip placement="bottom" trigger="hover">
            <template #trigger>
              <CommonWrapper
                @click="goPage('https://gitee.com/zimo493/vue-cron-generate')"
              >
                <nova-icon :size="24" icon="simple-icons:gitee" />
              </CommonWrapper>
            </template>
            <span>Gitee</span>
          </n-tooltip>
          <n-tooltip placement="bottom" trigger="hover">
            <template #trigger>
              <CommonWrapper
                @click="goPage('https://github.com/zimo493/vue-cron-generate')"
              >
                <nova-icon :size="24" icon="simple-icons:github" />
              </CommonWrapper>
            </template>
            <span>GitHub</span>
          </n-tooltip>
        </n-flex>
      </n-flex>
      <RouterView />
    </n-flex>
  </div>
  <div
    class="h-30px lh-30px fixed bottom-0 w-[100%] text-center font-Arial text-12px tracking-1px"
  >
    Copyright © 2023-2024
    <a
      class="text-inherit decoration-none"
      href="https://huzimo.vip"
      target="_blank"
    >
      huzimo.vip
    </a>
    All Rights Reserved.
    <a
      class="text-inherit decoration-none"
      href="https://beian.miit.gov.cn"
      target="_blank"
    >
      皖ICP备2023001156号
    </a>
  </div>
</template>
<script lang="ts" setup>
import router from "@/router";

const goPage = (url: string) => window.open(url);
</script>
