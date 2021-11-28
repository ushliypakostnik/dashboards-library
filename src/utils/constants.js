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
  switch (widget) {
    case 'top1':
      return {
        widget,
        h: DESIGN.WIDGETS_HEIGHT,
        hWide: DESIGN.WIDGETS_HEIGHT,
        w: 2,
        isCollection: false,
        static: true,
      };
    case 'widget1':
      return {
        widget,
        h: DESIGN.WIDGETS_HEIGHT,
        w: 1,
        isCollection: false,
        static: false,
      };
    case 'widget2':
      return {
        widget,
        h: DESIGN.WIDGETS_HEIGHT,
        w: 2,
        isCollection: false,
        static: false,
      };
    case 'collection1':
      return {
        widget,
        h: DESIGN.WIDGETS_HEIGHT,
        w: 2,
        isCollection: true,
        static: false,
      };
  }
};
