<template>
    <li>
        <h4 
            v-bind:class="{invesible: editTaskTitle}"
        >
            {{task.title}}
        </h4>
        <button 
            @click="editTaskTitleOn"
            v-bind:class="{invesible: editTaskTitle}"

        >
        Переимновать
        </button>
        <p>{{task.text}}</p>
    </li>
</template>

<script>
export default {
    data(){
        return {
            editTaskTitle: false
        }
    },

    props: {
        todo: {
            type: Object,
            required: true
        },
        task: {
            type: Object,
            required: true
        }
    },

    methods: {
        editTaskTitleOn() {
            this.editTaskTitle = true
        }
    }
}
</script>

<style scoped>
.invesible {
    display: none;
}
</style>