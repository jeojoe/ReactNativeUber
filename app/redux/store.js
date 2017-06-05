import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers, { initialState } from './reducers';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
  require('../config/ReactotronConfig');
}

export default () =>
  createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware),
  );
