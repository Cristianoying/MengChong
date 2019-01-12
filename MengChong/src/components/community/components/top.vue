<template>
	<div class="top_a">
		<ul>
			<li v-for="(item,index) in navs" @click="handleCl(index)"
			:class="activeIndex==index?'active':''">
				<router-link :to="item.add">
					 {{item.name}}
				</router-link>
			</li>
        </ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				navs:[
					{
					"name":"精选",
					"add":"/community/selected"
					},
					{
					"name":"关注",
					"add":"/community/follow"
					},
					{
					"name":"文章",
					"add":"/community/article_a"
					}
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
		position: fixed;
		z-index:5;
	}
	.top_a ul{
        display: flex;
        justify-content: space-around
	}
	.top_a ul li{
		width:1rem;
		text-align: center;
		font-size:.34rem;
		line-height:.88rem ;
		font-weight:bold;
	} 
	.top_a ul li a{
		color:white;
	}
	.active{
		border-bottom:.02rem solid rgba(255,255,255,1);
		height:.86rem;
	}
</style>