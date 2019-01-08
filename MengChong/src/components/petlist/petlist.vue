<template>
	<div id="petlist_b">
		<div class="top_red_b"></div>
		<search-com></search-com>
		<div class="wrapper main_height_b" ref="scrollWrapper">
			<lists-com class="content"></lists-com>
		</div>
	</div>
</template>

<script type="text/javascript">
import Search from "./components/search.vue"
import Lists from "./components/petlist_list.vue"
import BScroll from 'better-scroll'
export default{
	components:{
		"search-com":Search,
		"lists-com":Lists
	},
    mounted(){
		this.scroll = new BScroll(this.$refs.scrollWrapper,{
			click:true
		})
    }
}

</script>

<style lang="scss">
#petlist_b{
	background: #eee;
	width: 100%;
	height: 100%;
	.top_red_b{
		display: flex;
		top: 0;
		left: 0;
		width: 100%;
		height: 0.4rem;
		background: #E83F39;
	}
	.main_height_b{
		height: 100%;
		position: fixed;
		overflow: hidden;
		top: 1.46rem;
		width: 100%;
		.content{
			padding-bottom: 2.2rem;
		}
	}
}

</style>