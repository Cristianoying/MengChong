<template>
    <div id="articlescenter">
        <div class="cover"  @click = "addphoto()" ref = "divGenres">
             <input type="file" accept="image/*" capture="camera" @change="addsphoto()">
        </div>
        <div class = "addcover">点击设置封面</div>
    </div>
</template>
<script>
export default {
     methods: {
        addphoto(e){
            let els = this.$refs.divGenres.querySelectorAll('input[type=file]');
            els[0].click();
            return false;
        
        }
    },
}
</script>
<style lang="scss">
    #articlescenter{
        width:100%;
        height:3.33rem;
        background:rgba(238,238,238,1);
        border-radius:10px;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .cover{
           width: 0.48rem;
           height:0.4rem;
           background: url(../../../../../static/publishs_img/publisharticle_slices/pubarticle2x.png)no-repeat;
            background-size:100% 100% ;  
            input{
                display:none;
            } 
        }
        .addcover{
            font-size:.2rem;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(98,98,98,1);
            line-height:70px;
            
        }
    }
</style>