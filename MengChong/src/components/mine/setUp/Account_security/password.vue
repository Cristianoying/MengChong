<template>
    <div class="password_d">
      <mt-header title="修改密码" class="password_reset_header_d">
        <router-link to="/mine/minesetup/account_security" slot="left" class="mine_header_set_up_d">&lt;</router-link>
      </mt-header>
      <div class="password_reset_content_d">
        <p class="password_old_d">
          <label>旧密码：
            <input type="text" ref="password_old_d" class="password_old_input_d"/>
          </label>
        </p>
        <p class="password_new_d">
          <label>新密码：
            <input type="text" ref="password_new_d" class="password_new_input_d"/>
          </label>
        </p>

          <button class="btn">修改</button>

      </div>
    </div>
</template>

<script>
    export default {
        name: "password"
    }
</script>

<style scoped>
  .btn{
    height:.5rem;
    width:2rem;
    margin-left:2.5rem;
    margin-top:1rem;
    font-size:.34rem;
    text-align: center;
  }
  .password_reset_header_d{
    height:1rem;
    width:100%;
    background: #ED3C3C;
    font-size:.34rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    line-height:1rem;
    position: fixed;
    top:0;
    z-index: 5;
  }

.password_reset_content_d{
  position: relative;
  top:1.5rem;
  padding-left:.3rem;
}
  .password_reset_content_d p{
    font-size:.32rem;
    margin-bottom:.3rem;
  }
 .password_reset_content_d input{
    font-size: .32rem;
    height:.7rem;
    width:5rem;
   border:none;
  }
</style>
