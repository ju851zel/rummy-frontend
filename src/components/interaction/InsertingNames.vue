<template>
    <div class="form-group">
        <label for="input-name">Name</label>
        <input type="text" placeholder="John" class="form-control" id="input-name">
        <button v-on:click="addPlayer()" class="btn btn-primary m-2">Confirm name</button>
        <button v-on:click="finishedAddingPlayer()" class="btn btn-primary m-2">Finished</button>
    </div>
</template>

<script>
    export default {
        name: "InsertingNames",
        methods: {
            addPlayer() {
                this.$socket.send(JSON.stringify({
                    type: "addPlayersName",
                    name: document.getElementById("input-name").value
                }))
            },
            finishedAddingPlayer() {
                this.$socket.send(JSON.stringify({type: "nameFinish"}))
            }
        }
    }
</script>

<style scoped>

</style>