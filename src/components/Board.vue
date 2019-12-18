<template>
    <div>
        <draggable class="row col-md-12" v-model="this.tiles" @start="drag=true" @end="drag=false">
            <div v-for="t in tiles" :key="t.id + $uuid.v1()">
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
        props: {
            tiles: {}
        }
    }
</script>

<style scoped>

</style>