import React, { Component } from "react";
import TotalBox from "./TotalBox.jsx";

class MainBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Hello from Main Box</h3>
        <TotalBox />
      </div>
    );
  }
}

export default MainBox;
