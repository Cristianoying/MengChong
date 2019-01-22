<template>
	<div id="search_list_b">
		<div id="searchfake_bb">
			<div id="searchtitlefake_bb" @click="searchPage()">
				<label for="search_page_b">
					<i class="iconfont icon_glass_b">&#xe62d;</i>
					<input id="search_pagefake_bb" placeholder="请搜索">
				</label>
			</div>
			<div class="back_index_b" v-show="this.$route.meta.isBack" @click="backGo()">取消</div>
		</div>
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
		}),
		searchPage(){
			this.$router.push("/search_b")
		}
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
#searchfake_bb{
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 0.88rem;
	background: #E83F39;
	display: flex;
	justify-content: center;
	align-items: center;
	.back_index_b{
		position:absolute;
		height: 100%;
		width: 0.88rem;
		line-height: 0.88rem;
		text-align: center;
		right: 0;
		font-size: 0.28rem;
		color: #FFFFFF;
		font-weight: 400;
		font-family: PingFang-SC-Regular;
	}
	#searchtitlefake_bb{
		label{
			width: 100%;
			display: flex;
		}
		width: 5.8rem;
		height: 0.6rem;
		background: #C93934;
		border-radius: 0.08rem;
		display:flex;
		.icon_glass_b{
			display: block;
			width: 0.3rem;
			height: 0.3rem;
			font-size: 0.3rem;
			color: #FAFEFA;
			margin: 0.15rem 0.2rem 0 0.15rem;
		}
		#search_pagefake_bb{
			border: none;
			font-size: 0.28rem;
			background: #C93934;
			line-height: 0.6rem;
			width: 100%;
			color: #FFFFFF;
			font-weight: 400;
			font-family:PingFang-SC-Regular; 
			&::-webkit-input-placeholder{
           		 color:#fff;
        	}
	        &::-moz-placeholder{   
	            color:#fff;
	        }
	        &:-moz-placeholder{    
	            color:#fff;
	        }
	        &:-ms-input-placeholder{  
	            color:#fff;
	        }
	    }    
	}
}

</style>