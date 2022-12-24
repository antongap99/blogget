import React from 'react';
import style from './Layout.module.css';
import PropTypes from 'prop-types';

export const Layout = ({children}) => {

  return( 
    <div className = {style.container}>
      {children}
    </div>
    )
}

// eslint-disable-next-line react/no-typos
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ])
};
