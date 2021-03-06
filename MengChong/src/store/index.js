import Vue from 'vue'
import Vuex from 'vuex'
import petlist from './petlist/index.js'
import login from './Login'
import mine from './mine'
import Home_w from './home'
import select from "./selectedata"
import publish from './publish'
import ShopCart from './shopcart/shopcart'


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
    ShopCart,
    petlist,
    login,
    mine,
    select,
    Home_w,
    publish
  }
})
export default store;
