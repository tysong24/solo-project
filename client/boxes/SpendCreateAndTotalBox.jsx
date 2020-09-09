// will display a form to create a new spend row and also shows totals
// import the stuff that I need
import Reach, { component } from "react";
import { connect } from "react-redux";
import TotalsDisplay from "../components/TotalsDisplay.jsx";
import * as actions from ".../actions/actions";
import Spend from "./SpendDisplayBox.jsx";

// mapping state to props
const mapStateToProps = (state) => ({
  // want to create state for the total amount spent
  totalSpend: state.spend.totalSpend,
  // want to create state for total number of times spent
  allSpend: state.spend.allSpend,
});

// mapping dispatch to props
const mapDispatchToProps = (dispatch) => {
  // pull the functionalities from reducer out for this.
  addSpend: (newSpend) => dispatch(actions.addSpend(newSpend));
};

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
        />
        <Spend />
      </div>
    );
  }
}

// exporting the state and dispatch with the new class
export default (mapStateToProps, mapDispatchToProps)(SpendCreateAndTotalBox);
