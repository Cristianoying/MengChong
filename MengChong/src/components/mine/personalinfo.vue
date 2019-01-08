<template>
  <div class="mine_set_up">
    <mt-header title="相关设置" class="mine_set_up_d">
      <router-link to="/mine/mineIndex" slot="left"><</router-link>
    </mt-header>
    <ul class="mine_set_up_ul_d">
      <router-link :to="{name:'person'}">
        <li class="mine_set_up_li_d">
          <span class="mine_set_up_li_span_d">个人资料</span>
          <span class="mine_set_up_li_span_two_d">></span>
        </li>
      </router-link>
      <li class="mine_set_up_li_d">
        <span class="mine_set_up_li_span_d">账号安全</span>
        <span class="mine_set_up_li_span_two_d">></span>
      </li>
    </ul>
    <ul class="mine_set_up_ul_d">
      <li class="mine_set_up_li_d">
        <span class="mine_set_up_li_span_d">收货地址</span>
        <span class="mine_set_up_li_span_two_d">></span>
      </li>
      <li class="mine_set_up_li_d">
        <span class="mine_set_up_li_span_d">清除缓存</span>
      </li>
      <li class="mine_set_up_li_d">
        <span class="mine_set_up_li_span_d">版本</span>
        <span class="mine_set_up_li_span_two_d">当前版本为1.0</span>
      </li>
    </ul>
    <router-link :to="{name:'userIndex'}" class="mine_set_up_btn_d">
      退出登陆
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "mine-set-up"
  }
</script>

<style scoped>
  .mine_set_up_d{
    height:1rem;
    font-size:.32rem;
    background:#ED3C3C
  }
  .mine_set_up{
    height:100%;
    width:100%;
    background: #f6f6f6;
  }
  .mine_set_up_ul_d{
    margin-top:.3rem;
  }
  .mine_set_up_li_d{
    height:1rem;
    margin:.1rem 0;
    background:#fff;
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(22,22,22,1);
  }
  .mine_set_up_li_span_d{
    display: block;
    float: left;
    line-height:1rem;
    margin-left:.2rem;
  }
  .mine_set_up_li_span_two_d{
    display: block;
    float: right;
    line-height:1rem;
    margin-right:.2rem;
  }
  .mine_set_up_btn_d{
    position: absolute;
    top:10rem;
    height:1rem;
    width:100%;
    text-align: center;
    font-size:0.34rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(237,60,60,1);
    background: #fff;
    line-height:1rem;
  }
</style>
