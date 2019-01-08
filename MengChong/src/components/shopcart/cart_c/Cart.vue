<template>
    <div id="cart_c">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<script type="text/javascript">
    import Header from './header_c'
    import Main from "./main_c"
    import Footer from './footer_c'
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

</style>
