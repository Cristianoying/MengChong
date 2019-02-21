<template>
    <div id="animalDetail">
        <div class="animalHeader">
            <img :src="personInfo.userInfo.userPhoto" alt="">
            <p>
              <img @click="handleBack()" src="../../../static/home_w/sy_slices_w/jian.png" alt="">
              <em @click="handleClick()">分享</em>
            </p>
        </div>
        <div class="animakMain_w">
            <div>
                <img :src="personInfo.userInfo.userPhoto" alt="">
            </div> 
            <h1>{{personInfo.userInfo.userName}}</h1>
            <p>
                <b>赞 {{personInfo.fansNum}}</b>
                <strong>关注 {{personInfo.focusNum}}</strong>
                <span>粉丝 {{personInfo.likeNum}}</span>
            </p>
        </div>
        <div class="animakMainKon_w">
            <h2>动态</h2>
            <ul>
                <li v-for="(item,index) in personInfo.dynInfo">
                    <p>
                        <i>{{item.day}}</i>
                        <em>{{item.month}} 月</em>
                    </p>
                    <img :src="item.dynPhoto" alt="">
                    <span>{{item.dynContent}}</span>
                </li>

                
               
            </ul>
        </div>
        <mt-popup
            v-model="popupVisible"
            position="bottom">
            <div class="feng">
                <img  @click="handleClickCan()" src="../../../static/home_w/sy_center_w/fengXiang.png"/>
                <button @click="handleClickCan()">取消</button>
            </div>
        </mt-popup>

    </div>
</template>

<script>
import { Popup } from 'mint-ui';


import Vuex from "vuex";
	export default{
        components:{
           // "mt-popup":Popup
        },
        data(){
            return{
                popupVisible:false,
            }
        },
		computed:{
			...Vuex.mapState({
				personInfo:state=>state.Home_w.personInfo,
			})
		},
		methods:{
			...Vuex.mapActions({
				personInfoHandle:"Home_w/personInfoHandle",
            }),
            handleBack(){
				this.$router.back();
            },
            handleClick(){
               // alert(1);
                this.popupVisible=true;

            },
            handleClickCan(){
                this.popupVisible=false;

            
            }
		},
		created(){
            let userId=this.$route.params.userId;
			this.personInfoHandle(userId);
		}
	}
</script>
<style scoped>
#animalDetail{
    width: 100%;
    height: 100%;
}
.animalHeader{
    width: 100%;
    height: 4.2rem;
}
.animalHeader>img{
    width: 100%;
    height: 4.2rem ;
}
.animalHeader>p{
    width: 100%;
    padding: 0 0.26rem;
    position: fixed;
    top: .64rem;
    height: .4rem;
    display: flex;
    justify-content: space-between;
}
.animalHeader>p>img{
    width: .22rem;
    height: .4rem;
}
.animalHeader>p>em{
    width: .7rem;
    font-style: normal;
    height: 100%;
    font-size:.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
}

.animakMain_w{
    width:100%;
    height:1.8rem;
    position: relative;
    float: left;
    }

.animakMain_w>div{
    width: 1.25rem;
    height: 1.24rem;
    background: #ffffff;
     border-radius: 50%;
     position:absolute;
     top: -.62rem;
     left: .26rem;
}
.animakMain_w>div>img{
     width: 1.25rem;
    height: 1.24rem;
    border-radius: 50%;
}
.animakMain_w>h1{
    width:.6rem;
    height:.32rem;
    font-size:.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(22,22,22,1);
    margin-top: .62rem;
    margin-left: .6rem;
    margin-bottom: .3rem;
}
.animakMain_w>p{
    width: 100%;
    height: .5rem;
    padding: 0rem .26rem;
    display: flex;
    justify-items: center;
}
.animakMain_w>p>b{
    font-weight: normal;
    font-size:.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(98,98,98,1);
}
.animakMain_w>p>strong{
   font-weight: normal;
    font-size:.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(98,98,98,1);
    margin-left: .2rem;
}
.animakMain_w>p>span{
   font-weight: normal;
    font-size:.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(98,98,98,1);
    margin-left: .2rem;
}
.animakMainKon_w{
    width: 100%;
    height: 7.87rem;
    padding: 0rem .26rem;
    margin-top: 1.8rem;
    border-top: .3rem solid #cccccc;
}
.animakMainKon_w>h2{
    height: .75rem;
    text-align: center;
    font-size:.28rem;
    line-height: .75rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(98,98,98,1);
}
.animakMainKon_w>ul{
    width: 100%;
    height:auto ;
}
.animakMainKon_w>ul>li{
    width: 100%;
    height: 1.7rem;
    display: flex;
}
.animakMainKon_w>ul>li>p{
    width: .9rem;
    height: .46rem;
    display: flex;
    flex-direction: column;
}
.animakMainKon_w>ul>li>p>i{
    font-style: normal;
    font-size:.3rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(98,98,98,1);
}
.animakMainKon_w>ul>li>p>em{
    font-style: normal;
    font-size:.18rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(98,98,98,1);
}
.animakMainKon_w>ul>li>img{
    width: 1.6rem;
    height: 1.6rem;
}
.animakMainKon_w>ul>li>span{
    font-size:.22rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(98,98,98,1);
    margin-left: .22rem;
}
.mint-popup-bottom{
    width: 100%;
}
.feng{
    width: 100%;
    height: 5.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap
}
.feng>img{
    width:100%;
    height: 80%;
}
.feng>button{
    width: 20%;
    border: none;
    font-size: .34rem;
    background: #ffffff;
}
</style>

