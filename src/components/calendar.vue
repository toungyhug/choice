<template>
  <div class="w-full h-full p-1 flex flex-col justify-start">
    <div class="w-full text-center pt-1 pb-1">SIERPIEŃ 2022</div>
    <div
      @wheel="scroll"
      ref="scrollableDiv"
      class="flex justify-start items-start overflow-x-scroll flex-1 scrollbar-thin scrollbar-track-zinc-200 scrollbar-thumb-zinc-400"
    >
      <div
        v-for="(day, ind) in week"
        :key="ind"
        class="h-full bg-zinc-100 w-1/6 flex-shrink-0 mr-px ml-px"
        :class="{
          'bg-green-100 bg-opacity-30': ind + 1 == new Date().getDate(),
        }"
      >
        <div class="w-full h-full flex flex-col justify-start items-center">
          <div
            class="h-1/5 w-full bg-zinc-50 pb-5 pt-5 flex flex-col justify-center items-center"
            :class="{
              'bg-green-300 bg-opacity-10': ind + 1 == new Date().getDate(),
            }"
          >
            <h3
              class="text-[34px]"
              :class="{
                'text-red-700': (ind + 1) % 7 == 0,
              }"
            >
              {{ ind + 1 }}
            </h3>
            <p
              class="text-center tracking-widest"
              :class="{
                'text-red-700': (ind + 1) % 7 == 0,
              }"
            >
              {{ day }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { dataStore } from "../stores/data.js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "calendar",
  setup() {
    const dateStor: any = dataStore();

    const scrollableDiv = ref<any>(null);

    const week = ref<any[]>([]);
    const daysOfWeek = ref<any>([
      "niedziela",
      "poniedziałek",
      "wtorek",
      "środa",
      "czwartek",
      "piątek",
      "sobota",
    ]);

    const scroll = (e: any) => {
      e.preventDefault();
      scrollableDiv.value.scrollLeft -= e.deltaY / 0.8;
    };

    const weekGenerate = async () => {
      let arr = [];
      let arr2 = [];
      let now = new Date().getDay();
      let d = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
      while (d.getMonth() == new Date().getMonth()) {
        arr.push(d.getDate());
        arr2.push(daysOfWeek.value[d.getDay()]);
        d.setDate(d.getDate() + 1);
      }
      for (let i = 0; i < arr.length; i++) {
        week.value.push((arr[i] = arr2[i]));
      }

      setTimeout(() => {
        scrollableDiv.value.scrollLeft = now * 1028;
      }, 200);
    };

    weekGenerate();

    return { dateStor, week, weekGenerate, week, scroll, scrollableDiv };
  },
});
</script>
