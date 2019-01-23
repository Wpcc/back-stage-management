import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import Sidebar from './views/Sidebar.vue'
import Layout from '@/views/layout/Layout.vue'

import {routes} from "@/api/routes"

Vue.use(Router)

export default new Router({
  routes: str2comp(routes)
})

function str2comp(arr){
  arr.forEach(function(item){
    if(item.component === 'Layout'){
      item.component = Layout
    }
  })
  return arr
}
