<template>
	<div id="petlist_list_b">
		<router-view>
			<div class="occupied_b" slot="occupied"  v-show="!tabFlag"></div>
			<ul class="petlist_list_tab_b" slot="pet_list_tab_b" v-show="tabFlag" ref="getOffsetTop">
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
	props:{
		tabFlag:Boolean
	},
	mounted() {
		this.$store.commit("petlist/getOffsetTop",this.$refs.getOffsetTop.offsetTop)
	},
}
</script>
<style scoped lang="scss">
.occupied_b{
	width: 100%;
	height: 0.8rem;
}
.petlist_list_tab_b{
	padding:0 0.26rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 0.8rem;
	>li{
		text-align: center;
		font-family: PingFang-SC-Regular;
		height: 100%;
		width: 100%;
		color: #161616;
		.router-link-active{
			color: #FF1515;
		}
		>a{
			display: block;
			width: 100%;
			height: 100%;
			line-height: .8rem;
			font-size: 0.3rem;
		}
	}
}
</style>