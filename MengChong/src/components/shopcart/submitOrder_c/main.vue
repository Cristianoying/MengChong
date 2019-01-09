<template>
  <div id="middle">
    <div class="recemsg">
    <p class="recename">收货人：<span>王营</span> <span>17865815662</span></p>
    <p class="receplace">收货地址: <span>北京北京市昌平区沙河镇富生路14号振宇公寓办公室</span></p>
    <p class="lert">(收货不便时，可选择免费代收服务) </p>
  </div>
    <div v-for="(item,index) in 5">

      <hr>
      <div class="allgoodsmsg">
        <p class="storename">
          <img src="" alt="">淘宠官方旗舰店
        </p>
        <div class="goodsmsg">
          <div class="goodspic">
            <!-- <img src="../../../assets/logo.png" alt=""> -->
          </div>
          <div class="goodsname">
            <p><span>鸿星尔克与东邪秋季网鞋鞋子跑步鞋旅游休闲鞋椰子鞋潮时尚男鞋</span></p>
            <p>分类: <span>鞋码42</span></p>
            <p>七天退换</p>
          </div>
        </div>
        <p> ￥ <span> 159.00 </span> X<span> 1 </span></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
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
  }

  #middle .goodsmsg img {
    width: 1.5rem;
    height: 1.5rem;
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
