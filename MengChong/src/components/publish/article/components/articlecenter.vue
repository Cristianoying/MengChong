<template>
    <div id="articlescenter">
        <div class="cover"></div>
        <p class = "addcover">点击设置封面</p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    #articlescenter{
        width:750px;
        height:333px;
        background:rgba(238,238,238,1);
        border-radius:10px;
        position: relative;
        .cover{
           width: 0.48rem;
           height:0.4rem;
           background: url(../../../../../static/publishs_img/publisharticle_slices/pubarticle2x.png)no-repeat;
            background-size:100% 100% ;
            position: absolute;
            top:1.27rem;left:3.51rem;
        }
        .addcover{
            font-size:20px;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(98,98,98,1);
            line-height:70px;
            position:absolute;
            left:3.16rem;
            top:1.86rem;
        }
    }
</style>