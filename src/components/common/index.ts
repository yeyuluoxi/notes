
import yuCard from "./card.vue";
import { App } from "vue";

const plugin = (Vue: App<Element>) => {
    Vue.component("YuCard",yuCard);
}

export default plugin;
