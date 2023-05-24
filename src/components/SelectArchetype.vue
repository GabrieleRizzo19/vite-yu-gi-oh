<script>

    import { store } from '../data/store';
    import axios from 'axios';

    export default{
        name: "SelectArchetype",
        data(){
            return{
                store,
                selectedArchetype: "All"
            }
        },
        methods: {
        filterArchetype(archetype) {

            this.store.card = [];

            const actualFilterForArchetype = this.store.filterForArchetypeApiUrl + this.selectedArchetype;

            axios.get(actualFilterForArchetype)
                .then(result => { store.card = result.data.data })
                .catch(err => {
                    console.error("PROBLEMA CON AXIOS", err)
                })

        }
    },

    }

</script>

<template>
    <div class="select-wrapper">

        <span>SELEZIONA L'ARCHETYPE  </span>

        <select name="archetype" @change="filterArchetype(selectedArchetype)" v-model="selectedArchetype">

            <option v-for="archetype in this.store.archetypeArray" :value="archetype">{{ archetype }}</option>

        </select>

    </div>
</template>

<style lang="scss" scoped>

    select{
        margin-bottom: 2rem;
        width: 10%;
    }

</style>