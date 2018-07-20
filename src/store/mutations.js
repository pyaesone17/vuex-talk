import { ADD_TODO, CLEAR_TODO } from './mutation-types'

const mutations = {
    [ADD_TODO] (state, payload) {
        // mutate state
        state.items.push(
            payload
        )
    },
    [CLEAR_TODO] (state) {
        // mutate state
        state.items = []
    }
}

export default mutations