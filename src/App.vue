<template>
  <div
    class="w-full h-screen scrollbar-thin scrollbar-track-zinc-400 scrollbar-thumb-stone-200 font-nunito tracking-wide"
  >
    <div class="w-full bg-zinc-50 h-3/4 flex justify-center items-center">
      <div class="w-4/5 h-2/3 bg-zinc-200 rounded-lg">
        <calendar />
      </div>
    </div>
    <div class="w-full bg-choicegreen h-3/4 flex justify-center items-center">
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

    return { dateStor };
  },
  components: { addFood, calendar },
});
</script>
