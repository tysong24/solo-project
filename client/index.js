// importing react to use redux
import React from "react";
// importing render to render html
import { render } from "react-dom";
// importing provider functionality from redux
import { Provider } from "react-redux";
// importing app to use inside of index to pass down
import App from "./App.jsx";
// importing store to use reducers and redux dev tools
import store from "./store";

render(
  // wrap app in provider to use reducers
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
