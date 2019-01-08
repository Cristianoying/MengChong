<template>
  <div id="app">
    <router-view/>
    <footer_com v-if="this.$route.meta.isFooter"></footer_com>
  </div>
</template>

<script>
  import footer_com from "./components/footer_d/footer_d"
export default {
  name: 'App',
  components:{
    "footer_com":footer_com
  }
}
</script>

<style>
#app{
	width: 100%;
	height: 100%;
}
</style>
