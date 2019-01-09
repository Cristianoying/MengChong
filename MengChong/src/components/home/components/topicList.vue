<template>
	<div id="topiclist_wrap_w">
		
		<div id="topiclist_w">
			<ul>
				<li>
				  <h1></h1>
				  <div>
				      <p class="topiclist_p1_w"></p>
				      <p class="topiclist_p2_w">
				       <i></i>
				       <em></em>
				      </p>
				      <p class="topiclist_p3_w"></p>
				  </div>
				  <img />
				  <div>
				       <i></i>
				       <em></em>
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
				topic_w:state=>state.Home_w.topic_w,
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
    #topiclist_w{
    	width: 100%;
    	height: 9.36rem;
    	background:#FFFFFF ;
    }
	
</style>