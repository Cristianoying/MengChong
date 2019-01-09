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
import Personalinfo from '@/components/mine/personalinfo'
import Person from '@/components/mine/person'
import PersonPage from '@/components/mine/personalPage'
import accountSecurity from '@/components/mine/setUp/Account_security/account_security'
import Phone_d from '@/components/mine/setUp/Account_security/phone'
import accountSecurityIndex from '@/components/mine/setUp/Account_security/account_security_index'
import password_d from '@/components/mine/setUp/Account_security/password'
import Comment from '@/components/mine/setUp/comment/comment_d'



import Publicvideo from "@/components/publish/video/publicvideo"
import Publictrends from "@/components/publish/trends/publictrends"
import Publicarticle from "@/components/publish/article/publicarticle"

import Cart from '@/components/shopcart/cart_c/Cart'
import Publish from "@/components/publish/public/publish"
import Submitorder from '@/components/shopcart/submitOrder_c/submitOrder'



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
                    path: 'minesetup',
                    name: "setUp",
                    component: MineSetUp,
                    redirect:"minesetup/personalinfo",
                    children:[{
                        path:'personalinfo',
                        name:"personalinfo",
                        component:Personalinfo
                    },{
                      path:'person',
                      name:"person",
                      component:Person,
                    },{
                      path:'personpage',
                      name:'personpage',
                      component:PersonPage
                    },
                      {
                        path:'account_security',
                        name:"account_security",
                        component:accountSecurity,
                        redirect:'account_security/account_security_index',
                        children:[{
                          path:'account_security_index',
                          component:accountSecurityIndex,
                          name:'account_security_index'
                        },
                          {
                            path:'phone',
                            name:'phone_d',
                            component:Phone_d,
                          },{
                          path:'password_d',
                            name:'password_d',
                            component:password_d,
                          }
                        ]
                      }]
                },
              {
                path:'comment_d',
                name:'comment_d',
                component:Comment,
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
            component: Shopcart,
            redirect:"/shopcart/cart",
            children: [
                {
                    path: 'cart',
                    name: 'cart',
                    component: Cart
                },
                {
                    path: 'submitorder',
                    name: 'submitorder',
                    component: Submitorder
                }
            ]
        },
        {
            path: '/publish',
            name: 'publish',
            component: Publish

        },
        {
            path: '/publish/trends',
            name: 'trends',
            component: Publictrends
        },
        {
            path: '/publish/video',
            name: 'video',
            component: Publicvideo
        },
        {
            path: '/publish/article',
            name: 'article',
            component: Publicarticle
        }
      ]
})
