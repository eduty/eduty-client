import localStorage from '~/services/local-storage'

export default function ({ route, store, redirect }) {
  if (process.browser) {
    const currentUser = localStorage.get('currentUser')
    store.dispatch('auth/setUser', currentUser)
  }
}
