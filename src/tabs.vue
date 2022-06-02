<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluTabs',
  props:{
    selected:{
      type: String,
      required: true
    },
    direction:{
      type: String,
      default: 'horizontal',
      validator(val){
        return ['horizontal', 'vertical'].indexOf(val) >= 0
      }
    }
  },
  created() {
    // this.$emit('update:selected',args)
  }
}
</script>
<style>

</style>
