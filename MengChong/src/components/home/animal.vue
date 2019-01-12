<template>
    <div id="animalDetail">
        <div class="animalHeader">
            <img src="../../../static/home_w/sy_ht_w/tp_ht_4@3x.png" alt="">
            <p>
              <img src="../../../static/home_w/sy_slices_w/jian.png" alt="">
              <em>分享</em>
            </p>
        </div>
        <div class="animakMain_w">
            <div>
                <img src="../../../static/home_w/sy_ht_w/tp_ht_4@3x.png" alt="">
            </div> 
            <h1>阿花</h1>
            <p>
                <b>赞 30w</b>
                <strong>关注 1</strong>
                <span>粉丝 2w</span>
            </p>
        </div>
        <div class="animakMainKon_w">
            <h2>动态</h2>
            <ul>
                <li>
                    <p>
                        <i>25</i>
                        <em>12月</em>
                    </p>
                    <img src="../../../static/home_w/sy_ht_w/tp_ht_4@3x.png" alt="">
                    <span>圣诞快乐~~</span>
                </li>

                <li>
                    <p>
                        <i>25</i>
                        <em>12月</em>
                    </p>
                    <img src="../../../static/home_w/sy_ht_w/tp_ht_4@3x.png" alt="">
                    <span>圣诞快乐~~</span>
                </li>

                <li>
                    <p>
                        <i>25</i>
                        <em>12月</em>
                    </p>
                    <img src="../../../static/home_w/sy_ht_w/tp_ht_4@3x.png" alt="">
                    <span>圣诞快乐~~</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
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
</style>

