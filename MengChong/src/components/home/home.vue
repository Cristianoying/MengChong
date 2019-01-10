<template>
	<div id="home_first_w">
		<Header_w></Header_w>
		<div class="wrapper" ref="homeWrapper">
			<div class="content">
				<Banner_w></Banner_w>
				<Time_w></Time_w>
				<Topic_w></Topic_w>
				<TopicList_w></TopicList_w>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Header_w from "./components/header_w.vue";
	import Banner_w from "./components/banner.vue";
	import Time_w from "./components/time.vue"
	import Topic_w from "./components/topic.vue";
	import TopicList_w from "./components/topicList.vue"
	import BScroll from "better-scroll";
	export default{
		components:{
			"Header_w":Header_w,
			"Banner_w":Banner_w,
			"Time_w":Time_w,
			"Topic_w":Topic_w,
			"TopicList_w":TopicList_w
		},
		mounted(){
			
				this.scroll=new BScroll(this.$refs.homeWrapper,{
					//只有设置为true pulling才能使用
					pullUpLoad:true,
					click:true,
				});
				/*this.scroll.on("pullingUp",()=>{
					
				})*/
				
			
		}
	}

</script>

<style scoped>
	#home_first_w{
		width: 100%;
		height: 100%;
	}
	#home_first_w>.wrapper{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 2.52rem;
	}
	##home_first_w>.wrapper>.content{
		padding-bottom: 0.92rem;
	}
</style>