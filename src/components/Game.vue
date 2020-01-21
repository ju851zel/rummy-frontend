<template>
    <div>
        <div class="container">
            <info :todo="this.todoMessage" :news="this.newsMessage"/>
        </div>

        <div class="container">
            <hr>
            <interaction v-bind:state="this.state"/>
            <hr>
        </div>

        <div class="container">
            <h2 v-if="this.state === 'P_TURN'">The Desk</h2>
            <desk v-if="this.state === 'P_TURN'" :sets="sets"/>
            <h2 v-if="this.state === 'P_TURN'">The Board</h2>
            <board v-if="this.state === 'P_TURN'" :tiles="boardTiles"/>
        </div>
    </div>
</template>

<script>
    import Board from "./Board"
    import Desk from "./Desk"
    import Info from "./Info"
    import Interaction from "./interaction/Interaction"

    export default {
        name: 'Game',
        data() {
            return {
                sets: [],
                boardTiles: [],
                state: String,
                newsMessage: String,
                todoMessage: String
            }
        },
        components: {
            board: Board,
            desk: Desk,
            interaction: Interaction,
            info: Info
        },
        created() {
            this.$options.sockets.onmessage = (data) => {
                const result = JSON.parse(data.data);
                window.console.log("Came in: ", result);
                this.sets = result.desk.sets;
                this.state = result.state;
                this.boardTiles = result.desk.players.find((out) => out.state === 'TURN').board;
                this.newsMessage = result.news;
                this.todoMessage = result.todo;
                this.$toast(this.newsMessage, {
                    timeout: 2000,
                });
            };
            this.$socket.send(JSON.stringify({type: "json"}))
        }
    }
</script>

<style scoped>


</style>
