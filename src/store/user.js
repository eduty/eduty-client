export const state = () => ({
  user: null,
})

export const actions = {
  setUser({ commit }, value) {
    return commit('setMe', value)
  },
}

export const mutations = {
  setMe(state, user) {
    state.user = user
  },
}

export const getters = {
  isAuthenticated: state => !!state.user,
}
