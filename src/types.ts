import React from 'react';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';

type Peek = {
  before: number;
  after: number;
}

type GlideType = 'slider' | 'carousel';

type Classes = {
  direction: {
    ltr: string;
    rtl: string;
  },
  slider: string;
  carousel: string;
  swipeable: string;
  dragging: string;
  cloneSlide: string;
  activeNav: string;
  activeSlide: string;
  disabledArrow: string;
}

type Breakpoints = Record<number, object[]>

export interface IGlideProps {
  children: React.ReactNodeArray | null;
  className?: string;
  slideClassName?: string;
  style?: React.CSSProperties;

  hideArrows?: boolean;
  arrowSize?: number;
  arrowColor?: string;
  adjustArrowYPosition?: number | string;
  leftArrowIcon?: React.ReactNode;
  rightArrowIcon?: React.ReactNode;
  leftArrowComponent?: React.ReactNode
  rightArrowComponent?: React.ReactNode;

  // Custom slide transitions.
  customSlideAnimation?: {
    timeout: number;
    classNames: string | CSSTransitionClassNames;
    onEnter?: () => void;
    onExit?: () => void;
  }
  // Glide.js custom events.
  onMountBefore?: () => void;
  onMountAfter?: () => void;
  onUpdate?: () => void;
  onPlay?: () => void;
  onPause?: () => void;
  onBuildBefore?: () => void;
  onBuildAfter?: () => void;
  onRunBefore?: () => void;
  onRun?: () => void;
  onRunAfter?: () => void;
  onRunOffset?: () => void;
  onRunStart?: () => void;
  onRunEnd?: () => void;
  onMove?: () => void;
  onMoveAfter?: () => void;
  onResize?: () => void;
  onSwipeStart?: () => void
  onSwipeMove?: () => void;
  onSwipeEnd?: () => void;
  onTranslateJump?: () => void;

  type?: GlideType;
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

export interface ISlideProps {
  slide: React.ReactNode;
  index: number;
  slideClassName?: string;
}
