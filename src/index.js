import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/redux/store";

import Axios from "axios";
import API from "../src/api/api";

Axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${API.token}`;
  return config;
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
