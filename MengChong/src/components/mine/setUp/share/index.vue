<template>
<div id="share_d">
  <mt-header title="我的二维码" class="qrCode_header_d">
        <router-link :to="{name:'mineIndex'}"
                     slot="left" class="iconfont qrCode_header_set_up_d">
          &lt;
        </router-link>
  </mt-header>
  <div class="qrCode_box_d">
    <div class="qrCode_box_img_d">
      <img :src="mine_info_d.userPhoto" alt="">
    </div>
    <p class="qrCode_box_name_d">
      <span>{{mine_info_d.userName}}</span>
      <span class="iconfont share_head_apper_sex" v-if="mine_info_d.userSex=='女'">
        &#xe654;
      </span>
      <span class="iconfont share_head_apper_sex" v-else>&#xe653;</span>
    </p>
    <p class="share_head_anmailId_d">
      宠号：{{mine_info_d.petId}}
    </p>
    <div id="qrcode" ref="qrcode">

    </div>
  </div>
</div>
</template>

<script>
  import QRCode from 'qrcodejs2'
  import Vuex from 'vuex'
    export default {
        name: "index",
      computed:{
        ...Vuex.mapState({
          mine_info_d:state=>state.mine.mine_info_d
        })
      },
      methods: {
        qrcode() {
          let qrcode = new QRCode('qrcode', {
            width: 250, // 设置宽度，单位像素
            height: 250, // 设置高度，单位像素
            text: 'https://www.baidu.com'   // 设置二维码内容或跳转地址
          })
        }
      },
      mounted(){
          this.qrcode();
      }
    }
</script>

<style scoped>
  #qrcode{
    margin:0 auto;
    height:2.5rem;
    width:2.5rem;
    margin-top:.7rem;
  }
.qrCode_header_d{
  height:1rem;
  width:100%;
  background:#ED3C3C;
  font-size: 0.34rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
  .qrCode_header_set_up_d{
    font-size: .4rem;
  }
  .qrCode_box_d{
    height:7rem;
    width:7rem;
    margin:.7rem auto;
    background:#fff;
    padding-top:.5rem;
  }
  .qrCode_box_img_d{
    height:1.5rem;
    width:1.5rem;
    margin:0 auto;
  }
  .qrCode_box_img_d img{
    height:100%;
    width:100%;
    border-radius: 50%;
  }
  .qrCode_box_name_d{
    text-align: center;
    font-size:0.34rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(22,22,22,1);
  }
  .share_head_apper_sex{
    font-size:.32rem;
    color:#1296DB;
  }
  .share_head_anmailId_d{
    font-size:0.18rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(98,98,98,1);
    text-align: center;
  }
</style>
