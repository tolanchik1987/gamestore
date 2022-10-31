import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./components/store/store";
import "./index.scss";

const rootElement = document.getElementById("root");

if (rootElement) {
   const root = ReactDOM.createRoot(rootElement);
root.render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>
);
}
