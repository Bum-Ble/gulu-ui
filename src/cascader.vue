<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-if="source" v-for="sourceItem in source">
        <g-cascader-item :source-item="sourceItem"></g-cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import gCascaderItem from "./cascader-item";
export default {
  name: "GuluCascader",
  components:{
    gCascaderItem
  },
  props:{
    source: {
      type: Array
    },
  }
}
</script>

<style scoped>

</style>
