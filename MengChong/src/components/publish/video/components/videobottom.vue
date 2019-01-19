<template>
    <div id="videosbottom">
        <p>10秒视频</p>
        <div class="cut">
             
        </div>
        <div class="stop"></div>
        <div class="right"></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    #videosbottom{
        width:100%;
        height:6.87rem;
        display: flex;
        padding-top:0.4rem;
        justify-content: center;
        position: relative;
        p{
            font-size:0.25rem;
            font-family:PingFang-SC-Regular;
            font-weight:400;
            color:rgba(98,98,98,1);  
        }
        .cut{
            width:0.68rem;
            height:0.66rem;
            background:url(../../../../../static/publishs_img/publishvideo_slices/cut2x.png)no-repeat;
            background-size: 100% 100%;
            position:absolute;
            left:0.8rem;
            bottom:2.79rem;
        }
        .stop{
            width:1.48rem;
            height:1.48rem;
            background:url(../../../../../static/publishs_img/publishvideo_slices/stop2x.png)no-repeat;
             background-size: 100% 100%;
            position: absolute;
            bottom:2.38rem;
            left:2.96rem;
        }
        .right{
            width:0.66rem;
            height:0.66rem;
            
            background:url(../../../../../static/publishs_img/publishvideo_slices/right2x.png)no-repeat;
             background-size: 100% 100%;
             position: absolute;
            bottom:2.8rem;
            right:0.8rem;
        }
    }
</style>
