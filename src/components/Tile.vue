<template>
    <div class="mx-1 align-content-center text-center tileStyle"
         v-bind:class="this.color.toLowerCase() + 'Tile'">
        <h3 class="text-white">{{this.num}}</h3>
        <button class="btn btn-link" v-on:click="click()">Select</button>
    </div>
</template>

<script>
    export default {
        name: 'Tile',
        props: {
            num: Number,
            color: String,
            ident: Number,
            layDownOrMove: Boolean
        },
        methods: {
            layDown: function()  {
                this.$socket.send(JSON.stringify({type: "laydownTile", tile: this.determineTileId()}))
            },
            move: function()  {
                this.$socket.send(JSON.stringify({type: "moveTile", tile: this.determineTileId()}))
            },
            click: function()  {
                if (this.layDownOrMove) {
                    this.layDown();
                } else {
                    this.move();
                }
            },
            determineTileId: function() {
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
        width: 77px;
        height: 100px;
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
