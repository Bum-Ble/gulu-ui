<template>
  <div class="cascaderItem" :style="{height: height + 'px'}">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
        <g-icon class="icon" v-if="item.children" name="right"></g-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems" :height="height"></gulu-cascader-items>
    </div>

  </div>
</template>

<script>
import gIcon from './icon'

export default {
  name: "guluCascaderItems",
  components:{
    gIcon
  },
  props:{
    items:{
      type: Array
    },
    height:{
      type: String,
      default: "100"
    }
  },
  computed:{
    rightItems(){
      if (this.leftSelected && this.leftSelected.children){
        return this.leftSelected.children
      }else{
        return null
      }
    }
  },
  data(){
    return {
      leftSelected: null
    }
  }
}
</script>

<style scoped lang="scss">
@import "var";
.cascaderItem{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: $font-size;
  .left{
    height: 100%;
    padding: .3em 0;
  }
  .right{
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .label{
    padding: .3em 1em;
    display: flex;
    align-items: center;

    .icon{
      margin-left: .5em;
      transform: scale(0.6);
    }
  }
}

</style>
