import Vue from 'vue'
import Vuex from 'vuex'
import petlist from './petlist/index.js'
Vue.use(Vuex);
let state={

}
let actions={

}
let mutations={

}
let getters={

}
const store=new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
		petlist
  }
})
export default store;
