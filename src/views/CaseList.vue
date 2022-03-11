<script setup lang="ts">
import { reactive, watch, onMounted } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import axios from 'axios';
import BannerBox from '@/components/BannerBox.vue';

const props = defineProps({
  mode: String,
});

const store = useStore();
const router = useRouter();
const queryData = reactive({
  dateStart: '',
  dateEnd: '',
  niid: '',
  nicuser: '',
  cases: [
    {
      checked: true,
      modify: '修改',
      date: '20220207',
      option: '新進件',
      actype: '台幣帳號',
      id: 'A123456789',
      name: '王大明',
      cuser: '002BK1',
      hint: '個人戶',
      lock: '編輯中(002BK1王大明)',
    },
    {
      checked: true,
      modify: '修改',
      date: '20220207',
      option: '新進件',
      actype: '台幣帳號',
      id: 'A234567890',
      name: '陳雲',
      cuser: '002BK1',
      hint: '個人戶',
      lock: '編輯中(002BK1王大明)',
    },
  ],
});

// 監聽日期
watch(
  () => queryData.dateStart,
  (newValue, oldValue) => {
    console.log('date', newValue, oldValue);
  },
);

// 打開案件
function openCase(id: string) {
  console.log(id);
  console.log(props.mode);
  store.commit('setMode', props.mode);
  router.push({
    path: '/testone',
    query: {id: id},
  });
}

// 取得上一個月日期
function getPreviousMonth(date: string[]) {
  // 年
  let year = date[0];
  let tmpYear = parseInt(year);

  // 月
  let month = date[1];
  let tmpMonth = parseInt(month) - 1;
  if (tmpMonth == 0) {
    tmpYear = parseInt(year) - 1;
    tmpMonth = 12;
  } else if (tmpMonth < 10) {
    month = '0' + tmpMonth.toString();
  }

  // 日
  let day = date[2];
  let tmpDay = parseInt(day);
  let nDays = new Date(tmpYear, tmpMonth, 0).getDate();
  if (tmpDay > nDays) {
    tmpDay = nDays;
  }

  return year + '-' + month + '-' + day;
}

// 查詢案件
async function queryCase() {
  const resp = await axios
    .get('https://randomuser.me/api/')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  // /** @type {Document} */
  console.log(resp);
}

onMounted(() => {
  // 初始化日期
  const currentDate = new Date().toISOString().slice(0, 10);
  queryData.dateStart = getPreviousMonth(currentDate.split('-'));
  queryData.dateEnd = currentDate;

  // 查詢案件
  queryCase();
});
</script>

<template>
<BannerBox></BannerBox>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <h1 class="fs-1 text-center">案件清單-案件數</h1>
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-md-3">
        <label for="dateStart" class="form-label text-start w-100"
          >開戶日期 起</label
        >
        <div class="input-group">
          <input
            type="date"
            class="form-control"
            id="dateStart"
            v-model="queryData.dateStart"
          />
        </div>
      </div>
      <div class="col-12 col-md-3">
        <label for="dateEnd" class="form-label text-start w-100"
          >開戶日期 迄</label
        >
        <div class="input-group">
          <input
            type="date"
            class="form-control"
            id="dateEnd"
            v-model="queryData.dateEnd"
          />
        </div>
      </div>
      <div class="col-12 col-md-3">
        <label for="niid" class="form-label text-start w-100">客戶 ID</label>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            id="niid"
            v-model="queryData.niid"
          />
        </div>
      </div>
      <div class="col-12 col-md-3">
        <label for="nicuser" class="form-label text-start w-100"
          >開戶經辦編號</label
        >
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            id="nicuser"
            v-model="queryData.nicuser"
          />
        </div>
      </div>
    </div>

    <div class="row row-cols-2 row-cols-md-4 m-3">
      <div class="col">
        <button type="button" class="ni-btn m-3">查詢</button>
      </div>
      <div class="col">
        <button type="button" class="ni-btn m-3">解除鎖定</button>
      </div>
      <div class="col">
        <button type="button" class="ni-btn m-3">刪除</button>
      </div>
      <div class="col">
        <button type="button" class="ni-btn m-3">重設</button>
      </div>
    </div>

    <div id="no-more-tables">
      <table
        class="table table-borderless table-hover fs-md-3 fs-lg-1 text-center align-middle"
      >
        <thead class="bg-danger text-white">
          <tr>
            <th>刪除/解鎖</th>
            <th>操作</th>
            <th>日期</th>
            <th>操作項目</th>
            <th>交易類型</th>
            <th>客戶ID</th>
            <th>客戶姓名</th>
            <th>經辦人員</th>
            <th>備註</th>
            <th>鎖定狀態</th>
            <th>進入案件</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in queryData.cases" :key="item.id">
            <td data-title="刪除/解鎖">
              <input type="checkbox" class="ch-lg" :checked="item.checked" />
            </td>
            <td data-title="操作">
              <select>
                <option value="">{{ item.modify }}</option>
              </select>
            </td>
            <td data-title="日期">{{ item.date }}</td>
            <td data-title="操作項目">{{ item.option }}</td>
            <td data-title="交易類型">{{ item.actype }}</td>
            <td data-title="客戶ID">{{ item.id }}</td>
            <td data-title="客戶姓名">{{ item.name }}</td>
            <td data-title="經辦人員">{{ item.cuser }}</td>
            <td data-title="備註">{{ item.hint }}</td>
            <td data-title="鎖定狀態">{{ item.lock }}</td>
            <td data-title="進入案件" @click="openCase(item.id)">
              <button type="button" class="ni-btn">進入案件</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
table,
tr,
td {
  border: 1px solid gainsboro;
}
</style>
