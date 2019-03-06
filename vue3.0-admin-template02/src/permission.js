
import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 从cookie中获取token

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => { // router 的钩子函数：在路由跳转之前触发,to=>跳转路由，from=>当前路由
  NProgress.start()
  if (getToken()) { //1.如果cookie中存在TokenKey，也就是用户登录
    if (to.path === '/login') { //1-1.如果路由为登录地址，跳转到首页
      next({ path: '/' })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else { // 1-2.否则直接停留在该页面不做跳转
      if (store.getters.roles.length === 0) { //1-2-1.如果store中没有roles信息
        store.dispatch('GetInfo').then(res => { // 拉取用户信息，该方法GetInfo由于封装成Promise，故能够使用异步操作
          next()
        }).catch((err) => { // 如果cookie中存储的token过期、无效
          store.dispatch('FedLogOut').then(() => { // 在前端将cookie中的内容清空，因为cookie中的token是通过前端定义的，故能够修改
            Message.error(err || 'Verification failed, please login again')
            next({ path: '/' }) //这里应该直接定义到login
          })
        })
      } else {
        next()
      }
    }
  } else { //2.如果cookie中不存在TokenKey，也就是用户未登录
    if (whiteList.indexOf(to.path) !== -1) {// 2-1.如果未登录，但路由地址是login，则继续
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 2-2.否则全部重定向到登录页,并以参数形式保存之前路径
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
