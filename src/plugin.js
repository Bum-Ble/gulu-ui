import Toast from './toast'

let currentToast
export default {
  install (Vue, options){
    Vue.prototype.$toast = function (message, toastOptions){
      if (currentToast){
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        propsData:toastOptions,
        message,
        onBeforeClose : () => {
          currentToast = null
        }
      })
    }
  }
}

function createToast({Vue, propsData, message, onBeforeClose}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('beforeClose', onBeforeClose)
  document.body.appendChild(toast.$el)
  return toast
}
