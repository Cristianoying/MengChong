<template>
		<router-link :to="{name:indexname}"  >
			<div id="cancel" @click = "cancelshow()">
				
			</div>
		</router-link>
	
</template>

<script>
 import Vuex from "vuex";
 export default{
	 methods:{
        ...Vuex.mapMutations({
         cancelshow:"publish/cancleindex"
        })
	  },
	  computed:{
			...Vuex.mapState({
			 indexname:state=>state.publish.strindex
        })
		}
 }
</script>

<style lang = "scss">
 a>#cancel{
	background: #eee;
	width:0.91rem;
	height:0.91rem;
	background:url(../../../../../static/publishs_img/publish_slices/cancel2x.png);
	background-size: 100% 100%;
	bottom:0.43rem;
	position: absolute;
	left: 50%;
	bottom:0.43rem;
	transform: translateX(-50%);
	
	
}
</style>