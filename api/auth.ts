import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { TLoginForm } from "~/types"

export function login({ $axios }: { $axios: NuxtAxiosInstance }, form: TLoginForm) {
	return $axios
		.post("https://restful-booker.herokuapp.com/auth", form)
}