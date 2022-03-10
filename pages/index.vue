<template>
<div class="bg-blue-400">
  <div class="min-h-screen min-w-screen xl:py-24 xl:px-72  xl:pb-12 rounded-full bg-white shadow-lg shadow-black ring ring-black ring-offset-8 ring-offset-red-600">
      <Simpsons v-if="simp" class="":simp="simp" />
      <div v-if="simp===undefined">
        <img src="~assets/images/homer-simpson-fin.jpg">
        <h2 class="text-l font-bold xl:text-5xl"> Houu pinaize ca bug... </h2>
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
  computed:{
    simp(){
      console.log('this.$store.getters', this.$store.getters)
      return this.$store.getters.getSimpsonCharacter
    },
    loading(){
      return this.$store.getters.getLoading
    }
  },
  methods:{
    async randomSimpsons(){
      await this.$store.dispatch('getSimpsonCharacter')
    }
  }
}
</script>
