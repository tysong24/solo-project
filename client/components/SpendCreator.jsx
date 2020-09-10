// creator form that passes information to the reducer to create a new spend
import React, { Component } from "react";
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
      .then((stuff) => console.log(stuff))
      .catch((err) => console.log(err));
  }

  console.log("second log: ", props.description);

  return (
    <div>
      <h6>inside of spend creator</h6>
      <label htmlFor="description">Description</label>
      <input onChange={(e) => props.addDescription(e.target.value)}></input>
      <label htmlFor="amount">Amount</label>
      <input onChange={(e) => props.addSpend(e.target.value)}></input>
      <label htmlFor="type">Type</label>
      <input onChange={(e) => props.addType(e.target.value)}></input>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default SpendCreator;
