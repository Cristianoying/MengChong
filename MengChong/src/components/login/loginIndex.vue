<template>
  <div class="loginIndex_d">
    <router-link class="gohome_d" :to="{name:'home'}">
      &lt;进入首页
    </router-link>
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
</template>

<script>
  import Swiper from 'swiper'
  export default {
    name: "login-index",
  }
</script>

<style scoped>
  .loginIndex_d{
    background-image: url("../../../static/login_d_img/login13@2x.png");
    background-size: cover;
  }
  . swiper-wrapper>div{
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
.gohome_d{
  position: absolute;
  left:.1rem;
  top:.15rem;
  font-size: .36rem;
  color:#fff;
  font-weight: 800;
  font-family:PingFang-SC-Heavy;
}
</style>
