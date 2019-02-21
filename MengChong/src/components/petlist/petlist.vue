<template>
	<div id="petlist_b">
		<div id="searchfake_b">
			<div id="searchtitlefake_b" @click="searchPage()">
				<label for="search_page_b">
					<i class="iconfont icon_glass_b">&#xe62d;</i>
					<input id="search_pagefake_b" placeholder="请搜索">
				</label>
			</div>
			<div class="back_index_b" v-show="this.$route.meta.isBack" @click="backGo()">取消</div>
		</div>
		<div class="ceiling_tab_b" v-show="!tabFlag">
			<ul class="petlist_list_tab_b">
				<li v-for="(item,index) in tabs" 
					:key="index">
					<router-link :to="item.tolink">
						{{item.name}}
					</router-link>
				</li>
			</ul>
		</div>
		<div class="wrapper main_height_b" ref="scrollWrapper">
			<lists-com class="content scrollContent_b"  :tabFlag="tabFlag"></lists-com>
		</div>
	</div>
</template>

<script type="text/javascript">
import Lists from "./components/petlist_list.vue"
import BScroll from 'better-scroll'
import Vuex from "vuex"
export default{
	data() {
		return {
			tabFlag:true,
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
	components:{
		"lists-com":Lists
	},
	computed: {
		...Vuex.mapState({
			dogGoodsList:state=>state.petlist.dogGoodsList,
			catGoodsList:state=>state.petlist.catGoodsList,
			petFoodGoodsList:state=>state.petlist.petFoodGoodsList,
			getOffsetTop:state=>state.petlist.getOffsetTop
		})
	},
	watch: {
		dogGoodsList(newVal,oldVal){
			this.scroll.finishPullUp();
			this.scroll.refresh()
		},
		catGoodsList(newVal,oldVal){
			this.scroll.finishPullUp()
			this.scroll.refresh()
		},petFoodGoodsList(newVal,oldVal){
			this.scroll.finishPullUp()
			this.scroll.refresh()
		}
	},
	beforeRouteUpdate (to, from, next) {
		this.$store.commit("petlist/searchPageFromRouter",to.path)
		next()
		// ...
	},
    mounted(){

		this.scroll = new BScroll(this.$refs.scrollWrapper,{
			click:true,
			pullUpLoad:true,
			probeType:2
		});
		this.scroll.on("pullingUp",()=>{
			this.getDogGoodsListAgain()
			this.getCatGoodsListAgain()
			this.getFoodGoodsListAgain()
		});
		this.scroll.on("scroll",({x,y})=>{
			if( y < -(this.getOffsetTop) ){

				this.tabFlag = false
			}else{
				this.tabFlag = true
			}
		});
		
	},
	// updated() {
	// 	this.scroll.finishPullUp()
	// },
	methods: {
		...Vuex.mapActions({
			getDogGoodsListAgain:"petlist/getDogGoodsListAgain",
			getCatGoodsListAgain:"petlist/getCatGoodsListAgain",
			getFoodGoodsListAgain:"petlist/getFoodGoodsListAgain"
		}),
		searchPage(){
			this.$router.push("/search_b")
		}
	},
}

</script>

<style lang="scss" scoped>
#petlist_b{
	background: #eee;
	width: 100%;
	height: 100%;
	.main_height_b{
		height: 100%;
		position: fixed;
		overflow: hidden;
		top: 1.06rem;
		left: 0;
		width: 100%;
		.scrollContent_b{
			padding-bottom: 2rem;
		}
	}
	.ceiling_tab_b{
		position:fixed;
		padding:0 0.26rem;
		top: 1.04rem;
		left: 0;
		width: 100%;
		z-index: 100;
		background: #eee;
	}
	.petlist_list_tab_b{
		width: 100%;
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
				line-height: 0.8rem;
				font-size: 0.3rem;
			}
		}
	}
}
#searchfake_b{
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
	#searchtitlefake_b{
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
		#search_pagefake_b{
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
