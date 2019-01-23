// 入口文件
import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { //将vuex分解成两个模块
    app,
    user
  },
  getters // vuex的计算属性
})

export default store
