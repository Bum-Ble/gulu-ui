<template>
  <div class="cascaderItem">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{item.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems"></gulu-cascader-items>
    </div>

  </div>
</template>

<script>
export default {
  name: "guluCascaderItems",
  props:{
    items:{
      type: Array
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
.cascaderItem{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .left{
    border: 1px solid red;
  }
}

</style>
