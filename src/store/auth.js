export const getters = {
  isAuthenticated: state => !!state.currentUser,
  currentUser: state => state.currentUser,
}

export const mutations = {
  setUser(state, user) {
    state.currentUser = user
  },
}
