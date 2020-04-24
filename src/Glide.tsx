import React, {
  forwardRef,
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';
import Glide from '@glidejs/glide';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import {
  BUILD_AFTER,
  BUILD_BEFORE,
  MOUNT_AFTER,
  MOUNT_BEFORE,
  MOVE,
  MOVE_AFTER,
  PAUSE,
  PLAY,
  RESIZE,
  RUN,
  RUN_AFTER,
  RUN_BEFORE,
  RUN_END,
  RUN_OFFSET,
  RUN_START,
  SWIPE_END,
  SWIPE_MOVE,
  SWIPE_START,
  TRANSLATE_JUMP,
  UPDATE,
} from './constants';

import baseStyles from './index.module.css';
import '@glidejs/glide/dist/css/glide.core.min.css';

const styles = {
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  boxSizing: 'border-box',
};

const defaultProps = {
  /* Additional props */
  children: null,
  className: 'glide',
  style: {},
  hideArrows: false,

  /* Glide.js options with defaults */
  type: 'slider',
  startAt: 0,
  perView: 1,
  focusAt: 0,
  gap: 10,
  autoplay: false,
  hoverPause: true,
  keyboard: true,
  bound: false,
  swipeThreshold: 80,
  dragThreshold: 120,
  perTouch: false,
  touchRatio: 0.5,
  touchAngle: 45,
  rewind: true,
  rewindDuration: 800,
  direction: 'ltr',
  peek: 0,
  breakpoints: {},
  classes: {
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl',
    },
    slider: 'glide--slider',
    carousel: 'glide--carousel',
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    cloneSlide: 'glide__slide--clone',
    activeNav: 'glide__bullet--active',
    activeSlide: 'glide__slide--active',
    disabledArrow: 'glide__arrow--disabled',
  },
  throttle: 25,
};

type Peek = {
  before: number,
  after: number,
}

type Classes = {
  direction: {
    ltr: string,
    rtl: string,
  },
  slider: string,
  carousel: string,
  swipeable: string,
  dragging: string,
  cloneSlide: string,
  activeNav: string,
  activeSlide: string,
  disabledArrow: string,
}

type Breakpoints = Record<number, object[]>

interface IGlideProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactElement<HTMLLIElement>[] | null;
  className?: string;
  style?: React.CSSProperties;

  hideArrows?: boolean;
  arrowSize?: number;
  arrowColor?: string;
  adjustArrowYPosition?: number | string;
  leftArrowComponent?: React.ReactElement | string | null;
  rightArrowComponent?: React.ReactElement | string | null;

  // Custom slide transitions.
  customSlideAnimation?: {
    timeout: number;
    classNames: string | CSSTransitionClassNames;
    onEnter?: () => void;
    onExit?: () => void;
  }
  // Glide.js custom events.
  mountBefore?: () => void;
  mountAfter?: () => void;
  update?: () => void;
  play?: () => void;
  pause?: () => void;
  buildBefore?: () => void;
  buildAfter?: () => void;
  runBefore?: () => void;
  run?: () => void;
  runAfter?: () => void;
  runOffset?: () => void;
  runStart?: () => void;
  runEnd?: () => void;
  move?: () => void;
  moveAfter?: () => void;
  resize?: () => void;
  swipeStart?: () => void
  swipeMove?: () => void;
  swipeEnd?: () => void;
  translateJump?: () => void;

  type?: string;
  startAt?: number;
  perView?: number;
  focusAt?: number | string;
  gap?: number;
  autoplay?: number | boolean;
  hoverPause?: boolean;
  keyboard?: boolean;
  bound?: boolean;
  swipeThreshold?: number | boolean;
  dragThreshold?: number | boolean;
  perTouch?: number | boolean;
  touchRatio?: number;
  touchAngle?: number;
  animationDuration?: number;
  rewind?: boolean;
  rewindDuration?: number;
  animationTimingFunc?: string;
  direction?: string;
  peek?: number | Peek;
  breakpoints?: Breakpoints;
  classes?: Classes;
  throttle?: number;
}

