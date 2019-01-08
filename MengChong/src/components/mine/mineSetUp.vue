<template>
    <div>
      <mt-header title="相关设置" class="mine_set_up_d">
        <router-link to="/mine/mineIndex" slot="left"><</router-link>
      </mt-header>
    </div>
</template>

<script>
    export default {
        name: "mine-set-up"
    }
</script>

<style scoped>
.mine_set_up_d{
  height:1rem;
  font-size:.32rem;
  background:#ED3C3C
}
.mine_set_up_goback_d{
    font-size:.5rem;
  }
</style>
