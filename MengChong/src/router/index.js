import Vue from 'vue'
import Router from 'vue-router'
import petlist from './petlist';
import mine from './mine';
import home from './home';
import shopcart from './shopcart';
import community from './community';
import publish from './publish';
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    ...home,
    ...community,
    ...petlist,
    ...mine,
    ...publish,
...shopcart
  ]
})
