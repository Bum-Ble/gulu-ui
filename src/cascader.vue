<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover" v-if="popoverVisible">
      <div v-if="source">
        <cascader-items :items="source"></cascader-items>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items";
export default {
  name: "GuluCascader",
  components:{
    CascaderItems
  },
  props:{
    source: {
      type: Array
    },
  },
  data(){
    return {
      popoverVisible: false
    }
  }
}
</script>

<style scoped lang="scss">
@import "var";
.cascader{
  .trigger{
    border: 1px solid red;
    height: 32px;
    width: 100px;
  }
}
</style>
