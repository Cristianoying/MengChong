// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/js/flexble'
import './common/css/reset.css'
import "../node_modules/swiper/dist/css/swiper.css"
import '../node_modules/swiper/dist/css/swiper.min.css';
import './common/css/footer_icon_d/iconfont.css';
import './common/css/petlist_icon_b/iconfont.css';
import './common/css/mine_icon_d/iconfont.css';
import './common/css/mine_icon_d/iconfont'
import './common/css/share_d/iconfont.css'
Vue.config.productionTip = false
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css'
import  'mint-ui/lib/index.js'
import oBserver from './observer.js'
Vue.prototype.Observer = oBserver;
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
import store from './store';
import Observer from "./observer";
Vue.prototype.Observer=Observer;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
