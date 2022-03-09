import "@nuxt/types"
import { SimpsonsApi } from "~/api/simpsons"

declare module 'vue/types/vue' {
	interface Vue {
		$simpsonsApi: SimpsonsApi
	}	
	interface Context {
		$simpsonsApi: SimpsonsApi
	}
}

declare module '@nuxt/types' {
	interface NuxtAppOptions {
		$simpsonsApi: SimpsonsApi
	}

	interface Context {
		$simpsonsApi: SimpsonsApi
	}
}

declare module 'vuex/types/index' {
	interface Store<S> {
		$simpsonsApi: SimpsonsApi
	}
}