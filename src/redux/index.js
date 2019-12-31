import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { isServer } from '../helpers';
import reducer from './reducers';

const composeEnhancers = !isServer
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;

const logger = createLogger({
  predicate: (getState, action) => !action.type.includes('@@redux-form')
});
const makeStore = (initialState, options) =>
  createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default makeStore;
