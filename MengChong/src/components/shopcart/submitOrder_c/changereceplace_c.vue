<template>
  <div id="chengereceplace">
    <mt-header class="crphd" title="收货地址">
      <router-link :to="{name:'submitorder'}" slot="left">
        <mt-button icon="none">&lt;</mt-button>
      </router-link>
      <router-link :to="{name:'changereceplace'}" slot="right">
        <mt-button icon="none" @click="addReceiveAddress">保存</mt-button>
      </router-link>
    </mt-header>
      <div id="linkage">
        <Linkage></Linkage>
      </div>
    <div id="ipt">
      <p class="ipt">
        <label class="ipt_name">收货人</label>
        <input class="ipt_c" type="text" placeholder="名字" ref="name_c">
      </p>
      <p class="ipt">
        <label class="ipt_name">手机号</label>
        <input class="ipt_c" type="text" placeholder="11位手机号" ref="tel_c">
      </p>
      <p class="ipt">
        <label class="ipt_name">所在地区</label>
        <input class="ipt_c" type="text" placeholder="地区" ref="add_c">
      </p>
      <p class="ipt">
        <label class="ipt_name">详细地址</label>
        <input class="ipt_c" type="text" placeholder="详细地址" ref="loca_c">
      </p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Header} from 'mint-ui';
  import Linkage from './linkage'
  import axios from 'axios'
  Vue.component(Header.name, Header);
  export default {
    name: "chengereveplace_c",
    data() {
      return {
        from_c:'/submitorder'
      }
    },
    methods:{
      addReceiveAddress(){
        console.log(this.$refs.name_c.value);
        axios({
          method:"post",
          url:"/updateAddress",
          data:{
            id:this.$route.query.id,
            name:this.$refs.name_c.value,
            tel:this.$refs.tel_c.value,
            add:this.$refs.add_c.value,
            loca:this.$refs.add_c.value,
          }
        }).then((data)=>{
          if(data.code==1000){
            alert("修改成功")
          }else{
            alert("修改失败，请稍后再试")
          }
        })
      }
    },
    created(){
      console.log(this);
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
