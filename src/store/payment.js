export const state = () => ({
  payment: null,
  value: null,
})

export const actions = {
  setPayment({ commit }, value) {
    return commit('setPayment', value)
  },
  setValue({ commit }, value) {
    return commit('setValue', value)
  },
}

export const mutations = {
  setPayment(state, payment) {
    state.payment = payment
  },
  setValue(state, value) {
    state.value = value
  },
}
