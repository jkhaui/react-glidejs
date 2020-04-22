import React, { useRef } from 'react'
import Glide, { Slide } from 'react-glidejs'

import 'react-glidejs/dist/index.css'

const App = () => {
  const gliderRef = useRef(null)

  return (
    <div className="App">
      <Glide
        ref={gliderRef}
        type="slider"
        peek={{
          before: 100,
          after: 100
        }}
        perView={3}
        startAt={3}
        focusAt="center"
        leftArrowComponent={
          <span className="slider__arrow slider__arrow--prev glide__arrow glide__arrow--prev">{'<'}</span>}
        rightArrowComponent={
          <span className="slider__arrow slider__arrow--next glide__arrow glide__arrow--next">></span>}
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

      </Glide>
    </div>
  )
}

export default App
