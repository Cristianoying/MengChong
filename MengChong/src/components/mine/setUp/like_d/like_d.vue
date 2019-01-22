<template>
  <div class="comment_d">
    <mt-header title="获赞" class="comment_header_d">
      <router-link :to="{name:'mine'}" slot="left" class="comment_header_set_up_d"><</router-link>
    </mt-header>

    <div class="comment_div_d" ref="">
      <ul class="comment_ul_d">
        <li class="comment_li_d" v-for="(item,index) in commentlist_d">
          <div class="comment_li_image_d">
            <router-link :to="{name:'animal_w',query:{id:item.userInfo.userId}}">
              <img :src="item.userInfo.userPhoto" alt="">
            </router-link>
          </div>
          <div class="comment_li_info_d">
            <p>
              <span class="comment_li_info_username_d">{{item.userInfo.userName}}</span>
              <span>赞了~</span>
            </p>
            <p class="comment_li_info_data_d">
              {{item.dynList.dynDate}}
            </p>
          </div>
          <div class="comment_dyn_image_d">
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
    name: "comment_d",
    created() {
      this.$store.dispatch("mine/getCommentAllActions");
    },
    mounted() {
      var comment_swrapper = document.querySelector(".comment_div_d");
      this.$nextTick(() => {
        let Bscroll = new BScroll(comment_swrapper, {
          click:true
        });
      })
    },
    computed: {
      ...Vuex.mapState({
        commentlist_d: state => state.mine.commentlist_d
      })
    }
  }

</script>

<style scoped>
  .comment_header_d {
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

  .comment_li_d {
    height: 1.4rem;
    background: #fff;
    margin-top: .2rem;
    width: 100%;
    position: relative;
  }

  .comment_li_image_d {
    height: 1.2rem;
    width: 1.2rem;
    position: absolute;
    left: .2rem;
    top: .1rem;
  }

  .comment_li_image_d img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

  .comment_li_info_d {
    position: absolute;
    top: .3rem;
    left: 1.6rem;
    font-size: .26rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(22, 22, 22, 1);
  }

  .comment_dyn_image_d {
    height: 1.2rem;
    width: 2rem;
    position: absolute;
    top: .1rem;
    right: .1rem;
  }

  .comment_dyn_image_d img {
    height: 100%;
    width: 100%;
  }

  .comment_li_info_username_d {
    font-size: 0.3rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(22, 22, 22, 1);
  }
  .comment_d{
    width: 100%;
    height: 100%;
  }

  .comment_div_d{
    width: 100%;
    height: 90%;
    position: relative;
    top:1rem;
  }
</style>

