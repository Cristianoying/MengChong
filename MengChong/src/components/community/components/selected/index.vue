<template>
    <div class="zhu_a">
        <div class="wrapper" ref="homeWrapper">
            <div class="content">
                <Banner></Banner>
                <Main></Main>
            </div>
        </div>
    </div>
</template>
<script>
import banner from "./banner.vue";
import main from "./main.vue";
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
    components:{
        "Top":top,
        "Banner":banner,
        "Main":main,
    },
    methods:{
        ...Vuex.mapActions({
            handleSelect:""
        })
    },
    mounted(){
        if(!this.scroll){
            this.scroll=new BScroll(this.$refs.homeWrapper,{
                click:true                    //点击事件才会生效
            })
            // console.log(this.scroll);
            
            
        }
    }
}
</script>
<style scoped>
    .zhu_a{
        background:#EEEEEE;
        width:100%;
        height:100%;
    }
    .zhu_a>.wrapper{
        height:100%;
        width:100%;
        position: fixed;
        top:.88rem;
    }

</style>