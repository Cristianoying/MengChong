<template>
	<div id="cat_list_b">
		<catbanner-com></catbanner-com>
		<slot name="occupied"></slot>
		<slot name="pet_list_tab_b"></slot>
		<ul class="list_common_ulb">
			<li v-for="(item,index) in catGoodsList" :key="index">
				<router-link :to="{path:'/goods_details_b',query:{type:'cat',id:item.id}}">
					<img class="pet_pic_b" v-lazy="item.catPhoto"/>
					<div class="cat_price_b">¥ <span>{{item.catPrice}}</span></div>
				</router-link>
				<div class="cat_message_b">
					<p class="cat_kind_b">种类：<span>{{item.catName}}</span></p>
					<p class="cat_local_b"><i class="iconfont icon_loc_b">&#xe685;</i>
						<span>北京</span>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import Vue from "vue"
import Catbanner from "./components/banner_cat.vue"
//懒加载
import Vuex from "vuex"
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
export default{
	data(){
		return{
		
		}
	},
	components:{
		"catbanner-com":Catbanner
	},
	computed: {
		...Vuex.mapState({
			catGoodsList:state=>state.petlist.catGoodsList
		})
	},
	methods: {
		...Vuex.mapActions({
			getCatGoodsList:'petlist/getCatGoodsList'
		})
	},
	created() {
		this.getCatGoodsList()
	},
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
			img{
				width: 3.1rem;
				height: 3.1rem;
				border-radius: 0.1rem;
			}
			image[lazy=loading] {
				width: 3.1rem;
				height: 3.1rem;
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