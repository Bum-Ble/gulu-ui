<template>
  <div>
    <g-button>你好</g-button>
    <div style="padding: 20px;">
      <g-cascader :source="source" height="200" :selected.sync="selected"></g-cascader>
    </div>

  </div>
</template>

<script>
import gButton from './button'
import gCascader from "@/cascader";

export default {
  name: "demo",
  components: {
    gButton, gCascader
  },
  data() {
    return {
      selected: [],
      source: [
        {
          name: '浙江',
          children: [
            {
              name: '杭州',
              children: [{name: '上城'}, {name: '下城'}, {name: '江干'},]
            },
            {
              name: '嘉兴',
              children: [{name: '南湖'}, {name: '秀洲'}, {name: '嘉善'},]
            }
          ]
        },
        {
          name: '福建',
          children: [
            {
              name: '福州',
              children: [{name: '鼓楼'}, {name: '台江'}, {name: '台山'},]
            }
          ]
        },
        {
          name: '合肥',
          children: [{name: '瑶海'}, {name: '庐阳'}]
        }
      ]
    }
  }
}
</script>

<style scoped>
*{ margin: 0; padding: 0}
*, *::before, *::after{box-sizing: border-box}
</style>
