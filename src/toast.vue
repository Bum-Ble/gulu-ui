<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div v-if="showClose" class="line" ref="line"></div>
    <span class="close" v-if="showClose" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
export default {
  name: 'GuluToast',
  props:{
    autoClose:{
      type: Boolean,
      default: true
    },
    autoDelay:{
      type: Number,
      default: 50
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
    }
  },
  mounted() {
    this.execAutoClose()
    this.updateStyle()
  },
  methods:{
    execAutoClose(){
      if (this.autoClose){
        setTimeout(() => {
          this.close()
        }, this.autoDelay * 1000)
      }
    },
    updateStyle(){
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
      })
    },
    close(){
      this.$el.remove()
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
.toast{
  font-size: $font-size;
  color: #fff;
  line-height: 1.8;
  min-height: $toast-min-height;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
