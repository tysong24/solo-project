// will display all the spend rows
// import the things that i need
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import AllSpendDisplay from "../components/AllSpendDisplay.jsx";

const mapStateToProps = (state) => ({
  // pass in the state that will be prop drilled
  description: state.spend.description,
  amount: state.spend.amount,
  id: state.spend.id,
  type: state.spend.type,
});

const mapDispatchToProps = (dispatch) => ({
  updateSpend: (spend_id) => dispatch(actions.updateSpend(spend_id)),
  deleteSpend: (spend_id) => dispatch(actions.deleteSpend(spend_id)),
});

class SpendDisplayBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="spendbox">
        <h4>Inside of Spend Display</h4>
        <AllSpendDisplay />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpendDisplayBox);
