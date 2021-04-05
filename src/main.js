import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueRouter from 'vue-router'
import Antd from 'ant-design-vue/es'

Vue.use(Antd);
Vue.use(VueRouter);
Vue.config.productionTip = false

import 'ant-design-vue/dist/antd.less';  // or 'ant-design-vue/dist/antd.less'


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
