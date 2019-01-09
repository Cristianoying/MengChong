<template>
	<div id="cat_list_b">
		<catbanner-com></catbanner-com>
		<slot name="pet_list_tab_b"></slot>
		<ul class="list_common_ulb">
			<li>
				<router-link to="/goods_details_b"><img src="../../../../../static/petlish_b_img/20190108155255.jpg" class="pet_pic_b"/>
				<div class="cat_price_b">¥ <span>10000</span></div></router-link>
				<div class="cat_message_b">
					<p class="cat_kind_b">种类：<span>英短-蓝白</span></p>
					<p class="cat_local_b"><i class="iconfont icon_loc_b">&#xe685;</i>
						<span>北京</span>
					</p>
				</div>
			</li>
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
			padding: 0.1rem;
			border-radius: 0.1rem;
			position: relative;
			.pet_pic_b{
				width: 3.1rem;
				height: 3.1rem;
				border-radius: 0.1rem;
			}
			.cat_price_b{
				position: absolute;
				right: 0.3rem;
				bottom: 0.7rem;
				color: #df2438;
				font-size: 0.4rem;
				font-weight: bold;
			}
			.cat_message_b{
				padding: 0 0.1rem;
				display: flex;
				justify-content: space-between;
				height: 0.5rem;
				line-height: 0.65rem;
			}
			.cat_local_b{
				display: flex;
				justify-content: center;
				.icon_loc_b{
					font-size: 0.22rem;
				}
				>span{
					font-size: 0.22rem;
				}
			}
		}
	}
}
</style>