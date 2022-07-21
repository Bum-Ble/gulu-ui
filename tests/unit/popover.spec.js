import chai, { expect } from 'chai'
import sinon from "sinon"
import sinonChai from 'sinon-chai'
import {mount, shallowMount} from '@vue/test-utils'
import Popover from "@/popover";
chai.use(sinonChai)

describe('Popover.vue', () => {
  it('存在.', () => {
    expect(Popover).to.be.ok
  })
  it('可以设置 position', (done) => {
    const wrapper = mount(Popover, {
      slots:{
        default: '<button>点我</button>',
        content: '<div>弹出内容</div>'
      },
      propsData:{
        position:'bottom'
      }
    })
    let vm = wrapper.vm
    wrapper.find('button').trigger('click')
    vm.$nextTick(() => {
      let classes = wrapper.find('.content-wrapper').classes()
      expect(classes).to.include('position-bottom')
      done()
    })
  })
  it('可以设置 trigger', (done) => {
    const wrapper = mount(Popover, {
      slots:{
        default: '<button>点我</button>',
        content: '<div>弹出内容</div>'
      },
      propsData:{
        position:'bottom',
        trigger: 'hover'
      }
    })
    let vm = wrapper.vm
    expect(wrapper.find('.content-wrapper').element).to.not.exist
    wrapper.find('.popover').trigger('mouseenter')
    vm.$nextTick(() => {
      expect(wrapper.find('.content-wrapper').element).to.exist
      done()
    })
  })
})

