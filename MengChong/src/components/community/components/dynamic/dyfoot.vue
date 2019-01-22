<template>
    <div class="dyfoot">
        <div class="kong">

        </div>
        <div class="foot">
            <input type="text" placeholder="添加评论" v-model="contents">
            <button @click="handleSend()">发送</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            contents:""
        }
    },

    methods:{
        handleSend(){
            var obj={};
            obj.contents=this.contents;
            this.contents="";
        },
    }
}
</script>
<style scoped>
    .dyfoot{
        width: 100%;
        height:1.1rem;
        position: fixed;
        bottom:0;
    }
    .kong{
        width:100%;
        height:.1rem;
        background: #eeeeee;
    }
    .foot{
        width:100%;
        height:1rem;
        background: white;
        border-radius:10px;
    }
    .foot input{
        width:5.4rem;
        height:.8rem;
        border-radius:10px;
        background:rgba(243,243,243,1);
        border:none;
        margin:.1rem 0 .1rem .36rem;
        outline:none;
        font-size:.3rem;
        text-indent:.3rem;
        float:left;
    }
    input::-webkit-input-placeholder {
       color:rgba(98,98,98,1);
       font-size: .3rem;
       line-height: .8rem;
       letter-spacing:.05rem;
    }
    .foot button{
        width:1rem;
        height:.8rem;
        font-size:.3rem;
        font-weight:400;
        color:rgba(98,98,98,1);
        background:rgba(243,243,243,1);
        border-radius:10px;
        border:none;
        outline:none;
        float:right;
        margin:.1rem .36rem .1rem 0 ;
    }
</style>