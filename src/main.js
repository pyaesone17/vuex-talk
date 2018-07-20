import Vue from 'vue'
import store from './store'

// 1. local state,  2. props 3. event bus 4. source of truth
// import App from './App.vue'
// import App from './props-demo/App.vue'
// import App from './event-demo/App.vue'
// import App from './manual-source-of-truth/App.vue'
import App from './vuex-demo/App.vue'

Vue.config.productionTip = false

// ----------------- enable this for eventbus, propds, manual ------------
// const sourceOfTruth = { items : []}
// new Vue({
//   render: h => h(App),
//   data: sourceOfTruth
// }).$mount('#app')


// ---------------- enable this for vuex -----------------
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
