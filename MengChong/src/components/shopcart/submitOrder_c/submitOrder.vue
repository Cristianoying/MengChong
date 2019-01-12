<template>
  <keep-alive>
    <div id="orderall">
      <Header></Header>
      <div class="wrapper order_wrapper " ref="order_c">
        <div class="content order_content">
          <Main></Main>
        </div>

      </div>
      <Footer></Footer>
    </div>
  </keep-alive>

</template>

<script>
    import Header from './header'
    import Main from "./main"
    import Footer from './bottom'
    import Bscroll from 'better-scroll'
    export default {
        name:'shopcart',
        components:{
            Header,
            Main,
            Footer
        },
      mounted(){
          this.$nextTick(()=>{
            this.scroll_c = new Bscroll(this.$refs.order_c,{
              pullUpLoad:true,
              click:true
            })
          })
      }
    }
</script>

<style scoped>
    #orderall{
      width: 100%;
      height: 100%;
      background:#f6f6f6;
    }
    #orderall .order_wrapper{
      width: 100%;
      height: 10rem;
    }
    #orderall .order_content{
      margin-top: .3rem;
      height: max-content;
    }
</style>
