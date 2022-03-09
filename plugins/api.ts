import { Context } from "@nuxt/types"
import { SimpsonsApi } from "~/api/simpsons"
import { Plugin } from '@nuxt/types'

const apiPlugin: Plugin = (ctx: Context, inject: any) => {
	inject("simpsonsApi", new SimpsonsApi(ctx.$axios))
}

export default apiPlugin
