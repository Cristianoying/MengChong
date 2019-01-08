<template>
<div class="Account_secuirty">
  <router-view></router-view>
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
