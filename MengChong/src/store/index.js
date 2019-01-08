import Vue from 'vue'
import Vuex from 'vuex'
import petlist from './petlist/index.js'
import login from './Login'
import mine from './mine'
<<<<<<< HEAD
<<<<<<< HEAD
import Home_w from './home'
=======
import select from './selected'
>>>>>>> 5e68fa2eef25732f8947e5685a67076fdf6ad8ec

=======
import select from "./selectedata";
>>>>>>> yangbo
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
    mine,
<<<<<<< HEAD
<<<<<<< HEAD
    Home_w
=======
    select
>>>>>>> 5e68fa2eef25732f8947e5685a67076fdf6ad8ec
=======
    select
>>>>>>> yangbo
  }
})
export default store;
