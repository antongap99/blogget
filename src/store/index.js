import { combineReducers, createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { commentReducer } from './commentReducer';
import { tokenReducer } from './tokenReducer';
import { tokenMiddleware } from './tokenReducer';


const rootReducer = combineReducers({
  comment: commentReducer,
  token: tokenReducer,
})

const logger = (store) => (next) => (action) => {
  console.log('action ',action);
  next(action);
}


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(tokenMiddleware)));
