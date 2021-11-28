import common from './common';

import API from '../utils/api';

export default {
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
  },
};
