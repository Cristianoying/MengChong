<template>
    <div class="dytop">
        <h3 @click="handleback()"><</h3>
        <h4>动态详情</h4>
        <h5 @click="handlechannge()">...</h5>
        <mt-popup v-model="popupVisible" position="bottom" class="bottombar">
            <ul>
                <li class="one_a">分享</li>
                <li class="two_a">举报</li>
                <li class="three_a" @click="handleCancel()">取消</li>
            </ul>
        </mt-popup>
    </div>
</template>
<script>
import Vue from "vue";
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup)
export default {
    data(){
        return{
            popupVisible:false
        }
    },
     methods:{
         handlechannge(){
             
             this.popupVisible=true
         },
         handleback(){
             this.$router.go(-1);
         },
         handleCancel(){
              this.popupVisible=false
         }
     }
}
</script>
<style scoped>
    .dytop{
        width:100%;
        height:.88rem;
        display: flex;
        justify-content:space-around;
        align-items: center;
        background:#ED3C3C;
        color:white;
        position: relative;
        z-index: 5;
    }
    .dytop h3{
        font-size: .4rem;
        margin:0 0 0 -0.7rem;
    }
     .dytop h4{
         font-size: .35rem;
    }
    .dytop h5{
          font-size: .35rem;
          margin:0 -0.7rem .1rem 0 ;
    }
    .bottombar{
        width:100%;
        color:red;
        
    }
    .bottombar ul{
        width:100%;
        background:#808080;
    }
    .bottombar li{
        width:100%;
        height:.8rem;
        border-bottom:1px solid rgba(238,238,238,1);
        background: white;
        text-align: center;
        line-height: .8rem;
        font-size:.25rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(255,22,22,1);
    }
    .one_a{
        border-radius:10px 10px 0px 0px;
       
    }
     .two_a{
        border-radius:0 0 10px 10px;
    }
     .three_a{
        border-radius:10px 10px 0px 0px;
        margin-top:.2rem;
    }
</style>