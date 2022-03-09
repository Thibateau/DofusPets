<template>
<div class="bg-blue-400">
  <div class="min-h-screen min-w-screen xl:py-24 xl:px-72  xl:pb-12 rounded-full bg-white shadow-lg shadow-black ring ring-black ring-offset-8 ring-offset-red-600">
      <Simpsons v-if="simpsonCharacter" class="":simp="simpsonCharacter" />
      <div v-if="simpsonCharacter===undefined">
        <img src="~assets/images/homer-simpson-fin.jpg">
        <h2 class="text-l font-bold xl:text-5xl"> Hoo punaize ca bug... </h2>
      </div>  
      <div class="flex flex-col">
        <button @click="randomSimpsons" class="mx-auto flex justify-center">
        <div class="xl:h-auto xl:w-60 h-auto w-36 mx-auto pt-8"> 
          <img
          :class="[{'animate-bounce':loading}]"
          src="~assets/images/pink-donuts.png"
          loading="lazy"
        />
        </div>
        </button>
      </div>
  </div>
</div>
</template>

<script lang="ts">
import { SimpsonsCharacter } from "~/types";
export default {
  data() {
    return {
      simpsonCharacter: null as SimpsonsCharacter | null | undefined,
      loading: false
    };
  },
  async asyncData({ $simpsonsApi }) {
    const result = await $simpsonsApi.getList();
    return {
      simpsonCharacter: result?.data?.[0],
    };
  },
  methods: {
    async randomSimpsons() {
      this.loading = true
      const result = await this.$simpsonsApi.getList();
      this.simpsonCharacter = result?.data?.[0];
      this.loading = false

    },
  },
};
</script>
