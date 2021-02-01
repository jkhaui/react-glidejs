import React, {
  cloneElement,
  forwardRef,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import Glide from "@glidejs/glide";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Slide from "./Slide";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
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
} from "./constants";

import { IGlideProps } from "./types";
import baseStyles from "./index.module.css";
import "@glidejs/glide/dist/css/glide.core.min.css";

const styles = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
};

const defaultProps = {
  /* Additional React props */
  children: null,
  className: "glide",
  style: {},
  hideArrows: false,
};

export default forwardRef<React.MutableRefObject<any>, IGlideProps>((
  props = defaultProps,
  ref: React.MutableRefObject<any>,
) => {
  const {
    children,
    className,
    slideClassName,
    hideArrows,
    arrowSize,
    arrowColor,
    leftArrowComponent,
    rightArrowComponent,
    style,
    startAt,
    animationDuration,
    animationTimingFunc,

    customSlideAnimation,

    onMountBefore,
    onMountAfter,
    onUpdate,
    onPlay,
    onPause,
    onBuildBefore,
    onBuildAfter,
    onRunBefore,
    onRun,
    onRunAfter,
    onRunOffset,
    onRunStart,
    onRunEnd,
    onMove,
    onMoveAfter,
    onResize,
    onSwipeStart,
    onSwipeMove,
    onSwipeEnd,
    onTranslateJump,
  } = props;

  /* throwing an error here may be annoying and not useful. */
  // if (!children || Children.count(children) < 2) {
  //   throw new Error('At least 2 slides must be provided to the Glide'
  //     + ' component.');
  // }

  const glideRef = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState(startAt === 0 ? 0 : startAt);

  useEffect(() => {
    let glide: any;

    glide = new Glide(glideRef.current, {
      ...props,
      // If the `customSlideAnimation` prop is passed, then override
      // Glide.js' default animation values.
      animationDuration: customSlideAnimation
        // Important: If a custom animation is provided, `animationDuration`
        // must exactly match the custom animation's `timeout` duration.
        ? customSlideAnimation.timeout
        : animationDuration
          ? animationDuration
          // ...otherwise use the default duration of 400ms.
          : 400,
      animationTimingFunc: customSlideAnimation
        ? ""
        : animationTimingFunc
          ? animationTimingFunc
          : "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    });

    glide.on(MOUNT_BEFORE, () => {
      if (onMountBefore) {
        onMountBefore();
      }
    });
    glide.on(MOUNT_AFTER, () => {
      if (onMountAfter) {
        onMountAfter();
      }
    });
    glide.on(UPDATE, () => {
      if (onUpdate) {
        onUpdate();
      }
    });
    glide.on(PLAY, () => {
      if (onPlay) {
        onPlay();
      }
    });
    glide.on(PAUSE, () => {
      if (onPause) {
        onPause();
      }
    });
    glide.on(BUILD_BEFORE, () => {
      if (onBuildBefore) {
        onBuildBefore();
      }
    });
    glide.on(BUILD_AFTER, () => {
      if (onBuildAfter) {
        onBuildAfter();
      }
    });
    glide.on(RUN_BEFORE, () => {
      if (onRunBefore) {
        onRunBefore();
      }
    });
    glide.on(RUN, () => {
      setActiveSlide(glide.index);

      if (onRun) {
        onRun();
      }
    });
    glide.on(RUN_AFTER, () => {
      if (onRunAfter) {
        onRunAfter();
      }
    });
    glide.on(RUN_OFFSET, () => {
      if (onRunOffset) {
        onRunOffset();
      }
    });
    glide.on(RUN_START, () => {
      if (onRunStart) {
        onRunStart();
      }
    });
    glide.on(RUN_END, () => {
      if (onRunEnd) {
        onRunEnd();
      }
    });
    glide.on(MOVE, () => {
      if (onMove) {
        onMove();
      }
    });
    glide.on(MOVE_AFTER, () => {
      if (onMoveAfter) {
        onMoveAfter();
      }
    });
    glide.on(RESIZE, () => {
      if (onResize) {
        onResize();
      }
    });
    glide.on(SWIPE_START, () => {
      if (onSwipeStart) {
        onSwipeStart();
      }
    });
    glide.on(SWIPE_MOVE, () => {
      if (onSwipeMove) {
        onSwipeMove();
      }
    });
    glide.on(SWIPE_END, () => {
      if (onSwipeEnd) {
        onSwipeEnd();
      }
    });
    glide.on(TRANSLATE_JUMP, () => {
      if (onTranslateJump) {
        onTranslateJump();
      }
    });

    glide.mount(/* TODO: Put custom events here */);

    if (ref) {
      // Provides direct access to the underlying Glide object is a ref is
      // passed from the parent component.
      ref.current = glide;
    }

    return () => glide.destroy();
  }, [props]);

  return (
    <div
      ref={glideRef}
      className={className}
      style={{
        ...styles,
        ...style as any,
      }}
    >
      <div className="slider__track glide__track" data-glide-el="track">
        <TransitionGroup component="ul" className="glide__slides">
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
                  <Slide
                    slideClassName={slideClassName}
                    slide={slide}
                    index={index}
                  />
                </CSSTransition>
              ) : (
                <Slide
                  slideClassName={slideClassName}
                  slide={slide}
                  index={index}
                />
              )}
            </Fragment>
          ))}
        </TransitionGroup>
      </div>
      {!hideArrows && (
        <div className="glide__arrows" style={{ height: 0 }} data-glide-el="controls">
          {leftArrowComponent ? (
            <Fragment>
              {cloneElement(leftArrowComponent as any, {
                className: `${baseStyles.sliderArrow} Glide-leftArrow glide__arrow glide__arrow--left`,
                "data-glide-dir": "<",
                "aria-label": "left-arrow",
              })}
            </Fragment>
          ) : (
            <button
              aria-label="left-arrow"
              data-glide-dir="<"
              className={`${baseStyles.sliderArrow} Glide-leftArrow glide__arrow glide__arrow--left`}
            >
              <ArrowLeftIcon iconSize={arrowSize} color={arrowColor} />
            </button>
          )}
          {rightArrowComponent ? (
            <Fragment>
              {cloneElement(rightArrowComponent as any, {
                className: `${baseStyles.sliderArrow} Glide-rightArrow glide__arrow glide__arrow--right`,
                "data-glide-dir": ">",
                "aria-label": "right-arrow",
              })}
            </Fragment>
          ) : (
            <button
              aria-label="right-arrow"
              data-glide-dir=">"
              className={`${baseStyles.sliderArrow} Glide-rightArrow glide__arrow glide__arrow--right`}
            >
              <ArrowRightIcon iconSize={arrowSize} color={arrowColor} />
            </button>
          )}
        </div>
      )}
    </div>
  );
});
