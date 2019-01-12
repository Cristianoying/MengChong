<template>
    <div class="dynamic">
        
        <Dytop></Dytop>
        <Dymain :main="id"></Dymain>
        <Dycont></Dycont>
       
    </div>
</template>
<script>
import dytop from "./dytop";
import dymain from "./dymain";
import dycont from "./dycont";
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
        "Dycont":dycont
    }
}
</script>
<style scoped>
.dynamic{
    background: #eeeeee;
}
</style>