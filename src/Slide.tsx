import React from 'react';
import { ISlideProps } from './types';

export default ({ slide, index, slideClassName, ...rest }: ISlideProps) => (
  <li className={`glide__slide ${slideClassName || ''}`} {...rest}>
    {slide}
  </li>
);
