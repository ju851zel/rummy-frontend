<template>
    <div class="m-md-auto">
        <menu-buttons v-if="state === 'MENU'"/>
        <inserting-names-buttons v-if="state === 'INSERTING_NAMES'"/>
        <player-turn v-if="state === 'P_TURN'"/>
        <next-player v-if="state === 'NEXT_TYPE_N'"/>
    </div>
</template>

<script>
    import Menu from './Menu'
    import InsertingNames from "./InsertingNames";
    import PlayerTurn from "./PlayerTurn";
    import NextPlayer from "@/components/interaction/NextPlayer";

    export default {
        name: "Interaction",
        components: {
            'menu-buttons': Menu,
            'inserting-names-buttons': InsertingNames,
            'player-turn': PlayerTurn,
            'next-player': NextPlayer
        },
        data() {
            return {
                state: String
            }
        },
        created() {
            this.$options.sockets.onmessage = (data) => {
                this.state = JSON.parse(data.data).state
            };
        }

    }

</script>

<style scoped>

</style>