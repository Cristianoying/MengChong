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
import CommentIndex from '@/components/mine/setUp/comment/comment_index_d'
import Like_index_d from "@/components/mine/setUp/like_d/like_index_d"
import Like_d from '@/components/mine/setUp/like_d/like_d'
import PetInfo_d from '@/components/mine/setUp/petinfo_d/petinfo_d'
import PetInfo_Index_d from '@/components/mine/setUp/petinfo_d/petinfo_index_d'
import PetFriendList_d from '@/components/mine/setUp/petfriendlist/petfriendlist_d'
import PetFriendList_Index_d from '@/components/mine/setUp/petfriendlist/petfriendlist_index_d'
import Order_d from '@/components/mine/setUp/orderlist_d/order_d'
import Order_index_d from "@/components/mine/setUp/orderlist_d/order_index_d"



import Publicvideo from "@/components/publish/video/publicvideo"
import Publictrends from "@/components/publish/trends/publictrends"
import Publicarticle from "@/components/publish/article/publicarticle"

import Cart from '@/components/shopcart/cart_c/Cart'
import Publish from "@/components/publish/public/publish"
import Submitorder from '@/components/shopcart/submitOrder_c/submitOrder'


Vue.use(Router)
    //petlist下搜索路由
import Search_b from "@/components/petlist/components/searchpage.vue"
//搜索的商品列表
import Search_list from "@/components/petlist/components/search_list.vue"
//petlist下物品详情路由
import Goods_details_b from "@/components/petlist/components/goods_details.vue"
//支付成功
import Pay_success from "@/components/petlist/components/pay_success.vue"
//petlist下的二级路由
import Doglist from "@/components/petlist/components/petlist_list/dog_list"
import Catlist from "@/components/petlist/components/petlist_list/cat_list"
import Foodlist from "@/components/petlist/components/petlist_list/food_list"
import Goods_intro from "@/components/petlist/components/goods_details/goods_intro.vue"
import Goods_detailed from "@/components/petlist/components/goods_details/goods_detailed.vue"

import Home_topic_w from "@/components/home/topicList.vue"
import topicTitle_w from "@/components/home/topicTitle.vue"
export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                isFooter: true
            },
        },
        {
            /*由首页转跳到话题列表详情页*/
            path: '/home/topic_w/:t_w_id',
            name: "home_topic_w",
            component: Home_topic_w,
        },
        {
            // 有话题列表页 转跳到 某一个话题页
            path: "/topicTitle_w/:topicTitleId",
            name: "topicTitle_w",
            component: topicTitle_w,
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
                isFooter: false,
                isBack: true
            },
        },
        {
            path: '/search_list',
            component: Search_list,
            name: "search_list",
            meta: {
                isFooter: false,
                isBack: true
            },
        },
        {
            path: '/pay_success',
            component: Pay_success,
            name: "pay_success",
            meta: {
                isFooter: false
            },
        },
        {
            path: '/goods_details_b',
            component: Goods_details_b,
            redirect: 'goods_details_b/goods_intro',
            name: "goods_details_b",
            meta: {
                isFooter: false
            },
            children: [{
                path: '/goods_details_b/goods_intro',
                component: Goods_intro,

                name: "goods_intro",
                meta: {
                    isFooter: false
                }
            }, {
                path: '/goods_details_b/goods_detailed',
                component: Goods_detailed,
                name: "goods_detailed",
                meta: {
                    isFooter: false
                }
            }]
        },
        {
            path: "/petinfo_d",
            name: 'petinfo_d',
            component: PetInfo_d,
            redirect: '/petinfo_d/petinfo_index_d',
            children: [{
                path: 'petinfo_index_d',
                name: 'petinfo_index_d',
                component: PetInfo_Index_d
            }]
        },
        {
            path: '/petfriend_d',
            name: 'petfriend_d',
            component: PetFriendList_d,
            redirect: '/petfriend_d/petfriend_index_d',
            children: [{
                path: 'petfriend_index_d',
                name: 'petfriend_index_d',
                component: PetFriendList_Index_d
            }]
        },
        {
            path: "/order_d",
            name: 'order_d',
            component: Order_d,
            redirect: '/order_d/order_index_d',
            children: [{
                path: 'order_index_d',
                component: Order_index_d,
                name: 'order_index_d'
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
            children: [{
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
                    redirect: "minesetup/personalinfo",
                    children: [{
                            path: 'personalinfo',
                            name: "personalinfo",
                            component: Personalinfo
                        }, {
                            path: 'person',
                            name: "person",
                            component: Person,
                        }, {
                            path: 'personpage',
                            name: 'personpage',
                            component: PersonPage
                        },
                        {
                            path: 'account_security',
                            name: "account_security",
                            component: accountSecurity,
                            redirect: 'account_security/account_security_index',
                            children: [{
                                    path: 'account_security_index',
                                    component: accountSecurityIndex,
                                    name: 'account_security_index'
                                },
                                {
                                    path: 'phone',
                                    name: 'phone_d',
                                    component: Phone_d,
                                }, {
                                    path: 'password_d',
                                    name: 'password_d',
                                    component: password_d,
                                }
                            ]
                        }
                    ]
                },
                {
                    path: 'comment_index',
                    name: 'comment_index',
                    component: CommentIndex,
                    redirect: 'comment_index/comment_d',
                    children: [{
                        path: 'comment_d',
                        name: 'comment_d',
                        component: Comment,
                    }]
                }, {
                    path: 'like_index_d',
                    name: 'like_index_d',
                    component: Like_index_d,
                    redirect: 'like_index_d/like_d',
                    children: [{
                        path: 'like_d',
                        name: 'like_d',
                        component: Like_d
                    }]
                }
            ]
        }, {
            path: '/login',
            component: Login,
            meta: {
                isFooter: false
            },
            children: [{
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

        }, {
            path: '/shopcart',
            name: 'shopcart',
            component: Shopcart,
            redirect: "/shopcart/cart",
            children: [{
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
        }, {
            path: '/publish',
            name: 'publish',
            component: Publish

        }, {
            path: '/publish/trends',
            name: 'trends',
            component: Publictrends
        }, {
            path: '/publish/video',
            name: 'video',
            component: Publicvideo
        }, {
            path: '/publish/article',
            name: 'article',
            component: Publicarticle
        }
    ]
})
