<template>
  <div class="loginIndex_d">
    <div class="swiper-container">
      <div class="swiper-wrapper" ref="swiperWrapper">
        <div class="swiper-slide swiper-slide1" ></div>
        <div class="swiper-slide swiper-slide2"></div>
        <div class="swiper-slide swiper-slide3">
          <router-link :to="{name:'userIndex'}" class="gohome">进入登陆</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    name: "login-index",
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {

      })
    },
  }
</script>

<style scoped>
  .loginIndex_d{
    height:100%;
    width:100%;
  }
  .swiper-slide1{
    background-image: url("../../../static/login_d_img/login1.jpg");
    background-size: 100% 100%;
  }
  .swiper-slide2{
    background-image: url("../../../static/login_d_img/login2.jpg");
    background-size: 100% 100%;

  }
  .swiper-slide3{
    background-image: url("../../../static/login_d_img/login3.jpg");
    background-size: 100% 100%;
  }
.swiper-container{
  height:100%;
  width:100%;
}
  .gohome{
    line-height:1rem;
    height:1rem;
    width:6rem;
    position: absolute;
    left:0.75rem;
    bottom: 1rem;
    background:rgba(255,234,136,1);
    border-radius: .1rem;
    font-size: .32rem;
    text-align: center;
    font-weight: 800;
    color:rgba(22,22,22,1);
    font-family:PingFang-SC-Heavy;
  }
</style>
