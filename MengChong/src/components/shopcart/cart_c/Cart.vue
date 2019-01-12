<template>
  <div id="cart_c">
    <Header></Header>
    <div class=".wrapper cartlistwrapper" ref="cartlistwrapper">
      <div class=".content cartlistcontent">
        <Main></Main>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script type="text/javascript">
  import Header from './header_c'
  import Main from "./main_c"
  import Footer from './footer_c'
  import BScroll from 'better-scroll'
  import Vuex from 'vuex'
  export default {
    name: 'shopcart',
    components: {
      Header,
      Main,
      Footer
    },
    methods:{
      ...Vuex.mapMutations({
        handlesetfrom:"ShopCart/handlesetfrom"
      })
    }
    ,
    mounted() {
      let Bscroll = new BScroll(this.$refs.cartlistwrapper, {
        click: true
      });
    },
    beforeRouteEnter(to,from,next){
      console.log(from.name);
      next();
    },
    beforeRouteUpdate(){
      console.log( this )
    },
    beforeRouteLeave(to,from,next){
      console.log( this );
      this.from_c = ''
      next();
    }
  }
</script>

<style scoped>
  #cart_c {
    height: 100%;
    width: 100%;
  }

  .cartlistwrapper {
    width: 100%;
    height: 11rem;
  }

  .cartlistcontent {
    width: 100%;
  }
</style>
