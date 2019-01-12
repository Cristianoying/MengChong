<template>
    <div class="followed_a">
        <div class="wrapper" ref="foll">
                <List class="content"></List>
        </div>
    </div>
</template>
<script>
import list from "./list.vue";
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
   components:{
       "List":list,
       "Top":top
   },
   methods:{
        ...Vuex.mapActions({
            handleSelect:""
        })
    },
    mounted(){
        if(!this.scroll){
            this.scroll=new BScroll(this.$refs.foll)
        //    console.log(this.scroll);       
        }
    }
}
</script>
<style scoped>
    .followed_a{
        width:100%;
        height:100%;
    }
    .followed_a>.wrapper{
        height:100%;
        width:100%;
        position: fixed;
        top:.88rem;
    }
</style>