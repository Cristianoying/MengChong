import Vue from 'vue'
import Vuex from 'vuex'
import login from './Login'
import mine from './mine'
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
      login,
      mine
  }
})
export default store;
