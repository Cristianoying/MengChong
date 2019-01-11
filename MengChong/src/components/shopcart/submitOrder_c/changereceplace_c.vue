<template>
  <div id="chengereceplace">
    <mt-header class="crphd" title="收货地址">
      <router-link :to="{name:'submitorder'}" slot="left">
        <mt-button icon="none">&lt;</mt-button>
      </router-link>
      <router-link :to="{name:'changereceplace'}" slot="right">
        <mt-button icon="none">保存</mt-button>
      </router-link>
    </mt-header>
      <div id="linkage">
        <Linkage></Linkage>
      </div>
    <div id="ipt">
      <p class="ipt" v-for="(item,index) in list">
        <label class="ipt_name">{{item.iptname}}</label>
        <input class="ipt_c" type="text" :placeholder="item.ipt_cont">
      </p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Header} from 'mint-ui';
  import Linkage from './linkage'

  Vue.component(Header.name, Header);
  export default {

    name: "chengereveplace_c",
    data() {
      return {
        list: [{iptname: '收货人', ipt_cont: '名字'},
          {iptname: '手机号', ipt_cont: '11位手机号'},
          {iptname: '所在地区', ipt_cont: '地区'},
          {iptname: '详细地址', ipt_cont: '详细地址'}],
        from_c:'/submitorder'
      }
    },
    components: {
      Linkage
    },
    // beforeRouteEnter(to,from,next){
    //   console.log(from.name);
    //   next();
    // },
    // beforeRouteUpdate(){
    //     console.log( this )
    // },
    // beforeRouteLeave(to,from,next){
    //   console.log( this );
    //   this.from_c = ''
    //   next();
    // }
  }
</script>

<style scoped>
  #chengereceplace {
    width: 100%;
    height: 13.4rem;
    background: #f6f6f6;
  }
  #linkage>div{
    height: 3rem;
    overflow: hidden;
  }

  .crphd {
    width: 7.5rem;
    height: 1rem;
    box-sizing: border-box;
    background: rgba(237, 60, 60, 1);
    z-index: 5;
    font-size: .34rem;
    font-weight: bold;
  }

  #ipt {
    width: 7.5rem;
    height: 4.38rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .ipt {
    width: 100%;
    height: 1.09rem;
    background: rgba(255, 255, 255, 1);
    border-bottom: 1px solid #f6f6f6;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .ipt_name {
    width: 28%;
    height: 90%;
    font-size: .34rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding-left: .2rem;
  }

  .ipt_c {
    width: 5rem;
    height: .7rem;
    border: none;
    font-size: .34rem;
    padding-left: .2rem;
    outline: none;
  }
</style>
