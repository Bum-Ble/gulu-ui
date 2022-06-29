<template>
<div class="tabs-head">
  <slot></slot>
  <div class="line" ref="line"></div>
  <div class="actions-wrapper">
    <slot name="actions"></slot>
  </div>
</div>
</template>
<script>
export default {
  name: 'GuluTabsHead',
  inject:['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      let wrapperLeft = this.$el.getBoundingClientRect().left
      let {width, height, top, left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - wrapperLeft}px`

    })
  }
}
</script>
<style scoped lang="scss">
$tab-height: 40px;
$blue: #47B5FF;
$border-bottom: #ddd;
.tabs-head{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom:1px solid $border-bottom;
  > .actions-wrapper{
    margin-left: auto;
    display: flex;
    align-items: center;
    padding: 0 1em;
  }
  > .line{
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
    transition: all 350ms;

  }
}

</style>
