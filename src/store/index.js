import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currSwipper: {},
  },
  mutations: {
    setCurrentSwipper(state, payload) {
      state.currSwipper = payload
    },
    
  },
  actions: {

  },
  modules: {
  }
})
