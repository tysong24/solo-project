// shows total amount spent and number of times spent
import React from "react";

const TotalDisplay = (props) => (
  <div className="innerbox" id="totals">
    <label htmlFor="totalSpend">Spending Total: </label>
    <span id="totalSpend">{props.totalSpend}</span>
    <p>
      <label htmlFor="allSpend"># of Transactions</label>
      <span id="allSpend">{props.allSpend}</span>
    </p>
  </div>
);

export default TotalDisplay;
