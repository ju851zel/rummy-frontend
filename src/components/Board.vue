<template>
    <div>
        <div class="row col-md-12" id="board" v-bind:key="t" v-for="t in tiles">
            <tile :num="t"/>
        </div>
    </div>
</template>

<script>
    import Tile from '@/components/Tile'

    export default {
        name: "Board",
        components: {
            tile: Tile
        },
        data() {
            return {
                tiles: []
            }
        }
    }
</script>

<style scoped>

</style>