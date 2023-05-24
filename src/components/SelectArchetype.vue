<script>

    import { store } from '../data/store';

    export default{
        name: "SelectArchetype",
        data(){
            return{
                store
            }
        },
        methods: {
            
        },

    }

</script>

<template>
    <div class="select-wrapper">

        <select name="archetype">

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