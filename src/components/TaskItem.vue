<template>
    <li>
        <h4>{{localTodo.id}}</h4>
        <h4>{{todo.id}}</h4>
    </li>
</template>

<script>

export default {
    data(){
        return {
            
        }
    },

    components: {
        
    },

    props: {
        todo: {
            type: Object,
            required: true
        },
        localTask: {
            type: Object,
            required: true
        },
        localTodo: {
            type: Object,
            required: true
        }
    },

    methods: {
        
    }
}
</script>

<style scoped>

</style>