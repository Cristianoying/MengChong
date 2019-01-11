<template>
	<div id="searchrecommend_b">
		<h4>搜索推荐</h4>
		<ul class="searchrecommend_b">
			<router-link :to="{name:'search_list'}" 
						 v-for="(item,index) in beforHottag" 
						 :key="index"><li>{{item}}</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
import Vuex from "vuex"
export default{
	computed: {
		...Vuex.mapState({
    		beforHottag:state=>state.petlist.beforHottagAndHisearch.hottag
		})
	}
}
</script>

<style lang="scss" scoped>
	#searchrecommend_b{
		width: 100%;
		margin-top: 0.3rem;
		padding: 0 0.26rem;
		>h4{
			font-size: 0.3rem;
			margin-bottom: 0.3rem;
		}
		.searchrecommend_b{
			display: flex;
			width: 100%;
			flex-wrap: wrap;
			li{
				font-size: 0.28rem;
				height: 0.6rem;
				line-height: 0.6rem;
				padding: 0 0.2rem;
				border-radius: 0.3rem;
				background: #eee;
				margin-right: 0.2rem;
				margin-bottom: 0.3rem;
				color: #4A4A4A;
			}
		}
	}
</style>