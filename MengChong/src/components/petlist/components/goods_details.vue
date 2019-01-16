<template>
	<div id="goods_details_b">
		<div class="details_head_b">
			<div class="details_back_b" @click="detailsBack()"></div>
			<span>英国短毛猫</span>
		</div>
		<div class="details_body_b">
			<!--<div class="details_bodytitle_b">
				<router-link to="/goods_details_b/goods_intro"><img src="../../../../static/petlish_b_img/GMY-ICON-1@2x.png"/></router-link>
				<router-link to="/goods_details_b/goods_detailed"><img src="../../../../static/petlish_b_img/GMY-ICON-2@2x.png"/></router-link>
			</div>
			<router-view></router-view>-->
			<div class="details_bodytitle_b">
				<div @click="goodsContent('goods_intro-com'),tabIndex=0" 
					 :class="tabIndex === 0 ? 'bg_red_b' : ''">商品介绍</div>
				<div @click="goodsContent('goods_detailed-com'),tabIndex=1"
				 	 :class="tabIndex === 1 ? 'bg_red_b' : ''">图文详情</div>
			</div>
			<component :is="goodscontent ? goodscontent : 'goods_intro-com'"></component>
		</div>
		<div class="details_foot_b">
			<div class="addshopcar_b">
				<span class="colline_b">加入购物车</span>
			</div>
			<div class="nowbuy_b" @click="buyShow()">
				<span>立即购买</span>
			</div>
		</div>
		<mt-popup v-model="popupVisible" position="bottom" class="pay_frame_b">
  			<div class="pay_mode_b">
	  			<div class="weixin_b">
	  				<img src="../../../../static/petlish_b_img/QRZFY-WEIXIN.png"/>
	  				<p>微信</p>
	  			</div>
	  			<div class="zhifubao_b">
	  				<img src="../../../../static/petlish_b_img/QRZFY-ZHIFUBAO.png"/>
	  				<p>支付宝</p>
	  			</div>
  			</div>
			<div class="pay_b" @click="goPay()">  
				<p>确认支付<span>20000</span></p>
			</div>
		</mt-popup>

	</div>
</template>

<script>
import Goods_intro from "./goods_details/goods_intro.vue"
import Goods_detailed from "./goods_details/goods_detailed.vue"
import Vue from "vue"
import { Popup ,MessageBox } from 'mint-ui';
//Vue.component(Popup.name, Popup);

export default{
	data(){
		return{
			goodscontent:'',
			popupVisible:false,
			tabIndex:0
		}
	},
	components:{
		"goods_intro-com":Goods_intro,
		"goods_detailed-com":Goods_detailed,
		"mt-popup":Popup,
		
	},
	methods:{
		detailsBack(){
			this.$router.go(-1)
			/*let len = history.length
			history.go(-(len-1))*/
			this.goodscontent = "";
		},
		goodsContent(val){
			this.goodscontent = val
		},
		buyShow(){
			this.popupVisible = true
		},
		goPay(){
			this.$router.push('/pay_success')
			this.popupVisible = false

		}
	}
	
}
</script>

<style lang="scss" scoped>
#goods_details_b{
	overflow: auto;
	width: 100%;
	height: 100%;
	.details_head_b{
		width: 100%;
		height: 0.88rem;
		//min-height: .88rem;
		background: #E83F39;
		display:flex;
		justify-content: center;
		align-items: center;
		position:relative;
		.details_back_b{
			position: absolute;
			left: 0;
			width: 0.88rem;
			height:0.88rem;
			background: url(../../../../static/petlish_b_img/20190108180402.png) no-repeat;
			background-size: 100% 100%;
		}
		>span{
			font-size: 0.34rem;
			color: #FFFFFF;
			font-family: PingFang-SC-Regular;
		}
	}
	.details_body_b{
		height: 11.48rem;
		background: #eee;
		width: 100%;
		.details_bodytitle_b{
			display: flex;
			width: 100%;
			flex-direction: row;
			justify-content: space-around;
			padding:  0.3rem 0 0.3rem 0;
			>div{
				width: 2rem;
				height: 0.6rem;
				border-radius: .3rem;
				text-align: center;
				line-height: .6rem;
				color: #fff;
				font-family: PingFang-SC-Regular;
				font-size: .28rem;
				background: #e87739;

			}
			.bg_red_b{
				background: #E83F39;
			}
// 			.bg_orange_b{
// x			}
		}
	}
	.details_foot_b{
		width:100%;
		height:0.98rem;
		//min-height: .98rem;
		background: #E83F39;
		display: flex;
		>div{
			width: 100%;
			justify-content: space-between;
			height: 100%;
			display: flex;
			align-items: center;
			>span{
				display: block;
				width: 100%;
				font-size: 0.34rem;
				height: 0.5rem;
				line-height: 0.5rem;
				text-align: center;
				color: #fff;
				font-family: PingFang-SC-Regular;
				font-weight: 400;
			}
			.colline_b{
				border-right: #fff 0.01rem solid;
			}
		}
	}
	.pay_frame_b{
		width: 100%;
		height: 5.3rem;
		background: #fff;
		display: flex;
		flex-direction: column;
		border-radius: 0.08rem 0.08rem 0 0 ;
		.pay_mode_b{
			width: 100%;
			height: 3.5rem;
			display: flex;
			justify-content:space-between;
			>div{
				width: 100%;
				height: 100%;
				text-align: center;
				display: flex;
				flex-direction:column;
				align-items: center;
				justify-content: center;
				>img{
					width: 1.24rem;
					height: 1.1rem;
				}
				>p{
					color: #161616;
					font-size: 0.34rem;
					font-family: PingFang-SC-Heavy;
					margin-top: 0.2rem;
				}
			}
		}
		.pay_b{
			width:100%;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 0.2rem;
			>p{
				width: 6.92rem;
				height: 1.02rem;
				line-height: 1.02rem;
				background: #E83F39;
				border-radius: 0.08rem;
				text-align: center;
				color: #fff;
				font-size: 0.34rem;
				font-family: PingFang-SC-Heavy;
				>span{
					margin-left: 0.5rem;
				}
			}
		}
	}
}
</style>