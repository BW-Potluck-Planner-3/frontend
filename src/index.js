import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {createStore, applyMiddleware} from 'redux';
import { Provider } from "react-redux";
import reducer from "./reducers";
import logger from 'redux-logger';
import thunk from "redux-thunk";
import history from './utils/history';


const store = createStore(reducer, applyMiddleware(logger, thunk));


ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
    <Provider store={store}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
