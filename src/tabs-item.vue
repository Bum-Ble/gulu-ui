<template>
  <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsItem',
  inject: ['eventBus'],
  props:{
    disabled:{
      type: Boolean,
      default: false
    },
    name:{
      type: String | Number,
      required: true
    }
  },
  data(){
    return {
      active: false
    }
  },
  computed:{
    classes(){
      return {
        active: this.active
      }
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  },
  methods:{
    onClick(){
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>
<style lang="scss" scoped>
$blue: #47B5FF;
.tabs-item{
  padding: 0 1em;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active{
    color: $blue;
  }
}
</style>
