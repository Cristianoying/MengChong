<template>
    <div class="stance">
        <div class="stancefor" v-for="(item,index) in selectList">
             <div class="top" >
                <router-link to="/animal">
                    <img :src="item.headimg" alt="">
                </router-link>
                <dl>
                    <dt>{{item.username}}</dt>
                    <dd>{{item.address}}</dd>
                </dl>
                <!-- <button @click="handleChange($event)">{{buttoncont}}</button> -->
                <!-- <input type="button" :value="buttoncont" @click="handleChange($event)" class="button"> -->
            </div>
            <div class="cont_a">   
                <router-link to="/community/dynamic">
                     <img :src="item.lunimg" class="datu">
                </router-link>
            </div>
            <div class="laud">
                <h5>{{item.entary1}}</h5>
                <h6>{{item.entary2}}</h6>
            </div>
            <!-- <div class="stanzan">
                <span>{{item.lunnum}}</span>
                <img class="img1" :src="item.pinlunimg" alt="">&nbsp;
                <span>{{item.zannum}}</span>
                <img class="img2" :src="item.zanimg" @click="handleAdd(index)">&nbsp;
            </div> -->
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
            buttoncont:"关注",
            flag:false
        }
    },
    computed:{
        ...Vuex.mapState({
           selectList:state=>state.select.selectList
        })
    },
    methods:{
        handleAdd(index){
            this.flag=!this.flag;
            if(this.flag==true){
                this.selectList[index].zannum=(this.selectList[index].zannum)/1+1
            }else(
                this.selectList[index].zannum=(this.selectList[index].zannum)/1-1
            )
        },
        handleChange(e){
        //    console.log(e.target.value);
           
           this.flag=!this.flag;
            if(this.flag==true){
                e.target.value="已关注"
            }else(
                e.target.value="关注"
            )
        },
    }
}
</script>
<style scoped>
    .stance{
        background: #eeeeee;
        display: flex;
        flex-direction: column;
        align-items: center
    }
    .stancefor{
        width:6.98rem;
        background: white;
        margin-top:.18rem;
        border-radius:10px;
    }
    .stancefor .top{
        height:1.49rem;
    }
    .stancefor .top img{
        width:1rem;
        height:1rem;
        margin:.1rem 0 0 .1rem;
        float:left;
    }
    .stancefor .top dl{
        float:left;
        margin:.25rem 0 0 .18rem;
    }
    .stancefor .top dl dd{
        margin-top:.1rem;
    }
    .stancefor .top .button{
        width:1.2rem;
        height:.44rem;
        float:right;
        background:rgba(255,255,255,1);
        border:1px solid rgba(225,225,225,1);
        box-shadow:0px 1px 1px 0px rgba(0, 0, 0, 0.3);
        border-radius:8px;
        margin:.1rem .1rem 0 0;
        outline: none;
        color:rgba(252,53,53,1);
        font-size: .22rem;
    }
    .cont_a{
        height:3.26rem;
    }
    .cont_a img{
        width:100%;
        height:100%;
    }
    .laud{
        margin:.19rem;
    }
    .laud h5{
        font-size:22px;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:rgba(22,22,22,1);
    }
    .laud h6{
        font-size:18px;
        font-family:PingFang-SC-Regular;
        font-weight:bold;
        color:rgba(98,98,98,1);
    }
    .kong{
        width:100%;
        height:25vw;
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