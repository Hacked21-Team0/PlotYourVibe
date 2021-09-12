import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import rootReducer from "./redux/reducers/index";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const middleware = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
