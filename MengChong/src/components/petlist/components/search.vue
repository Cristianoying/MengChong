<template>
	<div id="search_b">
		<div class="searchborder_b">
			<i class="iconfont icon_glass_b">&#xe62d;</i>
			<input type="text" class="search_frame_b" placeholder="搜索..."/>
		</div>
	</div>
</template>

<script>
export default{
	
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
			font-size: 0.22rem;
			background: #C93934;
			padding: 0.20rem 0 0.19rem;
			width: 100%;
			color: #FFFFFF;
			font-weight: 400;
			font-family:PingFang-SC-Regular; 
			&::-webkit-input-placeholder{
           		 color:#fff;
        	}
	        &::-moz-placeholder{   /* Mozilla Firefox 19+ */
	            color:#fff;
	        }
	        &:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
	            color:#fff;
	        }
	        &:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
	            color:#fff;
	        }
	    }    
	}
}
</style>