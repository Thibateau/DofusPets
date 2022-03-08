<template>
  <div class="flex justify-center w-screen h-screen bg-blue-400 ">
    <div class="w-full max-w-xs pt-80">
      <form class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="submit">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-m font-bold mb-2 decoration-wavy decoration-yellow-500"
            for="username"
          >
            Pseudo
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pseudo"
            type="text"
            placeholder="Pseudo"
            v-model="form.username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-m font-bold mb-2"
            for="password"
          >
            Mot de passe
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
            id="password"
            type="password"
            placeholder="*************"
            v-model="form.password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Se connecter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { TLoginForm} from '~/types/index.d'
export default {
  data(){
    return {
    form : {
      username: "",
      password: ""
    } as TLoginForm 
    }
  },
  methods:{
    submit(){
      this.$emit("send",this.form)
    }
  }
};
</script>
