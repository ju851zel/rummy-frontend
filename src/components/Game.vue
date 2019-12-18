<template>
    <div>
        <div class="container">
            <info/>
        </div>

        <div class="container">
            <hr>
            <interaction/>
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
                state: String
            }
        },
        components: {
            board: Board,
            desk: Desk,
            interaction: Interaction,
            info: Info
        },
        created: function() {
            this.loadData();
        }, methods: {
            loadData: function () {
                this.$nextTick(() => {
                    this.$options.sockets.onmessage = (data) => {
                        const result = JSON.parse(data.data);
                        this.sets = result.desk.sets;
                        this.state = result.state;
                        this.boardTiles = result.desk.players.find((out) => out.state === 'TURN').board
                    };
                    this.$socket.send(JSON.stringify({type: "json"}))
                })

            }
        }
    }
</script>

<style scoped>


</style>
