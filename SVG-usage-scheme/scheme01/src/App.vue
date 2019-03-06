<template>
  <div id="app">
    <IconSVG :iconClass="'me'" class="icon"></IconSVG>
  </div>
</template>
<script>
  import IconSVG from '@/components/IconSVG'
  export default {
    components:{
      IconSVG
    }
  }
</script>
<style media="screen">
  .icon{
    width:20px;
    height: 20px;
  }
</style>
