import React from 'react'
import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeCircles
    height="100"
    width="100"
    color="#6b6565"
    wrapperStyle={{
      position: 'absolute',
      top: '50%',
      left: 'calc(50%-50px)',
    }}
    visible={true}
    ariaLabel="three-circles-rotating"
  />

  )
};
