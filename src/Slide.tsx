import React, { forwardRef } from 'react';

// interface ISlideProps {
//   children?: React.ReactNode;
//   slideClassName?: string;
// }

export default forwardRef<React.RefObject<HTMLDivElement | null>, any>((
  { slide, index, slideClassName, ...rest }: any,
  ref: any,
) => (
  <li className={`glide__ slide ${slideClassName || ''}`} {...rest}>
    <div ref={slideRef => ref.current[index] = slideRef} className="glide__container">
      {slide}
    </div>
  </li>
));
