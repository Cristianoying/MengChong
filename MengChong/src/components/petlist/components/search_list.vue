<template>
	<div id="search_list_b">
			<search-com></search-com>
		<div class="wrapper list_common_ul" 
			 ref="scrollWrapper">
			<ul class="list_common_ulb">
				<li v-for="(item,index) in goodsList" :key="index">
					<router-link to="/goods_details_b/goods_detailed">
						<div class="food_left_b">
							<img v-lazy="item.goodsPhoto"/>
						</div>
						<div class="food_right_b">
							<div class="food_righttitle_b">
								<div class="righttitleleft_b">品牌：</div>
								<div class="righttitleright_b">{{item.goodsName}}</div>
							</div>
							<div class="right_bot_b">
								<p>¥ <span>{{item.goodsOrigPrice}}</span></p>
								<p><span>634</span>人购买</p>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
import Search from "./search.vue"
import BScroll from 'better-scroll'
import Vuex from "vuex"
import Vue from "vue"
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);
export default{
	data() {
		return {

		}
	},
	components:{
		"search-com":Search
	},
	mounted(){
		this.scroll = new BScroll(this.$refs.scrollWrapper,{
			click:true,
			pullUpLoad:true,
			probeType:2
		})
		this.scroll.on("pullingUp",()=>{
			this.getGoodsByNameAgain()
		})
	},
	watch: {
		goodsList(newVal,oldVal){
			this.scroll.finishPullUp();
			this.scroll.refresh()
		}
	},
	created() {
		this.getGoodsByName()
	},
	computed: {
		...Vuex.mapState({
			goodsList:state=>state.petlist.goodsList
		})
	},
	
	methods: {
		...Vuex.mapActions({
			getGoodsByName:"petlist/getGoodsByName",
			getGoodsByNameAgain:"petlist/getGoodsByNameAgain"
		})
	}
}
</script>

<style scoped lang="scss">
#search_list_b{
	overflow: auto;
	width: 100%;
	height: 100%;
	background: #eee;
	.list_common_ul{
		width: 100%;
		height: 100%;
		overflow: hidden;
		margin-top: 1.1rem;
	}
	.list_common_ulb{
		display: flex;
		width: 100%;
		flex-wrap:wrap;
		justify-content:center;
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