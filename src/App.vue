<template>
  <div
    class="w-full h-screen scrollbar-thin scrollbar-track-zinc-400 scrollbar-thumb-stone-200 font-nunito tracking-wide"
  >
    <div v-if="mealVisible" class="absolute right-30 top-2 w-2/7">
      <addFood />
    </div>
    <div class="w-full bg-stone-50 h-2/5 flex justify-center items-center">
      <div class="flex justify-center items-center">
        <div class="m-5 flex justify-center items-center">
          <h1 class="text-[80px] font-extrabold">choice</h1>
        </div>
        <div class="m-5 flex justify-end items-end">
          <button
            @click="addMealHandler"
            class="p-1 pr-5 pl-5 hf bg-orange-400 rounded-2xl text-zinc-50 tracking-wide font-bold hover:bg-orange-500 transition-all duration-100"
          >
            dodaj nowy posiłek
          </button>
        </div>
      </div>
    </div>
    <div class="w-full h-[45%] flex">
      <div class="w-full h-full bg-stone-200 bg-opacity-70">
        <calendar />
      </div>
    </div>
    <div
      class="w-full bg-[#ececec] h-3/4 flex justify-center items-center"
    ></div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { dataStore } from "./stores/data";
import { defineComponent } from "vue";
import addFood from "./components/addFood.vue";
import calendar from "./components/calendar.vue";

export default defineComponent({
  setup() {
    const dateStor: any = dataStore();

    const mealVisible = ref<boolean>(false);

    const getData = async () => {
      const response = await fetch("src/data/foodlog.csv");
      let data = await response.text();

      let log: any = [];
      let rows = data.split(/\n/).slice(1);
      rows.forEach((el) => {
        let row = el.split(";");
        log.push(row);
      });
      console.log(log);

      dateStor.newFood = log;
    };

    const addMealHandler = () => {
      mealVisible.value = !mealVisible.value;
    };

    getData();

    return { dateStor, mealVisible, addMealHandler };
  },
  components: { addFood, calendar },
});
</script>
