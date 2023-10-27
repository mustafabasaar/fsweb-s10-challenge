import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { ToastContainer } from "react-toastify";

const depo = createStore(reducers, applyMiddleware(logger, thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={depo}>
    <BrowserRouter>
      <>
        <App />
      </>
    </BrowserRouter>
  </Provider>
);
