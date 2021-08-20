<template>
  <div
    class="component-name"
    :class="{
      '.component-name__element--modifier1': prop1,
      '.component-name__element--modifier2': prop2,
    }"
  >
    This is test component!!!
  </div>
</template>

<script>
export default {
  name: 'ComponentName',

  props: {
    prop1: {
      type: Boolean,
      required: true,
    },
    prop2: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

.component-name
  background $colors.primary // test styles
  // add adaptive
  +$mobile()
    display block

  &__element
    $text("natasha") // add typography

    &--modifier1
      color $colors.primary // add good color

    &--modifier2
      color $colors.secondary
</style>
