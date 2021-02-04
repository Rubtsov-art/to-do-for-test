<template>
  <section>
    <router-link to="/">Home</router-link>
    <h3
      v-if="(!editTitle)"
    >
      {{todoCopy.title}}
    </h3>
    <button
      v-if="!editTitle"
      @click="editTitleOn"
    >
      Переименовать
    </button>
    <!-- <input
      v-if="editTitle" 
      type="text" 
      v-model="localTodo.title"
      @input="titleWasChanged"
    /> -->
    <button
      v-if="editTitle"
      @click="editTitleOff"
    >
      Переименовать
    </button>
    <hr />
    <button @click="addTaskToLocalTodo">
      Добавить задачу
    </button>
    <p>{{todoCopy.id}}</p>
    <p>{{todo.id}}</p>
    <ul>
      <!-- <TaskItem
        v-for="task of localTodo.tasks"
        v-bind:key="task.id"
        v-bind:localTask="task"
        v-bind:todo="todo"
        v-bind:localTodo="localTodo"
      >
      </TaskItem> -->
    </ul>
  </section>
</template>

<script>
//import TaskItem from "../components/TaskItem"
import { mapMutations } from "vuex"

export default {
  name: "Todo",

  data() {

    return {
      editTitle: false,
      //localTodo: todoCopy
    }
  },

  computed: {
    todoCopy: {
      get() {
         return this.$store.getters.getTargetTodoCopy(this.todo.id)
      }
    }
  },
    // getTodoTitle: {
    //   get () {
    //     return this.$store.getters.getTargetTodo(this.id)
    //   },
    // },
  

  props: {
    todo: {
            type: Object,
            required: true
        }
  },

  // components: {
  //   TaskItem
  // },

  methods: {
      ...mapMutations(["createTask"]),

      editTitleOn() {
        this.editTitle = true
      },

      editTitleOff() {
        this.editTitle = false
      },

      titleWasChanged() {
        this.changed = true
      },

      addTaskToLocalTodo() {
        const newTask = {
            id: Date.now()+1,
            title: "Новая задача",
            text: "Описание задачи",
            completed: false
        }
        this.localTodo.tasks.push(newTask)
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