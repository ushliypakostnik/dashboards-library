import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import api from './modules/api';
import layout from './modules/layout';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const persistState = createPersistedState({
  paths: ['layout'],
});

export default new Vuex.Store({
  modules: {
    api,
    layout,
  },
  plugins: [persistState],
  strict: debug,
});
