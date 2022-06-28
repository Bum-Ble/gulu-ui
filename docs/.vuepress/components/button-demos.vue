<template>
  <div>
    <div style="margin: 10px 0;">
      <g-button>默认按钮</g-button>
      <g-button icon="setting">默认按钮</g-button>
      <g-button :loading="true">默认按钮</g-button>
      <g-button disabled>默认按钮</g-button>
    </div>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import Button from '../../../src/button.vue'
import gIcon from '../../../src/icon'
export default {
  components:{
    'g-button': Button,
    gIcon
  },
  data(){
    return{
      content: `
        <g-button>默认按钮</g-button>
        <g-button icon="setting">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
      `.replace(/\t+| +/g, '').trim()
    }
  }
}
</script>
