<template>
	<div id="petlist_b">
		<search-com></search-com>
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
import Search from "./components/search.vue"
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
		"search-com":Search,
		"lists-com":Lists
	},
	computed: {
		...Vuex.mapState({
			dogGoodsList:state=>state.petlist.dogGoodsList,
			catGoodsList:state=>state.petlist.catGoodsList,
			petFoodGoodsList:state=>state.petlist.petFoodGoodsList
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
		})
		this.scroll.on("scroll",({x,y})=>{
			if( y < -320 ){
				this.tabFlag = false
			}else{
				this.tabFlag = true
			}
		})
	},
	// updated() {
	// 	this.scroll.finishPullUp()
	// },
	methods: {
		...Vuex.mapActions({
			getDogGoodsListAgain:"petlist/getDogGoodsListAgain",
			getCatGoodsListAgain:"petlist/getCatGoodsListAgain",
			getFoodGoodsListAgain:"petlist/getFoodGoodsListAgain"
		})
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
		top: .98rem;
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
		height: 0.64rem;
		>li{
			text-align: center;
			font-family: PingFang-SC-Regular;
			height: 100%;
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
				line-height: 0.64rem;
			}
		}
	}
}

</style>