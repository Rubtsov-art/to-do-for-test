<template>
    <section class="popup">
        <div class="header">
            <span>
                Предупреждение!
            </span>
            <button
                @click="closePopup"
            >
                X
            </button>
        </div>
        <div class="content">
            <slot>
            </slot>
        </div>
    </section>
</template>

<script>
export default {
    methods: {
        closePopup() {
            this.$emit("closePopup")
        }
    }
    
}
</script>

<style scoped>
    .popup {
        position: fixed;
        top: 50px;
        width: 50rem;
        background-color: white;
        border: 1px solid black;
        z-index: 2;
    }

    .headre {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .content {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

</style>