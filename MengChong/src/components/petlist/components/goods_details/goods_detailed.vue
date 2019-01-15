<template>
	<div id="details_bodydetailed_b">
		<div class="details_pic_b">
			<img src="../../../../../static/petlish_b_img/111.gif" alt="">
			<img src="../../../../../static/petlish_b_img/222.gif" alt="">
			<img src="../../../../../static/petlish_b_img/333.gif" alt="">
			<img src="../../../../../static/petlish_b_img/444.gif" alt="">
		</div>
		<div class="details_msg_b">
			<p>基本信息</p>
			<div>
				<p>品种：<span>英国短毛猫</span></p>
				<p>别称：<span>蓝白</span></p>
				<p>体型：<span>中性</span></p>
				<p>体重：<span>2公斤</span></p>
				<p>寿命：<span>13-15岁</span></p>
				<p>功能：<span>抱抱</span></p>
				<p>产地：<span>美国，英国</span></p>
			</div>
		

		</div>
	</div>
</template>

<script>
export default{
	
}
</script>

<style scoped lang="scss">
#details_bodydetailed_b{
	width: 7.1rem;
	height: 10.04rem;
	margin: 0 auto;
	background: url(../../../../../static/petlish_b_img/GMY-JXK-1@2x.png) no-repeat;
	background-size: 100% 100%;
	.details_pic_b{
		padding:.03rem .06rem;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		justify-content: space-between;
		img{
			width: 3.4rem;
			height: 3.4rem;
			margin-bottom: .18rem;
			border-radius: .1rem;
		}
	}
	.details_msg_b{
		padding: 0 .5rem;
		font-size: .28rem;
		font-family: PingFang-SC-Regular;
		p{
			margin-bottom: .15rem;
			padding-left: .2rem;
		}
		>div>p{
			float: left;
			width: 3.05rem;
		}
		>div p:nth-child(even){
			padding-left: .7rem;
		}
	}
}
</style>