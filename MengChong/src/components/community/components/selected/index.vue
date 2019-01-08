<template>
    <div class="zhu_a">
        <Top></Top>
        <Banner></Banner>
        <Main></Main>
    </div>
</template>
<script>
import top from "./top.vue";
import banner from "./banner.vue";
import main from "./main.vue";

export default {
    components:{
        "Top":top,
        "Banner":banner,
        "Main":main
    }
}
</script>
<style scoped>
    .zhu_a{
        background:#EEEEEE;
    }
</style>