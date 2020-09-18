import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./containers/App/App";
import reducer from "./store/reducers/reducer";

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
);