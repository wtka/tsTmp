<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from '@/store';

const props = defineProps({
  mode: {
    type: String,
  },
});
const store = useStore();

onMounted(() => {
  store.commit('setMode', props.mode);
});
</script>

<template>
  <div class="container">
    <button class="btn-primary">下一頁</button>
  </div>
</template>
