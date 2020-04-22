# react-glidejs

> A React wrapper for glide.js.

[![NPM](https://img.shields.io/npm/v/react-glidejs.svg)](https://www.npmjs.com/package/react-glidejs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-glidejs
```

## Usage

# WIP

```tsx
import React from 'react'

import Glide, { Slide } from 'react-glidejs';

import 'react-glidejs/dist/index.css';

export default () => (
  <Glide
    type="slider"
    peek={{
      before: 100,
      after: 100
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
  </Glide>
);

```

## License

MIT © [jkhaui](https://github.com/jkhaui)
