import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import App from './components/App';
// import { createStore } from 'redux';
// import reducer from "../src/reducers"
import { Provider } from 'react-redux';
// import middleware from "./middleware";
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import {store} from "./store";

const root = createRoot(document.getElementById('root'));

// export const store = createStore(reducer, middleware); //when middleware is at the beginning, we get an error, why?

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
