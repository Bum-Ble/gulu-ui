<template>
  <div>
    <h3>基础布局</h3>
    <div class="row-wrapper">
      <g-row>
        <g-col span="24">
          <div class="demo"></div>
        </g-col>
      </g-row>
      <g-row>
        <g-col span="12">
          <div class="demo"></div>
        </g-col>
        <g-col span="12">
          <div class="demo demo-second"></div>
        </g-col>
      </g-row>
      <g-row :gutter="20">
        <g-col :span="8">
          <div class="demo"></div>
        </g-col>
        <g-col :span="8">
          <div class="demo"></div>
        </g-col>
        <g-col :span="8">
          <div class="demo"></div>
        </g-col>
      </g-row>
      <g-row :gutter="20">
        <g-col :span="6">
          <div class="demo"></div>
        </g-col>
        <g-col :span="6">
          <div class="demo"></div>
        </g-col>
        <g-col :span="6">
          <div class="demo"></div>
        </g-col>
        <g-col :span="6">
          <div class="demo"></div>
        </g-col>
      </g-row>
      <pre><code>{{content1.trim()}}</code></pre>
    </div>
    <h3>分栏偏移</h3>
    <div class="row-wrapper">
      <g-row>
        <g-col :span="6">
          <div class="demo"></div>
        </g-col>
        <g-col :span="6" :offset="1">
          <div class="demo"></div>
        </g-col>
        <g-col :span="6" :offset="5">
          <div class="demo"></div>
        </g-col>
      </g-row>
      <g-row :gutter="20">
        <g-col :span="12" :offset="6">
          <div class="demo"></div>
        </g-col>
      </g-row>
      <pre><code>{{content2.trim()}}</code></pre>
    </div>
    <h3>对齐方式</h3>
    <div class="row-wrapper">
      <g-row align="center">
        <g-col :span="6">
          <div class="demo"></div>
        </g-col>
        <g-col :span="6">
          <div class="demo demo-second"></div>
        </g-col>
      </g-row>
      <g-row align="right">
        <g-col :span="8">
          <div class="demo"></div>
        </g-col>
        <g-col :span="8">
          <div class="demo demo-second"></div>
        </g-col>
      </g-row>
      <pre><code>{{content2.trim()}}</code></pre>
    </div>
    <h3>响应式平均布局</h3>
    <div class="row-wrapper">
      <g-row>
        <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
          <div class="demo"></div>
        </g-col>
        <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
          <div class="demo demo-second"></div>
        </g-col>
        <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
          <div class="demo"></div>
        </g-col>
        <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
          <div class="demo demo-second"></div>
        </g-col>
        <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
          <div class="demo"></div>
        </g-col>
        <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
          <div class="demo demo-second"></div>
        </g-col>
      </g-row>
      <pre><code>{{content3.trim()}}</code></pre>
    </div>
  </div>
</template>

<script>
import gCol from '../../../src/col'
import gRow from '../../../src/row'

export default {
  name: "col-row-demos",
  components: {
    gCol,
    gRow
  },
  data(){
    return{
      content1:`
<g-row>
  <g-col span="24">
    <div class="demo"></div>
  </g-col>
</g-row>
<g-row>
  <g-col span="12">
    <div class="demo"></div>
  </g-col>
  <g-col span="12">
    <div class="demo"></div>
  </g-col>
</g-row>
<g-row :gutter="20">
  <g-col :span="8">
    <div class="demo"></div>
  </g-col>
  <g-col :span="8">
    <div class="demo"></div>
  </g-col>
  <g-col :span="8">
    <div class="demo"></div>
  </g-col>
</g-row>
<g-row :gutter="20">
  <g-col :span="6">
    <div class="demo"></div>
  </g-col>
  <g-col :span="6">
    <div class="demo"></div>
  </g-col>
  <g-col :span="6">
    <div class="demo"></div>
  </g-col>
  <g-col :span="6">
    <div class="demo"></div>
  </g-col>
</g-row>
      `,

      content2:`
<g-row>
  <g-col :span="6">
    <div class="demo"></div>
  </g-col>
  <g-col :span="6" :offset="1">
    <div class="demo"></div>
  </g-col>
  <g-col :span="6" :offset="5">
    <div class="demo"></div>
  </g-col>
</g-row>
<g-row :gutter="20">
  <g-col :span="12" :offset="6">
    <div class="demo"></div>
  </g-col>
</g-row>
      `,

      content3:`
<g-row>
  <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
    <div class="demo"></div>
  </g-col>
  <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
    <div class="demo"></div>
  </g-col>
  <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
    <div class="demo"></div>
  </g-col>
  <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
    <div class="demo"></div>
  </g-col>
  <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
    <div class="demo"></div>
  </g-col>
  <g-col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
    <div class="demo"></div>
  </g-col>
</g-row>
      `
    }
  }
}
</script>

<style scoped lang="scss">
*, *::before, *::after{box-sizing: border-box}
.demo {
  min-height: 40px;
  background-color: #ddd;
  margin: 3px 0;
  border-radius: 6px;
  &.demo-second{
    background-color: #aaa;
  }
}
.row-wrapper{
  border: 1px solid #eee;
  padding: 10px 0;
}
</style>
