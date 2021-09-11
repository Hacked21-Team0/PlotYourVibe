import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="App">
      <h1>Plot Your Vibe </h1>
      <BrowserRouter>
        <Route path="/" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
