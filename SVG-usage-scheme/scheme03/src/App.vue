<template>
  <div id="app">
    <IconSvg :iconClass="'me'"></IconSvg>
    <IconSvg :iconClass="'set'"></IconSvg>
    <IconSvg :iconClass="'exit'"></IconSvg>
  </div>
</template>
<script type="text/javascript">
import IconSvg from './components/IconSvg.vue'
  export default {
    components:{
      IconSvg
    }
  }
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
