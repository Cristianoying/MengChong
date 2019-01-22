<template>
    <div class="dycont">
        <div class="kong">

        </div>
        <div class="navs">
            <h4>评论</h4>
            <button style="padding:0">谁赞过</button>
        </div>
        <div class="list">
            <div class="list_one" v-for="(item,index) in mockoneList">
                <img :src="item.headimg" alt="">
                <dl>
                    <dt>{{item.username}}</dt>     
                    <dd>{{item.contents}}</dd>     
                </dl>
                <h3>22小时前</h3>
            </div> 
        </div>
        <div class="list">
            <div class="list_one" v-for="(item,index) in mockoneList" v-if="index=0">
                <img :src="item.headimg" alt="">
                <dl>
                    <dt>{{item.username}}</dt>     
                    <dd>{{contents}}</dd>     
                </dl>
                <h3>22小时前</h3>
            </div> 
        </div>
    </div>
</template>
<script>
import Vuex from "vuex";
export default {
    computed:{
         ...Vuex.mapState({
           dynamicList:state=>state.select.dynamicList
        }),
        ...Vuex.mapState({
           mockoneList:state=>state.select.mockoneList
        }),
    },
    data(){
        return{
            contents:""
        }
    },
     
}
</script>
<style scoped>
    .dycont{
        width:100%;
        border-radius:10px;
    }
    .kong{
        width:100%;
        height:.18rem;
        background: #eeeeee;
    }
    .navs{
        width:100%;
        height:.5rem;
        background: white;
        overflow: hidden;
    }
    .navs h4{
        font-size:.18rem;
        font-weight:400;
        color:black;
        line-height:.5rem;
        float:left;
        margin:0 0 0 .36rem;
    }
    .navs button{
        width:1rem;
        height:.5rem;
        background:rgba(222,222,222,1);
        opacity:0.3;
        border-radius:10px;
        float:right;
        font-size:.18rem;
        font-weight:400;
        color:black;
        margin:.02rem .36rem 0 0;
        border:none;
    }
    
    .list{
        width:100%;
        background: white;
        overflow: hidden;
    }
    .list_one{
        width:100%;
        height:1.4rem;
        margin:.15rem 0;
    }
    .list_one img{
        width:1.1rem;
        height:1.1rem;
        float:left;
        margin:0 0 0 .26rem;
    }
    .list_one dl{
        float:left;
        margin:.35rem 0 0 .21rem;
    }
    .list_one dl dt{
        font-size: .3rem;
        font-weight:400;
        color:rgba(22,22,22,1);
       
    }
    .list_one dl dd{
        font-size: .22rem;
        font-weight:400;
        color:rgba(98,98,98,1);
        margin:.1rem 0 0 0 ;
        width:4.6rem;
    }
    .list_one h3{
        float:right;
        font-size:.24rem;
        font-weight:400;
        color:rgba(98,98,98,1);
        margin:.5rem .30rem 0 0 ;
    }
</style>