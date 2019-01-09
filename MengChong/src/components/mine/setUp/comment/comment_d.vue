<template>
    <div class="comment_d">
      <ul class="comment_ul_d">
        <li class="comment_li_d" v-for="(item,index) in likelist_d">
          <!--<img :src="item.dynList.dynPhoto" alt="">-->
          {{item.dynList.dynId}}
        </li>
      </ul>
    </div>
</template>

<script>
  import Vuex from 'vuex'
    export default {
        name: "comment_d",
      created(){
          this.$store.dispatch("mine/getLikeAllActions");
      },
      computed:{
          ...Vuex.mapState({
              likelist_d:state=>state.mine.likelist_d
        })
      }
    }
</script>

<style scoped>

</style>
