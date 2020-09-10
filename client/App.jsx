import React, { Component } from "react";
// import components needed that i need to pass things into.
import MainBox from "./boxes/MainBox.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Maybe something is working in App?</h2>
        <MainBox />
      </div>
    );
  }
}

export default App;
