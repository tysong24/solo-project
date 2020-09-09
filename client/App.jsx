import React, { Component } from "react";
// import components needed that i need to pass things into.
import SpendDisplayBox from "./boxes/SpendDisplayBox.jsx";
import SpendCreateAndTotalBox from "./boxes/SpendCreateAndTotalBox.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SpendCreateAndTotalBox />
        <SpendDisplayBox />
      </div>
    );
  }
}
