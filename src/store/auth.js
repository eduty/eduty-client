export const getters = {
  isAuthenticated: state => !!state.currentUser,
  currentUser: state => state.currentUser,
}

export const mutations = {
  SET_USER(state, user) {
    state.currentUser = user
  },
}
