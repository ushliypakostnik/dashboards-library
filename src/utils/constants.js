// Project constants
// ////////////////////////////////////////////////////
// ////////////////////////////////////////////////////
// ///////////////////////////////////////////////////

// Design constants
//////////////////////////////////////////////////////

export const DESIGN = {
  BREAKPOINTS: {
    tablet: 768,
    desktop: 1025,
  },
  WIDGETS_HEIGHT: 15,
};

export const setWidget = (widget) => {
  const common = {
    widget: widget.widget,
    data: widget.data,
  };

  switch (widget.widget) {
    case 'top1':
      return {
        ...common,
        h: DESIGN.WIDGETS_HEIGHT * 1.5,
        hWide: DESIGN.WIDGETS_HEIGHT,
        w: 2,
        isCollection: false,
        static: true,
      };
    case 'widget1':
      return {
        ...common,
        h: DESIGN.WIDGETS_HEIGHT,
        w: 1,
        isCollection: false,
        static: false,
      };
    case 'widget2':
      return {
        ...common,
        h: DESIGN.WIDGETS_HEIGHT,
        w: 2,
        isCollection: false,
        static: false,
      };
    case 'collection1':
      return {
        ...common,
        h: DESIGN.WIDGETS_HEIGHT,
        w: 2,
        isCollection: true,
        static: false,
      };
  }
};
