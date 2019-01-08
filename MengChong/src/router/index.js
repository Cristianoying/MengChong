import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Community from "@/components/community/community"
import Petlist from "@/components/petlist/petlist"
import Mine from "@/components/mine/mine"
import Login from "@/components/login/login"
import Shopcart from "@/components/shopcart/shopcart"

import UserIndex from '@/components/login/loginIndex'
import LoginUser from '@/components/login/loginuser.vue'
import Register from '@/components/login/register'
import MineIndex from "@/components/mine/mineIndex"
import MineSetUp from "@/components/mine/mineSetUp"


import Publish from "@/components/publish/public/publish"
import Publicvideo from "@/components/publish/video/publicvideo"
import Publictrends from "@/components/publish/trends/publictrends"
import Publicarticle from "@/components/publish/article/publicarticle"

Vue.use(Router)
//petlist下搜索路由
import Search_b from "@/components/petlist/components/searchpage.vue"
//petlist下物品详情路由
import Goods_details_b from "@/components/petlist/components/goods_details.vue"
//petlist下的二级路由
import Doglist from "@/components/petlist/components/petlist_list/dog_list"
import Catlist from "@/components/petlist/components/petlist_list/cat_list"
import Foodlist from "@/components/petlist/components/petlist_list/food_list"
import Goods_intro from "@/components/petlist/components/goods_details/goods_intro.vue"
import Goods_detailed from "@/components/petlist/components/goods_details/goods_detailed.vue"

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        isFooter: true
      }
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
      meta: {
        isFooter: true
      }
    },
    {
      path: '/petlist',
      name: 'petlist',
      redirect: '/petlist/doglist',
      component: Petlist,
      children: [{
        path: '/petlist/doglist',
        name: 'doglist',
        component: Doglist,
        meta: {
        isFooter: true
      	}
      }, {
        path: '/petlist/catlist',
        name: 'catlist',
        component: Catlist,
        meta: {
        isFooter: true
      	}
      }, {
        path: '/petlist/foodlist',
        name: 'foodlist',
        component: Foodlist,
        meta: {
        isFooter: true
     		}
      }],
      meta: {
        isFooter: true
      }
    },
    {
   		path: '/search_b',
      component: Search_b,
      name: "search_b",
      meta: {
        isFooter: false
      },
    },
    {
   		path: '/goods_details_b',
      component: Goods_details_b,
      redirect:'goods_details_b/goods_intro',
      name: "goods_details_b",
      meta: {
        isFooter: false
      },
      children:[{
      	path: '/goods_details_b/goods_intro',
	      component: Goods_intro,

	      name: "goods_intro",
	      meta: {
	        isFooter: false
	      }
      },{
      	path: '/goods_details_b/goods_detailed',
	      component: Goods_detailed,
	      name: "goods_detailed",
	      meta: {
	        isFooter: false
	      }
      }]
    },
    {
      path: '/mine',
      component: Mine,
      name: "mine",
      redirect: '/mine/mineIndex',
      meta: {
        isFooter: true
      },
      children: [
        {
          path: "mineIndex",
          name: 'mineIndex',
          component: MineIndex,
          meta: {
            isFooter: true,
          }
        },
        {
          path: '/minesetup',
          name: "setUp",
          component: MineSetUp
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isFooter: false
      },
      children: [
        {
          path: "/",
          name: "userIndex",
          component: UserIndex
        },
        {
          path: "loginuser",
          name: "userlogin",
          component: LoginUser
        },
        {
          path: "register",
          name: "register",
          component: Register
        }
      ]
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish

    },
    {
    	path:'/publish/trends',
    	name:'trends',
    	component:Publictrends
    },
    {
    	path:'/publish/video',
    	name:'video',
    	component:Publicvideo
    },
    {
    	path:'/publish/article',
    	name:'article',
    	component:Publicarticle
    }


  ]
})
