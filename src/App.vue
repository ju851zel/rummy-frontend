<template>
    <div id="app">
        <rummy-header>Header</rummy-header>
        <p></p>
        <router-view>view</router-view>

    </div>
</template>

<script>
    import 'bootstrap';
    import 'bootstrap/dist/css/bootstrap.min.css'
    import RummyHeader from "@/components/RummyHeader";
    

    export default {
        name: 'app',
        components: {
            'rummy-header': RummyHeader
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
