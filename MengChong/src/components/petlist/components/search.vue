<template>
	<div id="search_b">
		<div class="searchborder_b" @click="searchPage()">
			<i class="iconfont icon_glass_b">&#xe62d;</i>
			<!--<input type="text" class="search_frame_b" placeholder="搜索..."/>-->
			<p class="search_frame_b">搜索...</p>
		</div>
	</div>
</template>

<script>
export default{
	methods:{
		searchPage(){
			this.$router.push("/search_b")
		}
	}
}
</script>

<style scoped lang="scss">
#search_b{
	position: fixed;
	top: 0.4rem;
	left: 0;
	width: 100%;
	height: 0.88rem;
	background: #E83F39;
	display: flex;
	justify-content: center;
	align-items: center;
	.searchborder_b{
		width: 5.8rem;
		height: 0.6rem;
		background: #C93934;
		border-radius: 0.08rem;
		display:flex;
		.icon_glass_b{
			display: block;
			width: 0.3rem;
			height: 0.3rem;
			font-size: 0.3rem;
			color: #FAFEFA;
			margin: 0.15rem 0.2rem 0 0.15rem;
		}
		.search_frame_b{
			border: none;
			font-size: 0.28rem;
			background: #C93934;
			line-height: 0.6rem;
			/*padding: 0.20rem 0 0.19rem;*/
			width: 100%;
			color: #FFFFFF;
			font-weight: 400;
			font-family:PingFang-SC-Regular; 
			/*&::-webkit-input-placeholder{
           		 color:#fff;
        	}
	        &::-moz-placeholder{   
	            color:#fff;
	        }
	        &:-moz-placeholder{    
	            color:#fff;
	        }
	        &:-ms-input-placeholder{  
	            color:#fff;
	        }*/
	    }    
	}
}
</style>