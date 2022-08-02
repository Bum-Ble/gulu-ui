<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GuluSlidesItem",
  props:{
    name:{
      type: String,
      required: true
    }
  },
  computed:{
    visible(){
      return this.selected === this.name
    }
  },
  data(){
    return {
      selected: undefined,
      reverse: false
    }
  }
}
</script>

<style scoped lang="scss">
.g-slides-item{ }
.slide-leave-active{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.slide-enter-active, .slide-leave-active{
  transition: all 1s;
}
.slide-enter{
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter.reverse{
  transform: translateX(-100%);
  opacity: 0;
}
.slide-leave-to{
  transform: translateX(-100%) scale(0.5);
  opacity: 0;
}
.slide-leave-to.reverse{
  transform: translateX(100%) scale(0.5);
  opacity: 0;
}
</style>
