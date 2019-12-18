<template>
    <div>
<!--        <draggable class="row col-md-12" v-model="this.tiles" @start="drag=true" @end="drag=false">-->
<!--            <div v-for="t in tiles" :key="t.id">-->
<!--                <tile :lay-down-or-move=true :num="t.value" :color="t.color" :ident="t.ident"/>-->
<!--            </div>-->
<!--        </draggable>-->
        <div class="row col-md-12" v-bind:key="set + $uuid.v1()" v-for="set in sets">
            <div class="my-4" v-bind:key="t + $uuid.v1()" v-for="t in set.struct">
                    <tile :lay-down-or-move=false :num="t.value" :color="t.color" :ident="t.ident"/>
            </div>
        </div>
    </div>
</template>

<script>
    import tile from '@/components/Tile'
    // import draggable from 'vuedraggable'

    export default {
        name: "Desk",
        components: {
            tile,
            // draggable
        },
        props: ["sets"]
    }
</script>

<style scoped>

</style>