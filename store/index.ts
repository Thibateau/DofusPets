import { SimpsonsCharacter } from '@/types'
import { LoaderOptionsPlugin } from 'webpack'

export const state = () => ({
  simpsonsCharacter: null,
  loading: false
})

export const getters = {
  getSimpsonCharacter(state) {
    return state.simpsonCharacter
  },
  getLoading(state) {
    return state.loading
  },
}

export const mutations = {
  SET_SIMPSONS_CHARACTER(state, simpson: SimpsonsCharacter) {
    state.simpsonCharacter = simpson
  },
  SET_LOADING(state, isLoading: boolean) {
    state.loading = isLoading
  }
}

export const actions = {
  async getSimpsonCharacter({ commit }) {
    commit('SET_LOADING', true)
    const result = await this.$simpsonsApi.getList();
    const simpsonCharacter = result?.data?.[0];
    commit('SET_SIMPSONS_CHARACTER', simpsonCharacter)
    commit('SET_LOADING', false)
    console.log('result', result)
  },

  async nuxtServerInit({ dispatch }) {
    console.log('server init')
    await dispatch('getSimpsonCharacter')
  }
}