<template>
    <div>
        <div class="row col-md-12" v-bind:key="set + uuid.v1()" v-for="set in sets">
            <div class="my-4" v-bind:key="t + uuid.v1()" v-for="t in set.struct">
                    <tile :lay-down-or-move=false :num="t.value" :color="t.color" :ident="t.ident"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Tile from '@/components/Tile'
    import {uuid} from 'vue-uuid';

    export default {
        name: "Desk",
        components: {
            tile: Tile
        },
        data() {
            return {
                uuid,
                sets: []
            }
        },
        created() {
            this.$options.sockets.onmessage = (data) => {
                this.sets = JSON.parse(data.data).desk.sets
            };
            this.$socket.send(JSON.stringify({type: 'json'}))
        }
    }
</script>

<style scoped>

</style>