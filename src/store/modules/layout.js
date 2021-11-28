/* eslint-disable no-unused-vars */

const initialState = {
  isMenuOpen: true,
};

const state = initialState;

const getters = {
  isMenuOpen: (state) => state.isMenuOpen,
};

const actions = {
  setMenu({ commit }, isMenuOpen) {
    commit('setMenu', isMenuOpen);
  },
};

const mutations = {
  setMenu(state, isMenuOpen) {
    state.isMenuOpen = isMenuOpen;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
