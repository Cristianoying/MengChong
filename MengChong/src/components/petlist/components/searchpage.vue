<template>
	<div id="searchpage_b">
		<div class="red_top_b"></div>
		<searchtitle-com></searchtitle-com>
		<searchhistory-com></searchhistory-com>
		<searchrecommend-com></searchrecommend-com>
	</div>
</template>

<script>
import Searchtitle from './searchpage/searchtitle.vue'
import Searchhistory from './searchpage/searchhistory.vue'
import Searchrecommend from './searchpage/searchrecommend.vue'
export default {
	components:{
		"searchtitle-com":Searchtitle,//()=>import('./searchpage/searchtitle.vue'),
		"searchhistory-com":Searchhistory,//()=>import('./searchpage/searchhistory.vue'),
		"searchrecommend-com":Searchrecommend//()=>import('./searchpage/searchrecommend.vue'),
	}
}
</script>

<style lang="scss" scoped>
.red_top_b{
	width: 100%;
	height: 0.4rem;
	background:#E83F39 ;
}
</style>