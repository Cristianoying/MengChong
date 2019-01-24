<template>
  <div id="cancel" @click="cancelshow()"></div> 
  
  
  
</template>

<script>
import Vuex from "vuex";
export default {
  methods: {
    cancelshow(){
      var str = sessionStorage.getItem("from_url")
      this.$router.push(str)
    }
  },
};
</script>

<style lang = "scss">
#cancel {
  background: #eee;
  width: 0.91rem;
  height: 0.91rem;
  background: url(../../../../../static/publishs_img/publish_slices/cancel2x.png);
  background-size: 100% 100%;
  bottom: 0.43rem;
  position: absolute;
  left: 50%;
  bottom: 0.43rem;
  transform: translateX(-50%);
}
</style>