<template>
  <div class="widget">{{ config }}</div>
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
  background $colors.stone
  border 2px solid $colors.primary
  padding 20px
</style>
