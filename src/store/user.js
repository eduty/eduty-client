export const state = () => ({
  user: {}
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
  isAuthenticated: state => !!state.user.id,
  campaign: ({ user: campaigns }) => campaigns[0],
}
