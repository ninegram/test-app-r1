import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import './external'
import './styles/main.scss'
import App from './App.vue'
import routes from './routes'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

const router = new VueRouter({
  routes // `routes: routes`의 줄임
})

// 4. 루트 인스턴스를 만들고 mount 하세요.
// router와 router 옵션을 전체 앱에 주입합니다.
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
