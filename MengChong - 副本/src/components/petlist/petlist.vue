<template>
	<div id="petlist_b">
		<div class="top_red_b"></div>
		<search-com></search-com>
		<lists-com></lists-com>
	</div>
</template>

<script type="text/javascript">
import Search from "./components/search.vue"
import Lists from "./components/petlist_list.vue"
export default{
	components:{
		"search-com":Search,
		"lists-com":Lists
	}
}

</script>

<style lang="scss">
#petlist_b{
	background: #eee;
	.top_red_b{
		width: 100%;
		height: 0.4rem;
		background: #E83F39;
	}
}

</style>