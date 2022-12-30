import React from 'react';
import PropTypes from 'prop-types';
import { useBestPosts } from '../hooks/useBestPosts';


export const postsContext = React.createContext({});


export const PostsContectProvider = ({children}) => {
  const [posts, setBestPosts] = useBestPosts({});

  return (
    <postsContext.Provider value={{posts, setBestPosts}}>
      {children}
    </postsContext.Provider>
  )
}


PostsContectProvider.propTypes = {
  children: PropTypes.node.isRequired,
}