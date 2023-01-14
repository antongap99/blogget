// import { commentReducer } from './comment/commentReducer';
import { tokenReducer } from './token/tokenReducer';
import { tokenMiddleware } from './token/tokenReducer';
import { authReducer} from './auth/authReducer';
import { postsDataReducer } from './postData/postDataReducer';
import { countRequestReducer } from './countRequst/countRequestReducer';
import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from  './comment/commentsSlice'

export const store = configureStore({
  reducer: {
    comment: commentsReducer,
    token: tokenReducer,
    auth: authReducer,
    postData: postsDataReducer,
    countRequest: countRequestReducer,
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenMiddleware),
})



