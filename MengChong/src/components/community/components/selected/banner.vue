<template>
    <div class="banner_a">
        <img :src="imgUrl" alt="">
       轮播图
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgUrl:"./1.png" 
        }
    }
}
</script>
<style lang="">
    img{
        width:100%;
        height:3.37rem;
    }
</style>