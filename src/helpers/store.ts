import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));