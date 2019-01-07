<template>
	<div id="apps">
    	<Total-com/>
    	<Cancel-com/>
  	</div>
</template>

<script type="text/javascript">
	import Total from "./components/totalpublic.vue";
	import Cancel from "./components/cancel.vue";
	export default {
  		components:{
	      "Total-com":Total,
	      "Cancel-com":Cancel
	      
    	}
	}

</script>

<style scoped>
	#apps{
		height:100%;
		width:100%;
		background:#eee;
	}
</style>