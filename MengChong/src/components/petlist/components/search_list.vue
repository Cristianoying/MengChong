<template>
	<div id="search_list_b">
		<search-com></search-com>
		<div class="wrapper list_common_ul" ref="scrollWrapper">
			<ul class="content list_common_ulb">
				<li>333</li>
				<li>333</li>
				<li>333</li>
				<li>333</li>
				<li>333</li>
				<li>333</li>
				<li>333</li>
				<li>333</li>
				<li>333</li>
				<li>333</li>
				<li>333</li>
				<li>333</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
import Search from "./search.vue"
import BScroll from 'better-scroll'
export default{
	components:{
		"search-com":Search
	},
	mounted(){
		this.scroll = new BScroll(this.$refs.scrollWrapper,{
			click:true
		})
    }
}
</script>

<style scoped lang="scss">
#search_list_b{
	overflow: auto;

	width: 100%;
	height: 100%;
	background: #eee;
	.list_common_ul{
		width: 100%;
		height: 100%;
		overflow: hidden;
		margin-top: 1rem;
	}
	.list_common_ulb{
		display: flex;
		width: 100%;
		flex-wrap:wrap;
		justify-content:center;
		>li{
			width: 6.98rem;
			height: 2.3rem;
			background: #fff;
			margin-bottom: 0.18rem;
		}
	}
}


</style>