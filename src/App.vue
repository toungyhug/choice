<template>
  <div
    class="w-full h-screen scrollbar-thin scrollbar-track-zinc-400 scrollbar-thumb-stone-200 font-nunito tracking-wide"
  >
    <div class="w-full bg-stone-50 h-2/5 flex justify-start items-end"></div>
    <div class="w-full h-[45%] flex">
      <div class="w-full h-full bg-stone-200 bg-opacity-70">
        <calendar />
      </div>
    </div>
    <div class="w-full bg-[#ececec] h-3/4 flex justify-center items-center">
      <addFood />
    </div>
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

    getData();

    return { dateStor };
  },
  components: { addFood, calendar },
});
</script>
