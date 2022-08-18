<template>
  <div class="w-full h-full flex flex-col justify-start">
    <div
      @wheel="scroll"
      class="w-full bg-neutral-200 p-1 pl-10 pr-10 flex justify-between items-center"
    >
      <div>
        <p
          class="text-orange-500 text-opacity-80 text-[17px] font-extrabold tracking-[3px]"
        >
          SIERPIEŃ 2022
        </p>
      </div>
      <div class="flex justify-center items-center ml-1">
        <div
          class="w-2.5 h-2.5 m-0.5 rounded-xl bg-yellow-700 bg-opacity-80"
        ></div>
        <p class="ml-2">gluten</p>
      </div>
    </div>
    <div
      ref="scrollableDiv"
      class="flex justify-start items-start overflow-x-scroll flex-1 scrollbar-thin scrollbar-track-neutral-200 scrollbar-thumb-orange-300"
    >
      <div
        v-for="(day, ind) in week"
        :key="ind"
        :id="ind.toString()"
        class="h-full bg-neutral-100 w-64 flex-shrink-0 mr-px ml-px"
        :class="{
          'bg-neutral-50 bg-opacity-95': ind + 1 == new Date().getDate(),
        }"
      >
        <div class="w-full h-full flex flex-col justify-start items-center">
          <div
            @wheel="scroll"
            class="h-1/7 w-full bg-neutral-100 pb-5 pt-5 flex flex-col justify-center items-center"
            :class="{
              'bg-neutral-300 bg-opacity-30': ind + 1 == new Date().getDate(),
            }"
          >
            <h3
              class="text-xl font-semibold"
              :class="{
                'text-red-700': (ind + 1) % 7 == 0,
              }"
            >
              {{ ind + 1 }}
            </h3>
            <p
              class="text-sm text-center tracking-widest"
              :class="{
                'text-red-700': (ind + 1) % 7 == 0,
              }"
            >
              {{ day }}
            </p>
          </div>
          <div
            class="w-full h-full bg-neutral-50 p-1 pr-2 overflow-y-scroll scrollbar-thin scrollbar-track-neutral-200 scrollbar-thumb-neutral-50"
          >
            <div
              v-if="ind + 1 == 17"
              class="p-1 bg-neutral-200 bg-opacity-50 w-full flex justify-center items-center mt-0.5 mb-1.5 rounded-xl"
            >
              <div
                class="w-3 h-full flex flex-col justify-around items-center p-1 ml-1 mr-1"
              >
                <div
                  class="w-2.5 h-2.5 m-0.5 rounded-xl bg-purple-700 bg-opacity-80"
                ></div>
                <div
                  class="w-2.5 h-2.5 m-0.5 rounded-xl bg-violet-400 bg-opacity-80"
                ></div>
                <div
                  class="w-2.5 h-2.5 m-0.5 rounded-xl bg-emerald-700 bg-opacity-80"
                ></div>
              </div>
              <div class="w-full h-full flex justify-start items-center">
                <div class="m-1 ml-2 mr-2">
                  <p class="text-sm font-semibold text-neutral-900">
                    zupa pomidorowa
                  </p>
                  <p class="text-xs text-neutral-500">z ryżem</p>
                </div>
              </div>
            </div>

            <div
              v-if="ind + 1 == 18"
              class="p-1 bg-neutral-200 bg-opacity-50 w-full flex justify-center items-center mt-0.5 mb-1.5 rounded-xl"
            >
              <div
                class="w-3 h-full flex flex-col justify-around items-center p-1 ml-1 mr-1"
              >
                <div
                  class="w-2.5 h-2.5 m-0.5 rounded-xl bg-amber-700 bg-opacity-80"
                ></div>
                <div
                  class="w-2.5 h-2.5 m-0.5 rounded-xl bg-violet-500 bg-opacity-80"
                ></div>
                <div
                  class="w-2.5 h-2.5 m-0.5 rounded-xl bg-emerald-300 bg-opacity-80"
                ></div>
              </div>
              <div class="w-full h-full flex justify-start items-center">
                <div class="m-1 ml-2 mr-2">
                  <p class="text-sm font-semibold text-neutral-900">
                    makaron chiński
                  </p>
                  <p class="text-xs text-neutral-500">z sosem sojowym</p>
                </div>
              </div>
            </div>
            <div
              v-if="ind + 1 == 18"
              class="p-1 bg-neutral-200 bg-opacity-50 w-full flex justify-center items-center mt-0.5 mb-1.5 rounded-xl"
            >
              <div
                class="w-3 h-full flex flex-col justify-around items-center p-1 ml-1 mr-1"
              >
                <div
                  class="w-2.5 h-2.5 m-0.5 rounded-xl bg-blue-400 bg-opacity-80"
                ></div>
              </div>
              <div class="w-full h-full flex justify-start items-center">
                <div class="m-1 ml-2 mr-2">
                  <p class="text-sm font-semibold text-neutral-900">kawa</p>
                  <p class="text-xs text-neutral-500"></p>
                </div>
              </div>
            </div>
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
      let now = new Date().getDate();
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
        document
          .getElementById(`${now - 1}`)
          ?.scrollIntoView({ block: "nearest" });
        scrollableDiv.value.scrollLeft += 300;
      }, 200);
    };

    weekGenerate();

    return { dateStor, week, weekGenerate, week, scroll, scrollableDiv };
  },
});
</script>
