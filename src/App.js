import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HomePage></HomePage>
      </div>
    );
  }
}
export default App;
