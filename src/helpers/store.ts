import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { loadState } from './storage';

const initialData = loadState()

export const store = createStore(
  rootReducer,
  initialData,
  composeWithDevTools(applyMiddleware(thunk)));