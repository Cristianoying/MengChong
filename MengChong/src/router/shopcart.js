import Shopcart from "@/components/shopcart/shopcart"
import Cart from '@/components/shopcart/cart_c/Cart'

import Submitorder from '@/components/shopcart/submitOrder_c/submitOrder'
import Changereceplace from '@/components/shopcart/submitOrder_c/changereceplace_c'

let shopcart = [
  {
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
    },
    {
      path: 'changereceplace',
      name: 'changereceplace',
      component: Changereceplace
    }

    ]
  },
]
export default shopcart;
