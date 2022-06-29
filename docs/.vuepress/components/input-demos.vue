<template>
  <div style="margin: 10px 0;">
    <g-input v-model="message"></g-input>
    <g-input value="内容" disabled></g-input>
    <g-input value="内容" readonly></g-input>
    <g-input value="内容" error="内容不能少于两个字"></g-input>
    <pre><code>{{content.trim()}}</code></pre>
  </div>
</template>
<script>
import gInput from '../../../src/input'
export default {
  name: "input-demos",
  components:{
    gInput
  },
  data() {
    return {
      message: '',
      content:`
<g-input v-model="message"></g-input>
<g-input value="内容" disabled></g-input>
<g-input value="内容" readonly></g-input>
<g-input value="内容" error="内容不能少于两个字"></g-input>
`
    }
  }
}
</script>

