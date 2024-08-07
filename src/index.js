import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

// Create a root element and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); // Updated method

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
