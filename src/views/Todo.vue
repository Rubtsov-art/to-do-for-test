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

export default {
  name: "Todo",

  data() {
    return {
      todoTitleEdit: false
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
    TaskItem
  },

  methods: {
      ...mapMutations(["updateTodoTitle"]),

      todoTitleOnEdit() {
        this.todoTitleEdit = true
      },

      todoTitleEditOff() {
         this.todoTitleEdit = false
      },

      updateTodoTitle(e) {
        this.$store.commit("updateTodoTitle", {value: e.target.value, id: this.todo.id})
      }
  },

}

</script>

<style scoped>
  .invesible {
    display: none;
  }
</style>