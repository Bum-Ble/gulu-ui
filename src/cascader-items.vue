<template>
  <div class="cascaderItem" :style="{height: height + 'px'}">
    <div class="left">
      <div class="label" v-for="item in items" @click="onClickLabel(item)">
        <span class="name"> {{item.name}} </span>
        <g-icon class="icon" v-if="loadData ? !item.isLeaf : item.children" name="right"></g-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems" :height="height" :level="level + 1" :selected="selected" @update:selected="onUpdateSelected" :load-data="loadData"></gulu-cascader-items>
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
    },
    loadData:{
      type: Function
    }
  },
  computed:{
    rightItems(){
      if(this.selected[this.level]){
        let selected = this.items.filter(item => item.name === this.selected[this.level].name)
        if(selected && selected[0].children && selected[0].children.length > 0){
          return selected[0].children
        }
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
    white-space: nowrap;
    &:hover{
      background-color: $button-active-bg;
      cursor: pointer;
    }
    > .name{
      margin-right: 1em;
    }
    .icon{
      margin-left: auto;
      transform: scale(0.6);
    }
  }
}

</style>
