import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import combinedReducers from './reducers';

const middleware = [];
const devMiddleware = [logger];

const store = createStore(
  combinedReducers,
  applyMiddleware(...middleware, ...(__DEV__ ? devMiddleware : []))
);

export default store;
