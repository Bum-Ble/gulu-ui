<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items class="popover" :items="source" :height="height" :selected="selected" @update:selected="onUpdateSelected"></cascader-items>
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
    height:{
      type: String,
    },
    selected:{
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return {
      popoverVisible: false
    }
  },
  methods:{
    onUpdateSelected(newSelected){
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>

<style scoped lang="scss">
@import "var";
.cascader{
  position: relative;
  .trigger{
    border: 1px solid black;
    height: 32px;
    width: 100px;
  }
  .popover-wrapper{
    position: absolute;
    top: 100%;
    left: 0;
    @extend .box-shadow;
    background-color: #fff;
  }
}
</style>
