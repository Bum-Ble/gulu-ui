<template>
  <div class="layout" :class="layOutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluLayout',
  data(){
    return {
      layOutClass: {
        hasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'GuluSider'){
        this.layOutClass.hasSider = true
      }
    })
  }
}
</script>
<style scoped lang="scss">
.layout{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider{
    flex-direction: row;
  }
}
</style>
