<template>
    <li>
        <h4>{{task.title}}</h4>
        <p>{{task.text}}</p>
    </li>
</template>

<script>
export default {
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
}
</script>