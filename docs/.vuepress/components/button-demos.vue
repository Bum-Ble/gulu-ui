<template>
  <div>
    <div style="margin: 10px 0;">
      <h3>基本用法</h3>
      <g-button>默认按钮</g-button>
      <g-button icon="setting">默认按钮</g-button>
      <g-button :loading="true">默认按钮</g-button>
      <g-button disabled>默认按钮</g-button>
    </div>
    <pre><code>{{content.trim()}}</code></pre>
    <div>
      <h3>组合按钮</h3>
      <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
      <pre><code>{{content2.trim()}}</code></pre>
    </div>

  </div>
</template>
<script>
import Button from '../../../src/button.vue'
import gButtonGroup from '../../../src/button-group'
export default {
  name: "input-demos",
  components:{
    'g-button': Button,
    gButtonGroup
  },
  data(){
    return{
      content: `
<g-button>默认按钮</g-button>
<g-button icon="setting">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
      `,
      content2:`
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button>更多</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
      `
    }
  }
}
</script>
