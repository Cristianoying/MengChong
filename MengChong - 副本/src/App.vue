<template>
  <div id="app">
    <router-view/>
    <footer_com></footer_com>
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
</style>
