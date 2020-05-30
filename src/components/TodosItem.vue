<template>
    <li>
        <div>
            <router-link :to="{name: 'Todo', params: {id: todo.id, todo: todo}}"
                         :key="todo.id">
                <h2>{{todo.title}}</h2>
            </router-link>
            <button @click="deleteTodo">удалить ToDo</button>
        </div>
        <ul>
            <Task
                v-for="task of todo.tasks"
                v-bind:key="task.id"
                v-bind:task="task"
                v-bind:todo="todo"
            />
        </ul>
    </li>
</template>

<script>
import Task from "./Task"
import { mapMutations } from "vuex"

export default {
    components: {
        Task
    },

    props: {
        todo: {
            type: Object,
            required: true
        }
    },

    methods: {
        ...mapMutations(["removeTodos"]),
        deleteTodo() {
            this.removeTodos(this.todo.id)
        }
    }
}
</script>

<style scoped>
    li {
        margin: 0 2rem;
        border: 1px solid #ccc;
    }

    h2 {
        font-size: 20px;
    }
</style>