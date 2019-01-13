<template>
	<div id="petlist_b">
		<search-com></search-com>
		<div class="wrapper main_height_b" ref="scrollWrapper">
			<lists-com class="content scrollContent_b"></lists-com>
		</div>
	</div>
</template>

<script type="text/javascript">
import Search from "./components/search.vue"
import Lists from "./components/petlist_list.vue"
import BScroll from 'better-scroll'
import Vuex from "vuex"
export default{
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
			pullUpLoad:true
		});
		this.scroll.on("pullingUp",()=>{
			this.getDogGoodsListAgain()
			this.getCatGoodsListAgain()
			this.getFoodGoodsListAgain()
		})
		this.scroll.on("scroll",({x,y})=>{
			console.log(x,y)
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
}

</style>