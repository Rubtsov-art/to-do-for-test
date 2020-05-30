export default {

    mutations: {
        createTodos(state, newTodo) {
            state.todos.unshift(newTodo)
        },
        removeTodos(state, id) {
            state.todos = state.todos.filter(t => t.id !== id)
        },
        updateTitle (state, payload) {
            const target = state.todos.findIndex(todo => todo.id === payload.id)
            state.todos[target].title = payload.value
          }
    },

    state: {
        todos: []
    },

    getters: {
        allTodos(state) {
            return state.todos
        },

        getTargetTodo: state => id => {
            return state.todos.find(todo => todo.id === id)
        }
    }
}