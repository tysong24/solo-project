// shows all the spend rows in a display
import React, { Component } from "react";
import SpendCreator from "../components/SpendCreator.jsx";
import SpendDisplay from "../components/SpendDisplay.jsx";

class AllSpendDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h5>This is inside of all spend display</h5>
        <SpendCreator />
        <SpendDisplay />
      </div>
    );
  }
}

export default AllSpendDisplay;
