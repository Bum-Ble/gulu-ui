<template>
  <div>
    <h3>常见用法</h3>
    <g-button @click="$toast('弹出消息', {position: 'top'})">上方弹出</g-button>
    <g-button @click="$toast('弹出消息', {position: 'middle'})">中间弹出</g-button>
    <g-button @click="$toast('弹出消息', {position: 'bottom'})">下方弹出</g-button>
    <pre><code>{{content1.trim()}}</code></pre>

    <h3>不显示关闭按钮</h3>
    <g-button @click="$toast('弹出消息', {showClose: false})">上方弹出</g-button>
    <pre><code>{{content2.trim()}}</code></pre>

    <h3>支持HTML</h3>
    <g-button @click="$toast('<strong>加粗文字</strong>', {enableHtml: true})">上方弹出</g-button>
    <pre><code>{{content3.trim()}}</code></pre>

    <h3>自定义关闭按钮</h3>
    <g-button @click="onClickButton">上方弹出</g-button>
    <pre><code>{{content4.trim()}}</code></pre>
  </div>
</template>

<script>
import Vue from 'vue'
import plugin from "../../../src/plugin";
import gButton from "../../../src/button"

Vue.use(plugin)
export default {
  name: "toast-demos",
  components: {gButton},
  data(){
    return{
      content1:`
<g-button @click="$toast('弹出消息', {position: 'top'})">上方弹出</g-button>
<g-button @click="$toast('弹出消息', {position: 'middle'})">中间弹出</g-button>
<g-button @click="$toast('弹出消息', {position: 'bottom'})">下方弹出</g-button>
      `,
      content2:`
<g-button @click="$toast('弹出消息', {showClose: false})">上方弹出</g-button>
      `,
      content3:`
<g-button @click="$toast('<strong>加粗文字</strong>', {enableHtml: true})">上方弹出</g-button>
      `,
      content4:`
<template>
  <g-button @click="onClickButton">上方弹出</g-button>
</template>
<script>
  export default {
    methods: {
      onClickButton() {
      this.$toast('这个ui库酷吗？', {
        closeButton: {
          text: '好酷',
          callback: () => {
            console.log('他说好酷！')
          }
        }
      })
    }
    }
  };
  <\/script>
`
    }
  },

  methods: {
    onClickButton() {
      this.$toast('这个ui库酷吗？', {
        closeButton: {
          text: '好酷',
          callback: () => {
            console.log('他说好酷！')
          }
        }
      })
    }

  }
}
</script>

<style scoped>

</style>
