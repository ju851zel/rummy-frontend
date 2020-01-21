<template>
    <div>
        <div v-if="todo !== null" class="alert alert-primary" role="alert">
            {{todo}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Info",
        data() {
            return {
                news: null,
                todo: null
            }
        },
        created() {
            this.$options.sockets.onmessage = (data) => {
                window.console.log(JSON.parse(data.data));
                this.$toast(JSON.parse(data.data).news, {
                    timeout: 2000,
                });
                this.news = JSON.parse(data.data).news;
                this.todo = JSON.parse(data.data).todo
            };
        }

    }
</script>

<style scoped>

</style>