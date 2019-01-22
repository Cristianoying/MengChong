<template>
	<div id="top">
		<div class="content">
			<router-link :to="{name:'publish'}">
				<p class="pone">取消</p>
			</router-link>
			<p class ="ptwo">发帖</p>
			<p class = "pthree">发送</p>
		</div>
		
	</div>
</template>

<script>
	
</script>

<style lang = "scss">
#top{
	width:100%;
	height:1.41rem;
	border-bottom: 0.01rem solid #eee;
	.content{
		padding:0.75rem 0.46rem 0;
		display:flex;
		justify-content: space-between;	
		p{
		font-size: 0.34rem;
		color: #161616;
		font-weight: 500;
		font-family:PingFang-SC-Medium;	
		}
	
	}
	
	.ptwo{
		font-weight: bold;
	}
}
</style>