<template>
<div class="loginIndex_d">
  <div class="swiper-container">
    <div class="swiper-wrapper" ref="swiperWrapper">
      <div class="swiper-slide swiper-slide1" ></div>
      <div class="swiper-slide swiper-slide2"></div>
      <div class="swiper-slide swiper-slide3"></div>
      <div class="swiper-slide swiper-slide4">
        <div class="login_head_appear_d">
          <img src="../../../static/login_d_img/header_appear.png" alt="">
        </div>
        <router-link class="login_login_btn_d" type="button"  :to="{name:'userlogin'}">
          登陆
        </router-link>
        <div class="login_share_d">
          <router-link class="login_share_register_d" :to="{name:'register'}">
            注册
          </router-link>
        </div>
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
      beforeRouteEnter(to,from,next){
          // if(.name==='userlogin'||from.name=='register')
        console.log(from==true);
          if(from){
            next((vm)=>{
              vm.$refs.swiperWrapper.style="transform: translate3d(-2250px, 0px, 0px); transition-duration: 0ms;"
            })
          }
          next();
      }
    }
</script>

<style scoped>
  .swiper-slide1{
    background-image: url("../../../static/login_d_img/login1.jpg");
  }
  .swiper-slide2{
    background-image: url("../../../static/login_d_img/login2.jpg");
  }
  .swiper-slide3{
    background-image: url("../../../static/login_d_img/login3.jpg");
  }
  .swiper-slide4{
    background-image: url("../../../static/login_d_img/login13@2x.png");
  }
  . swiper-wrapper>div{
    height:100%;
    width:100%;
  }
  .swiper-wrapper{
    height:100%;
    width:100%;
  }
  .swiper-container{
    height:100%;
    width:100%;
  }
  .loginIndex_d{
    height:100%;
    width:100%;
  }
  .login_head_appear_d{
    height:3rem;
    width:3rem;
    position:absolute;
    top:2rem;
    left:2.25rem;
  }
  .login_login_btn_d{
    line-height:1rem;
    height:1rem;
    width:6rem;
    position: absolute;
    left:0.75rem;
    bottom: 3rem;
    background:rgba(255,234,136,1);
    border-radius: .1rem;
    font-size: .32rem;
    text-align: center;
    font-weight: 800;
    color:rgba(22,22,22,1);
    font-family:PingFang-SC-Heavy;
  }
  .login_share_d{
    height:.6rem;
    width:6rem;
    position: absolute;
    bottom: .25rem;
    left:.75rem;
  }
  .login_share_d .login_share_wx_d{
    display: block;
    position: absolute;
    left:0;
    top:0;
  }
  .login_share_d .login_share_wb_d{
    display: block;
    position: absolute;
    left:1rem;
    top:0;
  }
  .login_share_d .login_share_qq_d{
    display: block;
    position: absolute;
    left:2rem;
    top:0;
  }
  .login_share_d .login_share_register_d{
    position:absolute;
    top:0;
    right:0;
    color:#fff;
    font-size:.32rem;
    font-weight: 800;
    font-family:PingFang-SC-Heavy;
  }
  .login_head_appear_d img{
    height:100%;
    width:100%;
  }
</style>
