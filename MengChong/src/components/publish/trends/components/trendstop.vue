<template>
	<div id="top">
		<div class="content">
			<router-link :to="{name:'publish'}">
				<p class="pone">取消</p>
			</router-link>
			<p class ="ptwo">发帖</p>
			<p class = "pthree" @click = "sendtrends">发送</p>
		</div>
		
	</div>
</template>

<script>
	import axios from "axios"
	export default{

		data() {
			return {
				content:""
			}
		},
		created() {
			 this.Observer.$on("send",(val)=>{
           	 this.content = val;
       })
		},
		methods: {
			sendtrends(){
				console.log(this.content)
				axios({
					url:"/dynMvArtPublish",
					methods:"post",
					data:{				
						"dynContent":this.content,
						"userId":""
					}

				})
				.then(data =>{
					console.log(data);
				})
				.catch(err=>{
					console.log(err);
				});
			}
		},	
	}
</script>

<style lang = "scss">
#top{
	width:100%;
	height:1.41rem;
	border-bottom: 0.01rem solid #eee;
	.content{
		padding:0.75rem 0.46rem 0;
		display:flex;
		justify-content: space-between;	
		p{
		font-size: 0.34rem;
		color: #161616;
		font-weight: 500;
		font-family:PingFang-SC-Medium;	
		}
	
	}
	
	.ptwo{
		font-weight: bold;
	}
}
</style>