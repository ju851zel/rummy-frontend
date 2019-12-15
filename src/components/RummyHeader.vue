<template>
    <div>
        <nav class="navbar navbar-dark navbar-expand-sm bg-dark">
            <a class="navbar-brand" href="game">Rummy</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                        <router-link class="mr-3" to="/game">Game</router-link>
                        <router-link class="mr-3" to="/rules">Rules</router-link>
                </ul>
                <div class="button-group">
                    <button class="btn btn-outline-primary" id="btnUndo">Undo</button>
                    <button class="btn btn-outline-primary" id="btnRedo">Redo</button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'RummyHeader',
        components: {}
    }
</script>
