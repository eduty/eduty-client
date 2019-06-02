export default function ({ route, store, redirect }) {
  if (route.path !== '/' && !store.getters['auth/isAuthenticated']) {
    return redirect('/entrar')
  }
}
