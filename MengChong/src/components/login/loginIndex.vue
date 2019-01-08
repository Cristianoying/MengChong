<template>
<div class="loginIndex_d">
  <div class="login_head_appear_d">
    <img src="../../../static/login_d_img/header_appear.png" alt="">
  </div>
  <router-link class="login_login_btn_d" type="button"  :to="{name:'userlogin'}">
    登陆
  </router-link>
  <div class="login_share_d">
        <span class="login_share_wx_d">
            <img src="../../../static/login_d_img/wx@2x.png" alt="">
        </span>
    <span class="login_share_wb_d">
            <img src="../../../static/login_d_img/wb@2x.png" alt="">
        </span>
    <span class="login_share_qq_d">
          <img src="../../../static/login_d_img/qq2x.png" alt="">
        </span>
    <router-link class="login_share_register_d" :to="{name:'register'}">
            注册
        </router-link>
  </div>
</div>
</template>

<script>
    export default {
        name: "login-index"
    }
</script>

<style scoped>
  .loginIndex_d{
    height:100%;
    width:100%;
    background-image: url("../../../static/login_d_img/login13@2x.png");

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
