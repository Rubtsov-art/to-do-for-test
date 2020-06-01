<template>
    <li>
        <div>
            <router-link :to="{name: 'Todo', params: {id: todo.id, todo: todo}}"
                         :key="todo.id">
                <h2>{{todo.title}}</h2>
            </router-link>
            <button @click="openPopup">удалить ToDo</button>

            <Popup
                v-if="popupIsOpen"
                @closePopup="closePopup"
            >
                <p>
                Вы действительно хотите удалить заметку?
            </p>
            <button
                @click="deleteTodo"
            >
                OK
            </button>
            <button
                @click="closePopup"
            >
                Отмена
            </button>
            </Popup>

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
import Popup from "../components/Popup"
import { mapMutations } from "vuex"

export default {
    data() {
        return {
            popupIsOpen: false
        }
    },

    components: {
        Task,
        Popup
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
        },

        closePopup() {
            this.popupIsOpen = false
        },

        openPopup() {
            this.popupIsOpen = true
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