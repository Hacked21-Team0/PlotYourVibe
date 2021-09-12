import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard'
import History from "./pages/History";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/history" component={History} />


        </Switch>
      </BrowserRouter>
    );
  }

}

export default App;
