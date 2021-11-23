<template>
  <div id="app">
    <Dashboards :api="url" />
  </div>
</template>

<script>
import Dashboards from './components/Dashboards';

const apiUrl = process.env.VUE_APP_API_URL;

export default {
  name: 'App',

  components: {
    Dashboards,
  },

  data() {
    return {
      url: apiUrl || 'http://localhost:8083',
    };
  },
};
</script>

<style lang="stylus">
@import "./stylus/_stylebase.styl";
</style>
