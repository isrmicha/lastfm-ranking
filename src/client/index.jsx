import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
// import { applyMiddleware, createStore } from "redux";
// import { Provider } from "react-redux";
// import promise from "redux-promise";
import thunkMiddleware from "redux-thunk";

import "./index.html"
import './common/assets/style.css'
import App from './App'
import reducers from './reducer'
// import reducers from "./reducers/reducers";

const store = applyMiddleware(thunkMiddleware)(createStore)(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
);
