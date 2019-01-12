<template>
    <div id="articlesbottom">
        <input type="text" class = "addtitle" placeholder = "添加标题">
        <input type="text" class = "addremark" placeholder="添加摘要">
        <textarea class = "addmain"  placeholder="添加正文"></textarea>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    #articlesbottom{
        width:100%;
        height:8.39rem;
        input{
            font-size:24px;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(98,98,98,1);
            line-height:70px;
        }
        .addtitle{
            width:100%;
            height:1rem;
            border:none;
            outline:none;
            border-bottom: 1px solid #ccc;
            
            

        }
        .addremark{
            width:100%;
            height:1rem;
            border:none;
            outline:none;
             border-bottom: 1px solid #ccc;
        }
        .addmain{
            width:100%;
            height:1.5rem;
             border:none;
            outline:none;
            font-size:24px;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color:rgba(98,98,98,1);
            line-height:70px;

        }
    }
</style>