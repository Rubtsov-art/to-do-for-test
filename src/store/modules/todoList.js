export default {

    mutations: {
        createTodos(state, newTodo) {
            state.todos.unshift(newTodo)
        },
        removeTodos(state, id) {
            state.todos = state.todos.filter(t => t.id !== id)
        },
        updateTodoTitle (state, payload) {
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
        },

        getShortTaskText: state => payload => {
            const todoIndex = state.todos.findIndex(todo => todo.id === payload.todoId)
            const targetTask = state.todos[todoIndex].tasks.find(task => task.id === payload.taskId)
            const targetTaskText = targetTask.text.split(" ")
            return targetTaskText[0]

        }
    }
}