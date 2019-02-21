<template>
  <keep-alive>
    <div id="middle" v-if="receive_info_d.length>0">
      <div class="recemsg">
        <p class="recename">收货人：<span>{{receive_info_d[placeIndex_d].name}}</span> <span>{{receive_info_d[placeIndex_d].tel}}</span></p>

        <p class="receplace">收货地址: <span>{{receive_info_d[placeIndex_d].province}}{{receive_info_d[placeIndex_d].receplace}}</span>
          <span @click="handlereplace()">&gt;</span>
        </p>
        <p class="lert">(收货不便时，可选择免费代收服务) </p>
      </div>
      <div v-for="(item,index) in orderlist[0].goodsList" :key="index">

        <hr>
        <div class="allgoodsmsg">
          <p class="storename">
            <img src="" alt="">淘宠官方旗舰店
          </p>
          <div class="goodsmsg">
            <div class="goodspic">
              <img :src="item.goodsPhoto" alt="">
            </div>
            <div class="goodsname">
              <p><span>{{item.goodsName}}</span></p>
              <p>分类: <span>大包</span></p>
              <p>七天退换</p>
            </div>
          </div>
          <p> ￥ <span> {{item.goodsPrice}} </span> &ensp; X<span>{{item.goodsCount}}</span></p>
        </div>
      </div>
    </div>
  </keep-alive>

</template>

<script>
  import Vuex from 'vuex'

  export default {
    created() {
      this.$store.commit('ShopCart/handleaddorderlist');
      this.$store.dispatch("mine/getReceiveList_d");
      this.$store.dispatch("mine/getOrderListActions_d");
    },
    computed: {
      ...Vuex.mapState({
        orderlist:state=>{
          return state.mine.orderlist_d
        },
        receive_info_d:state=>{
          return state.mine.recemg_d
        },
        placeIndex_d:state=>state.mine.placeIndex_d
      })
    },
    methods:{
      handlereplace(){
        this.$router.push({ name: 'receive_d'});
      }
    }

  }
</script>

<style scoped>
  #middle {

    width: 100%;
    padding-bottom: 1rem;

  }

  #middle .recemsg {
    height: 2.5rem;
    width: 90%;
    margin: .15rem auto;
    overflow: hidden;
    padding: 0 .15rem;
    background: #fff;
  }

  #middle .recemsg p {
    width: 100%;
    padding-left: .61rem;
    margin: .2rem 0;
  }

  #middle .recemsg .recename {
    font-size: .38rem;
  }

  #middle .recemsg .receplace {
    width: 90%;
    font-size: .34rem;
  }

  #middle .lert {
    font-size: .32rem;
    color: #fc0;
  }

  #middle .storename {
    width: 100%;
    height: .5rem;
    background: #fff;
    font-size: .34rem;
    line-height: .5rem;
    padding: .3rem;
  }

  #middle .goodsmsg {
    width: 100%;
    height: 2rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: .5rem;
  }

  #middle .goodsmsg img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
  }

  #middle .goodsname {
    width: 5rem;
    height: 1.5rem;
  }

  #middle .goodsname p {
    margin: .15rem 0;
  }

  #middle .allgoodsmsg > p:last-child {
    text-align: right;
    margin: 0 1rem;
    color: #f00;
  }

  #middle div:nth-child(2) {
    font-size: .28rem;
  }
</style>
