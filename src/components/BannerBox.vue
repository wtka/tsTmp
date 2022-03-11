<script setup lang="ts">
defineProps({
  uid: {
    type: String,
    default: null,
  },
});

defineExpose({
  doLogout,
});

function doLogout() {
  alert('登出');
}
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <!-- 左右留邊的容器 -->
    <div class="container-fluid">
      <!-- 公司商標及名稱 -->
      <div class="navbar-brand d-flex">
        <img src="@/assets/logo.png" width="50" height="50" alt="logo" />
        <div class="ms-2 my-auto lh-1">
          <span class="fs-4">影像電腦</span>
          <br />
          <span class="fs-6">NewImage Corporation</span>
        </div>
      </div>
      <!-- 系統名稱 -->
      <div class="collapse navbar-collapse">
        <span class="navbar-text mx-2 fs-3">開戶影像及文件系統</span>
      </div>
      <!-- 登出按鈕及使用者代號 -->
      <div class="d-flex">
        <span class="navbar-text text-danger" role="button" @click="doLogout()">登出</span>
        <span class="navbar-text ms-2">|</span>
        <span class="navbar-text ms-2">使用者代號: {{ uid }}</span>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
</style>
