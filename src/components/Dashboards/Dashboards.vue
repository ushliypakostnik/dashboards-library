<template>
  <main
    role="main"
    class="dashboards"
    :class="{ 'dashboards--min': isMenuOpen }"
  >
    <aside class="dashboards__sidebar">
      <button type="button" class="dashboards__toggle" @click="toggle">
        Toggle
      </button>
      <ul class="dashboards__menu">
        <li
          v-for="(item, index) in dashboards"
          :key="`menuitem${index}`"
          class="dashboards__menu-item"
        >
          <router-link :to="`/${item.path}`">{{ item.name }}</router-link>
        </li>
      </ul>
    </aside>
    <div class="dashboards__content">
      <Example />
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Dashboards',

  props: {
    api: {
      type: [String, null],
      required: false,
      default: null,
    },
  },

  data() {
    return {
      isMenuOpen: false,
    };
  },

  computed: {
    ...mapGetters(['dashboards']),
  },

  mounted() {
    this.getDashboards(this.api);
  },

  methods: {
    ...mapActions(['getDashboards']),

    toggle() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

$sidebar-width = 400px
$sidebar-width--min = 80px

$effect = $effects.duration

$name = '.dashboards'

{$name}
  width 100%
  height 100vh
  position relative
  padding-left $sidebar-width
  transition padding-left $effect

  &--min
    padding-left $sidebar-width--min

    {$name}__sidebar
      width $sidebar-width--min

    {$name}__menu
      display none

  &__sidebar
    width $sidebar-width
    transition width $effect
    height 100%
    position: absolute
    left 0
    top 0
    bottom 0
    padding: 60px 20px 40px
    background $colors.primary

  &__menu
    list-style none

  &__menu-item
    color $colors.stone
    margin-bottom: 20px

  &__content
    width: 100%
    height 100%
    background $colors.sky

  &__toggle
    position absolute
    right 20px
    top 20px
</style>
