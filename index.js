import Toast from './Toast.vue'
import { events }    from './events'

const Notify = {
  install(Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.component('Toast', Toast)

    const notify = (data) => {
      events.$emit('add', data)
    }
    const warn = (data) => {
      data.warning = true
      events.$emit('add', data)
    }
    const error = (data) => {
      data.error = true
      events.$emit('add', data)
    }

    Vue.prototype['$' + 'notify'] = notify
    Vue['notify'] = notify
    Vue.prototype['$' + 'warn'] = warn
    Vue['warn'] = warn
    Vue.prototype['$' + "error"] = error
    Vue["error"] = error
  }
}

export default Notify