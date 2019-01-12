<template>
	<div id="apps" v-show = "publish">
    	<Total-com/>
    	<Cancel-com/>
  	</div>
</template>

<script type="text/javascript">
	 import Vuex from "vuex";
	import Total from "./components/totalpublic.vue";
	import Cancel from "./components/cancel.vue";
	export default {
  		components:{
	      "Total-com":Total,
	      "Cancel-com":Cancel
	      
		},
		computed:{
			...Vuex.mapState({
			 publish:state=>state.publish.statusflag
        })
		}
	}

</script>	

<style scoped>
	#apps{
		height:100%;
		width:100%;
		background:#eee;
		position:absolute;
		left:0;top:0;

	}
</style>