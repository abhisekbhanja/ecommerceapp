import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//for store
import { applyMiddleware, createStore } from 'redux';
import allreducers from './state/reducers/index';
import { Provider } from 'react-redux';
import Thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//for store
// const store = createStore(
//   allreducers,applyMiddleware(ReduxThunk)
   
//   );

const intialState = {};

const middleware = [Thunk];

const store = createStore(
  allreducers,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);



ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
       <App />
       </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
