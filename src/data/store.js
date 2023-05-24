import { reactive } from "vue";

export const store = reactive({
    loading: true,
    allCardsApiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=500&offset=0",
    archetypeApiUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archetypeArray: [],
    card: []

});