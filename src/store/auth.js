import localStorage from '~/services/local-storage'

export const state = () => ({
  currentUser: {},
})

export const getters = {
  isAuthenticated: state => !!state.currentUser,
  campaigns: ({ currentUser: campaigns }) => campaigns || [],
}

export const mutations = {
  SET_USER(state, user) {
    state.currentUser = user

    localStorage.set('currentUser', user)
  },
}

export const actions = {
  setUser({ commit }, user) {
    return commit('SET_USER', user)
  },
}
