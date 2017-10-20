import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { autoRehydrate } from 'redux-persist';

import rootReducer from '../reducers';

const middlewares = [];

if (__DEV__) {
  middlewares.push(createLogger());
}

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeWithDevTools(applyMiddleware(...middlewares), autoRehydrate()),
);
