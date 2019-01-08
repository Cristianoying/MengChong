import Vue from 'vue'
import Vuex from 'vuex'
import select from "./selected"
Vue.use(Vuex);



const store=new Vuex.Store({
  modules:{
    select
  }
})
export default store;
