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
    <input type="text" v-model="title" @input="updateTodoTitle"/>
    <hr>
    <ul>
      <TaskItem />
    </ul>
  </section>
</template>

<script>
import TaskItem from "../components/TaskItem"

export default {
  name: "Todo",

  data() {
    return {
      todoTitleEdit: false,
    }
  },

  props: ['todo'],

  components: {
    TaskItem
  },

  methods: {
      todoTitleOnEdit() {
        this.todoTitleEdit = true
      },
  },

  computed: {
      title: {
        get() {
          return this.$store.state.todos[0].title
        },
        set(value) {
          this.$store.commit("updateTodoTitle", this.todo.id ,value)
        }
      }
  }

}

</script>

<style scoped>
  .todo_title_edit {
    display: none;
  }
</style>