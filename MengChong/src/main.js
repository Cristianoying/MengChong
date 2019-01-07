// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/js/flexble'
import './common/css/reset.css'
import './common/css/footer_icon_d/iconfont.css'
import './common/css/mine_icon_d/iconfont.css'
Vue.config.productionTip = false
import axios from 'axios'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import './common/css/mine_icon_d/iconfont'
Vue.use(MintUi);
Vue.prototype.$axios=axios
import store from './store'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
