<template>
	<div id="food_list_b" class="list_common_b">
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

<style lang="scss">

</style>