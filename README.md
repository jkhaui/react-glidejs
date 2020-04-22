# react-glidejs

> A React wrapper for glide.js.

[![NPM](https://img.shields.io/npm/v/react-glidejs.svg)](https://www.npmjs.com/package/react-glidejs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-glidejs
```

## Usage

# WIP

This is a lightweight React wrapper over the fantastic Glide.js library by
 @jedrzejchalubek.

Currently, react-glidejs exposes all the options from the Glide.js API as
 props. View them all here: https://glidejs.com/docs/options/

There are 2 components exported. They are `Glide`, the main component, which
 wraps its `Slide` children components.

Props are passed to the `Glide` component. Some additional props are also
 supplied for easier customisation, such as the `leftArrowComponent` and
  `rightArrowComponent` props which accept a React node.

```tsx
import React from 'react'

import Glide, { Slide } from 'react-glidejs';

export default () => (
  <Glide
      type="slider"
      peek={{
        before: 100,
        after: 100,
      }}
      perView={3}
      startAt={3}
      focusAt="center"
  >
    <Slide>
      Slide 1
    </Slide>
    <Slide>
      Slide 2
    </Slide>
    <Slide>
      Slide 3
    </Slide>
    <Slide>
      Slide 4
    </Slide>
    <Slide>
      Slide 5
    </Slide>
  </Glide>
);

```

## License

MIT © [jkhaui](https://github.com/jkhaui)
