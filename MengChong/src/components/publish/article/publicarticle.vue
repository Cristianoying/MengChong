<template>
    <div id="article">
        <Articletop-com></Articletop-com>
		<Articlecenter-com></Articlecenter-com>
		<Articlebottom-com></Articlebottom-com>
    </div>
</template>

<script>
import Articletop from "./components/articletop.vue";
import Articlecenter from "./components/articlecenter.vue";
import Articlebottom from "./components/articlebottom.vue"
export default {
  		components:{
		  "Articletop-com":Articletop,
		  "Articlecenter-com":Articlecenter,
		  "Articlebottom-com":Articlebottom,
	      
    	}
	}
</script>

<style>
</style>