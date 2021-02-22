import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss'
import {createStore} from "redux"
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/rootReducer";
const store = createStore(rootReducer);
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
  document.getElementById('root')
);


reportWebVitals();
