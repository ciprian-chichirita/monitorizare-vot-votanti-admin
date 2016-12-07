import { combineReducers, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import counties from './counties';
import incidents from './incidents';
import reports from './reports';

const rootReducer = combineReducers({
  counties,
  incidents,
  reports,
});

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default createStore(
  rootReducer,
  applyMiddleware(...middleware)
);
