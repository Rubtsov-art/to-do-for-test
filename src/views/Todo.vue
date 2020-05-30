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
      @input="updateTitle"
      v-bind:class="{invesible: !todoTitleEdit}"
      />
    <button 
       v-bind:class="{invesible: !todoTitleEdit}"
       @click="todoTitleEditOff"
    >
      Переименовать
    </button>
    <hr>
    <p>{{this.todo.tasks}}</p>
    <ul>
      <TaskItem 
        v-for="task of globs"
        v-bind:task="task"
        v-bind:key="task.id"
      />
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
      todoTitleEdit: false,
      globs: [{id:1},{id:2},{id:3}]
    }
  },

  computed: {

    todoTitle: {
      get () {
        return this.$store.getters.getTargetTodo(this.todo.id).title
      },
      set (value) {
          this.$store.commit("updateTitle", value)
      }
    }
  },

  props: ["todo"],

  components: {
    TaskItem
  },

  methods: {
      ...mapMutations(["updateTitle"]),

      todoTitleOnEdit() {
        this.todoTitleEdit = true
      },

      todoTitleEditOff() {
         this.todoTitleEdit = false
      },

      updateTitle(e) {
        this.$store.commit("updateTitle", {value: e.target.value, id: this.todo.id})
      }
  },

}

</script>

<style scoped>
  .invesible {
    display: none;
  }
</style>