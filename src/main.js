import Vue from 'vue';
import Router from 'vue-router';

import store from './store';

import App from './App.vue';

import * as components from './components';

const ComponentLibrary = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName];

      Vue.component(component.name, component);
    }
  },
};

Vue.config.productionTip = false;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary);
}

// ATTENTION! Set to true if you want
// to develop a module (not documentation)
// and false before publishing for use in projects
// or develop documentation!
const isDevelopmentModuleMode = true;
if (isDevelopmentModuleMode) {
  console.log('Start development module!');

  Vue.use(Router);

  const router = new Router();

  new Vue({
    store,
    router,
    render: (h) => h(App),
  }).$mount('#app');
}

export default ComponentLibrary;
