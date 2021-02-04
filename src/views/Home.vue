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

    mounted() {  
        this.todosParsing(),
        this.todosCopyParsing()
     },

    computed: mapGetters(["allTodos"]),
    
    components: {
        TodoItem
    },

    methods: {
      ...mapMutations(["createTodos", "todosParsing", "todosCopyParsing"]),

      addTodo() {
        this.createTodos({
          id: Date.now(),
          title: "Новая заметка",
          tasks: [{
            id: Date.now()+1,
            title: "Новая задача",
            text: "Описание задачи",
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