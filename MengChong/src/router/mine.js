import Mine from "@/components/mine/mine"
import Login from "@/components/login/login"


import UserIndex from '@/components/login/loginIndex'
import LoginUser from '@/components/login/loginuser.vue'
import Register from '@/components/login/register'
import MineIndex from "@/components/mine/mineIndex"
import MineSetUp from "@/components/mine/mineSetUp"
import Personalinfo from '@/components/mine/personalinfo'
import Person from '@/components/mine/person'
import PersonPage from '@/components/mine/personalPage'
import PersonalPage_index_d from '@/components/mine/personalPage_index_d'
import accountSecurity from '@/components/mine/setUp/Account_security/account_security'
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
import OrderDetail from '@/components/mine/setUp/orderlist_d/order_detail'
import Leader from '@/components/login/leader'
import Share_d from '@/components/mine/setUp/share/index'
import Receive_d from '@/components/mine/setUp/receive_d/index'



let mine = [
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
      },
      {
        path: 'person',
        name: "person",
        component: Person,
      },
      {
        path: '/personalPage_index_d',
        name: 'personalPage_index_d',
        component: PersonalPage_index_d,
        redirect: '/personalPage_index_d/personpage',
        children: [{
          path: 'personpage',
          name: 'personpage',
          component: PersonPage
        }]
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
            path:"receive_d",
            name:"receive_d",
            component:Receive_d
          },
        {
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
    },
    {
      path: 'like_index_d',
      name: 'like_index_d',
      component: Like_index_d,
      redirect: 'like_index_d/like_d',
      children: [{
        path: 'like_d',
        name: 'like_d',
        component: Like_d
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
        name: 'order_index_d',

      }, {
        path: 'order_detail_d',
        name: 'order_detail',
        component: OrderDetail,
      }]
    },
      {
        path:"share_d",
        name:"share_d",
        component:Share_d
      }
    ]
  },
  {
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

  },


  {
    name: "leader",
    path: '/leader',
    component: Leader
  }
]

export default mine;
