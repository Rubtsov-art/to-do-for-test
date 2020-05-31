<template>
  <section>
    <router-link to="/">Home</router-link>
    
    <Popup
      v-if="popupViseble"
      @closePopup="closePopup"
    >
      <p>
        Вы действительно хотите переименовать задачу?
      </p>
      <button
        @click="todoTitleOnEdit"
      >
        OK
      </button>
      <button
        @click="closePopup"
      >
        Отмена
      </button>
    </Popup>

    <h3 v-bind:class="{invesible: todoTitleEdit}">
      {{todo.title}}
    </h3>
    <button 
      @click="showPopup"
      v-bind:class="{invesible: todoTitleEdit}"
    >
      Переименовать
    </button>
    <input type="text" 
      :value="todoTitle" 
      @input="updateTodoTitle"
      v-bind:class="{invesible: !todoTitleEdit}"
      />
    <button 
       v-bind:class="{invesible: !todoTitleEdit}"
       @click="todoTitleEditOff"
    >
      Переименовать
    </button>
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
      popupViseble: false
    }
  },

  computed: {

    todoTitle: {
      get () {
        return this.$store.getters.getTargetTodo(this.todo.id).title
      },
      set (value) {
          this.$store.commit("updateTodoTitle", value)
      }
    }
  },

  props: ["todo"],

  components: {
    TaskItem,
    Popup
  },

  methods: {
      ...mapMutations(["updateTodoTitle", "createTask"]),

      showPopup() {
        this.popupViseble = true
      },

      closePopup() {
        this.popupViseble = false
      },

      todoTitleOnEdit() {
        this.popupViseble = false
        this.todoTitleEdit = true
      },

      todoTitleEditOff() {
         this.todoTitleEdit = false
      },

      updateTodoTitle(e) {
        this.$store.commit("updateTodoTitle", {
                                                value: e.target.value, 
                                                id: this.todo.id
                                              })
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