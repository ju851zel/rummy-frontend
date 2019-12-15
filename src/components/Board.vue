<template>
    <div>
        <draggable class="row col-md-12" v-model="tiles" @start="drag=true" @end="drag=false">
            <div v-for="t in tiles" :key="t.id">
                <tile :lay-down-or-move=true :num="t.value" :color="t.color" :ident="t.ident"/>
            </div>
        </draggable>
    </div>
</template>

<script>
    import Tile from '@/components/Tile'
    import Draggable from 'vuedraggable'

    export default {
        name: "Board",
        components: {
            tile: Tile,
            draggable: Draggable
        },
        data() {
            return {
                tiles: []
            }
        },
        methods: {
          sortLikeUserWants: function (fromServer) {
              window.console.log("fromServer before: ", fromServer);
              const newTiles =  this.tiles.filter(tile => !(tile in fromServer));
              window.console.log("NewTiles after: ", newTiles);
          }
        },
        created() {
            this.$options.sockets.onmessage = (data) => {
                // this.sortLikeUserWants(JSON.parse(data.data));
                this.tiles = JSON.parse(data.data).desk.players.find((out) => out.state === 'TURN').board
            };
            this.$socket.send(JSON.stringify({type: 'json'}))
        }
    }
</script>

<style scoped>

</style>