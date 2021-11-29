<template>
  <div v-if="isLoaded" class="widget__wrapper">
    <div
      class="widget"
      :class="[
        `widget--${config.widget}`,
        config.i.includes('.') && `widget--collection`,
      ]"
    >
      <div>
        {{ config.widget }}, id: {{ config.i }}<br /><span
          class="widget__test"
          >{{ content }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import API from '../../utils/api';

import common from '../../mixins/common';

export default {
  name: 'Widget',

  mixins: [common],

  props: {
    config: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isLoaded: false,
      content: null,
    };
  },

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
    getWidget() {
      API.getWidget(this.api)
        .then((res) => {
          console.log('Widget getWidgetd: ', res);
          this.content = res.tabs;
          this.isLoaded = true;
        })
        .catch((error) => {
          console.log('Widget getWidgetd: ', error);
        });
    },

    getCollection() {
      API.getCollection(this.api)
        .then((res) => {
          console.log('Widget getCollection: ', res);
          // this.content = res.widgets;
          this.$emit('setCollection', {
            id: this.config.i,
            widgets: res.widgets,
          });
          // this.isLoaded = true;
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
  @extend $flex--center
  height 100%
  background $colors.stone
  border 4px solid $colors.primary
  color $colors.primary
  padding 20px
  text-align: center
  $text("anna")
  $border-radius("shooting")

  &__wrapper
    height 100%

  &__test
    color $colors.sea
    $text("alena")

  &--top1
    background rgba($colors.cat, $opacites.psy)

  &--widget1,
  &--widget2
    background rgba($colors.dog, $opacites.psy)

  &--collection
    background rgba($colors.bird, $opacites.psy)
</style>
