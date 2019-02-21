<template>
  <div id="hd_c">
    <div id="top">
      <div class="up_c" @click="goback_c()">&lt;</div>
      <div class="pagename_c">
        <i>购物车</i>
      </div>
      <button class="del_c" @click="handledeletechecked()">删除</button>
    </div>
  </div>
</template>

<script>
  import Vuex from 'vuex'

  export default {
    name: "header_c",
    data() {
      return {
        pagename: '购物车',
      }
    },
    methods: {
      goback_c() {
        this.$router.push( '/mine' );
      },
      ...Vuex.mapActions({
        handledeletechecked: 'ShopCart/handledeletechecked'
      })
    }
  }
</script>

<style scoped>
  #hd_c {
    width: 7.5rem;
    height: 1rem;
    box-sizing: border-box;
    background: rgba(237, 60, 60, 1);
    position: relative;
    z-index: 5;
  }

  #top > .up_c {
    width: 0.22rem;
    height: .4rem;
    position: absolute;
    top: 0.24rem;
    left: 0.1rem;
    color: #fff;
    font-size: .34rem;
    font-weight: bolder;
  }

  #top > .pagename_c {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #top > .pagename_c i {
    font-style: normal;
    font-size: 0.34rem;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }

  #top .del_c {
    width: .82rem;
    height: .62rem;
    background: orange;
    border-radius: .1rem;
    font-size: .24rem;
    border: 2px solid #ccc;
    outline: none;
    position: absolute;
    top: 0.24rem;
    right: 0.1rem;
  }
</style>
