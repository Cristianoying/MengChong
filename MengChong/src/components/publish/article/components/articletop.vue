<template>
   <div id="articlestop">
		<div class="topcontent">
			<router-link :to="{name:'publish'}">
				<p class="articlecancle">取消</p>
			</router-link>
			<p class ="sendarticle">发帖</p>
			<p class = "send">发送</p>
		</div>
		
	</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
#articlestop{
     height:1.62rem;
    width:100%;
    padding:0.86rem 0.44rem 0 0.46rem;
    .topcontent{
        display: flex;
        justify-content: space-between;	
        p{
            font-size: 0.34rem;
            color: #161616;
            font-weight: 500;
            font-family:PingFang-SC-Medium;	
        }
        .sendarticle{
            font-weight: bold;
        }
    }
}
    
</style>