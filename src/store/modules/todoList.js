export default {

    mutations: {
        createTodos(state, newTodo) {
            state.todos.unshift(newTodo)
        },
        removeTodos(state, id) {
            state.todos = state.todos.filter(t => t.id !== id)
        },
        updateTodoTitle (state, id, title) {
            //const [targetTodo] = state.todos.map(t => t.id === id)

            state.todos[0].title = title
        }
    },

    state: {
        todos: []
    },

    getters: {
        allTodos(state) {
            return state.todos
        }
    }
}