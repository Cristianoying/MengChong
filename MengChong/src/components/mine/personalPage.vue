<template>
<div id="personalPage_d">
  <mt-header title="个人主页" class="personalInfo_d" v-if="personalInfo_d.userInfo">
    <router-link to="/mine/mineIndex" slot="left"><</router-link>
  </mt-header>
  <div class="perdonalPageWrapper">
    <div class="personalPage_content_d">
      <div class="personalPage_header_d" v-if="personalInfo_d.userInfo">
        <img :src="personalInfo_d.userInfo.userPhoto" alt=""/>
      </div>
      <div class="personalPage_header_appear_d" v-if="personalInfo_d.userInfo">
        <img :src="personalInfo_d.userInfo.userPhoto" alt=""/>
      </div>
      <div class="personalPage_personInfo_d" v-if="personalInfo_d.userInfo">
        <p class="personalPage_personInfo_one_d">
          {{personalInfo_d.userInfo.userName}}
        </p>
        <p class="personalPage_personInfo_two_d">
          <span>赞</span><span>{{personalInfo_d.likeNum}}</span>
          <span>评论</span><span>{{personalInfo_d.focusNum}}</span>
          <span>粉丝</span><span>{{personalInfo_d.fansNum}}</span>
        </p>
      </div>
      <div class="personalPage_petInfo_d" v-if="personalInfo_d.userInfo">
        <p class="personalPage_petInfo_p_d">我的宠物</p>
        <router-link :to="{name:'petinfo_index_d'}">
          <div class="personalPage_petInfo_div_d">
            <div class="personalPage_petInfo_div_img_d">
              <img :src="personalInfo_d.petInfo.petPhoto" alt="">
            </div>
            <div class="personalPage_petInfo_div_info_d">
              <p>{{personalInfo_d.petInfo.petName}}</p>
              <p>{{personalInfo_d.petInfo.petKind}}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="personalPage_dynInfo_d" v-if="personalInfo_d.userInfo">
        <p class="personalPage_dynInfo_title_d">
          个人动态
        </p>
        <ul class="personalPage_dynInfo_ul_d">
          <li class="personalPage_dynInfo_li_d"
              v-for="(item,index) in personalInfo_d.dynInfo">
            <router-link :to="{name:'dynamic',params:{id:item.dynId}}">
              <div class="personalPage_dynInfo_li_data_d">
                {{item.dynDate}}
              </div>
              <div class="personalPage_dynInfo_li_img_d">
                <img :src="item.dynPhoto" alt="">
              </div>
              <div class="personalPage_dynInfo_li_detail_d">
                {{item.artTitle}}
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Vuex from 'vuex'
    export default {
        name: "personal-page",
      created(){
        this.$store.dispatch("mine/getPersonalInfoActions_d");
      },
      computed:{
        ...Vuex.mapState({
          personalInfo_d: state => {
          return  state.mine.personalInfo_d
          }
        })
      },
      mounted(){
           var wrapper =document.querySelector(".perdonalPageWrapper")
           let Bscroll=new BScroll(wrapper,{
              click:true
           })
      }
    }
</script>

<style scoped>
#personalPage_d{
  height:100%;
  width:100%;
}
.personalInfo_d{
  height:1rem;
  width:100%;
  background:#ED3C3C;
  font-size:0.34rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
  position: fixed;
  top:0;
  left:0;
  z-index: 5;
}
  .personalPage_header_d{
    height:4rem;
    width:100%;
  }
  .personalPage_header_d img{
    height:100%;
    width:100%;
  }
  .personalPage_header_appear_d{
    height:1.5rem;
    width:1.5rem;
    position:absolute;
    top:3.2rem;
    left:.5rem;
    background: #ffffff;
  }
  .personalPage_header_appear_d img{
    height:100%;
    width:100%;
    border-radius: 50%;
  }
  .personalPage_personInfo_d{
    height:2rem;
    width:100%;
    padding-top:.8rem;
    background: #fff;
  }
  .personalPage_personInfo_one_d{
    padding-left:1rem;
    line-height:.4rem;
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(22,22,22,1);
  }
  .personalPage_personInfo_two_d{
    padding-left:.2rem;
    line-height:.4rem;
    font-size:0.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(98,98,98,1);
  }
  .personalPage_personInfo_two_d span{
    margin-right:.05rem;
  }
  .personalPage_petInfo_d{
    height:2rem;
    width:100%;
    background:#fff;
    margin-top:.3rem;
  }
  .personalPage_petInfo_p_d{
    height:.3rem;
    line-height:.4rem;
    font-size:.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(98,98,98,1);
  }
  .personalPage_petInfo_div_d{
    height:1.2rem;
    position: relative;
  }
  .personalPage_petInfo_div_img_d{
    height:1.2rem;
    width:1.2rem;
    position: absolute;
    top:.2rem;
    left:.3rem;
  }
  .personalPage_petInfo_div_img_d img{
    height:100%;
    width:100%;
    border-radius: 50%;
  }
  .personalPage_petInfo_div_info_d{
    position: absolute;
    top:.5rem;
    left:1.7rem;
  }
  .personalPage_petInfo_div_info_d p{
    line-height:.4rem;
  }
  .personalPage_dynInfo_d{
    background:#fff;
    margin-top:.3rem;
  }
  .personalPage_dynInfo_title_d{
    height:.7rem;
    text-align: center;
    font-size:.32rem;
    line-height:.7rem;
    font-weight: 800;
    border-bottom: 1px solid #eee;
  }
  .personalPage_dynInfo_li_d{
    height:2.7rem;
    width:100%;
  }
  .personalPage_dynInfo_li_data_d{
    height:2.7rem;
    padding-top:.3rem;
    width:2rem;
    float: left;
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(98,98,98,1);
  }
  .personalPage_dynInfo_li_img_d{
    padding-top:.3rem;
    height:2rem;
    width:2rem;
    float: left;
  }
  .personalPage_dynInfo_li_img_d img{
    height:100%;
    width:100%;
  }
  .personalPage_dynInfo_li_detail_d{
    float: left;
    margin-left:.2rem;
    padding-top:.3rem;
  }
  .perdonalPageWrapper{
    height:80%;
    width:100%;
    position: relative;
    top:1rem;
  }
</style>
