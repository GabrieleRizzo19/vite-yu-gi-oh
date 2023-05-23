<script>

    export default {
        name: "AppHeader"
    }

</script>

<template>

    <header>
        <div class="header-wrapper container d-flex justify-content-between">
            <div>
                LEFT
            </div>
            <div>
                RIGHT
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>

    header{
        background-color: red;

        .header-wrapper{
            background-color: blue;
            color: white;
        }
    }

</style>