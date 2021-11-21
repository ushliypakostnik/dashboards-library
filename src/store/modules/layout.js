/* eslint-disable no-unused-vars */
import API from '../../utils/api';

const initialState = {
  dashboards: null,
};

const state = initialState;

const getters = {
  dashboards: (state) => state.dashboards,
};

const actions = {
  getDashboards({ commit }, api) {
    console.log('getDashboards actions!!!', api);
    API.getDashboards(api).then((res) => {
      commit('getDashboards', res);
    });
  },
};

const mutations = {
  getDashboards(state, dashboards) {
    console.log('getDashboards mutations: ', dashboards);
    state.dashboards = dashboards;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
