<template>
    <div class="article_a">
        <div class="wrapper" ref="stan">
            <div class="content">
                <Stance></Stance>
            </div>
        </div>
    </div>
</template>
<script>
import stance from "./stance.vue"
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
    components:{
        "Stance":stance
    },
    methods:{
        ...Vuex.mapActions({
            handleSelect:""
        })
    },
    mounted(){
        if(!this.scroll){
            this.scroll=new BScroll(this.$refs.stan,{
                click:true
            })
        //    console.log(this.scroll);       
        }
    }
}
</script>
<style scoped>
    .article_a{
        width:100%;
        height:100%;
        position:fixed;
        top:.88rem;   
    }
     .article_a>.wrapper{
        height:100%;
        width:100%;
    }
</style>
