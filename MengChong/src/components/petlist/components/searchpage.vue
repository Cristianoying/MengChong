<template>
	<div id="searchpage_b">
		<searchhistory-com></searchhistory-com>
		<searchrecommend-com></searchrecommend-com>
	</div>
</template>

<script>
import Searchhistory from './searchpage/searchhistory.vue'
import Searchrecommend from './searchpage/searchrecommend.vue'
export default {
	components:{
		"searchhistory-com":Searchhistory,//()=>import('./searchpage/searchhistory.vue'),
		"searchrecommend-com":Searchrecommend//()=>import('./searchpage/searchrecommend.vue'),
	},
	data(){
		return{
			
		}
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