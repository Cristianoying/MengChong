<template>
	<div id="goods_details_b">
		<div class="red_top_b"></div>
		<div class="details_head_b">
			<div class="details_back_b" @click="detailsBack()"></div>
			<span>英国短毛猫</span>
		</div>
		<div class="details_body_b">
			<div class="details_bodytitle_b">
				<router-link to="/goods_details_b/goods_intro"><img src="../../../../static/petlish_b_img/GMY-ICON-1@2x.png"/></router-link>
				<router-link to="/goods_details_b/goods_detailed"><img src="../../../../static/petlish_b_img/GMY-ICON-2@2x.png"/></router-link>
			</div>
			<router-view></router-view>
		</div>
		<div class="details_foot_b">
			<div class="addshopcar_b">
				<span class="colline_b">加入购物车</span>
			</div>
			<div class="nowbuy_b">
				<span>立即购买</span>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	methods:{
		detailsBack(){
			this.$router.go(-1)
		}
	}
}
</script>

<style lang="scss" scoped>
.red_top_b{
	width: 100%;
	height: 0.4rem;
	background:#E83F39 ;
}
#goods_details_b{
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.details_head_b{
		width: 100%;
		height: 0.88rem;
		background: #E83F39;
		display:flex;
		justify-content: center;
		align-items: center;
		position:relative;
		.details_back_b{
			position: absolute;
			left: 0;
			width: 0.88rem;
			height:0.88rem;
			background: url(../../../../static/petlish_b_img/20190108180402.png) no-repeat center;
			background-size: cover;
		}
		>span{
			font-size: 0.34rem;
			color: #FFFFFF;
			font-family: PingFang-SC-Regular;
		}
	}
	.details_body_b{
		flex: 1;
		background: #eee;
		width: 100%;
		.details_bodytitle_b{
			display: flex;
			width: 100%;
			flex-direction: row;
			justify-content: space-around;
			padding:  0.17rem 0 0.15rem 0;
			img{
				width: 2rem;
				height: 0.6rem;
			}
		}
	}
	.details_foot_b{
		width:100%;
		height:0.98rem;
		background: #E83F39;
		display: flex;
		>div{
			width: 100%;
			justify-content: space-between;
			height: 100%;
			display: flex;
			align-items: center;
			>span{
				display: block;
				width: 100%;
				font-size: 0.34rem;
				height: 0.5rem;
				line-height: 0.5rem;
				text-align: center;
				color: #fff;
				font-family: PingFang-SC-Regular;
				font-weight: 400;
			}
			.colline_b{
				border-right: #fff 0.01rem solid;
			}
		}
	}
}
</style>