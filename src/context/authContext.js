import React from 'react';
import PropTypes from 'prop-types'
import { useAuth } from '../hooks/useAuth';


export const authContext = React.createContext({});
authContext.displayName = 'authContext'


export const AuthContectProvider = ({children}) => {
  const [auth, clearAuth] = useAuth(authContext);

  return (
    <authContext.Provider value={{auth, clearAuth}}>
      {children}
    </authContext.Provider>
  )
}


AuthContectProvider.propTypes = {
  children: PropTypes.node.isRequired,
}