import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.eventBus = new Vue()
// 进入路由前
router.beforeEach((to, from, next) => {
    next()
    // const $token = window.localStorage.getItem('token') // 获取token
    // if (to.meta.auth) { // 需要验证
    //     if ($token) {} else {}
    // } else {}
})
// 进入路由后
router.afterEach(() => {
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
