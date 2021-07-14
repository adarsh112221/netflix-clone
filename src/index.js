import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";

import { GlobalStyles } from "./GlobalStyles";
import { FireBaseContext } from "./context/firebase";
ReactDOM.render(
  <>
    <FireBaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FireBaseContext.Provider>
  </>,
  document.getElementById("root")
);
