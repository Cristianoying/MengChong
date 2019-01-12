<template>
    <div id="videostop">
        <router-link :to="{name:'publish'}">
            <div class="topfirst"></div>
        </router-link>
        <div class="topsecond"></div>
        <div class="topthird"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    #videostop{
       width:100%;
       height: 1.47rem;
       display:flex;
       padding-top:0.65rem;
       padding-left: 0.48rem;
       position: relative;
        .topfirst{
           width:0.22rem;
            height:0.4rem;
            background:url(../../../../../static/publishs_img/publishvideo_slices/return_03.jpg)no-repeat;
            background-size: 100% 100%;
        }
        .topsecond{
            width:0.33rem;
            height: 0.4rem;
             position: absolute;
            right:1.33rem;
            background:url(../../../../../static/publishs_img/publishvideo_slices/takephoto2x.png)no-repeat;
            background-size: 100% 100%;
        }
        .topthird{
            width:0.33rem;
            height: 0.4rem;
            background:url(../../../../../static/publishs_img/publishvideo_slices/takevideo2x.png)no-repeat;
            background-size: 100% 100%;
            position: absolute;
            right:0.5rem;
        }
        
    }
</style>

