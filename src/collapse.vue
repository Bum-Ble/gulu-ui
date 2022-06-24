<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "GuluCollapse",
  provide(){
    if (this.single){
      return {
        eventBus: this.eventBus
      }
    }
  },
  props:{
    single:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      eventBus: new Vue()
    }
  }
}
</script>

<style scoped lang="scss">
$border-color: #ddd;
$border-radius: 4px;
.collapse{
  border: 1px solid $border-color;
  border-radius: $border-radius;
}
</style>
