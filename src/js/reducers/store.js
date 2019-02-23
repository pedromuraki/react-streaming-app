import { createStore } from 'redux';
// applyMiddleware
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import combinedReducers from './index';

const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // composeWithDevTools(applyMiddleware(thunk))
);

export default store;
