<template>
    <div class="banner_a">
        <div class="swiper-container banner-container" ref="banner_a">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in selectList">
                    <img :src="item.lunimg" :alt="item.index">
                </div>
               
            </div>
            <div class="swiper-pagination banner-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper";
import Vuex from "vuex";
export default {
    computed:{
         ...Vuex.mapState({
            selectList:state=>state.select.selectList
        })
    },
    mounted(){ 
        // this.$nextTick(()=>{
        // })
        setTimeout(()=>{
            new Swiper(this.$refs.banner_a,{
                loop:true,
                autoplay:{
                    disableOnInteraction:false,
                },
                preventClicks:false,
            })
        },300)
    }
}
</script>

<style lang="">
    .banner-container img{
        width:100%;
        height:3.37rem;
    }
</style>