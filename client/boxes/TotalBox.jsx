// will display a form to create a new spend row and also shows totals
// import the stuff that I need
import React, { Component } from "react";
import { connect } from "react-redux";
import TotalsDisplay from "../components/TotalsDisplay.jsx";
import * as actions from "../actions/actions";

// mapping state to props
const mapStateToProps = (state) => ({
  // want to create state for the total amount spent
  // want to create state for total number of times spent
  totalSpend: state.total.totals,
  allSpend: state.total.allSpend,
});

// mapping dispatch to props
const mapDispatchToProps = (dispatch) => ({
  // pull the functionalities from reducer out for this.
  addTotal: (amount) => dispatch(actions.addTotal(amount)),
  allSpend: () => dispatch(actions.allSpend()),
  deleteTotals: (amount) => dispatch(actions.deleteTotals(amount)),
  deleteAllSpend: () => dispatch(actions.deleteAllSpend()),
});

// creating the new class
class SpendCreateAndTotalBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <TotalsDisplay
          totalSpend={this.props.totalSpend}
          allSpend={this.props.allSpend}
          addTotal={this.props.addTotal}
          allSpend={this.props.allSpend}
          deleteTotals={this.props.deleteTotals}
          deleteAllSpend={this.props.deleteAllSpend}
        />
      </div>
    );
  }
}

// exporting the state and dispatch with the new class
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpendCreateAndTotalBox);
