// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/js/flexble'
import './common/css/reset.css'
import "../node_modules/swiper/dist/css/swiper.css"
import './common/css/footer_icon_d/iconfont.css';
import './common/css/petlist_icon_b/iconfont.css';
import './common/css/mine_icon_d/iconfont.css';
import './common/css/mine_icon_d/iconfont'
Vue.config.productionTip = false
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(MintUi);

import axios from 'axios'

Vue.config.productionTip = false
<<<<<<< HEAD

=======
>>>>>>> 5e68fa2eef25732f8947e5685a67076fdf6ad8ec

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
