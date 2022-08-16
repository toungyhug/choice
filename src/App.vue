<template>
  <div
    class="w-full h-screen scrollbar-thin scrollbar-track-zinc-400 scrollbar-thumb-stone-200 font-nunito tracking-wide"
  >
    <div class="w-full bg-zinc-50 h-3/4 flex justify-center items-center">
      <div class="w-76 bg-gray-200 rounded-2xl overflow-hidden">
        <div class="w-full h-full">
          <h3
            class="text-center text-base font-normal p-2 bg-choicegreen text-white"
          >
            Nowe danie w dniu 04.05.2022
          </h3>
          <form class="text-sm font-light">
            <div class="p-2 rounded-b-3xl bg-gray-100">
              <div class="p-1 pt-1.5 pb-1.5">
                <p class="pl-0.5">Numer dania w tym dniu: 1</p>
              </div>
              <div class="flex justify-between items-center p-1 pt-1.5 pb-1.5">
                <p class="pl-0.5">Nazwa dania:</p>
                <input
                  type="text"
                  class="text-sm p-0.5 pr-2 pl-2 bg-gray-50 border border-gray-200 rounded-md focus:outline focus:outline-zinc-300"
                />
              </div>
              <div class="flex justify-between items-start p-1 pt-2 pb-1.5">
                <p class="pl-0.5">Ilość lub wielkość:</p>
                <div class="p-0 m-0">
                  <input
                    type="range"
                    class="text-sm p-0.5 pr-2 pl-2 pb-0 accent-zinc-500"
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
                class="flex flex-col justify-start items-start p-1 pt-1.5 pb-1.5"
              >
                <p class="pb-1 pl-0.5">Opis dodatkowy:</p>
                <input
                  type="text"
                  class="text-sm w-full p-0.5 pr-2 pl-2 bg-gray-50 border border-gray-200 rounded-md focus:outline focus:outline-zinc-300"
                />
              </div>
              <div
                class="flex flex-col justify-start items-start p-1 pt-1.5 pb-1.5"
              >
                <p class="pb-1 pl-0.5">
                  Opcje
                  <span class="text-2xs"
                    >(kiedy występuję w większej ilości)</span
                  >:
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
                      id="option"
                      ref="option"
                      class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                    />
                    <label class="pl-1.5 tracking-wider" for="option">{{
                      option
                    }}</label>
                  </div>
                  <!-- <div class="flex justify-start items-center pr-1 pl-1">
                    <input
                      type="checkbox"
                      class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                    />
                    <label class="pl-1.5 tracking-wider">pszenica</label>
                  </div>
                  <div class="flex justify-start items-center pr-1 pl-1">
                    <input
                      type="checkbox"
                      class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                    />
                    <label class="pl-1.5 tracking-wider">cukry</label>
                  </div>
                  <div class="flex justify-start items-center pr-1 pl-1">
                    <input
                      type="checkbox"
                      class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                    />
                    <label class="pl-1.5 tracking-wider">błonnik</label>
                  </div>
                  <div class="flex justify-start items-center pr-1 pl-1">
                    <input
                      type="checkbox"
                      class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                    />
                    <label class="pl-1.5 tracking-wider">laktoza</label>
                  </div>
                  <div class="flex justify-start items-center pr-1 pl-1">
                    <input
                      type="checkbox"
                      class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                    />
                    <label class="pl-1.5 tracking-wider">białko</label>
                  </div>
                  <div class="flex justify-start items-center pr-1 pl-1">
                    <input
                      type="checkbox"
                      class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                    />
                    <label class="pl-1.5 tracking-wider">przetworzone</label>
                  </div>
                  <div class="flex justify-start items-center pr-1 pl-1">
                    <input
                      type="checkbox"
                      class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                    />
                    <label class="pl-1.5 tracking-wider">tłuste</label>
                  </div>
                  <div class="flex justify-start items-center pr-1 pl-1">
                    <input
                      type="checkbox"
                      class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                    />
                    <label class="pl-1.5 tracking-wider">kofeina</label>
                  </div>
                  <div class="flex justify-start items-center pr-1 pl-1">
                    <input
                      type="checkbox"
                      class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                    />
                    <label class="pl-1.5 tracking-wider">kiszone</label>
                  </div>
                  <div class="flex justify-start items-center pr-1 pl-1">
                    <input
                      type="checkbox"
                      class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                    />
                    <label class="pl-1.5 tracking-wider">ostre</label>
                  </div>
                  <div class="flex justify-start items-center pr-1 pl-1">
                    <input
                      type="checkbox"
                      class="text-sm p-0.5 pr-2 pl-2 focus:outline-zinc-300 accent-neutral-500 text-white"
                    />
                    <label class="pl-1.5 tracking-wider">alkohol</label>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="w-full flex justify-evenly items-center pt-3 pb-3">
              <button
                class="p-0.5 pr-7 pl-7 rounded-lg bg-choicegreen text-white hover:opacity-70 transition-all duration-100 font-normal tracking-wider text-2sm"
              >
                Dodaj
              </button>
              <button
                class="p-0.5 pr-7 pl-7 rounded-lg bg-zinc-400 text-white hover:opacity-70 transition-all duration-100 font-normal tracking-wider text-2sm"
              >
                Anuluj
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="w-full bg-choicegreen h-3/4"></div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { dataStore } from "./stores/data";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const dateStor: any = dataStore();

    const tempNewFood = ref<any[]>([]);

    console.log(dateStor.options);
    return { tempNewFood, dateStor };
  },
});
</script>
