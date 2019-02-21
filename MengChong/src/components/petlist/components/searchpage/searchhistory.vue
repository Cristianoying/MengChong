<template>
	<div id="searchhistory_b">
		<h4>搜索历史</h4>
		<ul class="searchhistory_b">
			<!-- <router-link :to="{name:'search_list'}" 
						 v-for="(item,index) in beforHisearch" 
						 :key="index"><li>{{item}}</li>
			</router-link> -->
			<router-link :to="{name:'search_list',query:{'goods':item}}" 
						 v-for="(item,index) in beforHisearchNew" 
						 :key="index"><li>{{item}}</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
import Vuex from "vuex"
export default{
	data(){
		return{
			beforHisearchNew:["猫","狗","犬","猫粮","狗粮","粮"]
		}
	},
	computed: {
		...Vuex.mapState({
    		beforHisearch:state=>state.petlist.beforHottagAndHisearch.hiSearch
		})
	}
}
</script> 

<style lang="scss" scoped>
	#searchhistory_b{
		width: 100%;
		margin-top: 1.28rem;
		padding: 0 0.26rem;
		>h4{
			font-size: 0.3rem;
			margin-bottom: 0.3rem;
		}
		.searchhistory_b{
			display: flex;
			width: 100%;
			border-bottom: 0.02rem #eee solid;
			flex-wrap: wrap;
			li{
				font-size: 0.28rem;
				height: 0.6rem;
				line-height: 0.6rem;
				padding: 0 0.2rem;
				border-radius: 0.3rem;
				background: #eee;
				margin-right: 0.2rem;
				margin-bottom: 0.3rem;
				color: #4A4A4A;
			}
		}
	}
</style>