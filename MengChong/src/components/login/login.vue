<template>
	<div id="login_d">
<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
export default {
  methods:{
    login_d(){
      this.$router.push({name:"userlogin"});
    }
  }
}

</script>

<style scoped>
#login_d{
  height:100%;
  width:100%;}

</style>
