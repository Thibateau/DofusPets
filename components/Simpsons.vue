<template>
  <div class="pt-12 px-4 xl:pt-0 xl-px-0">
    <div
      class="xl:py-0 xl:px-12 xl:text-7xl xl:w-full xl:h-full px-16 h-24 w-56 mx-auto shadow-lg shadow-black ring ring-black ring-offset-4 ring-offset-white rounded-full bg-yellow-400 flex xl:items-center justify-center font-bold text-l"
    >
      <h1 class="flex pt-6 xl:pt-0 xl:text-5xl xl:mx-auto">Random Simpsons</h1>
      <img
        class="xl:w-56 xl:h-44 xl:mx-auto"
        src="~assets/images/theSimpsons.png"
      />
    </div>
    <div class="flex pt-8">
      <div class="flex-1 flex-col flex">
        <div class="mx-auto">
          <img
            class=" pl-4 pt-4 w-auto mx-auto xl:h-96 flex"
            width=""
            :src="simp.image"
          />
        </div>
      </div>
      <div class="flex-1">
        <div class="flex flex-col items-center mx-auto xl:pt-8">
          <h2
            class="xl:text-3xl text-m text-white font-bold w-44 h-16 xl:w-96 xl:h-24 xl:pt-6 flex justify-center pt-4 xl:pt-0 ring ring-black ring-offset-2 ring-offset-white rounded-lg bg-red-600"
          >
            {{ simp.character }}
          </h2>
          <p class="xl:text-2xl text-xs font-semibold pt-12">
            {{ simp.quote }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { SimpsonsCharacter } from "~/types";
export default {
  props: {
    simp: { type: Object as PropType<SimpsonsCharacter>, required: true },
  },

};
</script>
