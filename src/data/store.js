import { reactive } from "vue";

export const store = reactive({
    loading: true,
    allCardsApiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0",
    allArchetypeApiUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    filterForArchetypeApiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=",
    archetypeArray: [],
    card: []

});