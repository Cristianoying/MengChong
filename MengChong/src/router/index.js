import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Community from "@/components/community/community"
import Petlist from "@/components/petlist/petlist"
import Mine from "@/components/mine/mine"
import Login from "@/components/login/login"
import Shopcart from "@/components/shopcart/shopcart"
import Publish from "@/components/publish/publish"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
    	path:'/home',
    	name:'home',
      	component: Home
    },
    {
    	path:'/community',
    	name:'community',
    	component:Community
    },
    {
    	path:'/petlist',
    	name:'petlist',
    	component:Petlist
    },
    {
    	path:'/mine',
    	name:'mine',
    	component:Mine
    },
    {
    	path:'/login',
    	name:"login",
    	component:Login
    },
    {
    	path:'/shopcart',
    	name:'shopcart',
    	component:Shopcart
    },
    {
    	path:'/publish',
    	name:'publish',
    	component:Publish

    }
  ]
})
