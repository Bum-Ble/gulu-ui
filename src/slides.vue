<template>
  <div class="g-slides" @mouseenter="onMouseEnter()" @mouseleave="onMouseLeave()"
        @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <div class="g-slides-window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span v-for="n in childrenLength" :class="{active: selectedIndex === n - 1}" @click="select(n-1)">
        {{n-1}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluSlides",
  props:{
    selected:{
      type: String
    }
  },
  computed:{
    selectedIndex(){
      return this.names.indexOf(this.selected) || 0
    },
    names(){
      return this.$children.map(vm => vm.name)
    }
  },
  data(){
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      startTouch: undefined
    }
  },

  mounted(){
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.$children.length
  },
  updated() {
    this.updateChildren()
  },
  methods:{
    onMouseEnter(){
      this.pause()
    },
    onMouseLeave(){
      this.playAutomatically()
    },
    onTouchStart(e){
      this.pause()
      if (e.touches.length > 1) return
      this.startTouch = e.touches[0]
    },
    onTouchMove(){},
    onTouchEnd(e){
      let endTouch = e.changedTouches[0]
      let {clientX: x1, clientY: y1} = this.startTouch
      let {clientX: x2, clientY: y2} = endTouch

      // 两点之间距离
      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1,2))
      // 垂直于x轴的距离
      let deltaY = Math.abs(y2 - y1)
      // 角度小于30度时，默认用户不是上下滚动页面，而是左右切换轮播图。（角度为30度时，distance 是 deltaY 的两倍）。
      let rate = distance / deltaY
      if (rate > 2){
        if (x2 > x1){
          this.select(this.selectedIndex - 1)
        }else{
          this.select(this.selectedIndex + 1)
        }
      }
      this.$nextTick(() => {
        this.playAutomatically()
      })
    },
    playAutomatically(){
      if (this.timerId) return
      let run = () => {
        let index = this.names.indexOf(this.getSelected())
        let newIndex = index + 1
        this.select(newIndex)
        this.timerId = setTimeout(run, 3000)
      }
      // 用 setTimeout 模拟 setInterval
      this.timerId = setTimeout(run, 3000)
    },
    pause(){
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    select(newIndex){
      this.lastSelectedIndex = this.selectedIndex
      if (newIndex === -1) { newIndex = this.names.length - 1 }
      if (newIndex === this.names.length){ newIndex = 0 }
      this.$emit('update:selected', this.names[newIndex])
    },
    getSelected(){
      let first = this.$children[0]
      return this.selected || first
    },
    updateChildren(){
      let selected = this.getSelected()
      this.$children.forEach(vm => {
        let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        if (this.timerId){
          if (this.lastSelectedIndex === this.$children.length -1 && this.selectedIndex === 0){
            reverse = false
          }
          if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length -1){
            reverse = true
          }
        }
        vm.reverse = reverse
        this.$nextTick(() => {
          vm.selected = selected
        })
      })
    }

  }
}
</script>

<style scoped lang="scss">
.g-slides{
  &-window{
    overflow: hidden;
  }
  &-wrapper{
    position: relative;
  }
  &-dots{
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    > span{
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 0 8px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      background-color: #ddd;
      &:hover{
        cursor: pointer;
      }
      &.active{
        background-color: #666666;
        color: #fff;
        &:hover{
          cursor: default;
        }
      }
    }
  }
}

</style>
