const prefix = 'eduty'

class LocalStorage {
  get store() {
    try {
      if (process.server) return this._store || {}

      const originStore = window.localStorage.getItem(prefix)
      return originStore ? JSON.parse(originStore) : {}
    } catch (error) {
      console.error(error)
      return {}
    }
  }

  set store(value) {
    this._store = value

    if (process.server) return

    try {
      window.localStorage.setItem(prefix, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  get(key) {
    return this.store[key]
  }

  set(key, value) {
    this.store = {
      ...this.store,
      [key]: value,
    }
  }

  remove(key) {
    const { [key]: value, ...store } = this.store

    this.store = store
  }
}

export default new LocalStorage()
