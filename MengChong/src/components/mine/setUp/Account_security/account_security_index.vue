<template>
  <div class="Account_secuirty">
    <mt-header title="账号安全" class="Account_secuirty_d">
      <router-link to="/mine/mineIndex" slot="left"><</router-link>
    </mt-header>
    <ul class="Account_secuirty_ul_d">
      <router-link :to="{name:'phone_d'}">
        <li class="Account_secuirty_li_d">
          <span class="Account_secuirty_li_span_d">手机绑定</span>
        </li>
      </router-link>
      <router-link :to="{name:'password_d'}">
          <li class="Account_secuirty_li_d">
            <span class="Account_secuirty_li_span_d">密码修改</span>
          </li>
      </router-link>
    </ul>
    <ul class="Account_secuirty_ul_d">
      <li class="Account_secuirty_li_d">
        <span class="Account_secuirty_li_span_d">微博账号</span>
      </li>
    </ul>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  export default {
    name: "account_security"
  }
</script>

<style scoped>
  .Account_secuirty_d{
    height:1rem;
    width:100%;
    background:#ED3C3C;
    font-size:.34rem;
    font-family:PingFang-SC-Regular;
    font-weight:800;
  }
  .Account_secuirty_ul_d{
    margin-top:.3rem;
  }
  .Account_secuirty_li_d{
    height:1rem;
    width:100%;
    background:#fff;
    line-height: 1rem;
    font-size:.34rem;
    margin:.1rem 0;
    padding-left:2%;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(22,22,22,1);
  }
</style>
