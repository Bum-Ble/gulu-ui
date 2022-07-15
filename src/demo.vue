<template>
  <div>
    <g-button>你好</g-button>
    <div style="padding: 20px;">
      <g-cascader :source.sync="source" height="200" :selected.sync="selected" :load-data="loadData"></g-cascader>
    </div>
  </div>
</template>

<script>
import gButton from './button'
import gCascader from "@/cascader";
import db from './db'

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

export default {
  name: "demo",
  components: {
    gButton, gCascader
  },
  data() {
    return {
      selected: [],
      source: []
      //   [
      //   {
      //     name: '浙江',
      //     children: [
      //       {
      //         name: '杭州',
      //         children: [{name: '上城'}, {name: '下城'}, {name: '江干'},]
      //       },
      //       {
      //         name: '嘉兴',
      //         children: [{name: '南湖'}, {name: '秀洲'}, {name: '嘉善'},]
      //       }
      //     ]
      //   },
      //   {
      //     name: '福建',
      //     children: [
      //       {
      //         name: '福州',
      //         children: [{name: '鼓楼'}, {name: '台江'}, {name: '台山'},]
      //       }
      //     ]
      //   },
      //   {
      //     name: '合肥',
      //     children: [{name: '瑶海'}, {name: '庐阳'}]
      //   }
      // ]
    }
  },
  created() {
    ajax(0).then(result => {
      this.source = result
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
    // xxx(){
    //   ajax(this.selected[0].id).then(result =>{
    //     let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
    //     this.$set(lastLevelSelected, 'children', result)
    //     console.log(lastLevelSelected)
    //   })
    // }
  }
}
</script>

<style scoped>
*{ margin: 0; padding: 0}
*, *::before, *::after{box-sizing: border-box}
</style>
