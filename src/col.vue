<template>
  <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
  </div>
</template>
<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (!['span','offset'].includes(key))
      valid = false
  })
  return valid
}
export default {
  name: 'GuluCol',
  props:{
    span:{
      type: [String, Number]
    },
    offset:{
      type: [String, Number]
    },
    ipad:{ type: Object, validator},
    narrowPc:{ type: Object, validator},
    pc:{ type: Object, validator},
    widePc:{ type: Object, validator},
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
      let { span, offset, ipad, narrowPc, pc, widePc } = this
      return [
        ...this.createClass({span, offset}),
        ...this.createClass(ipad, 'ipad-'),
        ...this.createClass(narrowPc, 'narrow-pc-'),
        ...this.createClass(pc, 'pc-'),
        ...this.createClass(widePc, 'wide-pc-'),
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(ipad ? [`col-ipad-${ipad.span}`] : []),
        ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
        ...(pc ? [`col-pc-${pc.span}`] : []),
        ...(widePc ? [`col-wide-pc-${widePc.span}`] : []),
      ]
    }
  },
  methods:{
    createClass(obj, str=''){
      if(!obj){ return [] }
      let arr = []
      if(obj.span){
        arr.push(`col-${str}${obj.span}`)
      }
      if (obj.offset){
        arr.push(`offset-${str}${obj.offset}`)
      }
      return arr
    }
  }
}
</script>
<style lang="scss" scoped>
.col{
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
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc(($n / 24) * 100%);
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc(($n / 24) * 100%);
      }
    }
  }
  @media (min-width: 769px){ // 770
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc(($n / 24) * 100%);
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc(($n / 24) * 100%);
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc(($n / 24) * 100%);
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc(($n / 24) * 100%);
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: calc(($n / 24) * 100%);
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: calc(($n / 24) * 100%);
      }
    }
  }
}
</style>
