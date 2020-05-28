<template>
  <section>
    <router-link to="/">Home</router-link>
    <h3 v-bind:class="{todo_title_edit: todoTitleEdit}">
      {{todo.title}}
    </h3>
    <button 
      @click="todoTitleOnEdit" 
      v-bind:class="{todo_title_edit: todoTitleEdit}"
    >
      edit title
    </button>
    <input type="text" :v-modal="todoTitle" @input="updateTitle"/>
    <button @click="cons">hahahahahaha</button>
    <hr>
    <ul>
      <TaskItem />
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
          this.$store.commit("updateTitle", value)
      }
    }
  },

  props: ['todo'],

  components: {
    TaskItem
  },

  methods: {
      ...mapMutations(["updateTitle"]),

      todoTitleOnEdit() {
        this.todoTitleEdit = true
      },

      cons() {
        console.log(this.todo.title);
      }
  },

}

</script>

<style scoped>
  .todo_title_edit {
    display: none;
  }
</style>