import { defineStore } from "pinia";

export const dataStore = defineStore({
    id: "dataState",
    state: () => ({
        version: "0.20.0",
        options: ['gluten', 'cukry', 'przetworzone', 'alkohol', 'ostre', 'laktoza', 'błonnik', 'białko', 'tłuszcz', 'kofeina', 'kiszone' ],
        newFood: null,
    })
});