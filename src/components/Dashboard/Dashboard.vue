<template>
  <grid-layout
    :layout="layout"
    :col-num="2"
    :row-height="1"
    :is-draggable="true"
    :is-resizable="false"
    :is-mirrored="false"
    :vertical-compact="true"
    :margin="[16, 16]"
    :use-css-transforms="true"
  >
    <grid-item
      v-for="widget in layout"
      :key="widget.i"
      :x="widget.x"
      :y="widget.y"
      :w="widget.w"
      :h="widget.h"
      :i="widget.i"
      :static="widget.static"
      @moved="movedEvent"
    >
      <Widget :config="widget" />
    </grid-item>
  </grid-layout>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';

import { setWidget } from '../../utils/constants';

export default {
  name: 'Dashboard',

  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      layout: [],
    };
  },

  mounted() {
    this.data.widgets.forEach((widget, index) => {
      this.layout.push({
        ...setWidget(widget),
        i: index.toString(),
      });
    });

    console.log('this.layout: ', this.layout);

    const top = this.layout.find(
      (widget) => widget.widget && widget.widget.includes('top'),
    );
    // eslint-disable-next-line no-unused-vars
    let y;
    if (top) {
      this.getItemByI(top.i).x = 0;
      this.getItemByI(top.i).y = 0;
      y = top.h;
    } else y = 0;
    let x = 0;
    this.layout
      .filter((widget) => widget.widget && !widget.widget.includes('top'))
      .forEach((widget) => {
        this.getItemByI(widget.i).y = y;
        if (widget.w === 1) {
          if (x === 0) {
            this.getItemByI(widget.i).x = 0;
            x = 1;
          } else {
            this.getItemByI(widget.i).x = 1;
            y += widget.h;
          }
        } else {
          this.getItemByI(widget.i).x = 0;
          if (x === 1) y += widget.h;
        }
      });
  },

  methods: {
    movedEvent() {},

    // Utils

    getItemByI(i) {
      return this.layout.find((item) => item.i === i);
    },
  },
};
</script>
