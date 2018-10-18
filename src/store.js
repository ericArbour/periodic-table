import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedElement: null
  },
  mutations: {
    setSelectedElement(state, element) {
      state.selectedElement = element;
    }
  },
  actions: {
    setSelectedElement({ commit }, element) {
      commit("setSelectedElement", element);
    }
  }
});
