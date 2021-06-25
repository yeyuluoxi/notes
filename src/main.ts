import {createApp, App} from 'vue';
import Root from './App.vue';

const Vue: App<Element> = createApp(Root);

import router from './router';
import store from './store';
Vue.use(store).use(router);

import plugin from "@/components/common";
Vue.use(plugin);

import "@/assets/css/reset.scss"

Vue.mount('#app');
