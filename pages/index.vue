<template>
<div class="bg-blue-400">
  <div class="h-screen w-screen py-24 px-72 border rounded-full bg-white">
    <div class="">
      <Simpsons class="":simp="simpsonCharacter" />
      <div class="flex flex-col">
        <button @click="randomSimpsons" class="justify-center">
         <img
          class="mx-auto"
          :class="[{'animate-bounce':loading}]"
          src="~assets/images/pink-donuts.png"
          width="350px"
        />
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { SimpsonsCharacter } from "~/types";
export default {
  data() {
    return {
      simpsonCharacter: null as SimpsonsCharacter | null,
      loading: false
    };
  },
  async asyncData({ $simpsonsApi }) {
    const { data } = await $simpsonsApi.getList();
    return {
      simpsonCharacter: data[0],
    };
  },
  methods: {
    async randomSimpsons() {
      this.loading = true
      const { data } = await this.$simpsonsApi.getList();
      this.simpsonCharacter = data[0];
      this.loading = false

    },
  },
};
</script>
