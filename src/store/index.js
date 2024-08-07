import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Corrected import for redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension'; // or '@redux-devtools/extension' if needed
import rootReducer from '../reducers';

// Middleware array
const middleware = [thunk];

// Create store with middleware and Redux DevTools support
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
