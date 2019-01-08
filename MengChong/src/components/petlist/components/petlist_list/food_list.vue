<template>
	<div id="food_list_b">
		<foodbanner-com></foodbanner-com>
		<slot name="pet_list_tab_b"></slot>
		<ul class="list_common_ulb">
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
</template>

<script>
import Foodbanner from "./components/banner_food.vue"
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
		"foodbanner-com":Foodbanner
	}
}
</script>

<style lang="scss" scoped>
#food_list_b{
	padding: 0 0.26rem 0;
	.list_common_ulb{
		display: flex;
		width: 100%;
		flex-wrap:wrap;
		justify-content:space-between;
		>li{
			width: 6.98rem;
			height: 2.3rem;
			background: #fff;
			margin-bottom: 0.18rem;
		}
	}
}
</style>