<template>
	<div id="cat_list_b">
		<catbanner-com></catbanner-com>
		<slot name="pet_list_tab_b"></slot>
		<ul class="list_common_ulb">
			<li>222</li>
			<li>222</li>
			<li>222</li>
			<li>222</li>
			<li>222</li>
			<li>222</li>
			<li>222</li>
			<li>222</li>
			<li>222</li>
			<li>222</li>
			<li>222</li>
			<li>33</li>
			<li>112211</li>
			<li>33</li>
			<li>112211</li>
			<li>33</li>
		</ul>
	</div>
</template>

<script>
import Catbanner from "./components/banner_cat.vue"
export default{
	data(){
		return{
			lists:[{
				id:"1",
				name:""
			},{
			
			},{},{}]
			
		}
	},
	components:{
		"catbanner-com":Catbanner
	}
}
</script>

<style lang="scss" scoped>
#cat_list_b{
	padding: 0 0.26rem 0;
	.list_common_ulb{
		display: flex;
		width: 100%;
		flex-wrap:wrap;
		justify-content:space-between;
		>li{
			width: 3.3rem;
			height: 3.8rem;
			background: #fff;
			margin-bottom: 0.38rem;
		}
	}
}
</style>