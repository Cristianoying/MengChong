<template>
  <div id="main_c">
    <ul id="cartlist_c">
      <li class="goodsleft_c" v-for="(item,index) in cartGoodsList" :key="item.goodsId">
        <div>
          <div>
            <input type="checkbox" :checked="item.flag" @click="changesinglestate(index)">
          </div>
          <div class="goodsmiddle_c">
            <img :src="item.goodsPhoto" alt="">
            <div>
              <p>{{item.goodsName}}</p>
              <p>￥{{item.goodsPrice}}</p>
            </div>
          </div>
          <div class="goodsright_c">
            <p>
              <button class="btn_c" @click="handleaddorsub({opt:1,id:item.goodsId,index})">-</button>
              <span>{{item.goodsCount}}</span>
              <button class="btn_c" @click="handleaddorsub({opt:0,id:item.goodsId,index})">+</button>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  import Vuex from 'vuex';

  export default {
    name: "main_c",
    created() {
      this.$store.dispatch('ShopCart/handleGetcartlist');
    },
    computed: {
      ...Vuex.mapState({
        cartGoodsList: state => state.ShopCart.cartGoodsList
      })
    },
    methods: {
      ...Vuex.mapMutations({
        changesinglestate: 'ShopCart/changesinglestate'
      }),
      ...Vuex.mapActions({
        handleaddorsub: 'ShopCart/handleaddorsub'
      })

    }
  }
</script>

<style scoped>
  #main_c {
    width: 100%;
    height: max-content;
    min-height: 11rem;
    background: #eee;
  }

  #cartlist_c {
    width: 100%;
    min-height: 11rem;
    background: #eee;
    overflow: auto;
  }

  #cartlist_c > li {
    width: 7.5rem;
    height: 2.2rem;
    background: rgba(255, 255, 255, 1);
    margin: 0.38rem 0;

  }

  #cartlist_c > li > div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .4rem;
  }

  #cartlist_c > .goodsleft_c input {
    width: 0.4rem;
    height: 0.4rem;
    border: 0;
    border-radius: 50%;
  }

  .goodsmiddle_c {
    margin-left: -.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .goodsright_c .btn_c {
    width: .42rem;
    height: .42rem;
    background: #fff;
    border: 2px solid #ccc;
    outline: none;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .5rem;
  }
</style>
