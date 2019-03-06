<template>
  <div id="app">
    <IconSVG :iconClass="'me'"></IconSVG>
    <IconSVG :iconClass="'set'"></IconSVG>
    <IconSVG :iconClass="'exit'"></IconSVG>
  </div>
</template>
<script>
import IconSVG from '@/components/IconSVG.vue'
export default {
  components:{
    IconSVG
  }
}
</script>
