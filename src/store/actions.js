import { ADD_TODO, CLEAR_TODO } from './mutation-types'

const actions = {
    addTodo (context, payload) {
        // invoke mutations
        context.commit(ADD_TODO,payload)
    },
    clearTask (context) {
        // invoke mutations
        context.commit(CLEAR_TODO)
    }
}

export default actions