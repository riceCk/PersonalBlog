import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    reduce(state) {
      state.count--;
    }
  },
  actions: {
    actIncrement({commit}) {
      commit('increment');
    },
    actReduce({commit}) {
      commit('reduce');
    }
  },
  getters: {
    doubleCount: state => state.count * 2
  }
})
