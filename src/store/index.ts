import { createStore } from 'vuex'
import { IDaily } from "@/data/daily/base";

export interface stateProp{
  daily: Array<IDaily>
}

export default createStore<stateProp>({
  state: {
    daily:[]
  },
  mutations: {
    setDaily(state: stateProp, option: Array<IDaily>){
      state.daily = option;
    }
  },
  actions: {
  },
  modules: {
  }
})
