<template>
	<div id="cat_list_b" class="list_common_b">
		<catbanner-com></catbanner-com>
		<slot name="pet_list_tab_b"></slot>
		<ul class="list_common_ulb">
			<li>222</li>
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

<style lang="scss">

</style>