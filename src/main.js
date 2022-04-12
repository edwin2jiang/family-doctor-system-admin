import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { request } from "@/config/Axios.config.js"


Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = request // 将axios挂载到vue的原型上


// 开发环境引入mockjs( 如果是生产环境，可以注释掉这个 )
if (process.env.NODE_ENV !== 'production') require('./api/index.js')


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
