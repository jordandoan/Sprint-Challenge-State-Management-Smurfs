import React, { Component } from "react";
import "./App.css";
import { Route, NavLink } from 'react-router-dom';

import Retrieve from "./Retrieve";
import Form from "./Form";
import EditForm from "./EditForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <NavLink to="/">Home</NavLink>
        <Route path="/" component={Retrieve} />
        <Route path="/edit/:id" component={EditForm} />
        <Route exact path="/" component={Form} />
      </div>
    );
  }
}

export default App;
