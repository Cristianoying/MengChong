<template>
	<div id = "totals">
		<router-link to="/publish/trends">
			<div class = "bgone"></div>
		</router-link>
		<router-link to="/publish/video">	
			<div class = "bgtwo"></div>
		</router-link>
		<router-link to="/publish/article">	
			<div class = "bgthree"></div>
		</router-link>
	</div>
</template>

<script>
	
</script>

<style lang = "scss">
	#totals{
		display:flex;
		width:100%;
		height:9.29rem;
		background: #eee;
		padding:8.11rem 0.49rem 0;
		justify-content: space-between;
		div{
			width:1.18rem;
			height:1.18rem;
			
			
		}
		.bgone{
			background:url(../../../../../static/publishs_img/publish_slices/publictrends2x.png)no-repeat;
			background-size: 100% 100%;
		}
		.bgtwo{
			background:url(../../../../../static/publishs_img/publish_slices/publicvideo2x.png)no-repeat;
			background-size: 100% 100%;
		}
		.bgthree{	
			background:url(../../../../../static/publishs_img/publish_slices/publicarticle2x.png)no-repeat;
			background-size: 100% 100%;
		}
		
	}
	
</style>