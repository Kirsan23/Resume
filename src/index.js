import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import './assets/styles/css-reset.css';
import './assets/styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
