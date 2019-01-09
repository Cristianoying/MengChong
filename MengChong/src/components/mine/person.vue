<template>
<div class="person">
  <mt-header title="个人信息" class="person_header_d">
    <router-link :to="{name:'personalinfo'}" slot="left">返回</router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>

  <ul class="person_ul_one_d">
    <li class="mine_person_li_d">
      <span class="mine_person_li_span_d">头像</span>
      <span class="mine_person_li_span_two_d">
      <img :src="mine_info_d.userPhoto" alt="">
    </span>
    </li>
    <li class="mine_person_li_d">
      <span class="mine_person_li_span_d">昵称</span>
      <span class="mine_person_li_span_two_d">
      {{mine_info_d.userName}}
    </span>
    </li>
    <li class="mine_person_li_d">
      <span class="mine_person_li_span_d">宠号</span>
      <span class="mine_person_li_span_two_d">
      {{mine_info_d.petId}}
    </span>
    </li>
  </ul>
  <ul class="person_ul_one_d">
  <li class="mine_person_li_d">
    <span class="mine_person_li_span_d">性别</span>
    <span class="mine_person_li_span_two_d">
     {{mine_info_d.userSex}}
    </span>
  </li>
  <!--<li class="mine_person_li_d">-->
    <!--<span class="mine_person_li_span_d">年龄</span>-->
    <!--<span class="mine_person_li_span_two_d">-->

    <!--</span>-->
  <!--</li>-->
  <!--<li class="mine_person_li_d">-->
    <!--<span class="mine_person_li_span_d">城市</span>-->
    <!--<span class="mine_person_li_span_two_d">-->

    <!--</span>-->
  <!--</li>-->
</ul>
</div>
</template>

<script>
  import Vuex from 'vuex'
    export default {
        name: "person",
      computed:{
        ...Vuex.mapState({
          mine_info_d:state=>state.mine.mine_info_d
        })
      }
    }
</script>

<style scoped>
  .person_header_d{
    height:1rem;
    width:100%;
    background:#ED3C3C;
    font-size:.32rem;
    font-weight:800;
  }
.person_ul_one_d{
  width:100%;
  line-height:1rem;
  font-size:.32rem;
  margin-top:.3rem;
}
.mine_person_li_d{
  position: relative;
  padding-left:2%;
  height:1rem;
  margin:.1rem 0;
  background:#fff;
  font-size:0.3rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(22,22,22,1);
}
  .mine_person_li_span_two_d{
    position: absolute;
    top:0;
    right:.2rem;
    width:1rem;
    height:1rem;
  }
  .mine_person_li_span_two_d img{
    border-radius: 50%;
    height:100%;
    width:100%;
  }
</style>
