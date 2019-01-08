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


import Publicvideo from "@/components/publish/video/publicvideo"
import Publictrends from "@/components/publish/trends/publictrends"
import Publicarticle from "@/components/publish/article/publicarticle"

import Cart from '@/components/shopcart/cart_c/Cart'
import Publish from "@/components/publish/public/publish"
import Submitorder from '@/components/shopcart/submitOrder_c/submitOrder'



Vue.use(Router)

//petlist下的二级路由
import Doglist from "@/components/petlist/components/petlist_list/dog_list"
import Catlist from "@/components/petlist/components/petlist_list/cat_list"
import Foodlist from "@/components/petlist/components/petlist_list/food_list"

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
            }, {
                path: '/petlist/catlist',
                name: 'catlist',
                component: Catlist,
            }, {
                path: '/petlist/foodlist',
                name: 'foodlist',
                component: Foodlist,
            }],
            meta: {
                isFooter: true
            }
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
            component: Shopcart,

            children: [
                {
                    path: '/',
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
