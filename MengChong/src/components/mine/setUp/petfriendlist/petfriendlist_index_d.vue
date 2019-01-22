<template>
<div id="petfriendlist_index_d">
  <mt-header title="宠友列表" class="petfriend_header_d">
    <router-link :to="{name:'mine'}" slot="left" class="petfriend_header_set_up_d">&lt;</router-link>
  </mt-header>
  <div class="petfriendlist_div_d">
   <ul class="petfriendlist_ul_d">
     <li class="petfriendlist_li_d" v-for="(item,index) in petfriendlist_d">
         <router-link :to="{name:'animal_w',query:{id:item.userId}}">
            <div class="petfriendlist_li_img_d">
              <img :src="item.userPhoto" alt="">
            </div>
            <div class="petfriendlist_li_name_d">
              {{item.userName}}
            </div>
         </router-link>
     </li>
   </ul>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Vuex from 'vuex'
    export default {
        name: "petfriendlist_index_d",
      created(){
          this.$store.dispatch("mine/getAllPetFriendListActions_d")
      },
      mounted(){
          let petfriend_swapper=document.querySelector(".petfriendlist_div_d");
          let Scroll=new BScroll(petfriend_swapper,{
            click:true
          });
      },
      computed:{
        ...Vuex.mapState({
          petfriendlist_d:state=>state.mine.petfriendlist_d,
        })
      }
    }
</script>

<style scoped>
#petfriendlist_index_d{
  height:100%;
  width: 100%;
}
  .petfriend_header_d{
    height:1rem;
    width:100%;
    position: fixed;
    top:0;
    left:0;
    z-index: 5;
    background:#ED3C3C;
    font-size:.34rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .petfriendlist_li_d{
    height:1rem;
    width:100%;
    background:#fff;
    margin-top:.05rem;
    position: relative;
  }
  .petfriendlist_li_img_d{
    position: absolute;
    top:0;
    left:.1rem;
    height:1rem;
    width:1rem;
  }
  .petfriendlist_li_img_d img{
    height:100%;
    width:100%;
    border-radius: 50%;
  }
  .petfriendlist_li_name_d{
    position: absolute;
    top:.5rem;
    left:1.3rem;
    font-size:.26rem;
    font-weight:400;
    font-family:PingFang-SC-Regular;
  }
  .petfriendlist_div_d{
    height:90%;
    width:100%;
    position: relative;
    top:1rem;
  }
</style>
