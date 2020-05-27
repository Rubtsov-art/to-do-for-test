<template>
    <section>
        <ul>
            <TodoItem 
                v-for="todo in allTodos"
                v-bind:todo="todo"
                v-bind:key="todo.id"
            />
        </ul>
        <button @click="addTodo">
          добавить новую заметку
        </button>
    </section>
</template>

<script>
import TodoItem from "../components/TodosItem"
import { mapGetters, mapMutations } from "vuex"

export default {

    computed: mapGetters(["allTodos"]),
    
    components: {
        TodoItem
    },

    methods: {
      ...mapMutations(["createTodos"]),
      addTodo() {
        this.createTodos({
          id: Date.now(),
          title: "Новая заметка",
          tasks: [{
            taskTitle: "",
            taskText: "",
            completed: false
          }]
        })
      }
    }
   
}
</script>

<style scotodo_listped>
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>