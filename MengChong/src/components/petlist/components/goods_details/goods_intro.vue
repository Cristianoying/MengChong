<template>
	<div id="details_bodyintro_b">
		<div class="bodyintro_img_b">
			<img src="../../../../../static/petlish_b_img/20190108155255.jpg" alt="" />
		</div>
		<div class="bodyintro_cont_b">
			<div class="introcont_title_b">
				<span>高品质英短蓝白 性格活泼可爱 品质优良</span>
			</div>
			<ul class="introcont_params_b">
				<li>在售只数：<span>30</span></li>
				<li>品种：<span>英国短毛猫</span></li>
				<li>年龄：<span>3-5月龄</span></li>
				<li>防疫：<span>3针</span></li>
			</ul>
			<div class="introcont_price_b">
				¥<span>20000</span>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	
}
</script>

<style scoped lang="scss">
#details_bodyintro_b{
	font-family: PingFang-SC-Regular;
	width: 7.1rem;
	height: 10.04rem;
	margin: 0 auto;
	padding-top: 0.66rem;
	display: flex;
	flex-direction: column;
	background: url(../../../../../static/petlish_b_img/GMY-JXK-1@2x.png) no-repeat;
	background-size: 100% 100%;
	.bodyintro_img_b{
		margin: 0 auto 0.5rem;
		width: 6rem;
		height: 6rem;
		>img{
			width:100%;
			height: 100%;
		}
	}
	.bodyintro_cont_b{
		width: 100%;
		height: 100%;
		.introcont_title_b{
			font-size: 0.28rem;
			color: #161616;
			text-align: center;
			margin-bottom: 0.28rem;
			
		}
		.introcont_params_b{
			padding: 0 0.55rem;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			>li{
				width: 3rem;
				padding-left: 0.5rem;
				text-align: left;
				margin-bottom: 0.28rem;
				font-size: 0.22rem;
			}
		}
		.introcont_price_b{
			text-align: center;
			margin-top: 0.15rem;
			font-size: 0.34rem;
			color: #FF1515;
		}
	}
}
</style>