<template>
	<div id="banner_dog_b">
		<div class="swiper-container" ref="bannerDog">
			<div class="swiper-wrapper">
					<div class="swiper-slide">
						<router-link to="/goods_details_b/goods_intro">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547028439730&di=10c26c13e7a58b135cb7c543f8a8a8c1&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151003%2Fmp34205229_1443845035443_1_th.jpeg" alt="" />
						</router-link>
					</div>
					<div class="swiper-slide">
						<router-link to="/goods_details_b/goods_intro">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547028583674&di=77580e779b98623023e007101e4d1ff2&imgtype=0&src=http%3A%2F%2Fwww.dogmr.com%2FPublic%2Fattached%2Fimage%2F20160909%2F20160909040427_26892.jpg"/>
						</router-link>
					</div>
					<div class="swiper-slide">
						<router-link to="/goods_details_b/goods_intro">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547623358&di=7b4bc63a3bbf3fef89297ac42687ca6a&imgtype=jpg&er=1&src=http%3A%2F%2Fg1010.jinnong.cn%2Fa%2F20170424%2F636940%2F4817303928.jpg" alt="" />
						</router-link>
					</div>
			</div>
		</div>
		<!-- <mt-swipe :show-indicators="false">
		  <mt-swipe-item>
			<router-link to="/goods_details_b/goods_intro">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547028439730&di=10c26c13e7a58b135cb7c543f8a8a8c1&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151003%2Fmp34205229_1443845035443_1_th.jpeg" alt="" />
			</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/goods_details_b/goods_intro">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547028583674&di=77580e779b98623023e007101e4d1ff2&imgtype=0&src=http%3A%2F%2Fwww.dogmr.com%2FPublic%2Fattached%2Fimage%2F20160909%2F20160909040427_26892.jpg"/>
			</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/goods_details_b/goods_intro">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547623358&di=7b4bc63a3bbf3fef89297ac42687ca6a&imgtype=jpg&er=1&src=http%3A%2F%2Fg1010.jinnong.cn%2Fa%2F20170424%2F636940%2F4817303928.jpg" alt="" />
			</router-link>
		  </mt-swipe-item>
		</mt-swipe> -->
	</div>
</template>

<script>
//import { Swipe, SwipeItem } from 'mint-ui';
import Swiper from 'swiper';
export default{
	// components:{
	// 	"mt-swipe":Swipe,
	// 	"mt-swipe-item":SwipeItem
	// }
	mounted(){
		setTimeout(()=>{
			new Swiper(this.$refs.bannerDog,{
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
  }
}
</script>

<style scoped lang="scss">
#banner_dog_b{
	width: 6.98rem;
	height: 3.12rem;
	background: #fff;
	img{
		width: 6.98rem;
		height: 3.12rem;
	}
}
</style>