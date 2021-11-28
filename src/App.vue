<template>
  <div id="app">
    <Dashboards api="http://localhost:8083/" />
  </div>
</template>

<script>
import Dashboards from './components/Dashboards';

export default {
  name: 'App',

  components: {
    Dashboards,
  },
};
</script>

<style lang="stylus">
@import "./stylus/_stylebase.styl";

// Import fonts
//////////////////////////////////////////////////////

@font-face
  font-family: $font-family;
  src: url('../docs/.vuepress/public/fonts/OpenSans/OpenSans-Regular.eot');
  src: local('Open Sans Regular'), local('OpenSans-Regular'),
    url('../docs/.vuepress/public/fonts/OpenSans/OpenSans-Regular.eot?#iefix') format('embedded-opentype'),
    url('../docs/.vuepress/public/fonts/OpenSans/OpenSans-Regular.woff') format('woff'),
    url('../docs/.vuepress/public/fonts/OpenSans/OpenSans-Regular.ttf') format('truetype');
  font-weight: $font-weight.regular;
  font-style: normal;

@font-face
  font-family: $font-family;
  src: url('../docs/.vuepress/public/fonts/OpenSans/OpenSans-Bold.eot');
  src: local('Open Sans Bold'), local('OpenSans-Bold'),
    url('../docs/.vuepress/public/fonts/OpenSans/OpenSans-Bold.eot?#iefix') format('embedded-opentype'),
    url('../docs/.vuepress/public/fonts/OpenSans/OpenSans-Bold.woff') format('woff'),
    url('../docs/.vuepress/public/fonts/OpenSans/OpenSans-Bold.ttf') format('truetype');
  font-weight: $font-weight.bold;
  font-style: normal;

// Base normalize

:root
  scroll-behavior smooth

body
  font-family $font-family, sans-serif
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  text-rendering: optimizeSpeed
  color $colors.text
  overflow-x hidden
</style>
