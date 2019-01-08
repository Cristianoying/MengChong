import Vue from 'vue'
import Vuex from 'vuex'
import petlist from './petlist/index.js'
import login from './Login'
import mine from './mine'

Vue.use(Vuex);
let state = {}
let actions = {}
let mutations = {}
let getters = {}
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    petlist,
    login,
    mine
  }
})
export default store;
