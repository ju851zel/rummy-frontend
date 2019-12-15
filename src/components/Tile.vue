<template>
    <div class="mx-1 align-content-center text-center tileStyle"
         v-bind:class="determineColorOfTile">
        <h3 class="text-white">{{this.num}}</h3>
        <button class="btn btn-link" v-on:click="layDown">Down</button>
    </div>
</template>

<script>
    export default {
        name: 'Tile',
        props: {
            num: Number,
            color: String,
            ident: Number
        },
        methods: {
            determineColorOfTile: () => {
                return this.color.toLowerCase() + 'tile';
            },
            layDown: () => {
                this.$socket.send(JSON.stringify({type: "laydownTile", tile: this.determineTileId}))
            },
            determineTileId: () => {
                return this.num + this.color[0] + this.ident
            }
        }
    }
</script>

<style scoped>
    .tileStyle {
        background-color: #dee84f;
        border-radius: 7px;
        padding: 10px 5px;
        margin: 5px;
    }

    .greenTile {
        background-color: #6ff78b;
    }

    .redTile {
        background-color: #ff8080;
    }

    .blueTile {
        background-color: #7c99d6;
    }

    .yellowTile {
        background-color: #dee84f;
    }

</style>
