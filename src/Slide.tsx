import React from 'react';

interface ISlideProps {
  children?: React.ReactNode;
  className?: string;
}

export default ({ children, className, ...props }: ISlideProps) => (
  <li className={`glide__slide ${className || ''}`} {...props}>
    {children}
  </li>
);
