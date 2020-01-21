<template>
    <div class="m-md-auto">
        <menu-buttons v-if="this.state === 'MENU'"/>
        <inserting-names-buttons v-if="this.state === 'INSERTING_NAMES'"/>
        <player-turn v-if="this.state === 'P_TURN'"/>
        <next-player v-if="this.state === 'NEXT_TYPE_N'"/>
    </div>
</template>

<script>
    import Menu from './Menu'
    import InsertingNames from "./InsertingNames";
    import PlayerTurn from "./PlayerTurn";
    import NextPlayer from "@/components/interaction/NextPlayer";

    export default {
        name: "Interaction",
        props: {
            state: String
        },
        components: {
            'menu-buttons': Menu,
            'inserting-names-buttons': InsertingNames,
            'player-turn': PlayerTurn,
            'next-player': NextPlayer
        }
    }

</script>

<style scoped>

</style>