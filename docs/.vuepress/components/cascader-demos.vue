<template>
<div>
  <h3>常见用法</h3>
  <g-cascader :source="source" height="200" :selected.sync="selected"></g-cascader>
  <pre><code>{{content1.trim()}}</code></pre>

  <h3>动态加载数据</h3>
  <g-cascader :source.sync="source2" height="200" :selected.sync="selected2" :load-data="loadData"></g-cascader>
  <pre><code>{{content2.trim()}}</code></pre>
</div>
</template>

<script>
import gCascader from "../../../src/cascader";
import db from '../../../src/db'
export default {
  name: "cascader-demos",
  components: {
    gCascader
  },
  data(){
    return {
      selected: [],
      source: [
        {
          name: '广东',
          children: [{name: '广州'}, {name: '珠海'},{name:'东莞'}]
        },
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
      ],
      selected2: [],
      source2:[],
      // content1
      content1:`
<template>
  <g-cascader :source="source" height="200" :selected.sync="selected"></g-cascader>
</template>
<script>
export default {
  data(){
    return {
      selected: [],
      source: [
        {
          name: '广东',
          children: [{name: '广州'}, {name: '珠海'},{name:'东莞'}]
        },
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
      ],
    }
  }
}
<\/script>
      `,
      // content2
      content2:`
<template>
  <g-cascader :source.sync="source2" height="200" :selected.sync="selected2" :load-data="loadData"></g-cascader>
</template>
<script>
export default {
  data(){
    return {
      selected2: [],
      source2:[],
    }
  },
  created() {
    ajax(0).then(result => {
      this.source2 = result
      console.log(result)
    })
  },
  methods:{
    loadData(node, updateSource){
      let {id} = node
      ajax(id).then(result => {
        updateSource(result)
      })
    },
  }
}
<\/script>
function ajax(parentId = 0){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id == parentId)
      result.forEach(node => {
        if(db.filter(item => item.parent_id === node.id).length > 0){
          node.isLeaf = false
        }else{
          node.isLeaf = true
        }
      })
      resolve(result)
    }, 300)
  })
}
`
    }
  },

  created() {
    ajax(0).then(result => {
      this.source2 = result
      console.log(result)
    })
  },
  methods:{
    loadData(node, updateSource){
      let {id} = node
      ajax(id).then(result => {
        updateSource(result)
      })
    },
  }
}

function ajax(parentId = 0){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id == parentId)
      result.forEach(node => {
        if(db.filter(item => item.parent_id === node.id).length > 0){
          node.isLeaf = false
        }else{
          node.isLeaf = true
        }
      })
      resolve(result)
    }, 300)
  })
}

</script>

<style scoped>

</style>
