<template>
    <div class="form-group">
          <button v-on:click="playerFinished()" class="btn btn-primary m-2">Finished</button>
    </div>
</template>

<script>
    export default {
        name: "PlayerTurn",
        methods: {
            playerFinished() {
                this.$socket.send(JSON.stringify({type: "playerFinished"}))
            }
        }
    }
</script>

<style scoped>

</style>