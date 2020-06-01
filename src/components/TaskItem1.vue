<template>
    <li>
        <h4 
            v-bind:class="{invesible: editTaskTitle}"
        >
            {{task.title}}
        </h4>
        <button 
            v-bind:class="{invesible: editTaskTitle}"
            @click="openTitlePopup"
        >
        Переимновать
        </button>

        <Popup
            v-if="titlePopupViseble"
            @closePopup="closeTitlePopup"
        >
            <p>
                Вы действительно хотите переименовать задачу?
            </p>
            <button
                @click="editTaskTitleOn"
            >
                OK
            </button>
            <button
                @click="closeTitlePopup"
            >
                Отмена
            </button>
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
        <p 
            v-bind:class="{invesible: editTaskText}"
        >
            {{task.text}}
        </p>
        <button
            v-bind:class="{invesible: editTaskText}"
            @click="openTextPopup"
        >
            Редактировать текст
        </button>

        <Popup
            v-if="textPopupViseble"
            @closePopup="closeTextPopup"
        >
            <p>
                Вы действительно хотите отредактировать текст задачи?
            </p>
            <button
                @click="editTaskTextOn"
            >
                OK
            </button>
            <button
                @click="closeTextPopup"
            >
                Отмена
            </button>
        </Popup>

        <input 
            type="textarea"
            :value="taskText"
            @input="updateTaskText"
            v-bind:class="{invesible: !editTaskText}"
        />
        <button
            v-bind:class="{invesible: !editTaskText}"
            @click="editTaskTextOff"
        >
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
            editTaskTitle: false,
            titlePopupViseble: false,
            editTaskText: false,
            textPopupViseble: false
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
            }
        },
        taskText: {
            get () {
                return this.$store.getters.getTargetTask({
                                                            todoId: this.todo.id, 
                                                            taskId: this.task.id
                                                        }).text
            }
        }
    },

    methods: {
        ...mapMutations(["updateTaskTitle", "updateTaskText"]),

        editTaskTitleOn() {
            this.editTaskTitle = true,
            this.titlePopupViseble = false
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
        },

        closeTitlePopup() {
            this.titlePopupViseble = false
        },

        openTitlePopup() {
            this.titlePopupViseble = true
        },

        editTaskTextOn() {
            this.editTaskText = true
            this.textPopupViseble = false
        },

        editTaskTextOff() {
            this.editTaskText = false
        },

        updateTaskText(e) {
            this.$store.commit("updateTaskText", {
                                                    value: e.target.value, 
                                                    todoId: this.todo.id, 
                                                    taskId: this.task.id
                                                })
        },

        closeTextPopup() {
            this.textPopupViseble = false
        },

        openTextPopup() {
            this.textPopupViseble = true
        },
    }
}
</script>

<style scoped>
.invesible {
    display: none;
}
</style>