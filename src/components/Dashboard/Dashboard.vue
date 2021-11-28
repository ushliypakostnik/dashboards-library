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
    >
      <Widget :config="widget" />
    </grid-item>
  </grid-layout>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';

import { setWidget } from '../../utils/constants';

import Widget from '..//Widget';

/*
const data = [
  {
    widget: 'top1',
    h: 15,
    w: 2,
    isCollection: false,
    static: true,
    i: '2',
    x: 0,
    y: 0,
  },
  {
    widget: 'widget2',
    h: 15,
    w: 2,
    isCollection: false,
    static: false,
    i: '0',
    y: 15,
    x: 0,
  },
  {
    widget: 'widget1',
    h: 15,
    w: 1,
    isCollection: false,
    static: false,
    i: '1',
    y: 30,
    x: 0,
  },
  {
    widget: 'widget2',
    h: 15,
    w: 2,
    isCollection: false,
    static: false,
    i: '3',
    y: 45,
    x: 0,
  },
  {
    widget: 'widget1',
    h: 15,
    w: 1,
    isCollection: false,
    static: false,
    i: '4',
    y: 60,
    x: 0,
  },
  {
    widget: 'widget2',
    h: 15,
    w: 2,
    isCollection: false,
    static: false,
    i: '5',
    y: 75,
    x: 0,
  },
];
*/

export default {
  name: 'Dashboard',

  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    Widget,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
    widgets: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      layout: [],
      // data,
    };
  },

  watch: {
    id() {
      this.setLayout();
    },
  },

  mounted() {
    this.setLayout();
  },

  methods: {
    // Utils

    getItemByI(i) {
      return this.layout.find((item) => item.i === i);
    },

    // Layout
    setLayout() {
      this.layout = [];
      this.widgets.forEach((widget, index) => {
        this.layout.push({
          ...setWidget(widget),
          i: index.toString(),
        });
      });

      console.log('this.layout: ', this.layout);

      const top = this.layout.find(
        (widget) => widget.widget && widget.widget.includes('top'),
      );

      let y;
      if (top) {
        this.getItemByI(top.i).x = 0;
        this.getItemByI(top.i).y = 0;
        y = top.h;
      } else y = 0;

      let x = 0;

      const widgets = this.layout.filter(
        (widget) => widget.widget && !widget.widget.includes('top'),
      );

      // eslint-disable-next-line no-unused-vars
      let last;
      for (let i = 0; i < widgets.length; i++) {
        if (last && last.w === 1 && this.getItemByI(widgets[i].i).w === 2)
          y += this.getItemByI(widgets[i].i).h;
        this.getItemByI(widgets[i].i).y = y;
        if (this.getItemByI(widgets[i].i).w === 1) {
          if (x === 0) {
            x = 1;
            this.getItemByI(widgets[i].i).x = 0;
          } else {
            x = 0;
            this.getItemByI(widgets[i].i).x = 1;
          }
        } else {
          x = 0;
          this.getItemByI(widgets[i].i).x = 0;
          y += this.getItemByI(widgets[i].i).h;
        }
        last = this.getItemByI(widgets[i].i);
      }

      this.layout = JSON.parse(JSON.stringify(this.layout));
    },
  },
};
</script>
