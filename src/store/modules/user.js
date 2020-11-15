import fb from 'firebase'

class User {
  constructor (id) {
    this.id = id
  }
}

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {    
    async registerUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)      
      try {
        await fb.auth().createUserWithEmailAndPassword(email, password)      
        const userUid = fb.auth().currentUser
        commit('setUser', new User(userUid.uid))
        commit('setLoading', false)
      }
      catch(error){
        commit('setLoading', false),
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser ({commit}, {email, password}) {
      commit('clearError')
      commit('setLoading', true)      
      try {
        await fb.auth().signInWithEmailAndPassword(email, password)
        const userUid = fb.auth().currentUser
        commit('setUser', new User(userUid.uid))
        commit('setLoading', false)
      }
      catch(error){
        commit('setLoading', false),
        commit('setError', error.message)
        throw error
      }
    },
    autoLoginUser ({commit}, payload) {
      commit('setUser', new User(payload.uid))
    },
    logoutUser ({commit}) {
      fb.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isUserLogedIn (state) {
      return state.user !== null
    }
  }
}