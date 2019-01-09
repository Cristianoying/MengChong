<template>
  <div>
    <mt-header id="order">
      <div class="order" slot="left">
        &lt; 确认订单
      </div>
    </mt-header>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  #order {
    width: 7.5rem;
    height: 1rem;
    box-sizing: border-box;
    background: rgba(237, 60, 60, 1);
    z-index: 5;
  }

  #order .order {
    font-size: .34rem;
    font-weight: bold;
  }
</style>
