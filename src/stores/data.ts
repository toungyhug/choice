import { defineStore } from "pinia";

export const dataStore = defineStore({
    id: "dataState",
    state: () => ({
        version: "0.20.0",
        addFood: false,
        options: ['gluten', 'cukry', 'przetworzone', 'alkohol', 'ostre', 'laktoza', 'błonnik', 'białko', 'tłuszcz', 'kofeina', 'kiszone'],
        food: [],
        newFood: [],
        fileIndex: null,
        newFoodDate: null,
    }),
    actions: {
        addFoodHandler(date: any) {
            this.addFood = !this.addFood;
            this.newFoodDate = date;
        },
        async getData()  {
            const response = await fetch("src/data/foodlog.txt");
            let data = await response.text();
      
            let log: any = [];
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