<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '@/store';

const store = useStore();
const menuCollapse = computed(() => store.state.menuCollapse);
</script>

<template>
  <div class="bg-dark">
    <nav>
      <ul class="d-flex flex-column">
        <li class="mt-2 mb-2">
          <span href="#indentity" data-bs-toggle="collapse" role="button"
            >一、身分認證</span
          >
          <ul
            :class="{ show: menuCollapse.indentity }"
            class="collapse ms-2"
            id="indentity"
          >
            <li>
              <a href="#" id="elecDoc">使用電子文件同意書</a>
            </li>
            <li>
              <a href="#" id="fstApplicantDoc">申請人第一證件1</a>
            </li>
            <li>
              <a href="#" id="sub_FstApplicantDoc">申請人第一證件2</a>
            </li>
            <li>
              <a href="#">申請人第二證件</a>
            </li>
            <li>
              <a href="#">選擇業務類別</a>
            </li>
            <li>
              <a href="#">身分證檢核-正面</a>
            </li>
            <li>
              <a href="#">身分證檢核-背面</a>
            </li>
            <li>
              <a href="#">確認條款</a>
            </li>
          </ul>
        </li>
        <li class="mb-2">
          <span href="#query" data-bs-toggle="collapse" role="button"
            >二、開戶前查詢</span
          >
          <ul
            :class="{ show: menuCollapse.query }"
            class="collapse ms-2"
            id="query"
          >
            <li>
              <a href="#">開戶前查詢</a>
            </li>
            <li>
              <a href="#">稅務聲明-CRS</a>
            </li>
            <li>
              <a href="#">稅務聲明-FATCA</a>
            </li>
          </ul>
        </li>
        <li class="mb-2">
          <span href="#updata" data-bs-toggle="collapse" role="button"
            >三、資料登錄</span
          >
          <ul
            :class="{ show: menuCollapse.updata }"
            class="collapse ms-2"
            id="updata"
          >
            <li>
              <a href="#">客戶基本資料1</a>
            </li>
            <li>
              <a href="#">客戶基本資料2</a>
            </li>
            <li>
              <a href="#">申請項目</a>
            </li>
            <li>
              <a href="#">聯徵及共同行銷確認</a>
            </li>
            <li>
              <a href="#">帳號給號</a>
            </li>
            <li>
              <a href="#">簽署開戶申請書</a>
            </li>
            <li>
              <a href="#">作業往來檢核表1</a>
            </li>
            <li>
              <a href="#">作業往來檢核表2</a>
            </li>
          </ul>
        </li>
        <li class="mb-2">
          <span href="#setting" data-bs-toggle="collapse" role="button"
            >四、開戶設定</span
          >
          <ul
            :class="{ show: menuCollapse.setting }"
            class="collapse ms-2"
            id="setting"
          >
            <li>
              <a href="#">人像拍攝-申請人</a>
            </li>
            <li>
              <a href="#">介接 Oracle KYC 系統</a>
            </li>
            <li>
              <a href="#">開戶前確認</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
ul {
  color: white;
  padding-left: 1rem;
  list-style: none;
}
a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 0.5rem;

  &:hover {
    color: red;
  }
}
</style>
