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
    this.eventBus.$emit('update:selected', this.selected)
  }
}
</script>
<style scoped lang="scss">
.tabs{
}

</style>
