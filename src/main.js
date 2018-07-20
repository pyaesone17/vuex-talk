import Vue from 'vue'
import store from './store'
// import App from './App.vue'
// import App from './props-demo/App.vue'
// import App from './event-demo/App.vue'
// import App from './manual-source-of-truth/App.vue'
import App from './vuex-demo/App.vue'

Vue.config.productionTip = false
// const sourceOfTruth = { items : []}

// new Vue({
//   render: h => h(App),
//   data: sourceOfTruth
// }).$mount('#app')


// const sourceOfTruth = { items : []}
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
