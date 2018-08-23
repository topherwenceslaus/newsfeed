import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import newsStore from "./Store/newsStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={newsStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

