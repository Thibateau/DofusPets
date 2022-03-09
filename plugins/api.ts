import { Context } from "@nuxt/types"
import { PetsApi } from "~/api/pets"
import { Plugin } from '@nuxt/types'

const apiPlugin: Plugin = (ctx: Context, inject: any) => {
	inject("petsApi", new PetsApi(ctx.$axios))
}

export default apiPlugin
