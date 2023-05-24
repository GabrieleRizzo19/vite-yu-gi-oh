<script>

    import CardsContainer from './CardsContainer.vue';
    import SelectArchetype from './SelectArchetype.vue';

    export default {
        name: "AppMain",
        components:{
            CardsContainer,
            SelectArchetype
        }
    }

</script>

<template>

    <main>
        <div class="main-wrapper container">
            <SelectArchetype />
            <CardsContainer />
        </div>
    </main>

</template>

<style lang="scss" scoped>

    main{
        background-color: goldenrod;

        .main-wrapper{
            padding: 2rem 0;
        }
    }

</style>