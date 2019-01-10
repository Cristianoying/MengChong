<template>
	<div id="petlist_b">
		<search-com></search-com>
		<div class="wrapper main_height_b" ref="scrollWrapper">
			<lists-com class="content scrollContent_b"></lists-com>
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

<style lang="scss" scoped>
#petlist_b{
	background: #eee;
	width: 100%;
	height: 100%;
	.main_height_b{
		height: 100%;
		position: fixed;
		overflow: hidden;
		top: 1.06rem;
		left: 0;
		width: 100%;
		.scrollContent_b{
			padding-bottom: 2rem;
		}
	}
}

</style>