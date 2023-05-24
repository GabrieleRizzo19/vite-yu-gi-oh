import { reactive } from "vue";

export const store = reactive({
    loading: true,
    archetypeApiUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    archetypeArray: ["All", "Alien", "Magician"],
    card: []

});