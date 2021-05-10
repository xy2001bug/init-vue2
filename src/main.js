import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 进入路由前
router.beforeEach((to, from, next) => {
    next()
})
// 进入路由后
router.afterEach(() => {
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
