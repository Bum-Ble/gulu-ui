<template>
<!--  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">-->
  <button class="g-button" :class=`icon-${iconPosition}`>
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href=`#i-${icon}`></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props:['icon', 'iconPosition']
}

</script>
<style lang="scss">

.g-button{
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--button-bg);
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover{
    border-color: var(--border-color-hover);
  }
  &:active{
    background-color: var(--button-active-bg);
  }
  &:focus{
    outline: none;
  }
  &.icon-right{
    > .content { order: 1}
    > .icon {order: 2; margin-left: .2em}
  }
  &.icon-left{
    > .icon{order: 1; margin-right: .2em}
    > .content{order: 2}
  }
}
</style>
