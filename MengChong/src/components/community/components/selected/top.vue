<template>
	<div class="top_a">
		<ul>
			<li v-for="(item,index) in navs" 
			@click="handleCl(index)"
			:class="activeIndex==index?'active':''">
				{{item}}
			</li>
        </ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				navs:[
					"精选",
					"关注",
					"文章"
				],
				activeIndex:0
			}
		},
		methods:{
			handleCl(index){
				this.activeIndex=index;
			}
		}
	}
</script>

<style scoped>
	 .top_a{
        width:100%;
        height:.88rem;
        background:#ED3C3C;
	}
	.top_a ul{
        display: flex;
        justify-content: space-around
	}
	.top_a li{
		width:1rem;
	
		text-align: center;
		font-size:.34rem;
		line-height:.88rem ;
		color:rgba(255,255,255,1);
		font-weight:bold;
		
	} 
	.active{
		border-bottom:.02rem solid rgba(255,255,255,1);
		height:.86rem;
	}
</style>