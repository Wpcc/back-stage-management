<template>
  <svg class="icon-svg" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
  function importAll(r){
    r.keys().forEach(r)
  }
  const req = request.context('../icons',false,/\.svg$/)
  importAll(req)

  export default {
    props:{
      iconClass:{
        type:String,
        required:true
      }
    },
    computed:{
      iconName(){
        return `#icon-${this.iconClass}`
      }
    }
  }
</script>
<style>
  .icon-svg{
    width: 1em;
    height: 1em;
    vertical-align: 0.15em;
    overflow: hidden;
  }
</style>
