<template>
	<div class="community">
		<Selected></Selected>
	</div>
</template>

<script type="text/javascript">
import selected from "./components/selected/index.vue"
	export default{
		created(){
			console.log(this)
			this.$store.dispatch("select/handleSelect")
		},
		data(){
			return{
				
			}
		},
		components:{
			"Selected":selected
		}
	}
</script>

<style scoped>
	
</style>