<template>
    <li>
        taskName
        {{this.todo.id}}
    </li>
</template>

<script>
export default {
    props: ["todo"],
}
</script>