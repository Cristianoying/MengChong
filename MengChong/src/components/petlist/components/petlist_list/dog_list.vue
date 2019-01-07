<template>
	<div id="dog_list_b" class="list_common_b">
		<dogbanner-com></dogbanner-com>
		<slot name="pet_list_tab_b"></slot>
		<ul class="list_common_ulb">
			<li>
				<img src=""/>
			</li>
			<li>22</li>
			<li>112211</li>
			<li>33</li>
			<li>112211</li>
			<li>33</li><li>112211</li>
			<li>33</li><li>112211</li>
			<li>33</li>
		</ul>
	</div>
</template>

<script>
import Dogbanner from "./components/banner_dog.vue"
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
		"dogbanner-com":Dogbanner
	}
}
</script>

<style lang="scss">
	.list_common_b{
		padding: 1.04rem 0.26rem 0;
		overflow: auto;
		height: 15rem;
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