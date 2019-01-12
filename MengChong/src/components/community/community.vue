<template>
	<div class="community">
		<Top v-show="this.$route.meta.iscommuntop"></Top>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
import selected from "./components/selected/index.vue"
import top from "./components/top.vue"
	export default{
		created(){
			this.$store.dispatch("select/handleSelect")
		},
		data(){
			return{
				
			}
		},
		components:{
			"Top":top
		}
	}
</script>

<style scoped>
	.community{
		width:100%;
		height:100%;
	}
</style>