<template>
    <div id="pay_success_b">
            <mt-header title="支付成功" class="pay_success_b">
                <router-link to="/petlist" slot="left" class="payback_b">
                    <img src="../../../../static/petlish_b_img/20190108180402.png" alt="">
                </router-link>
            </mt-header>
            <img src="../../../../static/petlish_b_img/ZFY-ICON-1.png" alt="">
            <p>您已经支付成功</p>
            <router-link  to="/petlist">
                <mt-button type="danger" size="large" class="finish_b">完成</mt-button>
            </router-link>
    </div>
</template>

<script>
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';

export default {
    components:{
        "mt-header":Header,
        "mt-button":Button
    }
}
</script>

<style lang="scss" scoped>
    #pay_success_b{
        overflow: auto;
        width: 100%;
        height: 100%;
        font-family: PingFang-SC-Regular;
        background: #eeeeee;
        .pay_success_b{
            width: 100%;
            height: 0.88rem;
            font-size: 0.34rem;
             background: #E83F39;
            .payback_b{
                display: block;
                width: .88rem;
                height: .88rem; 
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        >img{
            display: block;
            margin: 3rem auto .59rem;
            width: 2.65rem;
            height: 2.65rem;
        }
        >p{
            text-align: center;
            font-size: .34rem;
            color: #161616;
            font-weight: bold;
        }
        .finish_b{
            width: 6.12rem;
            height: .92rem;
            background: #E83F39;
            margin:  3.35rem auto 0;
            font-size: .34rem;
            color: #fff;
            font-weight: bold;
        }
    }
</style>