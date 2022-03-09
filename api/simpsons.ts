import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { SimpsonsCharacter } from "~/types"
const URL_SIMPSONS = "https://thesimpsonsquoteapi.glitch.me/quotes"

export class SimpsonsApi {

	$axios: NuxtAxiosInstance

	constructor($axios: NuxtAxiosInstance) {
		this.$axios = $axios
	}
	getList() {
		return this.$axios.get<SimpsonsCharacter[]>(URL_SIMPSONS)
	}
}
