import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/Redux-store';

ReactDOM.render(
  <BrowserRouter>
   <Provider store={store}>
        <App />
  </Provider>
  </BrowserRouter>  ,
  document.getElementById('root')
);
reportWebVitals();
