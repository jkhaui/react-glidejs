# react-glidejs

> A React wrapper for glide.js.

[![NPM](https://img.shields.io/npm/v/react-glidejs.svg)](https://www.npmjs.com/package/react-glidejs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-glidejs
```
OR

```
yarn add react-glidejs
```

## Usage

This is a lightweight React wrapper over the fantastic Glide.js library by
 @jedrzejchalubek.

Currently, react-glidejs exposes all the options from the Glide.js API as
 props. View them all here: https://glidejs.com/docs/options/

There are 2 components exported. They are `Glide`, the main component, which
 wraps its `Slide` children components.

Props are passed to the `Glide` component. Some additional props are also
 supplied for easier customisation, such as the `leftArrowComponent` and
  `rightArrowComponent` props which accept a React node.

The goal is to keep the API surface as small and lightweight as possible, while
also providing an easy way for customisation in line with common React
 patterns. Therefore, this library uses `react-transition-group` under the hood
 to provide an easy way to add custom slide animations.

Example Usage
---
```tsx
import React, { useRef } from 'react';
import Glide, { Slide } from 'react-glidejs';

import 'react-glidejs/dist/index.css';
import './transitions.css';

export default () => {
  const gliderRef = useRef(null);

  return (
    <div
      className="App"
      style={{
        background: '#1B262C',
      }}
    >
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

```

## License

MIT © [jkhaui](https://github.com/jkhaui)
