<template>
	<div id="topiclist_wrap_w">
		<h1>你可能感兴趣的动态</h1>
		
		<div id="topiclist_w">
			<ul>
				<li v-for="(item,index) in topic_list_w">
				  <div class="topiclist_w_p">
				      <p class="topiclist_p1_w">
				      	<img :src="item.userPhoto" />
				      </p>
				      <p class="topiclist_p2_w">
				       <i>{{item.userName}}</i>
				       <em>{{item.topicDate}}</em>
				      </p>
				      <p class="topiclist_p3_w">
				      	+关注
				      </p>
				  </div>
				  <img  :src="item.topicPhoto"/>
				  <div class="topiclist_w_bot">
				       <i>{{item.topicCount}}</i>
				       <em>{{item.topicComNum}}</em>
				  </div>
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
				topic_list_w:state=>state.Home_w.topic_list_w,
			})
		}
	}
</script>
<style scoped="">
	#topiclist_wrap_w{
		width: 100%;
		height:10rem ;
		background:rgba(238,238,238,1);
	}
	#topiclist_wrap_w>h1{
		background: white;
		width:100%;
		height: 0.7rem;
		line-height: 0.7rem;
		font-size:0.2rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:#161616;
		padding: 0 0.26rem 0 0.26rem;
	}
    #topiclist_w{
    	width: 100%;
    	height: 9.36rem;
    	background:#FFFFFF ;
    	padding: 0 0.26rem 0 0.26rem;
    }
    #topiclist_w>ul{
    	width: 100%;
    	height: auto;
    }
	#topiclist_w>ul>li{
		width: 100%;
		height:4.3rem ;
		border-bottom: 0.02rem solid #CCCCCC;
	}
	.topiclist_w_p{
		width: 100%;
		height: 0.95rem;
		display:flex ;
		align-items:center ;
		justify-content: space-between;
		padding-bottom: 0.3rem;
	}
	.topiclist_p1_w{
		width: 0.6rem;
		height: 0.6rem;
	}
	.topiclist_p1_w img{
		width: 100%;
		height: 100%;
	}
	.topiclist_p2_w{
		width: 80%;
		height: 0.6rem; ;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left:0.25rem ;
	}
	.topiclist_p2_w i{
		display: block;
		width: 100%;
		font-style: normal;
		font-size:0.18rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(22,22,22,1);
	}
	.topiclist_p2_w em{
		display: block;
		width: 100%;
		font-style: normal;
		font-size:0.16rem;
		font-family:PingFang-SC-Medium;
		font-weight:500;
		color:rgba(98,98,98,1);
	}
	.topiclist_p3_w{
		width:1.2rem;
		height:0.44rem;
		background:rgba(255,255,255,1);
		border:0.01rem solid rgba(225,225,225,1);
		box-shadow:0px 0.01rem 0.01rem 0px rgba(0, 0, 0, 0.3);
		border-radius:0.08rem;
		line-height: 0.44rem;
		text-align: center;
		font-size:0.22rem;
		font-family:PingFang-SC-Regular;
		font-weight:bold;
		color:rgba(252,53,53,1);
	}
	#topiclist_w>ul>li>img{
		width: 4.4rem;
		height: 2.61rem;
		
	}
	.topiclist_w_bot{
		width: 100%;
		height: 0.5rem;
		display: flex;
		justify-content: flex-end;
		align-items:center ;
	}
	.topiclist_w_bot>i{
		width: 1rem;
		height: 0.32rem;
		font-size:0.24rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(75,75,75,1);
		font-style: normal;
		line-height: 0.32rem;
		background:url(../../../../static/home_w/sy_center_w/dianzhan.png) no-repeat left center;
		text-indent: 0.5rem;
	}
	.topiclist_w_bot>em{
		width: 0.8rem;
		height: 0.32rem;
		font-size:0.24rem;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(75,75,75,1);
		line-height: 0.32rem;
		text-indent: 0.5rem;
		font-style: normal;
		margin-left:0.1rem ;
		background:url(../../../../static/home_w/sy_center_w/xiaoxi.png) no-repeat left center;
	}
</style>