<template>
    <li>
        <h3>{{task.title}}</h3>
        <span>{{shortText}}...</span>
    </li>
</template>

<script>
    export default {
        props: {
            task: {
                type: Object,
                required: true
            },
            todo: {
                type: Object,
                required: true
            }
        },

        computed: {
            shortText: {
                get() {
                    return this.$store.getters.getShortTaskText({todoId: this.todo.id, taskId: this.task.id})
                }
            }
        }
    }
</script>