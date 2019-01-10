<template>
	<div id="banner_cat_b">
		<div class="swiper-container" ref="bannerCat">
			<div class="swiper-wrapper">
					<div class="swiper-slide">
						<router-link to="/goods_details_b/goods_intro">
							<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3326913061,1172475010&fm=26&gp=0.jpg" alt="" />
						</router-link>
					</div>
					<div class="swiper-slide">
						<router-link to="/goods_details_b/goods_intro">
							<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547029108756&di=11b88c13fb7202f9be84cbc50e85e8b6&imgtype=0&src=http%3A%2F%2Fpic1.58cdn.com.cn%2Fp1%2Fbig%2Fn_v2733e7b48959643e893a8db698babb719.jpg" alt="" />
						</router-link>
					</div>
					<div class="swiper-slide">
						<router-link to="/goods_details_b/goods_intro">
							<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=240362150,1387017548&fm=26&gp=0.jpg" alt="" />
						</router-link>
					</div>
			</div>
		</div>
		<!-- <mt-swipe-cat :show-indicators="false">
		  <mt-swipe-item-cat>
			<router-link to="/goods_details_b/goods_intro">
				<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3326913061,1172475010&fm=26&gp=0.jpg" alt="" />
			</router-link>
		  </mt-swipe-item-cat>
		  <mt-swipe-item-cat>
		  	<router-link to="/goods_details_b/goods_intro">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547029108756&di=11b88c13fb7202f9be84cbc50e85e8b6&imgtype=0&src=http%3A%2F%2Fpic1.58cdn.com.cn%2Fp1%2Fbig%2Fn_v2733e7b48959643e893a8db698babb719.jpg" alt="" />
		  	</router-link>
		  </mt-swipe-item-cat>
		  <mt-swipe-item-cat>
		  	<router-link to="/goods_details_b/goods_intro">
				<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=240362150,1387017548&fm=26&gp=0.jpg" alt="" />
		  	</router-link>
		  </mt-swipe-item-cat>
		</mt-swipe-cat> -->
	</div>
</template>

<script>
// import { Swipe, SwipeItem } from 'mint-ui';
import Swiper from 'swiper';
export default{
	// components:{
	// 	"mt-swipe-cat":Swipe,
	// 	"mt-swipe-item-cat":SwipeItem
	// }
	mounted(){
		setTimeout(()=>{
			new Swiper(this.$refs.bannerCat,{
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
#banner_cat_b{
	width: 6.98rem;
	height: 3.12rem;
	background: #fff;
	img{
		width: 6.98rem;
		height: 3.12rem;
	}
}
</style>