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