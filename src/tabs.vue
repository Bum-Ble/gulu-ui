<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
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
  provide(){
    return{
      eventBus: this.eventBus
    }
  },
  data(){
    return {
      eventBus: new Vue()
    }
  },
  mounted() {
    if (this.$children.length === 0){
      console && console.warn && console.warn('tabs的子组件应该是tabs-head和tabs-nav')
    }
    this.$children.forEach(vm => {
      if (vm.$options.name === 'GuluTabsHead'){
        vm.$children.forEach(childVm => {
          if (childVm.$options.name === 'GuluTabsItem' && childVm.name === this.selected){
            this.eventBus.$emit('update:selected', this.selected, childVm)
          }
        })
      }
    })
  }
}
</script>
<style scoped lang="scss">
.tabs{
}

</style>
