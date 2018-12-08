import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux"; // wrap our app with this component to connect react with redux

import "./index.css";
import App from "./Containers/App";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import registerServiceWorker from "./registerServiceWorker";
import AppPosts from "./Containers/App_Posts";
import AppCounter from "./Containers/App_Counter";
// import axios from "axios";

// Sets up the defaults for ALL requests being sent
// axios.defaults.baseURL = "https://example.com"
// axios.defaults.headers.common['Authorization'] = "AUTH TOKEN";
// axios.defaults.headers.post["Content-Type"] = "application/josn"

// global, accessible to all files
// axios.interceptors.request.use(request => {
//     console.log(request);
//     return request // this is a must, if not it will be blocked
// }, error=>{
//     console.log(error);
//     return Promise.reject(error);
// });
// axios.interceptors.response.use(request => {
//     console.log(request);
//     return request // this is a must, if not it will be blocked
// }, error=>{
//     console.log(error);
//     return Promise.reject(error);
// })

const rootReducer = combineReducers({
  ctr1: counterReducer,
  res1: resultReducer
});

const store = createStore(rootReducer); // creates a store with our reducer

ReactDOM.render(
  <Provider store={store}>
    <AppCounter />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
