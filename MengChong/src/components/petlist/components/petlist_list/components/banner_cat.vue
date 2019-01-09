<template>
	<div id="banner_car_b">
		<mt-swipe :show-indicators="false">
		  <mt-swipe-item>
			<router-link to="goods_details_b/goods_intro">
				<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3326913061,1172475010&fm=26&gp=0.jpg" alt="" />
			</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="goods_details_b/goods_intro">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547029108756&di=11b88c13fb7202f9be84cbc50e85e8b6&imgtype=0&src=http%3A%2F%2Fpic1.58cdn.com.cn%2Fp1%2Fbig%2Fn_v2733e7b48959643e893a8db698babb719.jpg" alt="" />
		  	</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="goods_details_b/goods_intro">
				<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=240362150,1387017548&fm=26&gp=0.jpg" alt="" />
		  	</router-link>
		  </mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
export default{
	
}
</script>

<style scoped lang="scss">
#banner_car_b{
	width: 6.98rem;
	height: 3.12rem;
	background: #fff;
	img{
		width: 6.98rem;
		height: 3.12rem;
	}
}
</style>