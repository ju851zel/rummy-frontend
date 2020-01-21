<template>
    <div>
        <div v-if="this.todo !== null" class="alert alert-primary" role="alert">
            {{this.todo}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Info",
        props: {
            todo: String
        }
    }
</script>

<style scoped>

</style>