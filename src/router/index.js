import Vue from 'vue'
import Router from 'vue-router'
import pageRouter from './pageRouter'

// 解决路由跳转相同路径问题
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

const router = new Router({
    mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash', // 生产
    routes: [
        ...pageRouter
    ]
})

export default router