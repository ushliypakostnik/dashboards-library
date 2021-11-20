/* eslint-disable no-unused-vars */
const initialState = {
  layout: 'Я из стора layout библиотеки!!!',
};

const state = initialState;

const getters = {
  layout: (state) => state.layout,
};

const actions = {
  setLayout({ state }, layout) {
    this.commit('setLayout', layout);
  },
};

const mutations = {
  setLayout(state, layout) {
    state.layout = layout;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
