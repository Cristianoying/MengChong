<template>
  <div id="apps" v-show="publish">
    <Total-com/>
    <Cancel-com :val="url"/>
  </div>
</template>

<script type="text/javascript">
import Vuex from "vuex";
import Total from "./components/totalpublic.vue";
import Cancel from "./components/cancel.vue";
export default {
  components: {
    "Total-com": Total,
    "Cancel-com": Cancel
  },
  data() {
    return {
      url: "",
      publish: true
    };
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      var str = from.fullPath;
      if (!(/^\/publish/.test(str))) {
        sessionStorage.setItem("from_url",str)
      }
    });
  }
};
</script>	

<style scoped>
#apps {
  height: 100%;
  width: 100%;
  background: #eee;
  position: absolute;
  left: 0;
  top: 0;
}
</style>