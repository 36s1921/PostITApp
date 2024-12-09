import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider, store} from "react-redux"
import Register from "./Components/Register";
import { Store } from "./Store/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider Store={Store}>
  <React.StrictMode>
    <Register />
  </React.StrictMode>
  </Provider>
);
