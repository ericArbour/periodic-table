import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedElement: null,
    selectedCategory: null
  },
  getters: {
    selectedElement: ({ selectedElement }) => {
      return selectedElement;
    },
    selectedCategory: ({ selectedCategory }) => {
      return selectedCategory;
    }
  },
  mutations: {
    setSelectedElement(state, element) {
      state.selectedElement = element;
    },
    setSelectedCategory(state, category) {
      state.selectedCategory = category;
    }
  },
  actions: {
    setSelectedElement({ commit }, element) {
      commit("setSelectedElement", element);
    },
    setSelectedCategory({ commit }, category) {
      commit("setSelectedCategory", category);
    }
  }
});
