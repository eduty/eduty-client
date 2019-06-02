export default function ({ route, store, redirect }) {
  if (route.path !== '/' && !store.getters['user/isAuthenticated']) {
    return redirect('/entrar')
  }
}
