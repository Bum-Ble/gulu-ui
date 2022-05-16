<template>
  <div class="col" :class="[`col-${span}`,`offset-${offset}`]"
        :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}">
    <div style="border: 1px solid red; height: 80px">
      <slot></slot>
    </div>
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
  }
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
