<template lang="html">
  <div class="item">
    <template v-for="item in routes" v-if="!item.hidden">
      <router-link v-if="!item.meta" :to="fullUrl(item.path,item.children[0].path)">
        <el-menu-item :index="fullUrl(item.path,item.children[0].path)">
          <span>{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>
      <template v-else>
        <router-link v-if="!item.children" :to="fullUrl(item.path)">
          <el-menu-item :index="fullUrl(item.path)">
            <span>{{item.meta.title}}</span>
          </el-menu-item>
        </router-link>
        <el-submenu v-else :index="fullUrl(item.path)">
          <template slot="title">
            <span>{{item.meta.title}}</span>
          </template>
          <Item :routes="item.children" :baseUrl="baseUrl + '/' + item.path"></Item>
        </el-submenu>
      </template>
    </template>
  </div>
</template>

<script>
import path from 'path'
// 由于此处用到递归去遍历侧边栏的item，故将item与菜单栏分开

export default {
  name:'Item',
  props:{
    routes:{
      type:Array,
      required:true
    },
    baseUrl:{ //迭代需要用到完整的url路径
      type:String,
      default:''
    }
  },
  methods:{
    fullUrl(url1='',url2=''){
      return path.resolve(this.baseUrl,url1,url2)
    }
  }
}
</script>

<style lang="css">
.item a {
  text-decoration: none;
}
</style>
