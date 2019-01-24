<template>
	<div id="content">
		<textarea  placeholder="输入帖子内容" @change ="handlecontent($event)" :value = "content" ></textarea>
	</div>
</template>

<script>
export default{
	
	data(){
		return{
			content:""
		}
	},
	methods: {
		handlecontent(e){
			var val=e.target.value;
			this.content=val;
			this.Observer.$emit("send",this.content)
			//console.log(this.content,e.target.value)
        
		}
	},
}
</script>

<style lang="scss">
	#content{
		width:100%;
		height: 10.93rem;
		border-bottom: 1px solid #eee;
		textarea{
			width:100%;
			height:100%;
			resize: none;
			border:0;
			outline: none;
			font-size: 0.28rem;
			color: #626262;
			font-family: PingFang-SC-Regulars;
		}
	}
	
</style>