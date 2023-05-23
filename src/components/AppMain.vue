<script>

    import CardsContainer from './CardsContainer.vue';

    export default {
        name: "AppMain",
        components:{
            CardsContainer
        }
    }

</script>

<template>

    <main>
        <div class="main-wrapper container">
            <h1>MAIN</h1>
            <CardsContainer />
        </div>
    </main>

</template>

<style lang="scss" scoped>

    main{
        background-color: green;

        .main-wrapper{
            background-color: grey;
        }
    }

</style>