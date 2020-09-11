// creator form that passes information to the reducer to create a new spend
import React from "react";
// require("es6-promise").polyfill();
// const fetch = require("isomorphic-fetch");

function SpendCreator(props) {
  function handleClick() {
    console.log("first log: ", props.description);
    // fetch("/", {
    //   // clarify header for post request
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: "hello",
    // })
    fetch("/spend", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(props),
    })
      .then((data) => data.json())
      .then((stuff) => this.setState({ values: json }))
      .catch((err) => console.log(err));
  }

  console.log("second log: ", props.description);

  return (
    <div>
      <h3>Input Spend Here:</h3>
      <label htmlFor="description">Description: </label> <br />
      <input onChange={(e) => props.addDescription(e.target.value)}></input>
      <br />
      <label htmlFor="amount">Amount: </label> <br />
      <input onChange={(e) => props.addSpend(e.target.value)}></input> <br />
      <label htmlFor="type">Type: </label> <br />
      <input onChange={(e) => props.addType(e.target.value)}></input> <br />
      <label htmlFor="date">Date: </label> <br />
      <input onChange={(e) => props.addDate(e.target.value)}></input> <br />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default SpendCreator;
