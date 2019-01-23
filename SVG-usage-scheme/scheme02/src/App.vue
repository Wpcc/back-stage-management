<template>
  <div id="app">
    <IconSvg :iconClass="'me'"></IconSvg>
    <IconSvg :iconClass="'set'"></IconSvg>
    <IconSvg :iconClass="'exit'"></IconSvg>
  </div>
</template>
<script>
import IconSvg from '@/components/IconSvg.vue'
export default {
  components:{
    IconSvg
  }
}
</script>
