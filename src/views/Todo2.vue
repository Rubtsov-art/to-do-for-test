<template>
  <section>
    <router-link to="/">Home</router-link>

    <h3 v-bind:class="{invesible: todoTitleEdit}">
      {{todo.title}}
    </h3>
    <button 
      @click="todoTitleOnEdit"
      v-bind:class="{invesible: todoTitleEdit}"
    >
      Переименовать
    </button>
    <input type="text" 
      v-model="changeTodoTitle"
      v-bind:class="{invesible: !todoTitleEdit}"
      />
    <button 
       v-bind:class="{invesible: !todoTitleEdit}"
       @click="openPopup"
    >
      Переименовать
    </button>

    <Popup
      v-if="popupViseble"
      @closePopup="closePopup"
    >
      <p>Сохранить изменения?</p>
      <button
        @click="updateTodoTitle"
      >
        OK
      </button>
      <button
        @click="closePopup"
      >
      Отмена
      </button>
    </Popup>

    <hr>
    <button
      @click="addTask"
    >
      Добавить задачу
    </button>
    <ul>
      <TaskItem
        v-for="task of todo.tasks"
        v-bind:key="task.id"
        v-bind:task="task"
        v-bind:todo="todo"
      >
      </TaskItem>
    </ul>
  </section>
</template>

<script>
import TaskItem from "../components/TaskItem"
import {mapMutations} from "vuex"
import Popup from "../components/Popup"

export default {
  name: "Todo",

  data() {
    return {
      todoTitleEdit: false,
      popupViseble: false,
      changeTodoTitle: "",
    }
  },

  computed: {

    // todoTitle: {
    //   get () {
    //     return this.$store.getters.getTargetTodo(this.todo.id).title
    //   },
    //}
  },

  props: ["todo"],

  components: {
    TaskItem,
    Popup
  },

  methods: {
      ...mapMutations(["updateTodoTitle", "createTask"]),

      todoTitleOnEdit() {
        this.todoTitleEdit = true
      },

      todoTitleEditOff() {
         this.todoTitleEdit = false
      },

      openPopup() {
        this.popupViseble = true
      },

      closePopup() {
        this.popupViseble = false
        this.todoTitleEdit = false

      },

      updateTodoTitle() {
        this.$store.commit("updateTodoTitle", {
                                                value: this.changeTodoTitle,
                                                id: this.todo.id
                                              })
        this.popupViseble = false
        this.todoTitleEdit = false
      },

      addTask() {
        const newTask = {
            id: Date.now()+1,
            title: "Новая задача",
            text: "Описание задачи",
            completed: false
        }
        this.$store.commit("createTask", {
                                          todoId: this.todo.id,
                                          newTask
                                         })
      }
  },

}

</script>

<style scoped>
  .invesible {
    display: none;
  }
</style>