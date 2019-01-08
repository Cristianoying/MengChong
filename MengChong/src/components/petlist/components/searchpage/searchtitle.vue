<template>
	<div id="searchpage_title_b">
		<div class="searchtitle_b">
			<label for="search_page_b">
				<i class="iconfont icon_glass_b">&#xe62d;</i>
				<!--<input type="text" class="search_frame_b" placeholder="搜索..."/>-->
				<input id="search_page_b" placeholder="请搜索"></input>
			</label>
		</div>
		<div class="search_back_b" @click="searchBack()">取消</div>
	</div>
</template>

<script>
export default {
	methods:{
		searchBack(){
			this.$router.back()
		}
	}
}
</script>

<style lang="scss" scoped>
#searchpage_title_b{
	width: 100%;
	height: 0.88rem;
	background: #E83F39;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	.search_back_b{
		width: 0.88rem;
		height: 0.88rem;
		background: #E83F39;
		position: absolute;
		text-align: center;
		font-size: 0.28rem;
		line-height: 0.88rem;
		right: 0;
		color: #fff;
	}
	.searchtitle_b{
		label{
			width: 100%;
			display: flex;
		}
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
		#search_page_b{
			border: none;
			font-size: 0.28rem;
			background: #C93934;
			line-height: 0.6rem;
			width: 100%;
			color: #FFFFFF;
			font-weight: 400;
			font-family:PingFang-SC-Regular; 
			&::-webkit-input-placeholder{
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
	        }
	    }    
	}
}
</style>