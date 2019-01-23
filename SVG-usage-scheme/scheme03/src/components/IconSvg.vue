<template lang="html">
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName" width="16" height="16"></use>
  </svg>
</template>

<script>
/*
  通过requireContext引入icons目录下的所有svg图片
*/
function importAll (r) {
  r.keys().forEach(r)
}
const req = require.context('../icons',false,/\.svg$/)
importAll(req)

export default {
  name: 'icon-svg',
  props: {
    iconClass:{
      type: String,
      required: true
    }
  },
  computed: {
    iconName(){
      return `#icon-${this.iconClass}`
    }
  }
}
</script>

<style lang="css">
.svg-icon{
  width:1em;
  height: 1em;
  vertical-align: -0.15em;
  fill:currentColor;
  overflow: hidden;
}
</style>
