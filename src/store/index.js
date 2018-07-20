import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: []
    },
    mutations: mutations,
    actions: actions,
    plugins: [createLogger()]
})