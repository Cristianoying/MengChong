<template>
	<div id="searchpage_b">
		<search-com></search-com>
		<searchhistory-com></searchhistory-com>
		<searchrecommend-com></searchrecommend-com>
	</div>
</template>

<script>
import Searchhistory from './searchpage/searchhistory.vue'
import Searchrecommend from './searchpage/searchrecommend.vue'
import Search from "./search.vue"
export default {
	components:{
		"searchhistory-com":Searchhistory,//()=>import('./searchpage/searchhistory.vue'),
		"searchrecommend-com":Searchrecommend,//()=>import('./searchpage/searchrecommend.vue'),
		"search-com":Search,
	},
	data(){
		return{
			
		}
	}
}
</script>

<style lang="scss" scoped>

</style