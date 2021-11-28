<template>
  <grid-layout
    :layout="layoutView"
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
      v-for="widget in layoutView"
      :key="widget.i"
      :x="widget.x"
      :y="widget.y"
      :w="widget.w"
      :h="widget.h"
      :i="widget.i"
      :static="widget.static"
    >
      <Widget :config="widget" :api="api" @setCollection="setCollection" />
    </grid-item>
  </grid-layout>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';

import common from '../../mixins/common';

import { setWidget } from '../../utils/constants';

import Widget from '..//Widget';

export default {
  name: 'Dashboard',

  mixins: [common],

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
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
    api: {
      type: [String, null],
      required: false,
      default: null,
    },
  },

  data() {
    return {
      layout: [],
      layoutWide: [],
    };
  },

  computed: {
    layoutView() {
      if (this.isMenuOpen) return this.layout;
      return this.layoutWide;
    },
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
      return this.layout.find((widget) => widget.i === i);
    },

    getItemWideByI(i) {
      return this.layoutWide.find((widget) => widget.i === i);
    },

    getItemIndexByI(i) {
      return this.layout.indexOf(this.getItemByI(i));
    },

    getItemWideIndexByI(i) {
      return this.layoutWide.indexOf(this.getItemWideByI(i));
    },

    // Set Layout
    setLayout() {
      this.layout = [];
      this.widgets.forEach((widget, index) => {
        this.layout.push({
          ...setWidget(widget),
          i: index.toString(),
        });
      });

      const top = this.layout.find((widget) => widget.widget.includes('top'));

      let y;
      if (top) {
        this.getItemByI(top.i).x = 0;
        this.getItemByI(top.i).y = 0;
        y = top.h;
      } else y = 0;

      let x = 0;

      const widgets = this.layout.filter(
        (widget) => !widget.widget.includes('top'),
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
      this.setLayoutWide();
    },

    // Set Layout Wide
    setLayoutWide() {
      this.layoutWide = [];
      this.layout.forEach((widget) => {
        const copy = { ...widget };
        if (!widget.widget.includes('top')) copy.w = 1;
        this.layoutWide.push(copy);
      });

      let height;
      const top = this.layoutWide.find((widget) =>
        widget.widget.includes('top'),
      );
      if (top) {
        height = this.getItemWideByI(top.i).hWide;
        this.getItemWideByI(top.i).h = height;
      } else height = 0;

      let leftColHeight = height;
      let rightColHeight = height;
      let collection;
      this.layoutWide
        .filter((widget) => !widget.widget.includes('top'))
        .forEach((widget) => {
          if (widget.i.includes('.')) {
            if (!collection) {
              if (leftColHeight <= rightColHeight) collection = 0;
              else collection = 1;
            }
            if (collection == 0) {
              widget.x = 0;
              widget.y = leftColHeight;
              leftColHeight += this.getItemWideByI(widget.i).h;
            } else {
              widget.x = 1;
              widget.y = rightColHeight;
              rightColHeight += this.getItemWideByI(widget.i).h;
            }
          } else {
            collection = null;
            if (leftColHeight <= rightColHeight) {
              widget.x = 0;
              widget.y = leftColHeight;
              leftColHeight += this.getItemWideByI(widget.i).h;
            } else {
              widget.x = 1;
              widget.y = rightColHeight;
              rightColHeight += this.getItemWideByI(widget.i).h;
            }
          }
        });
    },

    setCollection(collection) {
      console.log('Dashboard setCollection!!!', collection);

      const index = this.getItemIndexByI(collection.id);

      let y = this.getItemByI(collection.id).y;
      const widgets = collection.widgets.map((widget, index) => {
        return {
          ...setWidget(widget),
          x: 0,
          y: y + this.getItemByI(collection.id).h * index,
          i: `${collection.id}.${index}`,
        };
      });

      let h = widgets[0].h;

      const layoutCopy = this.layout;
      this.layout = [];
      for (let i = 0; i < index; i++) {
        this.layout.push(layoutCopy[i]);
      }
      for (let i = 0; i < collection.widgets.length; i++) {
        this.layout.push(widgets[i]);
      }
      for (let i = index + 1; i < layoutCopy.length; i++) {
        layoutCopy[i].y += h * (layoutCopy.length - index);
        this.layout.push(layoutCopy[i]);
      }

      this.setLayoutWide();
    },
  },
};
</script>
