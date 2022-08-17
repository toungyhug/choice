<template>
  <div class="w-full h-full p-2"></div>
</template>

<script lang="ts">
import { ref } from "vue";
import { dataStore } from "../stores/data.js";
import { defineComponent } from "vue";

export default defineComponent({
  name: "calendar",
  setup() {
    const dateStor: any = dataStore();

    return { dateStor };
  },
});
</script>
