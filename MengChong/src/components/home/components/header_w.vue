<template>
	<div id="header_w">
		<h1>宠友推荐</h1>
		<ul>
			<li v-for="(item,index) in header_w">
				<img :src="item.img" />
				<span>{{item.title}}</span>
			</li>
		</ul>
		
	</div>
</template>

<script type="text/javascript">
    import Vuex from "vuex";
	export default{
		computed:{
			...Vuex.mapState({
				header_w:state=>state.Home_w.header_w,
			})
		}
	}

</script>

<style scoped>
   #header_w{
   	width: 100%;
   	height: 2.52rem;
   	padding-top: 0.4rem;
   	padding: 0 0.26rem 0 0.26rem;
   	position: fixed;
   	z-index: 5;
   	background:white ;
   }
  #header_w>h1{
  	width:100%;
	height:0.85rem;
	font-size:0.3rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(237,60,60,1);
	line-height: 0.85rem;
  }
  #header_w>ul{
  	width: 100%;
  	height: 1.21rem;
  	display: flex;
  	justify-content: space-between;
  }
   #header_w>ul>li{
   	display: flex;
   	align-items: center;
  	width:2.26rem;
	height:1.09rem;
	background:rgba(255,255,255,1);
	box-shadow:0rem 0.03rem 0.09rem 0rem rgba(0, 0, 0, 0.3);
	border-radius:0.08rem;
	padding-left: 0.22rem;
  }
  #header_w>ul>li>span{
  	width:1 rem;
	height:0.5rem;
	font-size:0.24rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(22,22,22,1);
	margin-left: 0.1rem;
  }
</style>