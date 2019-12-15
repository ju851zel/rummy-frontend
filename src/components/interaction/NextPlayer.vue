<template>
    <div class="form-group">
          <button v-on:click="nextPlayer()" class="btn btn-primary m-2">Next</button>
    </div>
</template>

<script>
    export default {
        name: "NextPlayer",
        methods: {
            nextPlayer() {
                this.$socket.send(JSON.stringify({type: "nextPlayer"}))
            }
        }
    }
</script>

<style scoped>

</style>