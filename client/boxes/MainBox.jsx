import React, { Component } from "react";
import TotalBox from "./TotalBox.jsx";
import SpendDisplayBox from "./SpendDisplayBox.jsx";

class MainBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 id="header">Expense Tracker</h1>
        <TotalBox />
        <SpendDisplayBox />
      </div>
    );
  }
}

export default MainBox;
