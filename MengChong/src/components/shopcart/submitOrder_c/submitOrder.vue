<template>
    <div id="orderall">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './header'
    import Main from "./main"
    import Footer from './bottom'
    export default {
        name:'shopcart',
        components:{
            Header,
            Main,
            Footer
        }
    }
</script>

<style scoped>
    #orderall{
      width: 100%;
      height: 100%;
      background:#f6f6f6;

    }
</style>
