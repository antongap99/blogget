import React from 'react';
import PropTypes from 'prop-types'
import { useToken } from '../hooks/useToken';



export const tokenContext = React.createContext({});
tokenContext.displayName = 'MyDisplayName';

// любой контекст состоит провайдера и консьюмера

export const TokenContectProvider = ({children}) => {
  const [token, delToken] = useToken('');

  return (
    <tokenContext.Provider value={{token, delToken}}>
      {children}
    </tokenContext.Provider>
  )
}


TokenContectProvider.propTypes = {
  children: PropTypes.node.isRequired,
}