<template>
    <div>
        <div v-if="news !== null" class="col-sm-12 shadow p-3 mb-3 bg-white rounded text-center" role="alert">
            {{news}}
        </div>
        <div v-if="todo !== null" class="alert alert-primary" role="alert">
            {{todo}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "News",
        data() {
            return {
                news: null,
                todo: null
            }
        },
        created() {
            this.$options.sockets.onmessage = (data) => {
                window.console.log("news");
                this.news = JSON.parse(data.data).news;
                this.todo = JSON.parse(data.data).todo
            };
            this.$socket.send(JSON.stringify({type: 'json'}))
        }

    }
</script>

<style scoped>

</style>