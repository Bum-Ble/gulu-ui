<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon v-if="loading" name="loading" class="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from './icon'
export default {
  components:{
    'g-icon': Icon
  },
  props:{
    icon:{},
    iconPosition:{
      type: String,
      default: "left",
      // 属性检查器
      validator(value){
        return value === 'left' || value === 'right'
      }
    },
    loading:{
      type: Boolean,
      default: false
    }

  }
}

</script>
<style lang="scss">
@keyframes spin {
  0%{ transform: rotate(0deg) }
  100%{ transform: rotate(360deg) }
}

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
  & .loading{
    animation: spin 1s infinite linear;
  }
}
</style>
