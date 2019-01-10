<template>
	<div id="topic_indexWrap_w">
		<div class="topic_index_w">
			<img @click="handleBack()" src="../../../static/home_w/sy_center_w/jiantou.png"/>
			<p>话题</p>
		</div>
		<ul>
			<li v-for="(item,index) in topic_index_w">
				<img :src="item.topicPhoto"/>
				<div class="topic_index_div_w">
					<h1>{{item.topicName}}</h1>
					<p>
					 <b>{{item.topicComNum | tieHot}}</b>
					 <i>{{item.topicTieNum | tieNum}}</i>
					</p>
				</div>
			</li>
		</ul>
		<p>已显示全部内容</p>
	</div>
</template>
<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				topic_index_w:state=>state.Home_w.topic_index_w,
			})
		},
		methods:{
			handleBack(){
				this.$router.back();
			}
		},
		filters:{
			tieHot(n){
				return "热度 "+n;
			},
			tieNum(n){
				return "帖子 "+n;
			}
		}
	}
</script>
<style>
	#topic_indexWrap_w{
		width:100% ;
		height: 100%;
	}
	.topic_index_w{
		width:100%;
		height:0.94rem;
		background:rgba(237,60,60,1);
		display: flex;
		align-items:center ;
		padding: 0rem 0.26rem;
	}
	.topic_index_w>img{
		width:0.22rem;
        height:0.4rem;
	}
	.topic_index_w>p{
		width:100%;
		font-size:0.34rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color: #FFFFFF;
		text-align: center;
	}
	#topic_indexWrap_w>ul{
		width: 100%;
	}
	#topic_indexWrap_w>ul>li{
		width: 100%;
		height: 2.25rem;
        display: flex;
        padding: 0rem 0.26rem;
        align-items: center;
        padding-top: 0.22rem;
       border-bottom:2px solid  rgba(223,222,222,1);
	}
	#topic_indexWrap_w>ul>li>img{
		width: 1.41rem;
		height: 1.36rem;
	}
	#topic_indexWrap_w>ul>li>.topic_index_div_w{
		width: 70%;
		height: 1.36rem;
		margin-left:0.25rem ;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.topic_index_div_w>h1{
		width:100%;
		height:0.8rem;
		line-height: 0.8rem;
		font-size:0.28rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(22,22,22,1);
	}
	.topic_index_div_w>p{
		width: 100%;
		height: 0.4rem;
		display: flex;
	}
	.topic_index_div_w>p>b{
		display: block;
		font-size:0.2rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(98,98,98,1);
		line-height:0.4rem;
		width:20% ;
		height: 100%;
	}
	.topic_index_div_w>p>i{
		display: block;
		font-size:0.2rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(98,98,98,1);
		line-height:0.4rem;
		width:20% ;
		height: 100%;
		font-style: normal;
	}
	#topic_indexWrap_w>p{
		width:100%;
		height:1.15rem;
		line-height: 1.15rem;
		text-align: center;
		background:rgba(238,238,238,1);
		position:fixed ;
		bottom: 0;
	}
</style>