import { SimpsonsCharacter } from '@/types'

export const state = () => ({
  simpsonCharacter: null,
  loading: false
})

export const getters = {
  getSimpsonCharater(state) {
    return state.simpsonCharacter;
  },
  getLoading(state) {
    return state.loading
  }
}

export const mutations = {
 SET_SIMPSON_CHARACTER(state, simpson: SimpsonsCharacter) {
   state.simpsonCharacter = simpson
 },
 SET_LOADING(state, isLoading) {
   state.loading = isLoading
 }
}


export const actions = {
  async getSimpsonCharacter({ commit, dispatch, getters }) {
    commit('SET_LOADING', true)
    const result = await this.$simpsonsApi.getList();
    const simpsonCharacter = result?.data?.[0];
    commit('SET_SIMPSON_CHARACTER', simpsonCharacter)
    commit('SET_LOADING', false)
    console.log('result', result)
  },

  async nuxtServerInit({ dispatch }) {
    console.log('server init', )
    await dispatch('getSimpsonCharacter')
  }
}
