<template>
    <div id="topicTitleHeader_w">
        <img src="../../../../static/home_w/sy_slices_w/bgn_cy_1@3x.png">
        <div @click="handelBackLiat()">
            <img src="../../../../static/home_w/sy_slices_w/jian.png">
        </div>
        <p>
            <img src="../../../../static/home_w/sy_slices_w/bn_list_2@2x.png">
        </p>
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
    methods:{
         handelBackLiat(){
             this.$router.go(-1);
         }
    }
}
</script>
<style scoped>
#topicTitleHeader_w{
    width: 100%;
    height: 3.97rem;
}
#topicTitleHeader_w>img{
    width: 100%;
    height: 3.97rem;
}
#topicTitleHeader_w>div{
    width: 1rem;
    height: 1rem;
    position: fixed;
    top:0.64rem;
    left:0.26rem;
    z-index: 2;
}
#topicTitleHeader_w>div>img{
    width: 0.22rem;
    height: 0.4rem;
}
#topicTitleHeader_w>p{
    width: 100%;
    height: 3.97rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
}
#topicTitleHeader_w>p>img{
    width: 100%;
    height: 3.97rem;
}
</style>


