// will display all the spend rows
// import the things that i need
import React, { components } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

const mapStateToProps = (state) => ({
  // pass in the state that will be prop drilled
  description: state.spend.description,
  amount: state.spend.amount,
  id: state.spend.id,
  type: state.spend.type,
});

const mapDispatchToProps = (dispatch) => ({
  updateSpend: (spend_id) => dispatch(action.updateSpend(spend_id)),
  deleteSpend: (spend_id) => dispatch(action.deleteSpend(spend_id)),
});

class SpendDisplayBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="spendbox"></div>;
  }
}

export default SpendDisplayBox;
