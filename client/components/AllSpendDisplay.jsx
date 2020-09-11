// shows all the spend rows in a display
import React, { Component } from "react";
import SpendCreator from "../components/SpendCreator.jsx";
import SpendDisplay from "../components/SpendDisplay.jsx";

function AllSpendDisplay(props) {
  let values = [];
  // function handleClick() {
  //   fetch("/spend", {
  //     method: "GET",
  //     headers: { "content-type": "application/json" },
  //   })
  //     .then((data) => data.json())
  //     .then((json) => {
  //       json.forEach((el) => values.push(el));
  //     })
  //     .then(console.log("values: ", values))
  //     .catch((err) => console.log(err));
  // }
  // props.fetchState.forEach((el) => console.log(el));

  for (let i = 0; i < props.fetchState.length; i++) {}
  console.log("Values array: ", values);

  console.log("outside return: ", props.fetchState);
  return (
    <div>
      <h5>This is inside of all spend display</h5>
      <SpendCreator
        addDescription={props.addDescription}
        description={props.description}
        addSpend={props.addSpend}
        amount={props.amount}
        addType={props.addType}
        type={props.type}
        addDate={props.addDate}
        date={props.date}
      />

      <h3>Spending</h3>
      <div>{console.log("in return: ", props.fetchState)}</div>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>
        {console.log("props for fetchState: ", props.fetchState)}
        {props.fetchState.map((value) => {
          return (
            <tbody>
              <td>{value.spend_id}</td>
              <td>{value.date}</td>
              <td>{value.description}</td>
              <td>{value.amount}</td>
              <td>{value.type}</td>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default AllSpendDisplay;
