import { defineStore } from "pinia";
export const dataStore = defineStore({
    id: "dataState",
    state: () => ({
        version: "0.20.0",
        addFood: false,
        options: ['gluten', 'cukry', 'przetworzone', 'alkohol', 'ostre', 'laktoza', 'błonnik', 'białko', 'tłuszcz', 'kofeina', 'kiszone'],
        food: [],
        newFood: [],
        head: "",
        fileIndex: null,
        newFoodDate: null,
        isFileReady: false,
    }),
    actions: {
        addFoodHandler(date) {
            this.addFood = !this.addFood;
            this.newFoodDate = date;
        },
        async getData() {
            const response = await fetch("src/data/foodlog.csv");
            let data = await response.text();
            let log = [];
            this.head = data.split(/\n/)[0];
            console.log(this.head);
            let rows = data.split(/\n/).slice(1);
            rows.forEach((el) => {
                let row = el.split(";");
                log.push(row);
            });
            console.log(log);
            this.fileIndex = log.length;
            this.food = log;
        },
    }
});
//# sourceMappingURL=data.js.map