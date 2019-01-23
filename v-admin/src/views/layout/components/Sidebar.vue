<template lang="html">
  <el-row class="tac">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!--
        侧边栏渲染区域：
        渲染逻辑：
        如果循环对象有meta则证明该菜单项有子菜单
        如果循环对象没有meta则证明该菜单没有子菜单
      -->
      <Item :routes='routes'></Item>
    </el-menu>
  </el-row>
</template>

<script>
/*
将路由表渲染成侧边栏
*/
import Item from './Item.vue'
import {routes} from '@/api/routes'
export default {
  data(){
    return {
      routes:routes
    }
  },
  components:{
    Item
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
