import { createApp } from 'vue';
import 'bootstrap';
import { store, storeKey } from '@/store';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(store, storeKey);
app.mount('#app');
