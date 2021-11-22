import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import layout from './modules/layout';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const persistState = createPersistedState({
  paths: ['dashboard'],
});

export default new Vuex.Store({
  modules: {
    layout,
  },
  plugins: [persistState],
  strict: debug,
});
