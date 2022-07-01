<template>
  <button class="g-button" :class="classes" @click="$emit('click')">
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
  name:'GuluButton',
  components:{
    'g-icon': Icon
  },
  props:{
    icon:{},
    disabled: Boolean,
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
  },
  computed:{
    classes(){
      return{
        [`icon-${this.iconPosition}`]: true,
        disabled: this.disabled
      }
    }
  }
}

</script>
<style lang="scss" scoped>
@keyframes spin {
  0%{ transform: rotate(0deg) }
  100%{ transform: rotate(360deg) }
}
@import "var";
.g-button{
  font-size: $font-size;
  height: $height;
  padding: 0 1em;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  background: $button-bg;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover{
    border-color: $border-color-hover;
  }
  &:active{
    background-color: $button-active-bg;
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
  &.disabled{
    color: $border-color;
    cursor: not-allowed;
    &:hover{
      border-color: $border-color;
    }
    &:active{
      background-color: $button-bg;
    }
  }
  & .loading{
    animation: spin 1s infinite linear;
  }
}
</style>
