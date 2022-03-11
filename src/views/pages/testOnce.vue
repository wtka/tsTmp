<script setup lang="ts">
// import { useStore } from '@/store';
import { onMounted } from 'vue';
import BannerBox from '@/components/BannerBox.vue';
import MenuBox from '@/components/MenuBox.vue';

const props = defineProps({
  id: {
    type: String,
  },
});

// const store = useStore();
onMounted(() => {
  console.log('id = ', props.id);
  // let menuCollapse = computed(() => store.getters.menuCollapse);
  // // menuCollapse.value.setting = true;
  // menuCollapse = {
  //   indentity: false,
  //   query: false,
  //   updata: true,
  //   setting: true,
  // }
  // store.commit('setMenuCollapse', menuCollapse);
});
</script>

<!-- <script>
export default {
  components: {
    BannerBox,
    MenuBox,
  },
};
</script> -->

<template>
  <BannerBox></BannerBox>
  <div class="container-fluid mt-2">
    <div class="row">
      <div class="col-2">
        <MenuBox></MenuBox>
      </div>
      <div class="col-10"></div>
    </div>
  </div>
</template>
