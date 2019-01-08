<template>
    <div id="footer_c">
        <div>
            <input type="checkbox">全选
        </div>
        <div>
            合计: <span style="color: red">2000</span>
            <router-link :to="{name:'submitorder'}">解算</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer_c"
    }
</script>

<style scoped>
        #footer_c{
            width:7.5rem;
            height:1.2rem;
            background:rgba(255,255,255,1);
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 2;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        #footer_c input{
            vertical-align: bottom;
            width:0.4rem;
            height:0.4rem;
            border:0px solid rgba(170,170,170,1);
            border-radius:50%;
            margin:0 .3rem;
        }
    #footer_c div,#footer_c span , #footer_c button{

        font-size:0.3rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(22,22,22,1);
        margin-right: .1rem;
    }
        #footer_c span{
            margin-right: .5rem;
        }
        #footer_c button{
            background: #fff;
            border: 2px solid #ccc;
            outline: none;
        }
</style>
