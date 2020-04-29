import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "test",
  },
  getters: {},
  mutations: {
    //updating the state/synchronous /code has to wait until the mutation is done
    setName(state, name) {
      state.name = name
    },
    setPop(state, population) {
      state.population = population
    },
  },
  actions: {
    //asynchronous/ code can continue to run even if the action is not finished
    setName(context, name) {
      context.commit("setName", name)
    },
    setPop(context, population) {
      context.population = population
    },
  },
  modules: {},
})
