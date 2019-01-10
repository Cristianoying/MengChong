<template>
	<div id="banner_food_b">
		<mt-swipe-food :show-indicators="false">
		  <mt-swipe-item-food>
			<router-link to="goods_details_b/goods_intro">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547623953&di=bb451bc2195ad451dd9a7c71541119b7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b4b35adee2baa80120927be2896d.jpg%401280w_1l_2o_100sh.jpg"/>
			</router-link>
		  </mt-swipe-item-food>
		  <mt-swipe-item-food>
		  	<router-link to="goods_details_b/goods_intro">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547029225594&di=2ae9f53f1d94daad1897b4aeec9f8626&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn00%2F450%2Fw800h450%2F20180704%2F3fae-hevauxi9139999.jpg"/>
			</router-link>
		  </mt-swipe-item-food>
		  <mt-swipe-item-food>
		  	<router-link to="goods_details_b/goods_intro">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547029265848&di=e07ce6e85781e4c4c1e0552ff2a16b6b&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Fsmccloud%2Frecom%2F2015%2F11%2F14%2F144743558630899114.JPEG"/>
			</router-link>
		  </mt-swipe-item-food>
		</mt-swipe-food>
	</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default{
	components:{
		"mt-swipe-food":Swipe,
		"mt-swipe-item-food":SwipeItem
	}
}
</script>

<style scoped lang="scss">
#banner_food_b{
	width: 6.98rem;
	height: 3.12rem;
	background: #fff;
	img{
		width: 6.98rem;
		height: 3.12rem;
	}
}
</style>