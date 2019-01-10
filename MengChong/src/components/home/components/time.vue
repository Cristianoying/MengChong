<template>
	<div id="time_w">
		<p>限时抢购</p>
		<ul>
			<li v-for="(item,index) in time_w">
				<div class="goodsImg_w">
					<img :src="item.goodsImg"/>
				</div>
				<h3>{{item.goodsTitle}}</h3>
				<p>
					<span class="goods_p1_w">{{item.goodsPrice}}</span>
					<span class="goods_p2_w">{{item.goodsTime}}</span>
				</p>
				<h4>{{item.goodsOrigin}}</h4>
			</li>
		</ul>
	</div>
</template>
<script>
    import Vuex from "vuex";
    export default{
    	computed:{
			...Vuex.mapState({
				time_w:state=>state.Home_w.time_w,
			})
		}
    }
	
</script>
<style scoped>
	#time_w{
		width:100%;
		height: 3.69rem;
		background: yellow;
		padding: 0 0.26rem 0 0.26rem;
		
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
	#time_w>ul{
		width: 100%;
		height:2.9rem ;
		display: flex;
		justify-content: space-between;
	}
	#time_w>ul>li{
		width:2.26rem;
		height:2.8rem;
		background:rgba(255,255,255,1);
		box-shadow:0rem 0.03rem 0.09rem 0rem rgba(0, 0, 0, 0.3);
		border-radius:0.08rem;
		padding: 0 0.26rem 0.1rem 0.21rem;
	}
	.goodsImg_w{
		text-align: center;
		padding: 0.26rem 0.4rem 0.26rem 0.2rem;
	}
	.goodsImg_w>img{
		width: 1.46rem;
		height: 1.3rem;
	}
	#time_w>ul>li>h3{
		width:2rem;
		font-size:0.18rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(22,22,22,1);
	}
	#time_w>ul>li>p{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	#time_w>ul>li>p>.goods_p1_w{
		width:0.9rem;
		font-size:0.18rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(237,60,60,1);
	}
	#time_w>ul>li>p>.goods_p2_w{
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
	#time_w>ul>li>h4{
		width:100%;
		font-size:0.14rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		text-decoration:line-through;
		color:rgba(98,98,98,1);
	}
</style>