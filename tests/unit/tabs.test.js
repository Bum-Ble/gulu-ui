const expect = chai.expect;
import Vue from 'vue'
import Tabs from '@/tabs'
import TabsHead from "@/tabs-head";
import TabsItem from "@/tabs-item";
import TabsBody from "@/tabs-body";
import TabsPane from "@/tabs-pane";

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在', () => {
    expect(Tabs).to.exist
  })

  it('接收 selected', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML =`
    <g-tabs selected="finance" >
      <g-tabs-head>
        <g-tabs-item name="woman" disabled>美女</g-tabs-item>
        <g-tabs-item name="finance">财经</g-tabs-item>
        <g-tabs-item name="sports">体育</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="woman">美女相关咨询</g-tabs-pane>
        <g-tabs-pane name="finance">财务相关咨询</g-tabs-pane>
        <g-tabs-pane name="sports">体育相关咨询</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector(`.tabs-item[data-name = 'finance']`)
      expect(x.classList.contains('active')).to.eq(true)
      done()
    })
  })
  it('可以接收 direction', ()=>{

  })

})
