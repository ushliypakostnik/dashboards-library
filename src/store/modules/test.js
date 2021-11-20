/* eslint-disable no-unused-vars */
const initialState = {
  test: 'Я из стора test библиотеки!!!',
};

const state = initialState;

const getters = {
  test: (state) => state.test,
};

const actions = {
  setTest({ state }, test) {
    this.commit('setTest', test);
  },
};

const mutations = {
  setTest(state, test) {
    state.test = test;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
