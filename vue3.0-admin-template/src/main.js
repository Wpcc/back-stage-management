import Vue from 'vue'

import 'normalize.css/normalize.css' // 引入normalize.css重置样式

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // element内部默认是中文，设置内部语言为英文

import '@/styles/index.scss' // 引入全局的css样式

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // 权限控制：将涉及到权限控制的代码提取出来（也是整个模板最重要的）

Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
