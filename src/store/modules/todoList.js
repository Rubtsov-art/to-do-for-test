export default {

    mutations: {
        todosParsing(state) {
            state.todos = JSON.parse(localStorage.getItem("todos"));
        },
        todosCopyParsing(state) {
            state.todosCopy = JSON.parse(localStorage.getItem("todosCopy"));
        },
        createTodos(state, newTodo) {
            state.todos.unshift(newTodo)
            const parsed = JSON.stringify(state.todos);
            localStorage.setItem("todos", parsed);
            localStorage.setItem("todosCopy", parsed);
        },
        createTask(state, payload) {
            const targetTodo = state.todos.findIndex(todo => todo.id === payload.todoId)
            state.todos[targetTodo].tasks.unshift(payload.newTask)
        },
        removeTodos(state, id) {
            state.todos = state.todos.filter(t => t.id !== id)
            const parsed = JSON.stringify(state.todos);
            localStorage.setItem('todos', parsed);
        },
        updateTodoTitle (state, payload) {
            const target = state.todos.findIndex(todo => todo.id === payload.id)
            state.todos[target].title = payload.value
        },
        updateTaskTitle (state, payload) {
            const targetTodo = state.todos.findIndex(todo => todo.id === payload.todoId)
            const targetTask = state.todos[targetTodo].tasks.find(task => task.id === payload.taskId)
            targetTask.title = payload.value
        },
        updateTaskText (state, payload) {
            const targetTodo = state.todos.findIndex(todo => todo.id === payload.todoId)
            const targetTask = state.todos[targetTodo].tasks.find(task => task.id === payload.taskId)
            targetTask.text = payload.value
        }
    },

    state: {
        todos: [],
        todosCopy: []
    },

    getters: {
        allTodos(state) {
            return state.todos
        },

        getTargetTodoCopy: state => id => {
            return state.todosCopy.find(todo => todo.id === id)
        },

        getTargetTodo: state => id => {
            return state.todos.find(todo => todo.id === id)
        },

        getTargetTask: state => payload => {
            const targetTodo = state.todos.findIndex(todo => todo.id === payload.todoId)
            return state.todos[targetTodo].tasks.find(task => task.id === payload.taskId)
        },

        getShortTaskText: state => payload => {
            const todoIndex = state.todos.findIndex(todo => todo.id === payload.todoId)
            const targetTask = state.todos[todoIndex].tasks.find(task => task.id === payload.taskId)
            const targetTaskText = targetTask.text.split(" ")
            return targetTaskText[0]

        }
    }
}