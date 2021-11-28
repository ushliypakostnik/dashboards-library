<template>
  <div class="widget" :class="`widget--${config.widget}`">
    {{ config.widget }}, id: {{ config.i }}
  </div>
</template>

<script>
export default {
  name: 'Widget',

  props: {
    config: {
      type: Object,
      required: true,
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
  $text("anna")
  $border-radius("shooting")

  &--top1
    background rgba($colors.cat, $opacites.psy)

  &--widget1,
  &--widget2
    background rgba($colors.dog, $opacites.psy)

  &--collection1
    background rgba($colors.bird, $opacites.psy)
</style>
