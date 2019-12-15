<template>
    <div>
        <div class="container col-md-12" id="desk" v-bind:key="t" v-for="t in tiles">
            <tile :num="1"  color="Y" :ident="1"/>
        </div>
    </div>
</template>

<script>
    import Tile from '@/components/Tile'

    export default {
        name: "Desk",
        components: {
            tile: Tile
        },
        data() {
            return {
                tiles: null
            }
        },
        created() {
            this.$options.sockets.onmessage = (data) => {
                window.console.log("game", JSON.parse(data.data).desk.players.filter((out) => out.state === 'TURN').board);
                this.tiles = JSON.parse(data.data).desk.players.find((out) => out.state === 'TURN').board // todo move to board
            };
            this.$socket.send(JSON.stringify({type: 'json'}))
        }
    }
</script>

<style scoped>

</style>