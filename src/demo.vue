<template>
  <div>
    <g-slides class="wrapper" width="300px" height="200px" :selected.sync="selected">
      <g-slides-item name="第一张">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="第二张">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="第三张">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>
  </div>
</template>

<script>
import gSlides from '@/slides'
import gSlidesItem from '@/slides-item'

export default {
  name: "demo",
  components: {
    gSlides,gSlidesItem
  },
  data() {
    return {
      selected: '第一张'
    }
  },
  methods:{
  }
}
</script>

<style>
* { margin: 0; padding: 0}
*, *::before, *::after{box-sizing: border-box}
.wrapper{
  margin: 40px;
}
.box{
  width: 100%;
  height: 300px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
