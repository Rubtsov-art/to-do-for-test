<template>
    <li>
        <h4>{{localTask.id}}</h4>
        
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