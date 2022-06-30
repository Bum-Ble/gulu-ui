<template>
  <div>
    <h3>常见用法</h3>
    <g-collapse :selected.sync="selectedTab">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    <pre><code>{{content1.trim()}}</code></pre>

    <h3>每次只能展开一个面板</h3>
    <g-collapse :selected.sync="selectedTab" single>
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    <pre><code>{{content2.trim()}}</code></pre>
  </div>
</template>

<script>
import gCollapse from "../../../src/collapse";
import gCollapseItem from "../../../src/collapse-item";

export default {
  name: "collapse-demos.vue",
  components: {
    gCollapse, gCollapseItem
  },
  data(){
    return {
      selectedTab: ['1'],
      content1:`
<template>
  <g-collapse :selected.sync="selectedTab">
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
  </g-collapse>
<template>
<script>
export default {
  data(){
    return {
      selectedTab: ['1']
    }
  }
}
<\/script>
      `,
      content2:`
<template>
  <g-collapse :selected.sync="selectedTab" single>
    <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
    <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
    <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
  </g-collapse>
<template>
<script>
export default {
  data(){
    return {
      selectedTab: ['1']
    }
  }
}
<\/script>
      `
    }
  }

}
</script>

<style scoped>

</style>
