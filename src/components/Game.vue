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
            <h2>The Desk</h2>
            <desk/>
            <h2>The Board</h2>
            <board v-if="this.state === 'P_TURN'"/>
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
                desk: {
                    sets: [],
                    players: []
                },
                state: String
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
                this.desk = result.desk;
                this.state = result.state;
            };
            this.$socket.send(JSON.stringify({type: 'json'}))
        }
    }
</script>

<style scoped>


</style>
