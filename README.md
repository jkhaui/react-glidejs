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

A lightweight React wrapper for Glide.js by @jedrzejchalubek. React-glidejs
 exposes all the options from the Glide.js API as props. View them all here: 
 https://glidejs.com/docs/options/

Import the `Glide` component. Every React node (either a DOM element or a JSX
 Fragment) is treated as a slide. Some additional props have also been
 added for easier customisation, e.g.`leftArrowComponent` and
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
        throttle={0}
        type="slider"
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
        slideClassName="slider__frame"
        focusAt="center"
      >
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
      </Glide>
    </div>
  );
};

```

## License

MIT © [jkhaui](https://github.com/jkhaui)
