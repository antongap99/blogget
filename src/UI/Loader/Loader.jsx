import React from 'react';
import { GridLoader } from 'react-spinners';

export const Loader = ({ size, color }) => {
 
  return (
    <GridLoader color={color} size={size} css={{ display: 'block' }} />
  )
}

