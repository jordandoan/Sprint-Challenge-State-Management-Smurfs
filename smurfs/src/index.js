import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';

import { reducer } from './components/reducer'

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById("root"));
