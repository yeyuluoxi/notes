import { createApp } from 'vue';
import App from './App.vue';

const Vue = createApp(App);

import router from './router';
import store from './store';
Vue.use(store).use(router);

import plugin from "@/components/common";
Vue.use(plugin);

import "@/assets/css/reset.css"

Vue.mount('#app');
