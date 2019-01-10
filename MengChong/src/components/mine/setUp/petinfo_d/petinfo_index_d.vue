<template>
    <div id="petinfo_index_d">
      <mt-header title="个人中心" class="petinfo_header_d">
        <router-link :to="{name:'mine'}" slot="left" class="petinfo_header_set_up_d">&lt;</router-link>
      </mt-header>
      <div class="petinfo_petappear_d">
        <div class="petinfo_petappear_img_d">
          <img :src="petinfo_d.petPhoto" alt="">
        </div>
      </div>
      <ul class="petinfo_petinfo_d">
        <li class="petinfo_info_d">
          <span class="petinfo_info_span_d">
              宠物昵称
          </span>
          <span class="petinfo_info_span_two_d">
              {{petinfo_d.petName}}
          </span>
        </li>
        <li class="petinfo_info_d">
          <span class="petinfo_info_span_d">
              性别
          </span>
          <span class="petinfo_info_span_two_d">
            {{petinfo_d.petSex}}
          </span>
        </li>
        <li class="petinfo_info_d">
          <span class="petinfo_info_span_d">
              品种
          </span>
          <span class="petinfo_info_span_two_d">
            {{petinfo_d.petKind}}
          </span>
        </li>
        <li class="petinfo_info_d">
          <span class="petinfo_info_span_d">
              生日
          </span>
          <span class="petinfo_info_span_two_d">
{{petinfo_d.petBirthday}}
          </span>
        </li>
        <li class="petinfo_info_d">
          <span class="petinfo_info_span_d">
              绝育情况
          </span>
          <span class="petinfo_info_span_two_d">
{{petinfo_d.petSterilState}}
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
  import Vuex from 'vuex'
    export default {
        name: "petinfo_index_d",
      created(){
          this.$store.dispatch("mine/getPetInfoActions_d");
      },
      computed:{
        ...Vuex.mapState({
          petinfo_d:state=>state.mine.petinfo_d
        })
      }
    }
</script>

<style scoped>
.petinfo_header_d{
  height:1rem;
  background:#ED3C3C;
  font-size:0.34rem;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(255,255,255,1);
}
  .petinfo_petappear_d{
    height:2rem;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background:#fff;
  }
  .petinfo_petappear_img_d{
    height:1.6rem;
    width:1.6rem;
  }
  .petinfo_petappear_img_d img{
    height:100%;
    width:100%;
    border-radius: 50%;
  }
  .petinfo_info_d{
    height:1rem;
    width:100%;
    background:#fff;
    margin-top:.05rem;
position: relative;
  }
  .petinfo_info_span_d{
    position: absolute;
    left:.1rem;
    top:.1rem;
    line-height:.8rem;
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(22,22,22,1);
  }
  .petinfo_info_span_two_d{
position: absolute;
    right:.1rem;
    top:.1rem;
    line-height: .8rem;
    font-size:0.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(22,22,22,1);
  }
</style>
