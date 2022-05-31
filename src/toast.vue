<template>
  <div class="wrapper" :class="totalClasses">
    <div class="toast" ref="toast" >
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div v-if="showClose" class="line" ref="line"></div>
      <span class="close" v-if="showClose" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GuluToast',
  props:{
    autoClose:{
      type: Number, // 为0时,不自动关闭
      default: 2
    },
    showClose:{
      type: Boolean,
      default: true
    },
    closeButton:{
      type: Object,
      default(){
        return {
          text: '关闭',
          callback: undefined
        }
      }
    },
    enableHtml:{
      type: Boolean,
      default: false
    },
    position:{
      type: String,
      default: 'top',
      validator(value){
        return ['top','bottom','middle'].indexOf(value) >= 0
      }
    }
  },
  computed:{
    totalClasses(){
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  mounted() {
    this.execAutoClose()
    this.updateStyle()
  },
  methods:{
    execAutoClose(){
      if (this.autoClose !== 0){
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    updateStyle(){
      this.$nextTick(() => {
        if (this.showClose && this.$refs.line){
          this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        }
      })
    },
    close(){
      this.$el.remove()
      this.$emit('beforeClose')
      this.$destroy()
    },
    onClickClose(){
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function'){
        this.closeButton.callback(this)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
@keyframes fade-in {
  0%{ opacity: 0}
  100%{ opacity: 1}
}
@keyframes slide-up {
  0%{ opacity: 0; transform: translateY(100%);}
  100%{ opacity: 1; transform: translateY(0%);}
}
@keyframes slide-down {
  0%{ opacity: 0; transform: translateY(-100%);}
  100%{ opacity: 1; transform: translateY(0%);}
}
.wrapper{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 300ms;
  &.position-top{
    top: 0;
    .toast{
      animation: slide-down $animation-duration;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  &.position-bottom{
    bottom: 0;
    .toast{
      animation: slide-up $animation-duration;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  &.position-middle{
    top: 50%;
    transform: translate(-50%, -50%);
    .toast{
      animation: fade-in $animation-duration;
    }
  }
}
.toast{
  //animation: fade-in .5s;
  font-size: $font-size;
  color: #fff;
  line-height: 1.8;
  min-height: $toast-min-height;
  background-color: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
  padding: 0 16px;
  display: flex;
  align-items: center;

}
.message{
  padding: 8px 0;
}
.line{
  height: 100%;
  border-left: 1px solid #666;
  margin-left: 16px;
}
.close{
  padding-left: 16px;
  flex-shrink: 0;
}
</style>
