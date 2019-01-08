<template>
	<div id="petlist_list_b">
		<router-view>
			<ul class="petlist_list_tab_b" slot="pet_list_tab_b">
				<li v-for="(item,index) in tabs" 
					:key="index">
					<router-link :to="item.tolink">
						{{item.name}}
					</router-link>
				</li>
			</ul>
		</router-view>
	</div>
	
</template>

<script>
export default{
	data(){
		return{
			tabs:[
				{
					"name":"狗狗",
					"tolink":"/petlist/doglist"
				},
				{
					"name":"猫猫",
					"tolink":"/petlist/catlist"
				},
				{
					"name":"主粮",
					"tolink":"/petlist/foodlist"
				}
			]
		}
	},
}
</script>
<style scoped lang="scss">
.petlist_list_tab_b{
	padding:0 0.26rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 0.64rem;
	>li{
		text-align: center;
		font-family: PingFang-SC-Regular;
		width: 100%;
		color: #161616;
		font-size: 0.3rem;
		.router-link-active{
			color: #FF1515;
		}
		>a{
			display: block;
			width: 100%;
			height: 100%;
		}
	}
}
</style>