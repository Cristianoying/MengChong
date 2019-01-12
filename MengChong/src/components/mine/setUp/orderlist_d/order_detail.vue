<template>
    <div class="order_detail">
      <div class="order_detail_header">
        <span @click="order_detail_goback">&lt;</span>
        <span>订单详情</span>
      </div>
      <div class="order_detail_wrapper_d" ref="order_detail_wrapper">
        <div class="order_detail_content_d">
          <div class="order_detail_status_d">
            <div class="order_status_span_d">
              {{orderlist_detail_d.orderState}}
            </div>
            <div class="order_detail_status_img_d">
              <img src="../../../../../static/mine_d_img/cs-xchz-1.png" alt="">
            </div>
          </div>
          <div class="order_detail_user_d">
            <div class="order_detail_user_dizhi_d">
              <img src="../../../../../static/mine_d_img/weizhi.png" alt="">
            </div>
            <p>收货人：{{orderlist_detail_d.receiveName}}</p>
            <p>收货地址：{{orderlist_detail_d.receiveAddress}}</p>
          </div>
          <div class="order_detail_shop_d">
            <div class="order_detail_shop_name_d">
              <img src="../../../../../static/mine_d_img/dianpu.png" alt="">
              <p>萌宠官方旗舰店</p>
            </div>
            <ul class="order_detail_shop_ul_d">
              <li class="order_detail_shop_li_d" v-for="(item,index) in orderlist_detail_d.goodsList">
                <div class="order_detail_shop_li_img_d">
                  <img :src="item.goodsPhoto" alt="">
                </div>
                <div class="order_detail_shop_li_name_d">
                  <p>{{item.goodsName}}</p>
                </div>
                <div class="order_detail_shop_li_price_d">
                  <p>{{item.goodsPrice|money_d}}</p>
                  <p>{{item.goodsCount|goodsCount_d}}</p>
                </div>
              </li>
            </ul>
            <div class="order_detail_total_d">
              实付款：{{orderlist_detail_d.goodsList|total}}
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Vuex from 'vuex'
    export default {
        name: "order_detail",
      created(){
        //console.log(this.$route.query.id);
        this.$store.dispatch("mine/getOrderDetailInfoActions_d",this.$route.query.id);
      },
      mounted(){
          let Bscroll=new BScroll(this.$refs.order_detail_wrapper,{
            click:true
          })
      },
      computed:{
        ...Vuex.mapState({
          orderlist_detail_d:state=>state.mine.orderlist_detail_d
        })
      },
      filters:{
        money_d(money){
          return '￥'+money;
        },
        goodsCount_d(count){
          return '×'+count;
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
        order_detail_goback(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style scoped>
  .order_detail{
    height:100%;
    width:100%;
  }
  .order_detail_wrapper_d{
    position: relative;
    top:1rem;
    height:80%;
    width:100%;
  }


.order_detail_user_d{
  height:1.6rem;
  width:100%;
  background:#fff;
  padding-left:1rem;
  font-size:.29rem;
  padding-top:.3rem;
  position: relative;
}
.order_detail_user_d p{
  height:.5rem;
  line-height:.5rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
}
.order_detail_user_dizhi_d{
  height:.5rem;
  width:.5rem;
  position: absolute;
  top:.5rem;
  left:.2rem;
}
.order_detail_user_dizhi_d img{
  height:100%;
  width:100%;
}
  .order_detail_header{
    height:1rem;
    width:100%;
    font-size:.34rem;
    background:#ED3C3C;
    color:#fff;
    line-height:1rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    position: fixed;
    top:0;
    left:0;
    z-index: 5;
  }
  .order_detail_status_d {
    height: 2rem;
    width: 100%;
    position: relative;
  }
  .order_detail_status_img_d{
    position: absolute;
    top:.2rem;
    right:1rem;
    height:1.8rem;
    width:1.8rem;
  }
  .order_detail_status_img_d img{
    height:100%;
    width:100%;
  }
  .order_status_span_d{
    position: absolute;
    top:.7rem;
    left:1rem;
    font-size:.32rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
  }
  .order_detail_shop_name_d{
    height:.6rem;
    width:100%;
    padding-top:.2rem;
  }
  .order_detail_shop_name_d img{
    height:.6rem;
    width:.6rem;
    float: left;

  }
  .order_detail_shop_name_d p{
    float: left;
    line-height:.5rem;
    font-size:.34rem;
    font-weight: 800;
  }
  .order_detail_shop_d{
    margin-top:.3rem;
    background:#fff;
  }
  .order_detail_shop_li_d{
    height:3rem;
    width:100%;
    margin-top:.1rem;
    background:#fff;
    position: relative;
  }
  .order_detail_shop_li_img_d{
    height:2rem;
    width:2rem;
    position:absolute;
    top:.5rem;
    left:.3rem;
  }
  .order_detail_shop_li_img_d img{
    height:100%;
    width:100%;
  }
  .order_detail_shop_li_name_d{
    height:2rem;
    width:2rem;
    position: absolute;
    top:.7rem;
    left:2.6rem;
  }
  .order_detail_shop_li_price_d{
    width:1rem;
    position: absolute;
    top:.3rem;
    right:.2rem;
  }
  .order_detail_total_d{
    height:.7rem;
    text-align: right;
    margin-right:.2rem;
    line-height:.7rem;
    font-size:.34rem;
    font-weight:800
  }
</style>
