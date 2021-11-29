/* eslint-disable no-unused-vars */

const initialState = {
  isMenuOpen: true,
  layouts: {},
};

const state = initialState;

const getters = {
  isMenuOpen: (state) => state.isMenuOpen,
  layouts: (state) => state.layouts,
};

const actions = {
  setMenu({ commit }, isMenuOpen) {
    commit('setMenu', isMenuOpen);
  },

  saveDashboard({ commit }, dashboard) {
    commit('saveDashboard', dashboard);
  },
};

const mutations = {
  setMenu(state, isMenuOpen) {
    state.isMenuOpen = isMenuOpen;
  },

  saveDashboard(state, dashboard) {
    console.log('layout.js saveDashboard!!!', state, dashboard);
    state.layouts[dashboard.id] = dashboard.layouts;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
