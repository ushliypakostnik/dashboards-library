<template>
  <div v-if="isLoaded" class="widget__wrapper">
    <div
      v-if="!isCollection"
      class="widget"
      :class="`widget--${config.widget}`"
    >
      <div>
        {{ config.widget }}, id: {{ config.i }}<br /><span
          class="widget__test"
          >{{ content }}</span
        >
      </div>
    </div>

    <div v-else>
      <Subwidget
        v-for="(subwidget, index) in content"
        :key="`subwidget${index}`"
        :api="api"
        :config="subwidget"
      />
    </div>
  </div>
</template>

<script>
import API from '../../utils/api';

import widget from '../../mixins/widget';

import Subwidget from '../Subwidget';

export default {
  name: 'Widget',

  mixins: [widget],

  components: { Subwidget },

  computed: {
    isCollection() {
      return this.config.widget.includes('collection');
    },
  },

  mounted() {
    if (this.isCollection) this.getCollection();
    else this.getWidget();
  },

  methods: {
    getCollection() {
      API.getCollection(this.api)
        .then((res) => {
          console.log('Widget getCollection: ', res);
          this.content = res.widgets;
          this.$emit('setCollection');
          this.isLoaded = true;
        })
        .catch((error) => {
          console.log('Widget getCollection: ', error);
        });
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

$name = '.widget'

{$name}
  @extend $widget

  &--top1
    background rgba($colors.cat, $opacites.psy)

  &--widget1,
  &--widget2
    background rgba($colors.dog, $opacites.psy)
</style>
