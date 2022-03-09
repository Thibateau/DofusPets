import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { Pet } from "~/types"
const URL_PETS = "https://thesimpsonsquoteapi.glitch.me/quotes"

export class PetsApi {

	$axios: NuxtAxiosInstance

	constructor($axios: NuxtAxiosInstance) {
		this.$axios = $axios
	}
	getList() {
		return this.$axios.get<Pet[]>(URL_PETS)
	}
}
