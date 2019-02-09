<template>
	<div id="time_w">
		<p>限时抢购</p>
		    <div class="wrapper" ref="tabsWrapper">
				<ul class="content"> 
					<li v-for="(item,index) in time_w">
						<router-link to="/goods_details_b/goods_intro">
						<div class="goodsImg_w">
							<img :src="item.foodPhoto"/>
						</div>
						<h3>{{item.foodName}}</h3>
						<p>
							<span class="goods_p1_w">{{item.foodOrigPrice}}</span>
							<span class="goods_p2_w">立即抢购</span>
						</p>
						<h4>{{item.foodNowPrice}}</h4>
						</router-link>
					</li>
				</ul>	
			</div>
	</div>
</template>
<script>
	import Vuex from "vuex";
	import BScroll from "better-scroll";
    export default{
    	computed:{
			...Vuex.mapState({
				time_w:state=>state.Home_w.time_w,
			})
		},
		methods:{
			...Vuex.mapActions({
				handleTimeList:"Home_w/handleTimeList",
			})
		},
		created(){
			this.handleTimeList();
		},
		updated() {
			if(!this.scroll){
				this.scroll = new BScroll(this.$refs.tabsWrapper,{
					scrollX:true
				});
			
        }
    },
    }
	
</script>
<style scoped>
	#time_w{
		width:100%;
		height: 3.69rem;
		padding: 0 0.26rem 0 0.26rem;
		
	}
	#time_w>.wrapper{
		width: 100%;
		height: 3.69rem;
	}
	#time_w>p{
		width: 100%;
		height: 0.7rem;
		line-height: 0.7rem;
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(237,60,60,1)
	}
	#time_w ul{
		width: max-content;
		height:2.9rem ;
		display: flex;
		justify-content: space-between;
	}
	#time_w ul>li{
		width:2.26rem;
		height:2.8rem;
		background:rgba(255,255,255,1);
		box-shadow:0rem 0.03rem 0.09rem 0rem rgba(0, 0, 0, 0.3);
		border-radius:0.08rem;
		padding: 0 0.26rem 0.1rem 0.21rem;
		margin-left: .16rem;
		flex-shrink: 0;
	}
	#time_w ul>li:first-child{
		margin-left: 0rem;
	}
	#time_w ul>li>a{
		width: 100%;
		height: 100%;
	}
	.goodsImg_w{
		text-align: center;
		padding: 0.26rem 0.4rem 0.26rem 0.2rem;
	}
	.goodsImg_w>img{
		width: 1.46rem;
		height: 1.3rem;
	}
	#time_w ul>li>a>h3{
		width:2rem;
		font-size:0.18rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(22,22,22,1);
	}
	#time_w ul>li>a>p{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	#time_w ul>li>a>p>.goods_p1_w{
		width:0.9rem;
		font-size:0.28rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(237,60,60,1);
	}
	#time_w ul>li>a>p>.goods_p2_w{
		display: inline-block;
		width:0.8rem;
		height:0.25rem;
		font-size:0.14rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(255,255,255,1);
		background: #ED3C3C;
		text-align: center;
		line-height:0.25rem ;
		border-radius:0.04rem;
	}
	#time_w ul>li>a>h4{
		width:100%;
		font-size:0.14rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		text-decoration:line-through;
		color:rgba(98,98,98,1);
	}
</style>