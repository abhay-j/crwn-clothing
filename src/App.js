import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const HatsPage = () => <h1>Hats Page</h1>;

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </Switch>
  </div>
);
export default App;
