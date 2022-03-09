import "@nuxt/types"
import { PetsApi } from "~/api/pets"

declare module 'vue/types/vue' {
	interface Vue {
		$petsApi: PetsApi
	}	
	interface Context {
		$petsApi: PetsApi
	}
}

declare module '@nuxt/types' {
	interface NuxtAppOptions {
		$petsApi: PetsApi
	}

	interface Context {
		$petsApi: PetsApi
	}
}

declare module 'vuex/types/index' {
	interface Store<S> {
		$petsApi: PetsApi
	}
}