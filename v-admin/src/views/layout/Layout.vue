<template lang="html">
  <div class="layout">
    <el-col :span='4' class="sidebar">
      <Sidebar></Sidebar>
    </el-col>
    <el-col :span='20' class="main">
      <router-view></router-view>
    </el-col>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  components:{
    Sidebar
  }
}
</script>

<style media="screen" lang='less'>
  .layout{
    height:100%;
    .sidebar{
      height: 100%;
      background-color: rgb(84, 92, 100);
      ul{
        border-right: none;
      }
    }
    .main{
      h3{
        text-align: center;
        color:#2c3e50;
      }
    }
  }
</style>
