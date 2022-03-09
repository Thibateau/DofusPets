<template>
  <div class="">
    <div class="border rounded-full bg-yellow-400 py-14 flex justify-center font-bold text-7xl">
      <h1>Random Simpsons</h1>
      <img
        width="250px"
        class="pl-12"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Logo_The_Simpsons.svg/800px-Logo_The_Simpsons.svg.png"
      />
    </div>
    <div class="flex">
      <div class="flex-1 flex-col flex">
        <div class="mx-auto">
          <img class="max-h-96 w-auto flex pt-8" :src="pet.image" />
        </div>
      </div>
      <div class="flex-1">
        <div class="flex flex-col items-center mx-auto">
          <h2 class="text-4xl font-bold pt-12">{{ pet.character }}</h2>
          <p class="text-2xl font-bold pt-12">{{ pet.quote }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Pet } from "~/types";
export default {
  props: {
    pet: { type: Object as PropType<Pet>, required: true },
  },
};
</script>