export default forwardRef<React.RefObject<HTMLDivElement | null>, IGlideProps>((
  props = defaultProps,
  ref,
) => {
  const {
    children,
    className,
    hideArrows,
    arrowSize,
    arrowColor,
    adjustArrowYPosition,
    leftArrowComponent,
    rightArrowComponent,
    style,
    startAt,
    animationDuration,
    animationTimingFunc,

    customSlideAnimation,

    mountBefore,
    mountAfter,
    update,
    play,
    pause,
    buildBefore,
    buildAfter,
    runBefore,
    run,
    runAfter,
    runOffset,
    runStart,
    runEnd,
    move,
    moveAfter,
    resize,
    swipeStart,
    swipeMove,
    swipeEnd,
    translateJump,
  } = props;

  const glideRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(startAt === 0 ? 0 : startAt);

  useEffect(() => {
    // @ts-ignore
    const glide = new Glide(ref ? ref.current : glideRef.current, {
      ...props,
      // If the `customSlideAnimation` prop is passed, then override
      // Glide.js' default animation values.
      animationDuration: customSlideAnimation
        // Important: If a custom animation is provided, `animationDuration`
        // must exactly match the custom animation's `timeout` duration.
        ? customSlideAnimation.timeout
        : animationDuration
          ? animationDuration
          : 400,
      animationTimingFunc: customSlideAnimation
        ? ''
        : animationTimingFunc
          ? animationTimingFunc
          : 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
    });

    glide.on(MOUNT_BEFORE, () => {
      if (mountBefore) {
        mountBefore();
      }
    });
    glide.on(MOUNT_AFTER, () => {
      if (mountAfter) {
        mountAfter();
      }
    });
    glide.on(UPDATE, () => {
      if (update) {
        update();
      }
    });
    glide.on(PLAY, () => {
      if (play) {
        play();
      }
    });
    glide.on(PAUSE, () => {
      if (pause) {
        pause();
      }
    });
    glide.on(BUILD_BEFORE, () => {
      if (buildBefore) {
        buildBefore();
      }
    });
    glide.on(BUILD_AFTER, () => {
      if (buildAfter) {
        buildAfter();
      }
    });
    glide.on(RUN_BEFORE, () => {
      if (runBefore) {
        runBefore();
      }
    });
    glide.on(RUN, () => {
      setActiveSlide(glide.index);

      if (run) {
        run();
      }
    });
    glide.on(RUN_AFTER, () => {
      if (runAfter) {
        runAfter();
      }
    });
    glide.on(RUN_OFFSET, () => {
      if (runOffset) {
        runOffset();
      }
    });
    glide.on(RUN_START, () => {
      if (runStart) {
        runStart();
      }
    });
    glide.on(RUN_END, () => {
      if (runEnd) {
        runEnd();
      }
    });
    glide.on(MOVE, () => {
      if (move) {
        move();
      }
    });
    glide.on(MOVE_AFTER, () => {
      if (moveAfter) {
        moveAfter();
      }
    });
    glide.on(RESIZE, () => {
      if (resize) {
        resize();
      }
    });
    glide.on(SWIPE_START, () => {
      if (swipeStart) {
        swipeStart();
      }
    });
    glide.on(SWIPE_MOVE, () => {
      if (swipeMove) {
        swipeMove();
      }
    });
    glide.on(SWIPE_END, () => {
      if (swipeEnd) {
        swipeEnd();
      }
    });
    glide.on(TRANSLATE_JUMP, () => {
      if (translateJump) {
        translateJump();
      }
    });

    glide.mount();

    return () => glide.destroy();
  }, []);
  return (
    <div
      className={className}
      ref={ref || glideRef as any}
      style={{ ...styles, ...style as any }}
    >
      <div className="slider__track glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {children!.map((slide: React.ReactElement, index: number) => (
            <Fragment key={index}>
              {customSlideAnimation ? (
                <CSSTransition
                  in={index === activeSlide}
                  timeout={customSlideAnimation.timeout}
                  classNames={customSlideAnimation.classNames}
                  onEnter={customSlideAnimation.onEnter}
                  onExit={customSlideAnimation.onExit}
                >
                  {slide}
                </CSSTransition>
              ) : (
                <Fragment>
                  {slide}
                </Fragment>
              )}
            </Fragment>
          ))}
        </ul>
      </div>
      {!hideArrows && (
        <div style={{ height: 0 }} data-glide-el="controls">
          <button data-glide-dir="<">
            <span
              className={`${baseStyles.sliderArrow} ${baseStyles.sliderArrowPrev}`}
              style={{
                top: adjustArrowYPosition ? adjustArrowYPosition : '50%',
              }}
            >
            {leftArrowComponent
              ? leftArrowComponent : (
                <ArrowLeftIcon iconSize={arrowSize} color={arrowColor} />
              )}
            </span>
          </button>
          <button data-glide-dir=">">
            <span
              className={`${baseStyles.sliderArrow} ${baseStyles.sliderArrowNext}`}
              style={{
                top: adjustArrowYPosition ? adjustArrowYPosition : '50%',
              }}
            >
            {rightArrowComponent
              ? rightArrowComponent : (
                <ArrowRightIcon iconSize={arrowSize} color={arrowColor} />
              )}
            </span>
          </button>
        </div>
      )}
    </div>
  );
});
