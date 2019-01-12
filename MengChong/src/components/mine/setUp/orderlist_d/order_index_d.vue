<template>
<div id="order_index_d">
  <mt-header title="全部订单" class="order_header_d">
    <router-link :to="{name:'mine'}" slot="left" class="order_header_set_up_d">&lt;</router-link>
  </mt-header>
  <div class="order_header_swapper_d" ref="order_header_swapper_d">
    <div class="order_header_content_d">
      <ul class="order_header_ul_d">
        <li class="order_header_li_d" v-for="(item,index) in orderlist_d" @click="goOrderDetail_d(item.orderId)">
          <div class="shopname_d">
            淘宠官方旗舰店
          </div>
          <ul class="order_header_li_ul_d">
            <li class="order_header_li_li_d" v-for="(ite,ind) in item.goodsList">
              <div class="order_header_li_image_d">
                <img :src="ite.goodsPhoto" alt="">
              </div>
              <div class="order_header_li_name_d">
                <p>{{ite.goodsName}}</p>
              </div>
              <div class="order_header_li_price_d">
                <p>{{ite.goodsPrice |money_d}}</p>
                <p>{{ite.goodsCount | goodsCount_d}}</p>
              </div>
              <div class="order_header_li_money_d">
                <p>小计：{{ite.goodsCount |Subtotal(ite.goodsPrice)}}</p>
              </div>
            </li>
          </ul>
          <div class="order_header_total_d">
                  总计：{{item.goodsList|total}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Vuex from 'vuex'
    export default {
        name: "order_index_d",
      created(){
        this.$store.dispatch("mine/getOrderListActions_d");
      },
      computed:{
        ...Vuex.mapState({
          orderlist_d:state=>state.mine.orderlist_d
        })
      },
      mounted(){
          let Bscroll = new BScroll(this.$refs.order_header_swapper_d,{
            click:true
          })
      },
      filters:{
          money_d(money){
            return '￥'+money;
          },
        goodsCount_d(count){
            return '×'+count;
        },
        Subtotal(num,p){
            return num*p+'元'
        },
        total(m){
            var money=0
            for(var i=0;i<m.length;i++){
              money=money+m[i].goodsCount*m[i].goodsPrice
            }
          return money
        }
      },
      methods:{
        goOrderDetail_d(id){
          this.$router.push({name:'order_detail',query:{id:id}});
        }
      }
    }
</script>

<style scoped>
  #order_index_d{
    height:100%;
    width:100%;
    background:#f6f6f6;
  }
.order_header_d{
  height:1rem;
  width:100%;
  background:#ED3C3C;
  font-size:0.34rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
  position: fixed;
  top:0rem;
  z-index: 5;
}
  .order_header_set_up_d{
    font-size:0.34rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .order_header_li_d{
    width:100%;
    background:#fff;
    margin-top:.3rem;
  }
  .order_header_li_li_d{
      height:2rem;
      width:100%;
      background: #f6f6f6;
      margin-bottom: .05rem;
    position: relative;
  }
  .order_header_li_image_d{
    height:1.6rem;
    width:2rem;
    position: absolute;
    top:.2rem;
    left:.1rem;
  }
  .order_header_li_image_d img{
    height:100%;
    width:100%;
  }
  .order_header_li_name_d{
    position: absolute;
    top:.3rem;
    left:2.3rem;
    width:2.6rem;
    font-size:.28rem;
  }
  .order_header_li_price_d{
    position: absolute;
    top:.1rem;
    right:.15rem;
    width:1rem;
    font-size:.26rem;
    font-weight: 800;
  }
  .order_header_li_money_d{
    position: absolute;
    bottom: .3rem;
    right:.2rem;
    width:2rem;
    font-weight:800;
    font-size:.3rem;
  }
  .order_header_total_d{
    height:.7rem;
    font-size:.34rem;
    font-weight:800;
    text-align: right;
    padding-right:.3rem;
    line-height:.7rem;
  }
  .shopname_d{
    height:.7rem;
    line-height: .7rem;
    font-size:.34rem;
    font-weight:800;
  }
  .order_header_swapper_d{
    position: relative;
    top:1rem;
    height:80%;
    width:100%;
  }
</style>
