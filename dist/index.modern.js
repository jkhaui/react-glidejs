import React, { forwardRef, useRef, useState, useEffect, Fragment, cloneElement } from 'react';
import Glide$1 from '@glidejs/glide';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '@glidejs/glide/dist/css/glide.core.min.css';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var Slide = (function (_ref) {
  var slide = _ref.slide,
      slideClassName = _ref.slideClassName,
      rest = _objectWithoutPropertiesLoose(_ref, ["slide", "index", "slideClassName"]);

  return React.createElement("li", Object.assign({
    className: "glide__slide " + (slideClassName || '')
  }, rest), slide);
});

var ArrowLeftIcon = forwardRef(function (_ref, ref) {
  var iconSize = _ref.iconSize,
      color = _ref.color,
      rest = _objectWithoutPropertiesLoose(_ref, ["iconSize", "color"]);

  return React.createElement("svg", Object.assign({
    width: iconSize || 20,
    height: iconSize || 20,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), React.createElement("polyline", {
    ref: ref,
    fill: "none",
    stroke: color || '#37474F',
    points: "17.5 22 6.5 12 17.5 2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3"
  }));
});

var ArrowRightIcon = forwardRef(function (_ref, ref) {
  var iconSize = _ref.iconSize,
      color = _ref.color,
      rest = _objectWithoutPropertiesLoose(_ref, ["iconSize", "color"]);

  return React.createElement("svg", Object.assign({
    width: iconSize || 20,
    height: iconSize || 20,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), React.createElement("polyline", {
    ref: ref,
    fill: "none",
    stroke: color || '#37474F',
    points: "6.5 2 17.5 12 6.5 22",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3"
  }));
});

var MOUNT_BEFORE = 'mount.before';
var MOUNT_AFTER = 'mount.after';
var UPDATE = 'update';
var PLAY = 'play';
var PAUSE = 'pause';
var BUILD_BEFORE = 'build.before';
var BUILD_AFTER = 'build.after';
var RUN_BEFORE = 'run.before';
var RUN = 'run';
var RUN_AFTER = 'run.after';
var RUN_OFFSET = 'run.offset';
var RUN_START = 'run.start';
var RUN_END = 'run.end';
var MOVE = 'move';
var MOVE_AFTER = 'move.after';
var RESIZE = 'resize';
var SWIPE_START = 'swipe.start';
var SWIPE_MOVE = 'swipe.move';
var SWIPE_END = 'swipe.end';
var TRANSLATE_JUMP = 'translate.jump';

var baseStyles = {"sliderArrow":"_10XKC","bullet":"_3I7ZQ"};

var styles = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  boxSizing: "border-box"
};
var defaultProps = {
  children: null,
  className: "glide",
  style: {},
  hideArrows: false,
  hideBullets: false
};
var Glide = forwardRef(function (props, ref) {
  if (props === void 0) {
    props = defaultProps;
  }

  var _props = props,
      children = _props.children,
      className = _props.className,
      slideClassName = _props.slideClassName,
      hideArrows = _props.hideArrows,
      hideBullets = _props.hideBullets,
      arrowSize = _props.arrowSize,
      arrowColor = _props.arrowColor,
      leftArrowComponent = _props.leftArrowComponent,
      rightArrowComponent = _props.rightArrowComponent,
      bulletComponent = _props.bulletComponent,
      style = _props.style,
      startAt = _props.startAt,
      animationDuration = _props.animationDuration,
      animationTimingFunc = _props.animationTimingFunc,
      customSlideAnimation = _props.customSlideAnimation,
      onMountBefore = _props.onMountBefore,
      onMountAfter = _props.onMountAfter,
      onUpdate = _props.onUpdate,
      onPlay = _props.onPlay,
      onPause = _props.onPause,
      onBuildBefore = _props.onBuildBefore,
      onBuildAfter = _props.onBuildAfter,
      onRunBefore = _props.onRunBefore,
      onRun = _props.onRun,
      onRunAfter = _props.onRunAfter,
      onRunOffset = _props.onRunOffset,
      onRunStart = _props.onRunStart,
      onRunEnd = _props.onRunEnd,
      onMove = _props.onMove,
      onMoveAfter = _props.onMoveAfter,
      onResize = _props.onResize,
      onSwipeStart = _props.onSwipeStart,
      onSwipeMove = _props.onSwipeMove,
      onSwipeEnd = _props.onSwipeEnd,
      onTranslateJump = _props.onTranslateJump;
  var glideRef = useRef(null);

  var _useState = useState(startAt === 0 ? 0 : startAt),
      activeSlide = _useState[0],
      setActiveSlide = _useState[1];

  useEffect(function () {
    var glide;
    glide = new Glide$1(glideRef.current, _extends({}, props, {
      animationDuration: customSlideAnimation ? customSlideAnimation.timeout : animationDuration ? animationDuration : 400,
      animationTimingFunc: customSlideAnimation ? "" : animationTimingFunc ? animationTimingFunc : "cubic-bezier(0.165, 0.840, 0.440, 1.000)"
    }));
    glide.on(MOUNT_BEFORE, function () {
      if (onMountBefore) {
        onMountBefore();
      }
    });
    glide.on(MOUNT_AFTER, function () {
      if (onMountAfter) {
        onMountAfter();
      }
    });
    glide.on(UPDATE, function () {
      if (onUpdate) {
        onUpdate();
      }
    });
    glide.on(PLAY, function () {
      if (onPlay) {
        onPlay();
      }
    });
    glide.on(PAUSE, function () {
      if (onPause) {
        onPause();
      }
    });
    glide.on(BUILD_BEFORE, function () {
      if (onBuildBefore) {
        onBuildBefore();
      }
    });
    glide.on(BUILD_AFTER, function () {
      if (onBuildAfter) {
        onBuildAfter();
      }
    });
    glide.on(RUN_BEFORE, function () {
      if (onRunBefore) {
        onRunBefore();
      }
    });
    glide.on(RUN, function () {
      setActiveSlide(glide.index);

      if (onRun) {
        onRun();
      }
    });
    glide.on(RUN_AFTER, function () {
      if (onRunAfter) {
        onRunAfter();
      }
    });
    glide.on(RUN_OFFSET, function () {
      if (onRunOffset) {
        onRunOffset();
      }
    });
    glide.on(RUN_START, function () {
      if (onRunStart) {
        onRunStart();
      }
    });
    glide.on(RUN_END, function () {
      if (onRunEnd) {
        onRunEnd();
      }
    });
    glide.on(MOVE, function () {
      if (onMove) {
        onMove();
      }
    });
    glide.on(MOVE_AFTER, function () {
      if (onMoveAfter) {
        onMoveAfter();
      }
    });
    glide.on(RESIZE, function () {
      if (onResize) {
        onResize();
      }
    });
    glide.on(SWIPE_START, function () {
      if (onSwipeStart) {
        onSwipeStart();
      }
    });
    glide.on(SWIPE_MOVE, function () {
      if (onSwipeMove) {
        onSwipeMove();
      }
    });
    glide.on(SWIPE_END, function () {
      if (onSwipeEnd) {
        onSwipeEnd();
      }
    });
    glide.on(TRANSLATE_JUMP, function () {
      if (onTranslateJump) {
        onTranslateJump();
      }
    });
    glide.mount();

    if (ref) {
      ref.current = glide;
    }

    return function () {
      return glide.destroy();
    };
  }, [props]);
  return React.createElement("div", {
    ref: glideRef,
    className: className,
    style: _extends({}, styles, style)
  }, React.createElement("div", {
    className: "slider__track glide__track",
    "data-glide-el": "track"
  }, React.createElement(TransitionGroup, {
    component: "ul",
    className: "glide__slides"
  }, children.map(function (slide, index) {
    return React.createElement(Fragment, {
      key: index
    }, customSlideAnimation ? React.createElement(CSSTransition, {
      "in": index === activeSlide,
      timeout: customSlideAnimation.timeout,
      classNames: customSlideAnimation.classNames,
      onEnter: customSlideAnimation.onEnter,
      onExit: customSlideAnimation.onExit
    }, React.createElement(Slide, {
      slideClassName: slideClassName,
      slide: slide,
      index: index
    })) : React.createElement(Slide, {
      slideClassName: slideClassName,
      slide: slide,
      index: index
    }));
  }))), !hideArrows && React.createElement("div", {
    className: "glide__arrows",
    style: {
      height: 0
    },
    "data-glide-el": "controls"
  }, leftArrowComponent ? React.createElement(Fragment, null, cloneElement(leftArrowComponent, {
    className: baseStyles.sliderArrow + " Glide-leftArrow glide__arrow glide__arrow--left",
    "data-glide-dir": "<",
    "aria-label": "left-arrow"
  })) : React.createElement("button", {
    "aria-label": "left-arrow",
    "data-glide-dir": "<",
    className: baseStyles.sliderArrow + " Glide-leftArrow glide__arrow glide__arrow--left"
  }, React.createElement(ArrowLeftIcon, {
    iconSize: arrowSize,
    color: arrowColor
  })), rightArrowComponent ? React.createElement(Fragment, null, cloneElement(rightArrowComponent, {
    className: baseStyles.sliderArrow + " Glide-rightArrow glide__arrow glide__arrow--right",
    "data-glide-dir": ">",
    "aria-label": "right-arrow"
  })) : React.createElement("button", {
    "aria-label": "right-arrow",
    "data-glide-dir": ">",
    className: baseStyles.sliderArrow + " Glide-rightArrow glide__arrow glide__arrow--right"
  }, React.createElement(ArrowRightIcon, {
    iconSize: arrowSize,
    color: arrowColor
  }))), !hideBullets && React.createElement("div", {
    className: "glide__bullets",
    style: {
      height: 0
    },
    "data-glide-el": "controls[nav]"
  }, bulletComponent ? React.createElement(Fragment, null, cloneElement(bulletComponent, {
    className: baseStyles.bullet + " Glide-bullet glide__bullet",
    "data-glide-dir": "={i}",
    "aria-label": "bullet"
  })) : React.createElement("button", {
    "aria-label": "bullet",
    "data-glide-dir": "={i}",
    className: baseStyles.bullet + " Glide-bullet glide__bullet"
  })));
});

export default Glide;
//# sourceMappingURL=index.modern.js.map
