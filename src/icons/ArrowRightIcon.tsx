import React, { forwardRef } from 'react';

import { IIconProps } from './index';

export default forwardRef<React.RefObject<SVGElement | null>, IIconProps>((
  {
    iconSize,
    color,
    ...rest
  },
  ref,
) => (
  <svg
    width={iconSize || 20}
    height={iconSize || 20}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <polyline
      ref={ref as any}
      fill="none"
      stroke={color || '#37474F'}
      points="6.5 2 17.5 12 6.5 22"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    />
  </svg>
));
