<template>
	<div id="searchhistory_b">
		<h4>搜索历史</h4>
		<ul class="searchhistory_b">
			<li>柴犬</li>
			<li>哈士奇</li>
			<li>蓝猫</li>
			<li>皇冠猫粮</li>
			<li>蓝猫</li>
			<li>皇冠猫粮</li>
			<li>蓝猫</li>
			<li>皇冠猫粮</li>
		</ul>
	</div>
</template>

<script>
export default{

}
</script>

<style lang="scss" scoped>
	#searchhistory_b{
		width: 100%;
		margin-top: 0.3rem;
		padding: 0 0.26rem;
		>h4{
			font-size: 0.3rem;
			margin-bottom: 0.3rem;
		}
		.searchhistory_b{
			display: flex;
			width: 100%;
			border-bottom: 0.02rem #eee solid;
			flex-wrap: wrap;
			>li{
				font-size: 0.28rem;
				height: 0.6rem;
				line-height: 0.6rem;
				padding: 0 0.2rem;
				border-radius: 0.3rem;
				background: #eee;
				margin-right: 0.2rem;
				margin-bottom: 0.3rem;
				color: #4A4A4A;
			}
		}
	}
</style>