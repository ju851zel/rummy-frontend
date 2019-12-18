<template>
    <div>
        <nav class="navbar navbar-dark navbar-expand-sm bg-dark">
            <a class="navbar-brand" href="/">Rummy</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"/>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
<!--                    <a class="mr-3" href="/">Game</a>-->
                    <router-link class="mr-3" to="/">Game</router-link>
                    <router-link class="mr-3" to="/rules">Rules</router-link>
                </ul>
                <div class="button-group">
                    <button class="btn btn-outline-primary mr-2" id="btnUndo" v-on:click="undo">Undo</button>
                    <button class="btn btn-outline-primary mr-2" id="btnRedo" v-on:click="redo">Redo</button>
                    <button class="btn btn-outline-warning mr-2" id="btnQuit" v-on:click="quitGame">QUIT</button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'RummyHeader',
        components: {},
        methods: {
            quitGame() {
                this.$socket.send(JSON.stringify({
                    type: "quit"
                }))
            },
            undo() {
                this.$socket.send(JSON.stringify({type: "undo"}))
            },
            redo() {
                this.$socket.send(JSON.stringify({type: "redo"}))
            }
        }
    }
</script>
