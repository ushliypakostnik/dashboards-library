/* eslint-disable no-unused-vars */
import API from '../../utils/api';

const initialState = {
  dashboards: null,
  dashboard: null,
};

const state = initialState;

const getters = {
  dashboards: (state) => state.dashboards,
  dashboard: (state) => state.dashboard,
};

const actions = {
  getDashboards({ commit }, api) {
    console.log('getDashboards actions!!!', api);
    API.getDashboards(api).then((res) => {
      commit('getDashboards', res);
    });
  },

  getDashboard({ commit }, { api, dashboard }) {
    console.log('getDashboard actions!!!', api, dashboard);
    API.getDashboard(api, dashboard).then((res) => {
      commit('getDashboard', res);
    });
  },

  nullifyDashboard({ commit }) {
    commit('nullifyDashboard');
  },
};

const mutations = {
  getDashboards(state, dashboards) {
    console.log('getDashboards mutations: ', dashboards);
    state.dashboards = dashboards;
  },

  getDashboard(state, dashboard) {
    console.log('getDashboard mutations: ', dashboard);
    state.dashboard = dashboard;
  },

  nullifyDashboard({ commit }) {
    state.dashboard = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
