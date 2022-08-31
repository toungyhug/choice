<template>
  <div class="w-96 h-96 rounded-xl overflow-hidden">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-full bg-neutral-600 flex justify-between items-center p-3">
        <h3 class="text-2base font-normal text-white w-full">
          Nowe danie w dniu {{ dateStor.newFoodDate }}
        </h3>
        <button
          @click="dateStor.addFoodHandler"
          class="text-white text-sm tracking-wide hover:text-neutral-300 transition-all duration-100"
        >
          Zamknij
        </button>
      </div>
      <form
        @submit.prevent="addFoodToTemp"
        class="text-sm font-light flex-1 w-full"
      >
        <div
          class="p-2 rounded-b-3xl bg-neutral-100 flex flex-col justify-around items-start h-full w-full"
        >
          <div
            class="p-1 pt-1.5 pb-1.5 flex justify-between items-center w-full"
          >
            <p class="pl-0.5">Numer dania w tym dniu: ??</p>
            <button
              type="submit"
              class="p-0.5 pr-7 pl-7 rounded-lg bg-orange-400 hover:bg-orange-500 text-white transition-all duration-100 font-medium tracking-wider text-2sm"
            >
              Dodaj
            </button>
            <a
              v-if="linkActive"
              download="foodlog.txt"
              ref="link"
              class="text-xs"
            >
              pobierz
            </a>
          </div>
          <div
            class="flex justify-between items-center p-1 pt-1.5 pb-1.5 w-full"
          >
            <p class="pl-0.5">Nazwa dania:</p>
            <input
              v-model="tempNewFood['name' as keyof typeof tempNewFood]"
              type="text"
              required
              class="text-sm p-0.5 pr-2 pl-2 bg-gray-50 border border-gray-200 rounded-md focus:outline focus:outline-zinc-300"
            />
          </div>
          <div class="flex justify-between items-start p-1 pt-2 pb-1.5 w-full">
            <p class="pl-0.5">Ilość lub wielkość:</p>
            <div class="p-0 m-0">
              <input
                v-model="tempNewFood['amount' as keyof typeof tempNewFood]"
                type="range"
                class="text-sm p-0.5 pr-2 pl-2 pb-0 accent-zinc-500"
                min="1"
                max="3"
              />
              <div
                class="flex w-full justify-between items-center m-0 p-0 text-xs tracking-widest h-0.5"
              >
                <span>mało</span>
                <span>dużo</span>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col justify-start items-start p-1 pt-1.5 pb-1.5 w-full"
          >
            <p class="pb-1 pl-0.5">Opis dodatkowy:</p>
            <input
              v-model="tempNewFood['desc' as keyof typeof tempNewFood]"
              type="text"
              class="text-sm w-full p-0.5 pr-2 pl-2 bg-gray-50 border border-gray-200 rounded-md focus:outline focus:outline-zinc-300"
            />
          </div>
          <div
            class="flex flex-col justify-start items-start p-1 pt-1.5 pb-1.5 w-full"
          >
            <p class="pb-1 pl-0.5">
              Tagi <span class="text-2xs">(po przecinku)</span>:
            </p>
            <input
              v-model="tempNewFood['tags' as keyof typeof tempNewFood]"
              type="text"
              required
              class="text-sm w-full p-0.5 pr-2 pl-2 bg-gray-50 border border-gray-200 rounded-md focus:outline focus:outline-zinc-300"
            />
          </div>
          <div
            class="flex flex-col justify-start items-start p-1 pt-1.5 pb-1.5"
          >
            <p class="pb-1 pl-0.5">
              Opcje
              <span class="text-2xs">(kiedy występuję w większej ilości)</span>:
            </p>
            <div
              class="flex justify-between items-start w-full flex-wrap pr-2 pl-2"
            >
              <div
                v-for="(option, id) in dateStor.options"
                :key="id"
                class="flex justify-start items-center pr-1 pl-1"
              >
                <input
                  type="checkbox"
                  :id="option"
                  v-model="tempNewFoodOptions[option as keyof typeof tempNewFoodOptions]"
                  class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                />
                <label class="pl-1.5 tracking-wider" :for="option">{{
                  option
                }}</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { dataStore } from "../stores/data.js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "addFood",
  setup() {
    const dateStor: any = dataStore();
    const tempNewFood = ref<any>({
      name: "",
      amount: 1,
      desc: "",
      date: null,
      options: [],
      tags: "",
    });
    const tempNewFoodOptions = ref<any>({
      gluten: false,
      cukry: false,
      przetworzone: false,
      alkohol: false,
      ostre: false,
      laktoza: false,
      błonnik: false,
      białko: false,
      tłuszcz: false,
      kofeina: false,
      kiszone: false,
    });

    const linkActive = ref<boolean>(false);
    const link = ref<any>(null);

    const addFoodToTemp = () => {
      let opt = [];
      let row = [];
      for (let [key, value] of Object.entries(tempNewFoodOptions.value)) {
        if (value == true) {
          opt.push(key);
        }
      }
      tempNewFood.value = {
        ...tempNewFood.value,
        date: dateStor.newFoodDate,
      };
      row.push(dateStor.fileIndex.toString());
      row.push(tempNewFood.value.name.toLowerCase());
      row.push(tempNewFood.value.amount);
      row.push(tempNewFood.value.date);
      row.push(tempNewFood.value.desc.toLowerCase());
      row.push(opt.toString());
      row.push(tempNewFood.value.tags.toLowerCase());

      dateStor.newFood.push(row);
      console.log(dateStor.newFood);
      dateStor.food.push(dateStor.newFood);

      let textFile: any = null;
      let data = new Blob([dateStor.food], { type: "text/plain" });
      if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
      }
      textFile = window.URL.createObjectURL(data);
      // setTimeout(() => {
      //   link.value.href = textFile;
      // }, 500);
    };
    return {
      tempNewFood,
      dateStor,
      addFoodToTemp,
      tempNewFoodOptions,
      link,
      linkActive,
    };
  },
});
</script>
