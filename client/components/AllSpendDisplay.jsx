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
        <SpendCreator
          addDescription={this.props.addDescription}
          description={this.props.description}
          addSpend={this.props.addSpend}
          amount={this.props.amount}
          addType={this.props.addType}
          type={this.props.type}
        />
        <SpendDisplay
          description={this.props.description}
          amount={this.props.amount}
          type={this.props.type}
        />
      </div>
    );
  }
}

export default AllSpendDisplay;
