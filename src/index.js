import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppWithContainer from './AppWithContainer'
import reportWebVitals from "./reportWebVitals";
// 通过Provider传递store
import { Provider } from 'react-redux'

// 创建store
import rootReducer from './reducers/index'
import { createStore, applyMiddleware, compose } from 'redux'
// import './store'
import thunkMiddleWare from 'redux-thunk'

import loggerMiddleWare from './middleWares/logger'
import testMiddleWare from './middleWares/test'
import loggerEnhancer from './enhancers/logger'
// 应用中间件

// 由于applyMiddleware也是个store enhancer，所以需要借助redux的compose
// 把多个enhancer合在一起
const store = createStore(rootReducer, compose(
  applyMiddleware(thunkMiddleWare, loggerMiddleWare,testMiddleWare),
  loggerEnhancer
))
ReactDOM.render(
  <Provider store={store}>
    <AppWithContainer />
  </Provider>,
  // <React.StrictMode>
  //   {/* <App /> */}
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
