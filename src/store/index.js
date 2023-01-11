import { combineReducers, createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { commentReducer } from './comment/commentReducer';
import { tokenReducer } from './token/tokenReducer';
import { tokenMiddleware } from './token/tokenReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  comment: commentReducer,
  token: tokenReducer,
})

// const logger = (store) => (next) => (action) => {
//   console.log('action ',action);
//   next(action);
// }


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
