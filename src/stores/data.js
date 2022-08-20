import { defineStore } from "pinia";
export const dataStore = defineStore({
    id: "dataState",
    state: () => ({
        version: "0.20.0",
        addFood: false,
        options: ['gluten', 'cukry', 'przetworzone', 'alkohol', 'ostre', 'laktoza', 'błonnik', 'białko', 'tłuszcz', 'kofeina', 'kiszone'],
        newFood: [],
        newFoodDate: null,
    }),
    actions: {
        addFoodHandler(date) {
            this.addFood = !this.addFood;
            this.newFoodDate = date;
        }
    }
});
//# sourceMappingURL=data.js.map