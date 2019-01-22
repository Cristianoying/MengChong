<template>
    <div class="main_a">
        
         <div class="main_bottom" v-for="(item,index) in selectList" >
            <div class="top" >
                <img :src="item.headimg" alt="">
                <h3>{{item.username}}</h3>
                <h4>{{item.address}}</h4>
                <!-- <button @click="handleConcern()">{{concerns}}</button> -->
                <input type="button" :value="concerns" @click="handleConcern($event)" class="button">
            </div>
            <div class="cont">
                <p>在丑也要过节啊</p>
            <router-link :to="'/community/dynamic?id='+item.id"><img :src="item.images" class="datu"></router-link>
            </div>
            <div class="navigation">
                <img :src="item.smallimg1" alt="">
                <img :src="item.smallimg2" alt="">
                <img :src="item.smallimg3" alt="">
                <span>{{item.zan}}</span>
            </div>
            <div class="laud">
                <img :src="item.zanimg" alt="" @click="handleZan()">
               
                <img :src="item.pinlunimg" alt="">
               
                <img :src="item.enjoyimg" alt="">
            </div>
            <div class="botpin">
                <span>{{item.twousername}}</span>:<span>{{item.twocontent}}</span><br/>
                <span>{{item.thrusername}}</span>:<span>{{item.thrcontent}}</span>
            </div>
        </div> 
       <div class="kong">

       </div>
    </div>
</template>
<script>
import Vuex from "vuex";
export default {
    data(){
        return{
            id:"",
            flag:false,
            concerns:"关注"
        }
    },
    methods:{
        handleConcern(e){
            this.flag=!this.flag;
            //   console.log(!this.flag);
            if(this.flag==true){
                e.target.value="已关注"
            }else(
                e.target.value="关注"
            )
        },
        handleZan(){
            // console.log(this.selectList);
        }
    },
    computed:{
        ...Vuex.mapState({
           selectList:state=>state.select.selectList
        })
    },
   
    
}
</script>
<style scoped>
    .main_a{
        margin-top:.17rem;
    }
    
    .main_a .top{
        width:100%;
        height:1.3rem;
        background: white;
        overflow: hidden;
    }
    .main_a .top img{
        width:1.1rem;
        height:1.1rem;
        background: white;
        margin:.1rem 0 0 .25rem;
        float:left
    }
    .main_a .top h3{
        float:left;
        margin:0 0 0 .17rem;
        font-size:.3rem;
        font-weight:400;
        color:rgba(22,22,22,1);
        line-height: 1.3rem
    }
    .main_a .top h4{
        float:left;
        margin:0 0 0 .22rem;
        font-size:.24rem;
        font-weight:400;
        color:rgba(98,98,98,1);
        line-height: 1.3rem
    }
    .main_a .top .button{
        float:right;
        width:1.2rem;
        height:.44rem;     
        font-size:.22rem;
        font-weight:bold;
        color:rgba(252,53,53,1);
        background: white;
        border:1px solid rgba(225,225,225,1);
        box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.3);
        border-radius:8px;
        margin:.1rem .27rem 0 0 ;
        outline: none
    }
    p{
       margin:0 0 0 .27rem;
       font-size:.28rem;
       font-weight:400;
        color:rgba(22,22,22,1);
        line-height:.7rem;
    }
    .navigation{
        background: white;
        display: flex;
        float:left;
        margin:.22rem 0 0 .25rem;
    }
    .navigation img{
        width:.5rem;
        height:.5rem;
        margin-right:.1rem;
    }
    .navigation span{
        font-size:.18rem;
        font-weight:400;
        color:rgba(75,75,75,1);
        line-height: .5rem;
    }
    .laud{
        float:right;
        background: white;
        display: flex; 
    }
    .laud img{
        width:.32rem;
        height:.32rem;
        margin:.32rem .3rem 0 0 ;
    }
    .datu{
        width:100%;
        height:4.82rem;
    }
    .cont{
        background:white;
    }
    .botpin{
        margin-top:.8rem;
        background: white;
        margin:.84rem 0 0 .25rem;
        padding-bottom:.2rem;
    }
    
    .main_bottom{
        overflow: hidden;
        background: white;
        margin-bottom:.2rem;
    }
    .kong{       
        width:100%;
        height:25vw;
    }
</style>