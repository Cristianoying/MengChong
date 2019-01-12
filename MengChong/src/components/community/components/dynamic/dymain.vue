<template>
    <div class="dymain">
       <div class="dymainfor" v-for="(item,index) in mockoneList">
            <div class="top" >
                <img :src="item.headimg" alt="">
                <dl>
                    <dt>{{item.username}}</dt>
                    <dd>{{item.address}}</dd>
                </dl>
                <i>{{item.address}}</i>
                <button>关注</button>
            </div>
            <div class="cont_a">   
                <img :src="item.shuoimg" class="datu">
                <img :src="item.shuoimg" class="datu">
                <img :src="item.shuoimg" class="datu">
                <img :src="item.shuoimg" class="datu">
                <img :src="item.shuoimg" class="datu">
                <img :src="item.shuoimg" class="datu">
            </div>
            <div class="stanzan">
                <span>16</span>
                <img class="img1" :src=item.img alt="">&nbsp;
                <span>10</span>
                <img class="img2" :src=item.zanimg alt="">&nbsp;
            </div>
       </div>
    </div>
</template>
<script>
import Vuex from "vuex";
export default {
    computed:{
        ...Vuex.mapState({
           selectList:state=>state.select.selectList,
           mockoneList:state=>state.select.mockoneList
        })
    },
     props:{
        main:String
    },
}

</script>
<style scoped>
    .dymain{
        widtH:100%;
        background:white;
        margin:.18rem 0 0 0;
    }
    .dymainfor{

        overflow: hidden;
    }
    .top{
        height:1.49rem;
    }
    .top img{
        width:1.1rem;
        height:1.1rem;
        margin:.1rem 0 0 .26rem;
        float:left;
    }
    .top dl{
        float:left;
        margin:.3rem 0 0 .18rem;
    }
    .top dl dt{
        font-size: .3rem;
        font-weight:400;
        color:rgba(22,22,22,1);
    }
    .top dl dd{
        margin-top:.1rem;
        font-size: .24rem;
        font-weight:400;
        color:rgba(98,98,98,1);
    }
    .top i{
        float:left;
        margin:.25rem 0 0 0 ;
        font-size: .25rem;
        font-style:normal;
        font-weight:400;
        color:rgba(98,98,98,1);
    }
    .top button{
        float:right;
        width:1.2rem;
        height:.44rem;
      
        background:rgba(255,255,255,1);
        border:1px solid rgba(225,225,225,1);
        box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.3);
        border-radius:8px;
        margin:.1rem .1rem 0 0;
    }
    .cont_a{
        margin-left:.26rem;
        height:4.72rem;
    }
    .cont_a img{
        width:2.26rem;
        height:2.26rem;
        float:left;
        margin:.1rem .1rem 0 0;
    }
     .stanzan{
         margin-top:.1rem;
     }
     .stanzan img,span{
        float:right;
        margin-right:.1rem;
    }
    .stanzan .img1{
        width:.31rem;
        height:.31rem;
    }
    .stanzan .img2{
        width:.37rem;
        height:.3rem;
    } 
</style>