<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearTodo">
            Clear All
        </span>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo() {
            // this.$emit('clearAll');
            
            // mutations 적용
            this.$store.commit('clearAll');
        }
    }
}
</script>

<style scoped>
    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background: #ffffff;
        border-radius: 5px;
        margin: 0 auto;
    }

    .clearAllBtn {
        color: #e20303;
        display: block;
        cursor: pointer;
    }
</style>
