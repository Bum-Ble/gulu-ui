<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">
      {{result || '&nbsp;' }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items class="popover" :items="source" :height="height" :selected="selected"
                      @update:selected="onUpdateSelected" :load-data="loadData" :load-item="loadItem">
      </cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items";
import ClickOutside from "./click-outside";
export default {
  name: "GuluCascader",
  components:{
    CascaderItems
  },
  directives:{ ClickOutside },
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
    },
    loadData:{
      type: Function
    }
  },
  computed:{
    result(){
      return this.selected.map(item => item.name).join('/')
    }
  },
  data(){
    return {
      popoverVisible: false,
      loadItem:{}
    }
  },
  methods:{
    // onClickDocument(e) {
    //   let {cascader} = this.$refs
    //   if(cascader === e.target || cascader.contains(e.target)){
    //     return
    //   }
    //   this.close()
    // },
    open(){
      this.popoverVisible = true
      // document.addEventListener('click',this.onClickDocument)
    },
    close(){
      console.log('close')
      this.popoverVisible = false
      // document.removeEventListener('click',this.onClickDocument)
    },
    toggle(){
      if (this.popoverVisible === true){
        this.close()
      }else{
        this.open()
      }
    },
    onUpdateSelected(newSelected){
      this.$emit('update:selected', newSelected)
      let lastItem = newSelected[newSelected.length - 1]

      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0]
      }
      let complex = (children, id) => {
        let noChildren = []
        let hasChildren = []
        children.forEach(item => {
          if(item.children){
            hasChildren.push(item)
          }else{
            noChildren.push(item)
          }
        })
        let found = simplest(noChildren, id)
        if (found){
          return found
        }else{
          found = simplest(hasChildren, id)
          if (found){ return found }
          else{
            for(let i = 0; i < hasChildren.length; i++){
              found = complex(hasChildren[i].children, id)
              if(found){
                return found
              }
            }
            return undefined
          }
        }
      }

      let updateSource = (result) =>{
        this.loadItem = {}
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate = complex(copy, lastItem.id)
        toUpdate.children = result
        this.$emit('update:source', copy)
      }
      if(!lastItem.isLeaf && this.loadData){
        this.loadData(lastItem, updateSource) // 回调：把别人传给我的函数调用一下
        // 调回调的时候传一个函数updateSource，这个函数理论应该被调用
        this.loadItem = lastItem
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "var";
.cascader{
  display: inline-block;
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
    z-index: 1;
    @extend .box-shadow;
    background-color: #fff;
  }
}
</style>
