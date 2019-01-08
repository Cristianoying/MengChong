<template>
	<div id="trend">
		<Trendstop-com></Trendstop-com>
		<Trendcontent-com></Trendcontent-com>
		<Trendbottom-com></Trendbottom-com>
	</div>
	
</template>

<script>
	import Trendstop from "./components/trendstop.vue";
	import Trendcontent from "./components/trendscontent.vue";
	import Trendbottom from "./components/trendsbottom.vue"
	
	export default {
  		components:{
	      "Trendstop-com":Trendstop,
	      "Trendcontent-com":Trendcontent,
	      "Trendbottom-com":Trendbottom
	      
	      
    	}
	}
</script>

<style>
</style>