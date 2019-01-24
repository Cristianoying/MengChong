<template>
    <div id="receive_d">
      <mt-header title="我的收获地址" class="receive_set_up_d">
        <div @click="fn_d()" slot="left"><</div>
      </mt-header>
      <div class="receive_list_d">
          <ul class="receive_list_ul_d">
            <li v-for="(item,index) in recemg_d" class="receive_list_li_d">
              <p class="receive_list_li_pone_d">
                <span class="receive_list_li_pone_span_d">{{item.name}}</span>
                <span class="receive_list_li_pone_spanone_d">{{item.tel}}</span>
              </p>
              <p class="receive_list_li_ptwo_d">
                {{item.province}}{{item.receplace}}
              </p>
              <div class="receive_choise_d" v-if="flag_d" @click="choiceIndex(item.placeId)">
                选择
              </div>
              <div class="receive_updata_d" v-if="!flag_d" @click="updateReceiveMessage_d(item.placeId)">
                修改
              </div>
            </li>
          </ul>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import Vuex from 'vuex'
    export default {
        name: "index",
        data(){
          return{
            flag_d:true,
          }
        },
        created(){
          this.$store.dispatch("mine/getReceiveList_d")
        },
      beforeRouteEnter(to,from,next){
        if(from.name=="personalinfo"){
          next((em)=>{
            em.flag_d=false;
          });
        }
        else{
          next((em)=>{
            em.flag_d=true;
          });
        }
      },
      computed:{
        ...Vuex.mapState({
          recemg_d:state=>{
            return state.mine.recemg_d
          }
        })
      },
      methods:{
        fn_d(){
          this.$router.go(-1)
        },
        choiceIndex(index){
          // console.log(index);
          this.$store.commit("mine/changePlaceIndexMutation_d",index)
          this.$router.go(-1);
        },
        updateReceiveMessage_d(index){
          this.$router.push({name:"changereceplace",query:{id:index}})
        }
      }
    }
</script>

<style scoped>
  .receive_updata_d{
    height:.4rem;
    width:1rem;
    font-size:.34rem;
    position: absolute;
    top:.5rem;
    right:.1rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
  }
  .receive_choise_d{
    height:.4rem;
    width:1rem;
    font-size:.34rem;
    position: absolute;
    top:0.5rem;
    right:.1rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
  }
  .receive_list_li_pone_span_d{
      font-size:.34rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
  }
  .receive_list_li_pone_spanone_d{
    font-size:.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
  }
  .receive_list_li_pone_d,.receive_list_li_ptwo_d{
    width:5.5rem;
  }
  .receive_list_li_ptwo_d{
    font-size:.34rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
  }
  .receive_list_li_d{
    height:1.4rem;
    padding-top:.2rem;
    padding-left:.3rem;
    width:100%;
    background: #ffffff;
    margin:.5rem 0;
    position: relative;
  }
.receive_set_up_d{
  height:1rem;
  width:100%;
  background:#ED3C3C;
  font-size:.34rem;
  font-family:PingFang-SC-Regular;
  font-weight:800;
}
</style>
