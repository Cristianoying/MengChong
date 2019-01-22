<template>
    <div class="dynamic">
        <Dytop></Dytop>
        <div class="wrapper" ref="Dywrapper">
            <div class="content">
                <Dymain :main="id"></Dymain>
                <Dycont></Dycont>
            </div>
        </div>
        <Dyfoot></Dyfoot>
    </div>
</template>
<script>
import dytop from "./dytop";
import dymain from "./dymain";
import dycont from "./dycont";
import dyfoot from "./dyfoot";
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
    data(){
        return{
            id:""
        }
    },
    created(){
        this.$store.dispatch("select/handlemockone");
        this.id=this.$route.query.id
	},
    components:{
        "Dytop":dytop,
        "Dymain":dymain,
        "Dycont":dycont,
        "Dyfoot":dyfoot
    },
    mounted(){
        if(!this.scroll){
            this.scroll=new BScroll(this.$refs.Dywrapper,{
                click:true                    //点击事件才会生效
            })
            // console.log(this.scroll);
        }
    }
}
</script>
<style scoped>
.dynamic{
    background: #eeeeee;
    width:100%;
    height:100%;
}
.wrapper{
    height:100%;
    width:100%;
}
</style>