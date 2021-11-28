<template>
  <div v-if="isLoaded" class="subwidget__wrapper">
    <div class="subwidget">
      <div>{{ config.widget }}, id: {{ config.i }}<br /><span class="subwidget__test">{{ content }}</span></div>
    </div>
  </div>
</template>

<script>
import widget from '../../mixins/widget';

export default {
  name: 'Subwidget',

  mixins: [widget],

  mounted() {
    this.getWidget();
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

$name = '.subwidget'

{$name}
  @extend $widget
  background rgba($colors.bird, $opacites.psy)
</style>
