<template>
  <div style="overflow:hidden;">
    <h3>常见布局</h3>
    <g-layout style="height: 300px">
      <g-header class="header-class">header</g-header>
      <g-content class="content-class">content</g-content>
      <g-footer class="footer-class">footer</g-footer>
    </g-layout>
    <pre><code>{{content1.trim()}}</code></pre>

    <h3>多栏布局</h3>
    <g-layout style="height: 300px">
      <g-header class="header-class">header</g-header>
      <g-layout>
        <g-sider style="min-width: 200px" class="sider-class">sider</g-sider>
        <g-content class="content-class">content</g-content>
      </g-layout>
      <g-footer class="footer-class">footer</g-footer>
    </g-layout>
    <pre><code>{{content2.trim()}}</code></pre>

    <g-layout style="height: 300px">
      <g-sider hasCloseButton style="min-width: 200px" class="sider-class">sider</g-sider>
      <g-layout>
        <g-header class="header-class">header</g-header>
        <g-content class="content-class">content</g-content>
        <g-footer class="footer-class">footer</g-footer>
      </g-layout>
    </g-layout>
    <pre><code>{{content3.trim()}}</code></pre>
  </div>
</template>
<script>
import gLayout from '../../../src/layout'
import gHeader from '../../../src/header'
import gSider from '../../../src/sider'
import gContent from '../../../src/content'
import gFooter from '../../../src/footer'
export default {
  name: "layout-demos",
  components:{
    gLayout, gHeader, gSider, gContent, gFooter
  },
  data(){
    return{
      content1:`
<g-layout style="height: 300px">
  <g-header class="header-class">header</g-header>
  <g-content class="content-class">content</g-content>
  <g-footer class="footer-class">footer</g-footer>
</g-layout>
      `,
      content2:`
<g-layout style="height: 300px">
  <g-header class="header-class">header</g-header>
  <g-layout>
    <g-sider style="min-width: 200px" class="sider-class">sider</g-sider>
    <g-content class="content-class">content</g-content>
  </g-layout>
  <g-footer class="footer-class">footer</g-footer>
</g-layout>
      `,

      content3:`
<g-layout style="height: 300px">
  <g-sider hasCloseButton style="min-width: 200px" class="sider-class">sider</g-sider>
  <g-layout>
    <g-header class="header-class">header</g-header>
    <g-content class="content-class">content</g-content>
    <g-footer class="footer-class">footer</g-footer>
  </g-layout>
</g-layout>

      `
    }
  }
}
</script>

<style scoped lang="scss">
.sider-class{
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-class, .footer-class{
  background-color: #ddd;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-class{
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
