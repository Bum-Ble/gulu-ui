<template>
  <div class="cascaderItem" :style="{height: height + 'px'}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        {{item.name}}
        <g-icon class="icon" v-if="item.children" name="right"></g-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems" :height="height" :level="level + 1" :selected="selected" @update:selected="onUpdateSelected"></gulu-cascader-items>
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
    },
    selected:{
      type: Array,
      default() {
        return [];
      }
    },
    level:{
      type: Number,
      default: 0
    }
  },
  computed:{
    rightItems(){
      let currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children){
        return currentSelected.children
      }else{
        return null
      }
    }
  },
  methods:{
    onClickLabel(item){
      let copy = JSON.parse(JSON.stringify(this.selected))
      this.$set(copy, this.level, item)
      copy.splice(this.level + 1)
      this.$emit('update:selected', copy)
    },
    onUpdateSelected(newSelected){
      this.$emit('update:selected', newSelected)
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
  padding-top: .3em;
  .left{
    height: 100%;
    overflow: auto;
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
