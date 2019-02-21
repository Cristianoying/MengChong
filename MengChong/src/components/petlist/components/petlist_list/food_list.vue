<template>
	<div id="food_list_b">
		<foodbanner-com></foodbanner-com>
		<slot name="occupied"></slot>
		<slot name="pet_list_tab_b"></slot>
		<ul class="list_common_ulb">
				<li v-for="(item,index) in petFoodGoodsList" :key="index">
					<router-link :to="{path:'/goods_details_b/goods_detailed',query:{type:'food',id:item.id}}">
						<div class="food_left_b">
							<img v-lazy="item.foodPhoto"/>
						</div>
						<div class="food_right_b">
							<div class="food_righttitle_b">
								<div class="righttitleleft_b">品牌：</div>
								<div class="righttitleright_b">{{item.foodName}}</div>
							</div>
							<div class="right_bot_b">
								<p>¥ <span>{{item.foodNewPrice}}</span></p>
								<p><span>634</span>人购买</p>
							</div>
						</div>
					</router-link>
				</li>
		</ul>
	</div>
</template>

<script>
import Foodbanner from "./components/banner_food.vue"
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
		"foodbanner-com":Foodbanner
	},
	computed: {
		...Vuex.mapState({
			petFoodGoodsList:state=>state.petlist.petFoodGoodsList
		})
	},
	methods: {
		...Vuex.mapActions({
			getPetFoodGoodsList:'petlist/getPetFoodGoodsList'
		})
	},
	created() {
		this.getPetFoodGoodsList()
	},
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
			>a{
				display: flex;;
				width: 100%;
				height: 100%;
				>div{
					width: 100%;
					height: 100%;
				}
				.food_left_b{
					display: flex;
					justify-content: center;
					align-items: center;
					img{
						width: 2rem;
						height: 2rem;
					}
					image[lazy=loading] {
						width: 2rem;
						height: 2rem;
					}
				}
				.food_right_b{
					display: flex;
					padding-left: .3rem;
					padding-right: .2rem;
					flex-direction: column;
					height: 100%;
					.food_righttitle_b{
						width: 100%;			
						height: 1.15rem;
						font-size: .26rem;
						padding-top: .23rem;
						display: flex;
						.righttitleleft_b{
							width: 1.2rem;
							line-height: .5rem;

						}
						.righttitleright_b{
							width: 100%;
							line-height: .5rem;
						}
					}
					.right_bot_b{
						width: 100%;
						flex: 1;
						p:nth-child(1){
							color: #FF1515;
							font-weight: bold;
							font-size: .34rem;
							margin-bottom: .15rem;
							margin-top: .1rem;

						}
						p:nth-child(2){
							font-size: .2rem;
						}
					}
				}
			}
		}
	}
}
</style>