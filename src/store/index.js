import { combineReducers, createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { commentReducer } from './comment/commentReducer';
import { tokenReducer } from './token/tokenReducer';
import { tokenMiddleware } from './token/tokenReducer';
import { authReducer} from './auth/authReducer';
import thunk from 'redux-thunk';
import { postsDataReducer } from './postData/postDataReducer';

const rootReducer = combineReducers({
  comment: commentReducer,
  token: tokenReducer,
  auth: authReducer,
  postData: postsDataReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware( thunk, tokenMiddleware,)));
