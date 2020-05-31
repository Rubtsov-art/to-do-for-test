<template>
    <li>
        <h4 
            v-bind:class="{invesible: editTaskTitle}"
        >
            {{task.title}}
        </h4>
        <button 
            @click="editTaskTitleOn"
            v-bind:class="{invesible: editTaskTitle}"

        >
        Переимновать
        </button>

        <Popup>

        </Popup>

        <input type="text" 
            :value="taskTitle"
            @input="updateTaskTitle"
            v-bind:class="{invesible: !editTaskTitle}"
        />
        <button 
            @click="editTaskTitleOff"
            v-bind:class="{invesible: !editTaskTitle}"
        >
            Переимновать
        </button>
        <p>{{task.text}}</p>
        <button>
            Редактировать текст
        </button>
    </li>
</template>

<script>
import { mapMutations } from "vuex"
import Popup from "../components/Popup"

export default {
    data(){
        return {
            editTaskTitle: false
        }
    },

    components: {
        Popup
    },

    props: {
        todo: {
            type: Object,
            required: true
        },
        task: {
            type: Object,
            required: true
        }
    },

    computed: {
        taskTitle: {
            get () {
                return this.$store.getters.getTargetTask({
                                                            todoId: this.todo.id, 
                                                            taskId: this.task.id
                                                        }).title
            },
            set (value) {
                this.$store.commit("updateTaskTitle", value)
            }
        }
    },

    methods: {
        ...mapMutations(["updateTaskTitle"]),

        editTaskTitleOn() {
            this.editTaskTitle = true
        },

        editTaskTitleOff() {
            this.editTaskTitle = false
        },

        updateTaskTitle(e) {
            this.$store.commit("updateTaskTitle", {
                                                    value: e.target.value, 
                                                    todoId: this.todo.id, 
                                                    taskId: this.task.id
                                                })
        }
    }
}
</script>

<style scoped>
.invesible {
    display: none;
}
</style>