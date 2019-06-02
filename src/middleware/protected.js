export default function ({ route, store, redirect }) {
  if (!store.getters['auth/isAuthenticated']) {
    return redirect('/entrar')
  }
}
