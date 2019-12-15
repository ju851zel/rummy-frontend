<template>
    <div>
        <button v-on:click="createGame" class="btn btn-primary">
            Create Desk
        </button>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        methods: {
            createGame() {
                this.$socket.send(JSON.stringify({type: "createGame"}))
            }
        }
    }
</script>

<style scoped>

</style>