<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>
<script>
export default {
  props:{
    span:{
      type: [String, Number]
    },
    offset:{
      type: [String, Number]
    }
  },
  data(){
    return{
      gutter: 0
    }
  },
  computed:{
    colStyle(){
      let { gutter } = this
      return {
        paddingLeft: gutter/2 + 'px',
        paddingRight: gutter/2 + 'px'
      }
    },
    colClass(){
      let { span, offset } = this
      return [
        `col-${span}`,
        `offset-${offset}`
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.col{
  height: 80px;
  width: 50%;
  $class-prefix: col-;
  @for $n from 1 through 24{
    &.#{$class-prefix}#{$n} {
      width: calc(($n / 24) * 100%);
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24{
    &.#{$class-prefix}#{$n} {
      margin-left: calc(($n / 24) * 100%);
    }
  }
}
</style>
