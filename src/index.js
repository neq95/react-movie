import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import App from "./containers/App/App";
import reducer from "./store/reducers/reducer";

const store = createStore(reducer, applyMiddleware(thunk));

//Реализовать контекст, app.js будет получать размер экрана и через контекст передавать его в 
//moviePreview и movieCard, а там будем показывать серый плейсхолдер вместо картинки, пока не получим
//нужный размер

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
);