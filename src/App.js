import React, { Component } from "react";
import "./App.css";
import Calculator from "./component/Calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="tittle">react/redux Calculator</h2>

        <Calculator />
        <p className="creator">сделал ковалев АРтем</p>
      </div>
    );
  }
}

export default App;
