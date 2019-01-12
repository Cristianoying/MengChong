<template>
  <div class="mine_d">
    <mt-header title="个人中心" class="mine_header_d">
     <router-link :to="{name:'setUp'}" slot="right" class="iconfont mine_header_set_up_d">&#xe610;</router-link>
    </mt-header>
   <div class="mine_wrapper">
    <div class="mine_wrapper_content">
      <div class="mine_head_appear_d">
        <div class="mine_head_apper_img_d">
          <img :src="mine_info_d.userPhoto" alt="">
        </div>
        <div class="mine_head_apper_name_d">
          <p>
            <span>{{mine_info_d.userName}}</span>
            <span class="iconfont mine_head_apper_sex" v-if="mine_info_d.userSex=='女'">&#xe654;</span>
            <span class="iconfont mine_head_apper_sex" v-else>&#xe653;</span>
          </p>
          <p class="mine_head_anmailId_d">
            宠号：{{mine_info_d.petId}}
          </p>
        </div>
        <div class="mine_personl_d" @click="goPersonalInfo()">
          <span>个人主页</span><span>></span>
        </div>

      </div>
      <div class="mine_allMessage_d">
        <ul>
          <li class="mine_message_d"
              v-for="(item,index) in mine_message_d"
              @click="gonextpage_d(item.url)">
            <svg class="icon mine_allMessage_icon_d" aria-hidden="true" >
              <use :href="item.icon"></use>
            </svg>
            <span>{{item.message}}</span>
          </li>
        </ul>
      </div>
      <div class="mine_carInfo_d">
        <ul>
          <li class="mine_message_d" v-for="(item,index) in mine_carInfo_d"
              @click="gonextpage_d(item.url)">
            <svg class="icon mine_allMessage_icon_d" aria-hidden="true" >
              <use :href="item.icon"></use>
            </svg>
            <span>{{item.message}}</span>
          </li>
        </ul>
      </div>
    </div>
   </div>
  </div>
</template>

<script type="text/javascript">
  import Vue from 'vue'
  import { Header } from 'mint-ui';
  import BSroll from 'better-scroll'
  Vue.component(Header.name, Header);
  import Vuex from 'vuex'
  export default {
    data(){
      return {
        mine_message_d:[
          {
            message:"信息",
            icon:"#icon-xinxi",
            url:'comment_index',
          },
          {
            message:"获赞",
            icon:"#icon-aixin",
            url:'like_index_d',
          },
          {
            message:"宠物",
            icon:"#icon-maozhao",
            url:'petinfo_d',
          },
          {
            message:"宠友",
            icon:"#icon-pengyou",
            url:'petfriend_d',
          }
        ],
        mine_carInfo_d:[
          {
            message:"全部订单",
            icon:"#icon-dingdan",
            url:'order_d',
          },
          {
            message:"购物车",
            icon:"#icon-gouwuche",
            url:'cart',
          }
        ]
      }
    },
    mounted(){
      this.$store.dispatch("mine/getmineInfoActions_d");
      var mine_wrapper_d=document.querySelector(".mine_wrapper");
      let Bsroll=new BSroll(mine_wrapper_d,{
        click:true
      });
  },
    methods:{
      go_set_up(){
        this.$router.push({name:"setUp"})
      },gonextpage_d(url){
        this.$router.push({name:url})
      },goPersonalInfo(){
        this.$router.push({name:'personalPage_index_d'})
      }
    },
    computed:{
      ...Vuex.mapState({
        mine_info_d:state=>state.mine.mine_info_d
      })
    }
  }

</script>

<style scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .mine_d{
    height:100%;
    width:100%;
    background:#f6f6f6;
  }
  .mine_header_d {
    height: 1rem;
    width:100%;
    background: #ED3C3C;
    font-size: 0.34rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    position: fixed;
    top:0;
    left:0;
    z-index: 5;
  }
  .mine_header_set_up_d{
    font-size: .4rem;
  }
  .mine_head_appear_d{
    height:2rem;
    width:100%;
    position: relative;
    background:#fff;
  }
  .mine_head_apper_img_d{
    height:1.24rem;
    width:1.24rem;
    position: absolute;
    left:.25rem;
    top:.25rem;
  }
  .mine_head_apper_img_d img{
    height:100%;
    width:100%;
    border-radius: 50%;
  }
  .mine_head_apper_name_d{
    position: absolute;
    top:.25rem;
    left:1.6rem;
    padding-left:.2rem;
    padding-top:.3rem;
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(22,22,22,1);
  }
  .mine_head_apper_sex{
    font-size:.32rem;
    color:#1296DB;
  }
  .mine_head_anmailId_d{
    font-size:0.18rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(98,98,98,1);
  }
  .mine_personl_d {
    position: absolute;
    right:.1rem;
    top:.7rem;
  }
  .mine_personl_d span{
    margin:0 .1rem;
  }
  .mine_allMessage_d{
    margin-top:.3rem;
  }
  .mine_message_d{
    height:.95rem;
    line-height:.95rem;
    background:#fff;
    margin:.07rem 0;
    padding:0 0 0 .15rem;
  }
  .mine_allMessage_icon_d{
    font-size:.45rem;
    color:#1296DB;
  }
  .mine_carInfo_d{
    margin-top:.3rem;
  }
  .mine_wrapper{
    position:relative;
    top:1rem;
    width:100%;
    height:78%;
  }
</style>
