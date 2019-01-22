<template>
  <div class="like_d">
    <mt-header title="消息" class="like_header_d">
      <router-link :to="{name:'mine'}" slot="left" class="like_header_set_up_d"><</router-link>
    </mt-header>

    <div class="like_div_d" ref="">
      <ul class="like_ul_d">
        <li class="like_li_d" v-for="(item,index) in likelist_d">
          <div class="like_li_image_d">
            <router-link :to="{name:'animal_w',query:{id:item.userInfo.userId}}">
              <img :src="item.userInfo.userPhoto" alt="">
            </router-link>
          </div>
          <div class="like_li_info_d">
            <p>
              <span class="like_li_info_username_d">{{item.userInfo.userName}}</span>
              <span>评论了~</span>
            </p>
            <p class="like_li_info_data_d">
              {{item.dynList.dynDate}}
            </p>
          </div>
          <div class="like_dyn_image_d">
            <router-link :to="{name:'dynamic',query:{id:item.dynList.dynId}}">
              <img :src="item.dynList.dynPhoto" alt="">
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Vuex from 'vuex'

  export default {
    name: "like_d",
    created() {
      this.$store.dispatch("mine/getLikeAllActions");
    },
    mounted() {
      var like_swrapper = document.querySelector(".like_div_d");
        let Bscroll = new BScroll(like_swrapper, {
          click:true
        })
    },
    computed: {
      ...Vuex.mapState({
        likelist_d: state => {
          return state.mine.likeList_d
        }
      })
    }
  }

</script>

<style scoped>
  .like_header_d {
    height: 1rem;
    width: 100%;
    background: #ED3C3C;
    font-size: .34rem;
    font-weigth: 400;
    font-family: PingFang-SC-Regular;
    z-index: 5;
    position: fixed;
    top:0;
    left:0;
  }

  .like_li_d {
    height: 1.4rem;
    background: #fff;
    margin-top: .2rem;
    width: 100%;
    position: relative;
  }

  .like_li_image_d {
    height: 1.2rem;
    width: 1.2rem;
    position: absolute;
    left: .2rem;
    top: .1rem;
  }

  .like_li_image_d img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

  .like_li_info_d {
    position: absolute;
    top: .3rem;
    left: 1.6rem;
    font-size: .26rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(22, 22, 22, 1);
  }

  .like_dyn_image_d {
    height: 1.2rem;
    width: 2rem;
    position: absolute;
    top: .1rem;
    right: .1rem;
  }

  .like_dyn_image_d img {
    height: 100%;
    width: 100%;
  }

  .like_li_info_username_d {
    font-size: 0.3rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(22, 22, 22, 1);
  }
  .like_d{
    width: 100%;
    height: 100%;
  }
  .like_div_d{
    height:90%;
    width:100%;
    position: relative;
    top:1rem;
  }
</style>
