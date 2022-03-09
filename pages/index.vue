<template>
<div class="bg-blue-400">
  <div class="h-screen w-screen py-24 px-72 border rounded-full bg-white">
    <div class="">
      <Pet class="":pet="pet" />
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
import { Pet } from "~/types";
export default {
  data() {
    return {
      pet: null as Pet | null,
      loading: false
    };
  },
  async asyncData({ $petsApi }) {
    const { data } = await $petsApi.getList();
    return {
      pet: data[0],
    };
  },
  methods: {
    async randomSimpsons() {
      this.loading = true
      const { data } = await this.$petsApi.getList();
      this.pet = data[0];
      this.loading = false

    },
  },
};
</script>
