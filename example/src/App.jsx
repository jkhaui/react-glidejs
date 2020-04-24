import React, { useRef, Fragment } from 'react';
import Glide from 'react-glidejs';
import {gsap} from 'gsap';

import 'react-glidejs/dist/index.css';
import './transitions.css';

export default () => {
  const gliderRef = useRef(null);

  const onEnter = slide => {
    gsap.from(slide, 0.6, {
      y: 30,
      delay: 0.6,
      ease: 'power3.InOut',
      opacity: 0,
      stagger: {
        amount: 0.6,
      },
    });
  };

  const onExit = slide => {
    gsap.to(slide, 0.6, {
      y: -30,
      ease: 'power3.InOut',
      stagger: {
        amount: 0.2,
      },
    });
  };

  return (
    <div className="App">
      <Glide
        ref={gliderRef}
        type="slider"
        adjustArrowYPosition="42%"
        customSlideAnimation={{
          timeout: 500,
          classNames: 'fade',
          onEnter: onEnter,
          onExit: onExit,
        }}
        slideClassName="slider__frame"
        peek={{
          before: 500,
          after: 500,
        }}
        perView={1}
        startAt={3}
        focusAt="center"
      >
        <Fragment>
          0
        </Fragment>
        <Fragment>
          1
        </Fragment>
        <Fragment>
          2
        </Fragment>
        <Fragment>
          3
        </Fragment>
        <Fragment>
          4
        </Fragment>
        <Fragment>
          5
        </Fragment>
        <Fragment>
          6
        </Fragment>
        <Fragment>
          7
        </Fragment>
        <Fragment>
          8
        </Fragment>
        <Fragment>
          9
        </Fragment>
        <Fragment>
          10
        </Fragment>
        <Fragment>
          11
        </Fragment>
        <Fragment>
          12
        </Fragment>
        <Fragment>
          13
        </Fragment>
        <Fragment>
          14
        </Fragment>
        <Fragment>
          15
        </Fragment>
      </Glide>
    </div>
  );
};
