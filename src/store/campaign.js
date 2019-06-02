export const state = () => ({
  course: null,
})

export const actions = {
  setCourse({ commit }, value) {
    return commit('setCourse', value)
  },
}

export const mutations = {
  setCourse(state, course) {
    state.course = course
  },
}
