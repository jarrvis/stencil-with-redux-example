import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers/index';


const configureStore = (preloadedState: any) =>
  createStore(reducers, preloadedState, applyMiddleware(logger, thunk));

export { configureStore };