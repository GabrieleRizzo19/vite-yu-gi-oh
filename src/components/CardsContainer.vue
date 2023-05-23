<script>

    import { store } from '../data/store';
    import axios from 'axios';


    export default {
    name: "CardsContainer",
    data() {
        return {
            store,
            card: []
        }
    },
    mounted() {
        // console.log("Loading da store: ", store.loading);

        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
            .then(r => {
                console.log(r.data);

                store.card = r.data.data;

                console.log("Store card: ", store.card);

                const card0 = store.card[0];

                console.log(card0.name);
            })


    }
    }

</script>

<template>

    <div class="cards-container">
    <h3>CARDS CONTAINER</h3>
    <div class="card" v-for="card in store.card">{{ card.name }}</div>
    </div>

</template>

<style lang="scss" scoped>

    .cards-container{
        background-color: goldenrod;
    }

</style>