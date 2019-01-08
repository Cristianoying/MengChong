<template>
<div class="loginuser_d">
    <div class="loginuser_head_appear_d">
      <img src="../../../static/login_d_img/header_appear.png" alt="">
    </div>
    <p class="login_input_userphone_d"><label>+86<input type="text" placeholder="输入手机号"></label></p>
    <p class="login_input_password_d">
      <label>
        验证码
        <input type="text" placeholder="输入密码">
      </label>
      <button class="loginuser_input_password_button_d" @click="getVerificationCode()">获取验证码</button>
    </p>
    <router-link :to="{name:'home'}" class="loginuser_login_btn_d">
      登陆
    </router-link>
  <div class="loginuser_goback_d" @click="login_goBack_d()"><</div>

</div>
</template>

<script>
    export default {
        name: "loginuser",
        methods:{
          login_goBack_d(){
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>
.loginuser_d{
  height:100%;
  width:100%;
}
  .loginuser_head_appear_d{
    margin:.75rem auto;
    height:3rem;
    width:3rem;
  }
  .loginuser_head_appear_d img{
    height:100%;
    width:100%;
  }
  .login_input_userphone_d{
    height:.7rem;
    width:6rem;
    position: absolute;
    top:5rem;
    left:.75rem;
    border-bottom:#000 1px solid;
    color:#161616;
    font-size:.3rem;
    font-weight:800;
    line-height:.7rem;
  }
.login_input_password_d{
  height:.7rem;
  width:6rem;
  position: absolute;
  top:7rem;
  left:.75rem;
  border-bottom:#000 1px solid;
  color:#161616;
  font-size:.3rem;
  font-weight:800;
  line-height:.7rem;
}
.login_input_userphone_d input,.login_input_password_d input {
  /*line-height:1rem;*/
  height:.5rem;
  padding-top:.19rem;
  border:none;
  position: absolute;
  bottom: .1rem;
  left:1.1rem;
  width:4.8rem;
  font-size:.32rem;
}
.login_input_userphone_d label,.login_input_password_d label{
  height:.7rem;
  line-height:.7rem;
  width:1rem;
  display: block;
}
  .loginuser_login_btn_d{
    height:1rem;
    width:6rem;
    position: absolute;
    top:9rem;
    left:.75rem;
    background:#9E9D9D;
    text-align: center;
    line-height:1rem;
    color:rgba(200,200,200,1);
    font-weight:800;
    font-size:.32rem;
  }
  .loginuser_input_password_button_d{
    height:.6rem;
    width:2rem;
    border:1px #E83F39 solid;
    background: #fff;
    font-size:.32rem;
    position: absolute;
    top:0;
    right:0;
  }
  .loginuser_goback_d{
    height:1rem;
    width:1rem;
    position: absolute;
    top:.2rem;
    left:.25rem;
    font-size:.5rem;
    color:#666;
    font-weight: 800;
  }
</style>
