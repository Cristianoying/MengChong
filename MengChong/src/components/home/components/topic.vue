<template>
	<div id="topic_wrap_w">
		<div id="topic_w">
			<h2>热门话题 >></h2>
			<ul>
				<li v-for="(item,index) in topic_w">
					<router-link :to="{name:'home_topic_w',params:{t_w_id:item.topicId}}">
						<img :src="item.topicPhoto"/>
						<p class="topic_w_p1">{{item.topicName}}</p>
						<p class="topic_w_p2">
							<i></i>
							<span>{{item.topicComNum}}
							</span></p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				topic_w:state=>state.Home_w.topic_w,
			})
		},
		methods:{
			...Vuex.mapActions({
				handleTopic:"Home_w/handleTopic",
			})
		},
		created(){
			this.handleTopic();
		}
	}
</script>
<style>
    #topic_wrap_w{
    	width:100% ;
		height: 3.3rem;
		background:rgba(238,238,238,1);
		display: flex;
		align-items:center ;
    }
	#topic_w{
		width:100% ;
		height: 2.7rem;
		background:white;
		padding: 0 0.26rem 0 0.26rem;
	}
	#topic_w>h2{
		width:100%;
		font-size:0.3rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(237,60,60,1);
		padding: 0.26rem 0rem 0.1rem 0rem;
	}
	#topic_w>ul{
		width: 100%;
		height: 1.9rem;
		display: flex;
		justify-content: space-between;
		align-items:center ;
	}
	#topic_w>ul>li{
		width:2.26rem;
		height:1.8rem;
		background:rgba(255,255,255,1);
		box-shadow:0rem 0.03rem 0.09rem 0rem rgba(0, 0, 0, 0.3);
		border-radius:0.08rem;
		padding: 0.18rem 0.16rem 0.1rem;
	}
	#topic_w>ul>li img{
		width: 1.94rem;
		height: 1.08rem;
	}
	#topic_w>ul>li .topic_w_p1{
		margin-top:0.1rem ;
		width:100%;
		font-size:0.18rem;
		font-family:SimHei;
		font-weight:400;
		color:rgba(22,22,22,1);
	}
	#topic_w>ul>li .topic_w_p2{
		display: flex;
		justify-content: flex-end;
		padding: 0;
		margin: 0;
		width:2rem;
        font-size:0.14rem;
		font-family:SimHei;
		font-weight:400;
		color:rgba(195,195,195,1);
	}
	#topic_w>ul>li .topic_w_p2 i{
		font-style: normal;
		display: inline-block;
		width: 0.4rem;
		height: 0.15rem;
		background: url(../../../../static/home_w/sy_center_w/eye.png) no-repeat left center;
	}
	#topic_w>ul>li .topic_w_p2 span{
		width: 0.3rem;
		height: 0.14rem;
	}
</style>