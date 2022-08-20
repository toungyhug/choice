<template>
  <div
    class="w-full h-screen scrollbar-thin scrollbar-track-zinc-200 scrollbar-thumb-stone-400 font-nunito tracking-wide"
  >
    <div class="w-full bg-stone-50 h-2/5 flex justify-between items-center">
      <div class="flex justify-center items-center w-full">
        <div class="m-5 flex justify-center items-center">
          <h1 class="text-[80px] font-extrabold">
            ch<span class="text-orange-400">o</span>ice
          </h1>
        </div>
      </div>
      <div
        v-if="dateStor.addFood"
        class="absolute z-30 right-0 top-0 bottom-0 left-0 flex bg-white bg-opacity-70 justify-center items-center"
      >
        <addFood />
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
import { dataStore } from "./stores/data";
import { defineComponent } from "vue";
import addFood from "./components/addFood.vue";
import calendar from "./components/calendar.vue";

export default defineComponent({
  setup() {
    const dateStor: any = dataStore();
    dateStor.getData();
    return { dateStor };
  },
  components: { addFood, calendar },
});
</script>
