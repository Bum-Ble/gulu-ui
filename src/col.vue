<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:{
    span:{
      type: [String, Number]
    }
  }
}
</script>
<style lang="scss" scoped>
.col{
  height: 80px;
  background: grey;
  width: 50%;
  border: 2px solid green;
  $class-prefix: col-;
  @for $n from 1 through 24{
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>
