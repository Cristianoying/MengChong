<template>
    <div class="dymain">
       <div class="dymainfor" v-for="(item,index) in mockoneList" v-if="index==0">
            <div class="top" >
                    <img :src="item.headimg" alt="">
                <dl>
                    <dt>{{item.username}}</dt>
                    <dd>{{item.address}}</dd>
                </dl>
                <i>{{item.address}}</i>
                <!-- <button @click="handleDown(item.id)">关注</button> -->
                <input type="button" :value="concerns" @click="handleDown(item.id,$event)" class="button">
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
                <span>{{item.lunnum}}</span>
                <img class="img2" :src=item.img @click="handlePin(item.id)">&nbsp;
                <span>{{item.zannum}}</span>
                <img class="img1" :src=item.zanimg @click="handleAdd(item.id)">&nbsp;
            </div>
       </div>
    </div>
</template>
<script>
import Vuex from "vuex";
import axios from "axios";
export default {
     created(){
        this.Observer.$on("handleFollow",(params)=>{
             console.log(params)
            this.flag=params
        })
    },
    data(){
        return{
            flag:false,
            concerns:"关注"
        }
    },
    computed:{
        ...Vuex.mapState({
           selectList:state=>state.select.selectList,
           mockoneList:state=>state.select.mockoneList
        })
    },
     props:{
        main:String
    },
    methods:{
        handleAdd(id){
            this.flag=!this.flag;
            if(this.flag==true){
                this.mockoneList[0].zannum=(this.mockoneList[0].zannum)/1+1
            //    console.log(this);
            //    console.log(this.mockoneList)
            }else(
                this.mockoneList[0].zannum=(this.mockoneList[0].zannum)/1-1
            )
            axios.post("/like/change",{
                id:id
            }).then((data)=>{
                console.log(data);
            })
        },
        handlePin(id){
            axios.post("/dynamic/comment",{
                id:id
            }).then((data)=>{
                console.log(data);
            })
        },
        handleDown(id,e){
            this.flag=!this.flag;
            //   console.log(!this.flag);
            if(this.flag==true){
                e.target.value="已关注"
            }else(
                e.target.value="关注"
            )
            axios.post("/focus/change",{
                id:id
            }).then((data)=>{
                console.log(data);
            })
        }
    }
}

</script>
<style scoped>
    .dymain{
        widtH:100%;
        background:white;
        margin:.18rem 0 0 0;
        border-radius:10px;
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
    .top .button{
        float:right;
        width:1.2rem;
        height:.44rem;
        font-size: .22rem;
        color:rgba(252,53,53,1);
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
         padding-bottom:.2rem;
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