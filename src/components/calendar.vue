<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-3/4 flex-grow h-full flex flex-col justify-start">
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
        <div class="flex justify-center flex-wrap items-center opacity-80">
          <div class="flex justify-center items-center">
            <div
              class="w-3 h-1.5 m-0.5 rounded-xl bg-gluten bg-opacity-80"
            ></div>
            <p class="ml-1.5">gluten</p>
          </div>
          <div class="flex justify-center items-center ml-3">
            <div
              class="w-3 h-1.5 m-0.5 rounded-xl bg-cukry bg-opacity-80"
            ></div>
            <p class="ml-1.5">cukry</p>
          </div>
          <div class="flex justify-center items-center ml-3">
            <div
              class="w-3 h-1.5 m-0.5 rounded-xl bg-przetworzone bg-opacity-80"
            ></div>
            <p class="ml-1.5">przetworzone</p>
          </div>
          <div class="flex justify-center items-center ml-3">
            <div
              class="w-3 h-1.5 m-0.5 rounded-xl bg-alkohol bg-opacity-80"
            ></div>
            <p class="ml-1.5">alkohol</p>
          </div>
          <div class="flex justify-center items-center ml-3">
            <div
              class="w-3 h-1.5 m-0.5 rounded-xl bg-ostre bg-opacity-80"
            ></div>
            <p class="ml-1.5">ostre</p>
          </div>
          <div class="flex justify-center items-center ml-3">
            <div
              class="w-3 h-1.5 m-0.5 rounded-xl bg-laktoza bg-opacity-80"
            ></div>
            <p class="ml-1.5">laktoza</p>
          </div>
          <div class="flex justify-center items-center ml-3">
            <div
              class="w-3 h-1.5 m-0.5 rounded-xl bg-błonnik bg-opacity-80"
            ></div>
            <p class="ml-1.5">błonnik</p>
          </div>
          <div class="flex justify-center items-center ml-3">
            <div
              class="w-3 h-1.5 m-0.5 rounded-xl bg-białko bg-opacity-80"
            ></div>
            <p class="ml-1.5">białko</p>
          </div>
          <div class="flex justify-center items-center ml-3">
            <div
              class="w-3 h-1.5 m-0.5 rounded-xl bg-tłuszcz bg-opacity-80"
            ></div>
            <p class="ml-1.5">tłuszcz</p>
          </div>
          <div class="flex justify-center items-center ml-3">
            <div
              class="w-3 h-1.5 m-0.5 rounded-xl bg-kofeina bg-opacity-80"
            ></div>
            <p class="ml-1.5">kofeina</p>
          </div>
          <div class="flex justify-center items-center ml-3">
            <div
              class="w-3 h-1.5 m-0.5 rounded-xl bg-kiszone bg-opacity-80"
            ></div>
            <p class="ml-1.5">kiszone</p>
          </div>
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
          <div
            class="w-full h-full flex flex-col justify-start items-center relative"
          >
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
                {{ day.date.slice(0, 2) }}
              </h3>
              <p
                class="text-sm text-center tracking-widest"
                :class="{
                  'text-red-700': (ind + 1) % 7 == 0,
                }"
              >
                {{ day.day }}
              </p>
              <div
                @click="dateStor.addFoodHandler(day.date)"
                class="absolute top-1 right-1 p-px pr-3 pl-3 text-sm border rounded-3xl cursor-pointer bg-orange-500 bg-opacity-80 text-white font-bold hover:bg-orange-600 transition-all duration-100"
              >
                +
              </div>
            </div>
            <div
              class="w-full h-full bg-neutral-50 p-1 pr-2 overflow-y-scroll scrollbar-thin scrollbar-track-neutral-200 scrollbar-thumb-neutral-50"
            >
              <div
                @click="info(index)"
                @mouseleave="info(null)"
                v-for="(meal, index) in dateStor.food"
                :key="index"
                class="w-full cursor-pointer transition-all duration-75"
              >
                <div
                  v-if="meal[3] == day.date"
                  class="p-1 bg-neutral-200 hover:bg-zinc-100 bg-opacity-50 w-full transition-all duration-75 flex flex-col justify-center items-center mt-0.5 mb-1.5 rounded-xl"
                >
                  <div class="w-full flex justify-center items-center">
                    <div
                      class="w-3 h-full flex flex-col justify-around items-center p-1 ml-1 mr-1"
                    >
                      <div
                        v-if="meal[5].includes('gluten')"
                        class="w-3 h-1.5 m-0.5 rounded-xl bg-gluten bg-opacity-80"
                      ></div>
                      <div
                        v-if="meal[5].includes('cukry')"
                        class="w-3 h-1.5 m-0.5 rounded-xl bg-cukry bg-opacity-80"
                      ></div>
                      <div
                        v-if="meal[5].includes('przetworzone')"
                        class="w-3 h-1.5 m-0.5 rounded-xl bg-przetworzone bg-opacity-80"
                      ></div>
                      <div
                        v-if="meal[5].includes('alkohol')"
                        class="w-3 h-1.5 m-0.5 rounded-xl bg-alkohol bg-opacity-80"
                      ></div>
                      <div
                        v-if="meal[5].includes('ostre')"
                        class="w-3 h-1.5 m-0.5 rounded-xl bg-ostre bg-opacity-80"
                      ></div>
                      <div
                        v-if="meal[5].includes('laktoza')"
                        class="w-3 h-1.5 m-0.5 rounded-xl bg-laktoza bg-opacity-80"
                      ></div>
                      <div
                        v-if="meal[5].includes('błonnik')"
                        class="w-3 h-1.5 m-0.5 rounded-xl bg-błonnik bg-opacity-80"
                      ></div>
                      <div
                        v-if="meal[5].includes('białko')"
                        class="w-3 h-1.5 m-0.5 rounded-xl bg-białko bg-opacity-80"
                      ></div>
                      <div
                        v-if="meal[5].includes('tłuszcz')"
                        class="w-3 h-1.5 m-0.5 rounded-xl bg-tłuszcz bg-opacity-80"
                      ></div>
                      <div
                        v-if="meal[5].includes('kofeina')"
                        class="w-3 h-1.5 m-0.5 rounded-xl bg-kofeina bg-opacity-80"
                      ></div>
                      <div
                        v-if="meal[5].includes('kiszone')"
                        class="w-3 h-1.5 m-0.5 rounded-xl bg-kiszone bg-opacity-80"
                      ></div>
                    </div>
                    <div class="w-full h-full flex justify-start items-center">
                      <div class="m-1 ml-2 mr-2">
                        <p class="text-sm font-semibold text-neutral-900">
                          {{ meal[1] }}
                        </p>
                        <p class="text-xs text-neutral-700">{{ meal[4] }}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="extInfo == index"
                    class="w-full text-2xs ml-3 text-zinc-500 transition-all"
                  >
                    <p>zawiera: {{ meal[5].replaceAll(",", ", ") }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-80 h-full bg-orange-400 pr-4 p-2 mr-1 overflow-y-scroll scrollbar-thin scrollbar-track-neutral-200 scrollbar-thumb-orange-400"
    >
      <div
        class="w-full flex justify-between items-center pl-1 text-white mb-1"
      >
        <div class="font-semibold tracking-wider">do zapisania</div>
        <div
          class="text-2sm bg-orange-500 p-0.5 pl-4 pr-4 rounded-full hover:bg-opacity-50 cursor-pointer transition-all"
        >
          pobierz i zapisz
        </div>
      </div>
      <div class="h-full flex-shrink flex flex-col justify-start items-start">
        <div
          v-for="(mealToAdd, iin) in dateStor.newFood"
          :key="iin"
          class="bg-neutral-50 bg-opacity-90 mb-1 mt-1 w-full flex flex-col justify-center items-start p-1 pl-2 pr-2 text-sm tracking-wide rounded-xl"
        >
          <div class="text-xs font-medium tracking-wide">
            {{ mealToAdd[3] }}
          </div>
          <div class="text-xs">
            <span class="font-semibold text-sm">{{ mealToAdd[1] }}</span>
            {{ mealToAdd[4] }}
          </div>
          <div v-if="mealToAdd[5]" class="text-2sm">
            zawiera: {{ mealToAdd[5] }}
          </div>
          <div class="text-xs">tagi: {{ mealToAdd[6] }}</div>
        </div>
        <div class="w-full h-2 flex-shrink-0"></div>
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
    const extInfo = ref<any>(null);

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

    const info = (i: any) => {
      extInfo.value = i;
    };

    const weekGenerate = async () => {
      let arr = [];
      let arr2 = [];
      let arr3 = [];
      let now = new Date().getDate();
      let d = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
      while (d.getMonth() == new Date().getMonth()) {
        arr.push(d.getDate());
        arr2.push(daysOfWeek.value[d.getDay()]);
        arr3.push(
          (d.getDate() < 10 ? "0" + d.getDate() : d.getDate()) +
            "." +
            (d.getMonth() + 1 < 10
              ? "0" + (d.getMonth() + 1)
              : d.getMonth() + 1) +
            "." +
            d.getFullYear()
        );
        d.setDate(d.getDate() + 1);
      }
      for (let i = 0; i < arr.length; i++) {
        week.value.push({ day: arr2[i], date: arr3[i] });
      }

      setTimeout(() => {
        document
          .getElementById(`${now - 1}`)
          ?.scrollIntoView({ block: "nearest" });
        scrollableDiv.value.scrollLeft += 300;
      }, 200);
    };

    weekGenerate();

    return {
      dateStor,
      week,
      weekGenerate,
      scroll,
      scrollableDiv,
      info,
      extInfo,
    };
  },
});
</script>
