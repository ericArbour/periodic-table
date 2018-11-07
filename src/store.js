import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedElement: null,
    selectedCategory: null,
    temperature: 273,
    isTempActive: false
  },
  getters: {
    selectedElement: ({ selectedElement }) => {
      return selectedElement;
    },
    selectedCategory: ({ selectedCategory }) => {
      return selectedCategory;
    },
    temperature: ({ temperature }) => {
      return temperature;
    },
    isTempActive: ({ isTempActive }) => {
      return isTempActive;
    }
  },
  mutations: {
    setSelectedElement(state, element) {
      state.selectedElement = element;
    },
    setSelectedCategory(state, category) {
      state.selectedCategory = category;
    },
    setTemperature(state, temperature) {
      state.temperature = temperature;
    },
    setIsTempActive(state, isTempActive) {
      state.isTempActive = isTempActive;
    }
  },
  actions: {
    setSelectedElement({ commit }, element) {
      commit("setSelectedElement", element);
    },
    setSelectedCategory({ commit }, category) {
      commit("setSelectedCategory", category);
    },
    setTemperature({ commit }, event = {}) {
      const { value } = event.target || {};
      const temp = value > 6000 ? 6000 : !value ? 0 : value;
      commit("setTemperature", temp);
    },
    setIsTempActive({ commit }, isTempActive) {
      commit("setIsTempActive", isTempActive);
    }
  }
});
