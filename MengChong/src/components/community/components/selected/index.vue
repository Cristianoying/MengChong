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
import Vuex from "vuex";
export default {
    components:{
        "Top":top,
        "Banner":banner,
        "Main":main
    },
    methods:{
        ...Vuex.mapActions({
            handleSelect:""
        })
    }
}
</script>
<style scoped>
    .zhu_a{
        background:#EEEEEE;
    }
</style>