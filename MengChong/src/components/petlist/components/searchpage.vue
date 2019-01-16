<template>
	<div id="searchpage_b">
		<search-com></search-com>
		<searchhistory-com></searchhistory-com>
		<searchrecommend-com></searchrecommend-com>
	</div>
</template>

<script>
import Vuex  from "vuex"
import Searchhistory from './searchpage/searchhistory.vue'
import Searchrecommend from './searchpage/searchrecommend.vue'
import Search from "./search.vue"
export default {
	components:{
		"searchhistory-com":Searchhistory,//()=>import('./searchpage/searchhistory.vue'),
		"searchrecommend-com":Searchrecommend,//()=>import('./searchpage/searchrecommend.vue'),
		"search-com":Search,
	},
	computed: {
		...Vuex.mapState({
			beforHottagAndHisearch:state=>state.petlist.beforHottagAndHisearch
		})
	},
	methods: {
		...Vuex.mapActions({
			getBeforHottagAndHisearch:"petlist/getBeforHottagAndHisearch"
		}),
		
	},
	created(){
		this.getBeforHottagAndHisearch()
		
	},
	beforeRouteEnter (to, from, next) {
		//console.log(to,from)
		// if( from != "/search_list" ){
		// 	this.$store.commit("petlist/searchPageFromRouter",from)
		// }
		next()
	}
}
</script>

<style lang="scss" scoped>

</style