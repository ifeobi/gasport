import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "font-awesome/css/font-awesome.min.css";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
