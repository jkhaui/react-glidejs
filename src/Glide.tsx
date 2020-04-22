import React, { forwardRef, Fragment, useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';

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
  style: {},
  className: 'glide',
  hideArrows: false,
  leftArrowComponent: null,
  rightArrowComponent: null,

  /* Glide.js options */
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
  animationDuration: 400,
  rewind: true,
  rewindDuration: 800,
  animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
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
  children: React.ReactNode | null;
  className?: string;
  style?: React.CSSProperties;
  hideArrows?: boolean;
  leftArrowComponent?: React.ReactElement | null;
  rightArrowComponent?: React.ReactElement | null;
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
  const glideRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    const glide = new Glide(ref ? ref.current : glideRef.current, props);

    glide.mount();

    // glide.on('run.before', (e: React.SyntheticEvent) => {
    //   // TODO: Subscribe to custom events here.
    // });

    return () => glide.destroy();
  }, []);

  const {
    children,
    className,
    style,
    hideArrows,
    leftArrowComponent,
    rightArrowComponent,
  } = props;

  return (
    <div
      className={className}
      ref={ref || glideRef as any}
      style={{ ...styles, ...style as any }}
    >
      <div className="slider__track glide__track" data-glide-el="track">
        <ul className="glide__slides">
          // @ts-ignore
          {children.map((slide, index) => (
            <Fragment key={index}>
              {slide}
            </Fragment>
          ))}
        </ul>
      </div>
      {!hideArrows && (
        <div style={{ height: 0 }} data-glide-el="controls">
          <button data-glide-dir="<">
            {leftArrowComponent ? leftArrowComponent : '<'}
          </button>
          <button data-glide-dir=">">
            {rightArrowComponent ? rightArrowComponent : '>'}
          </button>
        </div>
      )}
    </div>
  );
});
