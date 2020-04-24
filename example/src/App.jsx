import React, { useRef } from 'react';
import Glide, { Slide } from 'react-glidejs';

import 'react-glidejs/dist/index.css';
import './transitions.css';

export default () => {
  const gliderRef = useRef(null);

  return (
    <div className="App">
      <Glide
        ref={gliderRef}
        type="slider"
        adjustArrowYPosition="42%"
        customSlideAnimation={{
          timeout: 500,
          classNames: 'fade',
        }}
        peek={{
          before: 500,
          after: 500,
        }}
        perView={1}
        startAt={3}
        focusAt="center"
      >
        <Slide className="glide__slide slider__frame">
          0
        </Slide>
        <Slide className="glide__slide slider__frame">
          1
        </Slide>
        <Slide className="glide__slide slider__frame">
          2
        </Slide>
        <Slide className="glide__slide slider__frame">
          3
        </Slide>
        <Slide className="glide__slide slider__frame">
          4
        </Slide>
        <Slide className="glide__slide slider__frame">
          5
        </Slide>
        <Slide className="glide__slide slider__frame">
          6
        </Slide>
        <Slide className="glide__slide slider__frame">
          7
        </Slide>
        <Slide className="glide__slide slider__frame">
          8
        </Slide>
        <Slide className="glide__slide slider__frame">
          9
        </Slide>
        <Slide className="glide__slide slider__frame">
          10
        </Slide>
        <Slide className="glide__slide slider__frame">
          11
        </Slide>
        <Slide className="glide__slide slider__frame">
          12
        </Slide>
        <Slide className="glide__slide slider__frame">
          13
        </Slide>
        <Slide className="glide__slide slider__frame">
          14
        </Slide>
        <Slide className="glide__slide slider__frame">
          15
        </Slide>
      </Glide>
    </div>
  );
};
