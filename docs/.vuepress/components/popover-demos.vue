<template>
<div>
  <h3>click激活</h3>
  <g-popover>
    <template slot="content">
      <div>popover内容</div>
    </template>
    <g-button>上方弹出</g-button>
  </g-popover>
  <g-popover position="bottom">
    <template slot="content">
      <div>popover内容</div>
    </template>
    <g-button>下方弹出</g-button>
  </g-popover>
  <g-popover position="left">
    <template slot="content">
      <div>popover内容</div>
    </template>
    <g-button>左边弹出</g-button>
  </g-popover>
  <g-popover position="right">
    <template slot="content">
      <div>popover内容</div>
    </template>
    <g-button>右边弹出</g-button>
  </g-popover>
  <pre><code>{{content1.trim()}}</code></pre>

  <h3>hover激活</h3>
  <g-popover trigger="hover" position="right">
    <template slot="content">
      <div>popover内容</div>
    </template>
    <g-button>右边弹出</g-button>
  </g-popover>
  <pre><code>{{content2.trim()}}</code></pre>

  <h3>增加关闭按钮</h3>
  <g-popover position="right">
    <template slot="content" slot-scope="{close}">
      <div>popover内容</div>
      <g-button @click="close">关闭</g-button>
    </template>
    <g-button>右边弹出</g-button>
  </g-popover>
  <pre><code>{{content3.trim()}}</code></pre>
</div>
</template>

<script>
import gPopover from "../../../src/popover";
import gButton from "../../../src/button";
export default {
  name: "popover-demos",
  components:{
    gPopover, gButton
  },
  data(){
    return {
      content1: `
<g-popover>
  <template slot="content">
    <div>popover内容</div>
  </template>
  <g-button>上方弹出</g-button>
</g-popover>
<g-popover position="bottom">
  <template slot="content">
    <div>popover内容</div>
  </template>
  <g-button>下方弹出</g-button>
</g-popover>
<g-popover position="left">
  <template slot="content">
    <div>popover内容</div>
  </template>
  <g-button>左边弹出</g-button>
</g-popover>
<g-popover position="right">
  <template slot="content">
    <div>popover内容</div>
  </template>
  <g-button>右边弹出</g-button>
</g-popover>
      `,
      content2:`
<g-popover trigger="hover" position="right">
  <template slot="content">
    <div>popover内容</div>
  </template>
  <g-button>右边弹出</g-button>
</g-popover>
      `,
      content3: `
<g-popover position="right">
  <template slot="content" slot-scope="{close}">
    <div>popover内容</div>
    <g-button @click="close">关闭</g-button>
  </template>
  <g-button>右边弹出</g-button>
</g-popover>
      `
    }
  },
}
</script>

<style scoped>

</style>
