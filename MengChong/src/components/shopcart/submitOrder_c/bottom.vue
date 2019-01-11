<template>
  <div id="bt_c">
    <p> 合计：￥<span>159.00</span>
      <button @click="handlepay(msg)">提交订单
      </button>
    </p>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  export default {
    data() {
      return {
        msg : '111'
    }
    },
    methods: {
      handlepay() {
       // console.log( Toast)
      }
    }
  }
</script>

<style scoped>
  #bt_c {
    width: 100%;
    height: 1rem;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    bottom: 0;
  }

  #bt_c p {
    width: 100%;
    height: 100%;
    text-align: right;
    font-size: .38rem;
    line-height: 1rem;
  }

  #bt_c button {
    width: 2.2rem;
    height: .7rem;
    font-size: .38rem;
    background: orange;

  }
</style>
