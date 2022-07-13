<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{result || '&nbsp;' }}
    </div>
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
  computed:{
    result(){
      return this.selected.map(item => item.name).join('/')
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
    border: 1px solid $border-color;
    height: $height;
    min-width: 10em;
    border-radius: $border-radius;
    padding: 0 1em;
    display: inline-flex;
    align-items: center;
    font-size: $font-size;
  }
  .popover-wrapper{
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    @extend .box-shadow;
    background-color: #fff;
  }
}
</style>
