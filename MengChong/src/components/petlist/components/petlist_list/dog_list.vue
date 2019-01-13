<template>
	<div id="dog_list_b">
		<dogbanner-com></dogbanner-com>
		<slot name="pet_list_tab_b"></slot>
		<ul class="list_common_ulb">
			<li v-for="(item,index) in dogGoodsList" :key="index">
				<router-link to="/goods_details_b">
					<img class="pet_pic_b" v-lazy="item.dogPhoto"/>
					<div class="dog_price_b">¥ <span>{{item.dogNowPrice}}</span></div>
				</router-link>
				<div class="dog_message_b">
					<p class="dog_kind_b">种类：<span>{{item.dogName}}</span></p>
					<p class="dog_local_b"><i class="iconfont icon_loc_b">&#xe685;</i>
						<span>北京</span>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>

import Dogbanner from "./components/banner_dog.vue"
//懒加载
import Vuex from "vuex"
import Vue from "vue"
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
export default{
	data(){
		return{
		}
	},
	components:{
		"dogbanner-com":Dogbanner
	},
	computed: {
		...Vuex.mapState({
			dogGoodsList:state=>state.petlist.dogGoodsList
		})
	},
	methods: {
		...Vuex.mapActions({
			getDogGoodsList:'petlist/getDogGoodsList'
		})
	},
	created() {
		this.getDogGoodsList()
	},
}
</script>

<style lang="scss" scoped>
#dog_list_b{
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
			// .pet_pic_b{
			// 	width: 3.1rem;
			// 	height: 3.1rem;
			// 	border-radius: 0.1rem;
			// }
			image[lazy=loading] {
				width: 3.1rem;
				height: 3.1rem;
				border-radius: 0.1rem;
			}
			.dog_price_b{
				position: absolute;
				right: 0.3rem;
				bottom: 0.7rem;
				color: #df2438;
				font-size: 0.4rem;
				font-weight: bold;
			}
			.dog_message_b{
				padding: 0 0.1rem;
				display: flex;
				justify-content: space-between;
				height: 0.5rem;
				line-height: 0.65rem;
			}
			.dog_local_b{
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