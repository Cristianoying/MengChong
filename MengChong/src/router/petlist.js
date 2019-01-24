import Petlist from "@/components/petlist/petlist"
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


let petlist = [
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
      isBack: false
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
  }
]

export default petlist;
