<script>

    import { store } from '../data/store';
    import axios from 'axios';


    export default {
    name: "CardsContainer",
    data() {
        return {
            store
        }
    },
    methods: {
        getCardImageUrl(card){
            return card.card_images[0].image_url;
        },
        allCardsCall(){

            axios.get(this.store.allCardsApiUrl)
            .then(result => { store.card = result.data.data })
            .catch(err => {
                console.error("PROBLEMA CON AXIOS", err)
            })

        },
        archetypeCall(){
            axios.get(this.store.archetypeApiUrl)
            .then(result => {
                
                console.log("log archetype", result.data.slice(0,50))

                result.data.slice(0,100).forEach(element => {
                    this.store.archetypeArray.push(element.archetype_name);
                });

                console.log("Archetype Array: ", this.store.archetypeArray);
                // store.archetypeArray = result.data.data

            })
            .catch(err => {
                console.error("PROBLEMA CON AXIOS", err)
            })

        }
    },
    mounted() {

        this.allCardsCall();
        this.archetypeCall();
            
    }
    }

</script>

<template>

    <div class="cards-container d-flex flex-wrap">

        <div class="card" v-for="card in store.card">
            <img :src="getCardImageUrl(card)" alt="">
            <div class="card-name">
                {{ card.name.toUpperCase() }}
            </div>
            <div class="card-archetype">
                {{ card.archetype }}
            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>

    .cards-container{
        background-color: grey;
        padding: 2rem;

        .card{
            width: calc( 100% / 5 - 1rem );
            margin: 0.5rem;
            padding: 0.5rem 0;
            text-align: center;
            background-color: white;

            .card-name{
                font-weight: bold;
                height: 4rem;
            }

            img{
                width: 75%;
            }
        }
    }

</style>