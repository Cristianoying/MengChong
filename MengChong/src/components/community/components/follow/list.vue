<template>
    <div class="follow_a">
        <div class="list_a" v-for="(item,index) in selectList">
             <div class="top" >
                 <router-link to="/animal">
                      <img :src="item.headimg" alt="">
                 </router-link>
               
                <h3>{{item.username}}</h3>
                <span>一天前</span>
            </div>
            <div class="cont">
                <p>在丑也要过节啊</p>
                <img :src="item.images" class="datu">
            </div>
            <div class="laud">
                <img :src="item.zanimg" @click="handleAddnum(index,item.id)">
                <span>{{item.zannum}}</span>
                <img :src="item.pinlunimg" @click="handlePin(item.id)">
                <span>{{item.lunnum}}</span>
            </div>
        </div>
        <div class="kong">

        </div>
    </div>
</template>
<script>
import Vuex from "vuex";
import axios from "axios";
export default {
    data(){
        return{
            flag:false
        }
    },
    computed:{
        ...Vuex.mapState({
           selectList:state=>state.select.selectList
        })
    },
    methods:{
        handleAddnum(index,id){
            this.flag=!this.flag;
            if(this.flag==true){
                this.selectList[index].zannum=(this.selectList[index].zannum)/1+1
            //    console.log(this.selectList)
            }else(
                this.selectList[index].zannum=(this.selectList[index].zannum)/1-1
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
        }
    }
}
</script>
<style scoped>
    .follow_a{
        width:100%;
        background: #EEEEEE;
    }
    .list_a{
        background:white;
        margin-top:.17rem;
        overflow: hidden;
    }
    .top{
        width:100%;
        height:1.3rem;
        background: white;
        overflow: hidden;
        margin-top:.1rem;
    }
    .list_a .top img{
        width:1.1rem;
        height:1.1rem;
        background: white;
        margin:.1rem 0 0 .25rem;
        float:left
    }
    .list_a .top h3{
        float:left;
        margin:0 0 0 .17rem;
        font-size:.3rem;
        font-weight:400;
        color:rgba(22,22,22,1);
        line-height: 1.3rem
    }
    .list_a .top span{
        float:right;
        font-size:.24rem;
        color:rgba(22,22,22,1);
        
        background: white;
        border-radius:10px;
        margin:.54rem .38rem 0 0 ;
    }
     p{
       margin:0 0 0 .27rem;
       font-size:.28rem;
       font-weight:400;
        color:rgba(22,22,22,1);
        line-height:.7rem;
    }
    .cont img{
        width:4.62rem;
        height:4.62rem;
        margin-left:.26rem;
    }
     .laud{
        float:right;
        background: white;
        display: flex;
         margin:.22rem .3rem .3rem 0 ;
    }
    .laud img{
        width:.32rem;
        height:.32rem;
        margin:0 0.1rem 0 .3rem;
        align-items: center
    }
    .kong{
        height:26vw;
        width:100%;
    }
</style>