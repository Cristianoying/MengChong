<template>
	<div id="banner_w">  
		<div class="swiper-container banner-container" ref="banner">
		    <div class="swiper-wrapper banner-wrapper">
		        <div class="swiper-slide banner-slide" v-for="(item,index) in banner_w">
		            <img :src="item.img"/>
		        </div>
		    </div>
        </div>
	</div>
</template>

<script type="text/javascript">
    import Vuex from "vuex";
    import Swiper from "swiper";
	export default{
		computed:{
			...Vuex.mapState({
				banner_w:state=>state.Home_w.banner_w,
			})
		},
		mounted() {
        //this.$nextTick  获取数据更新后的DOM结构 底层原理其实就是一个延迟器 10ms 如果nextTick不管用的时候用延迟器
	        setTimeout(()=>{
	            new Swiper(this.$refs.banner,{
	                //无缝轮播
	                loop:true,
	                autoplay: {
	                    //用户操作swiper后不关掉autoplay
	                    disableOnInteraction: false,
	                },
	                //防止触摸的时候跳转
	                //preventClicks : false,
	            })
	        },300)
        },
	}

</script>

<style scoped>
  
   #banner_w{
   	width: 100%;
   	height: 4rem;
    background:rgba(238,238,238,1);;
    display: flex;
    align-items:center ;
   }
   .banner-wrapper,.banner-wrapper,.banner-slide{
   	width: 100%;
   	height: 3.12rem;
   }
   .banner-slide img{
   	width: 100%;
   	height: 100%;
   }
   
</style>